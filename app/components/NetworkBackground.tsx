'use client';

import React, { useEffect, useRef } from 'react';

interface Node {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    radius: number;
    layer: number; // 0: background, 1: midground, 2: foreground
    color: string;
    pulseCooldown: number;
}

interface Pulse {
    fromNode: number;
    toNode: number;
    progress: number; // 0 to 1
    speed: number;
    color: string;
    size: number;
}

interface Connection {
    from: number;
    to: number;
    distance: number;
    opacity: number;
}

export default function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let isVisible = true;
        let width = 0;
        let height = 0;
        let scrollY = window.scrollY;

        const mouse = {
            x: -1000,
            y: -1000,
            targetX: -1000,
            targetY: -1000,
            isHovered: false,
        };

        let nodes: Node[] = [];
        let pulses: Pulse[] = [];
        let connections: Connection[] = [];

        // Colors palette
        const colors = {
            cyan: 'rgba(34, 211, 238, ',
            yellow: 'rgba(250, 204, 21, ',
            white: 'rgba(255, 255, 255, ',
            blue: 'rgba(56, 189, 248, ',
        };

        const initNodes = () => {
            const isMobile = width < 768;
            const isTablet = width >= 768 && width < 1280;
            const nodeCount = isMobile ? 35 : isTablet ? 60 : 95;

            nodes = [];
            pulses = [];

            for (let i = 0; i < nodeCount; i++) {
                const layer = Math.random() < 0.35 ? 0 : Math.random() < 0.7 ? 1 : 2;
                const x = Math.random() * width;
                const y = Math.random() * height;

                const baseRadius = layer === 0 ? 1.5 : layer === 1 ? 2.2 : 3.2;
                const isYellow = Math.random() < 0.2;
                const nodeColor = isYellow ? colors.yellow : layer === 2 ? colors.cyan : colors.blue;

                nodes.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    vx: (Math.random() - 0.5) * (0.3 + layer * 0.2),
                    vy: (Math.random() - 0.5) * (0.3 + layer * 0.2),
                    radius: baseRadius,
                    layer,
                    color: nodeColor,
                    pulseCooldown: Math.random() * 120,
                });
            }
        };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            initNodes();
        };

        resize();
        window.addEventListener('resize', resize);

        const handleScroll = () => {
            scrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.targetX = e.clientX - rect.left;
            mouse.targetY = e.clientY - rect.top;
            mouse.isHovered = true;
        };

        const handleMouseLeave = () => {
            mouse.targetX = -1000;
            mouse.targetY = -1000;
            mouse.isHovered = false;
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        // Pause animation when hero is off-screen
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0.05 }
        );
        observer.observe(canvas);

        let lastTime = performance.now();

        const render = (time: number) => {
            const deltaTime = Math.min((time - lastTime) / 1000, 0.1);
            lastTime = time;

            if (isVisible && width > 0 && height > 0) {
                ctx.clearRect(0, 0, width, height);

                // Smooth mouse tracking
                mouse.x += (mouse.targetX - mouse.x) * 0.1;
                mouse.y += (mouse.targetY - mouse.y) * 0.1;

                // Parallax depth offset based on scroll
                const maxDistance = width < 768 ? 110 : 160;
                connections = [];

                // Update & position nodes
                for (let i = 0; i < nodes.length; i++) {
                    const node = nodes[i];

                    // Parallax velocity based on layer depth
                    const layerParallax = (node.layer + 1) * 0.18;
                    const scrollOffset = scrollY * layerParallax;

                    // Drift motion
                    node.baseX += node.vx * 60 * deltaTime;
                    node.baseY += node.vy * 60 * deltaTime;

                    // Boundary wrapping
                    if (node.baseX < -40) node.baseX = width + 40;
                    if (node.baseX > width + 40) node.baseX = -40;
                    if (node.baseY < -40) node.baseY = height + 40;
                    if (node.baseY > height + 40) node.baseY = -40;

                    node.x = node.baseX;
                    node.y = (node.baseY - scrollOffset) % (height + 80);
                    if (node.y < -40) node.y += height + 80;

                    // Mouse interaction
                    if (mouse.isHovered) {
                        const dx = mouse.x - node.x;
                        const dy = mouse.y - node.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        const mouseRadius = 180;
                        if (dist < mouseRadius && dist > 0) {
                            const force = (1 - dist / mouseRadius) * (node.layer === 2 ? 25 : 12);
                            node.x -= (dx / dist) * force;
                            node.y -= (dy / dist) * force;
                        }
                    }

                    // Node pulse cooldown & spawn
                    node.pulseCooldown -= deltaTime * 60;
                }

                // Calculate connection pairs & intertwining mesh
                for (let i = 0; i < nodes.length; i++) {
                    const nodeA = nodes[i];

                    for (let j = i + 1; j < nodes.length; j++) {
                        const nodeB = nodes[j];

                        // Nodes can connect across adjacent layers with higher density when scrolling
                        const layerDiff = Math.abs(nodeA.layer - nodeB.layer);
                        if (layerDiff > 1) continue;

                        const dx = nodeA.x - nodeB.x;
                        const dy = nodeA.y - nodeB.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < maxDistance) {
                            const baseAlpha = 1 - dist / maxDistance;
                            const layerMultiplier = nodeA.layer === 2 || nodeB.layer === 2 ? 0.35 : 0.18;
                            const opacity = baseAlpha * layerMultiplier;

                            connections.push({ from: i, to: j, distance: dist, opacity });

                            // Spawn data pulses along lines
                            if (nodeA.pulseCooldown <= 0 && pulses.length < 35 && Math.random() < 0.04) {
                                nodeA.pulseCooldown = 80 + Math.random() * 150;
                                const isYellow = Math.random() < 0.25;
                                pulses.push({
                                    fromNode: i,
                                    toNode: j,
                                    progress: 0,
                                    speed: (0.4 + Math.random() * 0.5) * (nodeA.layer === 2 ? 1.2 : 0.9),
                                    color: isYellow ? '#facc15' : '#22d3ee',
                                    size: nodeA.layer === 2 ? 3 : 2,
                                });
                            }
                        }
                    }
                }

                // Draw connection lines
                for (let k = 0; k < connections.length; k++) {
                    const conn = connections[k];
                    const nodeA = nodes[conn.from];
                    const nodeB = nodes[conn.to];

                    ctx.beginPath();
                    ctx.moveTo(nodeA.x, nodeA.y);
                    ctx.lineTo(nodeB.x, nodeB.y);

                    const isHighlight = nodeA.color.includes('250, 204') || nodeB.color.includes('250, 204');
                    const strokeColor = isHighlight
                        ? `${colors.yellow}${conn.opacity * 1.2})`
                        : `${colors.cyan}${conn.opacity})`;

                    ctx.strokeStyle = strokeColor;
                    ctx.lineWidth = nodeA.layer === 2 && nodeB.layer === 2 ? 1.2 : 0.7;
                    ctx.stroke();
                }

                // Draw & update light pulses (traveling packets)
                for (let p = pulses.length - 1; p >= 0; p--) {
                    const pulse = pulses[p];
                    const from = nodes[pulse.fromNode];
                    const to = nodes[pulse.toNode];

                    if (!from || !to) {
                        pulses.splice(p, 1);
                        continue;
                    }

                    pulse.progress += pulse.speed * deltaTime;

                    if (pulse.progress >= 1) {
                        pulses.splice(p, 1);
                        continue;
                    }

                    const px = from.x + (to.x - from.x) * pulse.progress;
                    const py = from.y + (to.y - from.y) * pulse.progress;

                    // Light pulse glow
                    const gradient = ctx.createRadialGradient(px, py, 0, px, py, pulse.size * 4);
                    gradient.addColorStop(0, pulse.color);
                    gradient.addColorStop(0.4, pulse.color === '#facc15' ? 'rgba(250, 204, 21, 0.6)' : 'rgba(34, 211, 238, 0.6)');
                    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                    ctx.beginPath();
                    ctx.arc(px, py, pulse.size * 4, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();

                    // Pulse core
                    ctx.beginPath();
                    ctx.arc(px, py, pulse.size, 0, Math.PI * 2);
                    ctx.fillStyle = '#ffffff';
                    ctx.shadowColor = pulse.color;
                    ctx.shadowBlur = 10;
                    ctx.fill();
                    ctx.shadowBlur = 0; // reset
                }

                // Draw nodes
                for (let i = 0; i < nodes.length; i++) {
                    const node = nodes[i];
                    const alpha = node.layer === 0 ? 0.35 : node.layer === 1 ? 0.65 : 0.95;

                    // Outer node glow for foreground nodes
                    if (node.layer === 2) {
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
                        ctx.fillStyle = `${node.color}${alpha * 0.25})`;
                        ctx.fill();
                    }

                    // Main node body
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `${node.color}${alpha})`;
                    ctx.fill();

                    // White node center core
                    if (node.layer >= 1) {
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, node.radius * 0.45, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                        ctx.fill();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
            />
            {/* Ambient vignette and bottom section fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-edge-darker/40 via-transparent to-edge-darker pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-edge-darker via-edge-darker/80 to-transparent pointer-events-none" />
        </div>
    );
}
