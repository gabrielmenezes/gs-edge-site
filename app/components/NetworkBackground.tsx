'use client';

import React, { useEffect, useRef } from 'react';

interface NetworkNode {
    id: number;
    worldX: number;
    worldY: number;
    radius: number;
    type: 'hub' | 'gateway' | 'edge';
    color: string;
    pulseCooldown: number;
    flashGlow: number; // 0 to 1 flash on receiving packet
    pulsePhase: number;
    neighbors: number[];
}

interface NetworkPulse {
    fromId: number;
    toId: number;
    progress: number; // 0 to 1
    speed: number;
    color: string;
    size: number;
    trailLength: number;
}

export default function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        let totalHeight = 0;
        let scrollY = window.scrollY;
        let targetScrollY = window.scrollY;

        const mouse = {
            x: -1000,
            y: -1000,
            targetX: -1000,
            targetY: -1000,
            isHovered: false,
        };

        let nodes: NetworkNode[] = [];
        let pulses: NetworkPulse[] = [];

        // Colors
        const cyan = '#22d3ee';
        const yellow = '#facc15';
        const blue = '#38bdf8';
        const darkCyan = 'rgba(34, 211, 238, ';
        const darkYellow = 'rgba(250, 204, 21, ';

        const buildWorldTopology = () => {
            nodes = [];
            pulses = [];

            width = window.innerWidth;
            height = window.innerHeight;
            totalHeight = Math.max(document.documentElement.scrollHeight, height * 3.5);

            const isMobile = width < 768;
            const isTablet = width >= 768 && width < 1200;

            const cols = isMobile ? 5 : isTablet ? 7 : 10;
            const cellW = width / cols;
            const cellH = isMobile ? 180 : 210;
            const rows = Math.ceil(totalHeight / cellH) + 1;

            let idCounter = 0;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (Math.random() < 0.2) continue;

                    const jitterX = (Math.random() - 0.5) * cellW * 0.7;
                    const jitterY = (Math.random() - 0.5) * cellH * 0.7;

                    const worldX = Math.max(25, Math.min(width - 25, (c + 0.5) * cellW + jitterX));
                    const worldY = (r + 0.5) * cellH + jitterY;

                    const randType = Math.random();
                    const isHub = randType < 0.12;
                    const isGateway = !isHub && randType < 0.35;
                    const type: 'hub' | 'gateway' | 'edge' = isHub ? 'hub' : isGateway ? 'gateway' : 'edge';

                    const radius = isHub ? 4.5 : isGateway ? 3 : 2;
                    const color = isHub ? yellow : isGateway ? cyan : blue;

                    nodes.push({
                        id: idCounter++,
                        worldX,
                        worldY,
                        radius,
                        type,
                        color,
                        pulseCooldown: Math.random() * (isHub ? 60 : 180),
                        flashGlow: 0,
                        pulsePhase: Math.random() * Math.PI * 2,
                        neighbors: [],
                    });
                }
            }

            // Connect neighbors in world topology
            const maxConnectDist = isMobile ? cellW * 1.8 : cellW * 1.6;

            for (let i = 0; i < nodes.length; i++) {
                const nodeA = nodes[i];
                const candidates: { index: number; dist: number }[] = [];

                for (let j = 0; j < nodes.length; j++) {
                    if (i === j) continue;
                    const nodeB = nodes[j];
                    const dx = nodeA.worldX - nodeB.worldX;
                    const dy = nodeA.worldY - nodeB.worldY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxConnectDist) {
                        candidates.push({ index: j, dist });
                    }
                }

                candidates.sort((a, b) => a.dist - b.dist);
                const maxNeighbors = nodeA.type === 'hub' ? 5 : nodeA.type === 'gateway' ? 3 : 2;

                for (let k = 0; k < Math.min(candidates.length, maxNeighbors); k++) {
                    const targetIdx = candidates[k].index;
                    if (!nodeA.neighbors.includes(targetIdx)) {
                        nodeA.neighbors.push(targetIdx);
                    }
                    if (!nodes[targetIdx].neighbors.includes(i)) {
                        nodes[targetIdx].neighbors.push(i);
                    }
                }
            }
        };

        const spawnPulse = (fromIdx: number, targetIdx?: number) => {
            const fromNode = nodes[fromIdx];
            if (!fromNode || fromNode.neighbors.length === 0) return;

            const toIdx = targetIdx !== undefined ? targetIdx : fromNode.neighbors[Math.floor(Math.random() * fromNode.neighbors.length)];
            const isYellow = fromNode.type === 'hub' || Math.random() < 0.25;

            pulses.push({
                fromId: fromIdx,
                toId: toIdx,
                progress: 0,
                speed: 0.35 + Math.random() * 0.45,
                color: isYellow ? yellow : cyan,
                size: fromNode.type === 'hub' ? 2.8 : 2,
                trailLength: 0.2 + Math.random() * 0.15,
            });
        };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            buildWorldTopology();
        };

        resize();
        window.addEventListener('resize', resize);

        const handleScroll = () => {
            targetScrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        const handleMouseMove = (e: MouseEvent) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
            mouse.isHovered = true;
        };

        const handleMouseLeave = () => {
            mouse.targetX = -1000;
            mouse.targetY = -1000;
            mouse.isHovered = false;
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        let lastTime = performance.now();

        const render = (time: number) => {
            const deltaTime = Math.min((time - lastTime) / 1000, 0.1);
            lastTime = time;

            ctx.clearRect(0, 0, width, height);

            scrollY += (targetScrollY - scrollY) * 0.1;
            mouse.x += (mouse.targetX - mouse.x) * 0.1;
            mouse.y += (mouse.targetY - mouse.y) * 0.1;

            const viewportTop = scrollY - 100;
            const viewportBottom = scrollY + height + 100;

            // 1. Draw Network Connections
            const drawnPairs = new Set<string>();

            for (let i = 0; i < nodes.length; i++) {
                const nodeA = nodes[i];
                if (nodeA.worldY < viewportTop && nodeA.neighbors.every(n => nodes[n].worldY < viewportTop)) continue;
                if (nodeA.worldY > viewportBottom && nodeA.neighbors.every(n => nodes[n].worldY > viewportBottom)) continue;

                const screenAX = nodeA.worldX;
                const screenAY = nodeA.worldY - scrollY;

                // Node pulse generator & cooldown
                nodeA.pulseCooldown -= deltaTime * 60;
                if (nodeA.pulseCooldown <= 0 && nodeA.neighbors.length > 0 && pulses.length < 80) {
                    nodeA.pulseCooldown = nodeA.type === 'hub' ? (60 + Math.random() * 90) : (120 + Math.random() * 200);
                    spawnPulse(i);
                }

                // Node flash decay
                if (nodeA.flashGlow > 0) {
                    nodeA.flashGlow = Math.max(0, nodeA.flashGlow - deltaTime * 2.5);
                }

                for (let n = 0; n < nodeA.neighbors.length; n++) {
                    const neighborIdx = nodeA.neighbors[n];
                    const nodeB = nodes[neighborIdx];
                    if (!nodeB) continue;

                    const pairKey = i < neighborIdx ? `${i}-${neighborIdx}` : `${neighborIdx}-${i}`;
                    if (drawnPairs.has(pairKey)) continue;
                    drawnPairs.add(pairKey);

                    const screenBX = nodeB.worldX;
                    const screenBY = nodeB.worldY - scrollY;

                    const isMainTrunk = nodeA.type === 'hub' || nodeB.type === 'hub';
                    const baseAlpha = isMainTrunk ? 0.22 : 0.12;

                    ctx.beginPath();
                    ctx.moveTo(screenAX, screenAY);
                    ctx.lineTo(screenBX, screenBY);
                    ctx.strokeStyle = isMainTrunk
                        ? `${darkCyan}${baseAlpha})`
                        : `rgba(148, 163, 184, ${baseAlpha})`;
                    ctx.lineWidth = isMainTrunk ? 1.4 : 0.8;
                    ctx.stroke();

                    if (isMainTrunk) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.setLineDash([4, 14]);
                        ctx.lineDashOffset = -time * 0.025;
                        ctx.moveTo(screenAX, screenAY);
                        ctx.lineTo(screenBX, screenBY);
                        ctx.strokeStyle = `${darkYellow}0.2)`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }

            // 2. Update and Draw Discrete Data Pulses (Discrete Travel -> Arrive -> Flash -> End)
            for (let p = pulses.length - 1; p >= 0; p--) {
                const pulse = pulses[p];
                const from = nodes[pulse.fromId];
                const to = nodes[pulse.toId];

                if (!from || !to) {
                    pulses.splice(p, 1);
                    continue;
                }

                pulse.progress += pulse.speed * deltaTime;

                // Arrival at destination
                if (pulse.progress >= 1) {
                    to.flashGlow = 1.0; // Trigger glow flash on destination node

                    // Option to trigger a relay pulse with 30% chance
                    if (Math.random() < 0.3 && to.neighbors.length > 1 && pulses.length < 80) {
                        const nextNeighbors = to.neighbors.filter(n => n !== pulse.fromId);
                        if (nextNeighbors.length > 0) {
                            spawnPulse(to.id, nextNeighbors[Math.floor(Math.random() * nextNeighbors.length)]);
                        }
                    }

                    pulses.splice(p, 1); // Cleanly remove completed pulse
                    continue;
                }

                const worldHeadX = from.worldX + (to.worldX - from.worldX) * pulse.progress;
                const worldHeadY = from.worldY + (to.worldY - from.worldY) * pulse.progress;

                const screenHeadX = worldHeadX;
                const screenHeadY = worldHeadY - scrollY;

                if (screenHeadY < -50 || screenHeadY > height + 50) continue;

                const tailProgress = Math.max(0, pulse.progress - pulse.trailLength);
                const screenTailX = from.worldX + (to.worldX - from.worldX) * tailProgress;
                const screenTailY = (from.worldY + (to.worldY - from.worldY) * tailProgress) - scrollY;

                // Fade in at start and fade out at arrival
                let alpha = 1.0;
                if (pulse.progress < 0.15) {
                    alpha = pulse.progress / 0.15;
                } else if (pulse.progress > 0.85) {
                    alpha = (1 - pulse.progress) / 0.15;
                }

                const trailGrad = ctx.createLinearGradient(screenTailX, screenTailY, screenHeadX, screenHeadY);
                trailGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
                trailGrad.addColorStop(1, pulse.color === yellow ? `${darkYellow}${alpha})` : `${darkCyan}${alpha})`);

                ctx.beginPath();
                ctx.moveTo(screenTailX, screenTailY);
                ctx.lineTo(screenHeadX, screenHeadY);
                ctx.strokeStyle = trailGrad;
                ctx.lineWidth = pulse.size * 1.5;
                ctx.stroke();

                // Pulse head
                ctx.beginPath();
                ctx.arc(screenHeadX, screenHeadY, pulse.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = pulse.color === yellow ? `${darkYellow}${alpha * 0.5})` : `${darkCyan}${alpha * 0.5})`;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(screenHeadX, screenHeadY, pulse.size * 0.8, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fill();
            }

            // 3. Draw Nodes (Hubs, Gateways, Edge Points)
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                const screenY = node.worldY - scrollY;

                if (screenY < -40 || screenY > height + 40) continue;
                const screenX = node.worldX;

                node.pulsePhase += deltaTime * 1.8;
                const pulseScale = 1 + Math.sin(node.pulsePhase) * 0.15;

                // Flash glow when receiving packet
                if (node.flashGlow > 0) {
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, node.radius * (2 + node.flashGlow * 2), 0, Math.PI * 2);
                    ctx.fillStyle = `${darkCyan}${node.flashGlow * 0.5})`;
                    ctx.fill();
                }

                if (node.type === 'hub') {
                    const ringAlpha = 0.2 + (Math.sin(node.pulsePhase) + 1) * 0.15;

                    ctx.beginPath();
                    ctx.arc(screenX, screenY, node.radius * 3 * pulseScale, 0, Math.PI * 2);
                    ctx.strokeStyle = `${darkYellow}${ringAlpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(screenX, screenY, node.radius * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `${darkYellow}0.25)`;
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(screenX, screenY, node.radius, 0, Math.PI * 2);
                    ctx.fillStyle = yellow;
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(screenX, screenY, node.radius * 0.4, 0, Math.PI * 2);
                    ctx.fillStyle = '#ffffff';
                    ctx.fill();
                } else if (node.type === 'gateway') {
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, node.radius * 1.8, 0, Math.PI * 2);
                    ctx.strokeStyle = `${darkCyan}0.35)`;
                    ctx.lineWidth = 1;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(screenX, screenY, node.radius, 0, Math.PI * 2);
                    ctx.fillStyle = cyan;
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(screenX, screenY, node.radius * 0.35, 0, Math.PI * 2);
                    ctx.fillStyle = '#ffffff';
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, node.radius, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
                    ctx.fill();
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
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.12),rgba(5,8,16,0))] pointer-events-none" />
        </div>
    );
}
