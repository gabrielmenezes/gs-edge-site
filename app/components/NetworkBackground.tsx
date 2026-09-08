'use client';

import React, { useEffect, useRef } from 'react';

interface NetworkNode {
    id: number;
    baseX: number;
    baseY: number;
    x: number;
    y: number;
    radius: number;
    type: 'hub' | 'gateway' | 'edge';
    layer: number; // 0: background grid, 1: mid topology, 2: active foreground
    activity: number; // 0 to 1 pulse
    color: string;
    neighbors: number[];
}

interface DataPacket {
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
        let packets: DataPacket[] = [];
        let maxPackets = 45;

        // Palette
        const cyan = '#22d3ee';
        const yellow = '#facc15';
        const blue = '#38bdf8';
        const darkCyan = 'rgba(34, 211, 238, ';
        const darkYellow = 'rgba(250, 204, 21, ';

        const buildTopology = () => {
            nodes = [];
            packets = [];

            const isMobile = width < 768;
            const isTablet = width >= 768 && width < 1200;
            const cols = isMobile ? 4 : isTablet ? 6 : 9;
            const rows = isMobile ? 6 : isTablet ? 7 : 8;

            const cellW = width / cols;
            const cellH = height / rows;

            let idCounter = 0;

            // Generate structured topological grid with organic circuit offsets
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    // Density filter for circuit-like asymmetry
                    if (Math.random() < 0.22 && (r > 0 && r < rows - 1)) continue;

                    const jitterX = (Math.random() - 0.5) * cellW * 0.55;
                    const jitterY = (Math.random() - 0.5) * cellH * 0.55;

                    const baseX = (c + 0.5) * cellW + jitterX;
                    const baseY = (r + 0.5) * cellH + jitterY;

                    const isHub = Math.random() < 0.15;
                    const isGateway = !isHub && Math.random() < 0.35;
                    const type: 'hub' | 'gateway' | 'edge' = isHub ? 'hub' : isGateway ? 'gateway' : 'edge';

                    const layer = isHub ? 2 : isGateway ? 1 : 0;
                    const radius = isHub ? 4.5 : isGateway ? 3 : 2;
                    const color = isHub ? yellow : isGateway ? cyan : blue;

                    nodes.push({
                        id: idCounter++,
                        baseX,
                        baseY,
                        x: baseX,
                        y: baseY,
                        radius,
                        type,
                        layer,
                        activity: Math.random(),
                        color,
                        neighbors: [],
                    });
                }
            }

            // Connect nodes into an interconnected network topology
            const maxConnectDist = isMobile ? cellW * 1.7 : cellW * 1.5;

            for (let i = 0; i < nodes.length; i++) {
                const nodeA = nodes[i];
                const candidates: { index: number; dist: number }[] = [];

                for (let j = 0; j < nodes.length; j++) {
                    if (i === j) continue;
                    const nodeB = nodes[j];
                    const dx = nodeA.baseX - nodeB.baseX;
                    const dy = nodeA.baseY - nodeB.baseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxConnectDist) {
                        candidates.push({ index: j, dist });
                    }
                }

                // Sort closest
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

            maxPackets = isMobile ? 25 : isTablet ? 45 : 70;
        };

        const spawnPacket = (forcedFrom?: number) => {
            if (nodes.length === 0) return;
            const fromIdx = forcedFrom !== undefined ? forcedFrom : Math.floor(Math.random() * nodes.length);
            const sourceNode = nodes[fromIdx];
            if (!sourceNode || sourceNode.neighbors.length === 0) return;

            const toIdx = sourceNode.neighbors[Math.floor(Math.random() * sourceNode.neighbors.length)];
            const isYellow = sourceNode.type === 'hub' || Math.random() < 0.25;

            packets.push({
                fromId: fromIdx,
                toId: toIdx,
                progress: 0,
                speed: 0.35 + Math.random() * 0.45,
                color: isYellow ? yellow : cyan,
                size: sourceNode.type === 'hub' ? 2.8 : 2,
                trailLength: 0.15 + Math.random() * 0.15,
            });
        };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            buildTopology();
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

            // Smooth scroll parallax and mouse interpolation
            scrollY += (targetScrollY - scrollY) * 0.08;
            mouse.x += (mouse.targetX - mouse.x) * 0.1;
            mouse.y += (mouse.targetY - mouse.y) * 0.1;

            // Spawn data packets continuously
            if (packets.length < maxPackets && Math.random() < 0.3) {
                spawnPacket();
            }

            // Update node positions with topology parallax and gentle heartbeat
            const totalPageHeight = document.documentElement.scrollHeight || height * 2;
            const scrollRatio = totalPageHeight > height ? scrollY / (totalPageHeight - height) : 0;

            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];

                // Parallax depth calculation
                const parallaxSpeed = (node.layer + 1) * 0.12;
                const scrollShift = scrollY * parallaxSpeed;

                // Subtle organic pulse of node activity
                node.activity += deltaTime * (0.8 + node.layer * 0.5);

                // Modulo wrapping for infinite flow as user scrolls
                let curY = (node.baseY - scrollShift) % (height + 120);
                if (curY < -60) curY += height + 120;

                node.x = node.baseX;
                node.y = curY;

                // Mouse interaction / network proximity
                if (mouse.isHovered) {
                    const dx = mouse.x - node.x;
                    const dy = mouse.y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const hoverRadius = 160;

                    if (dist < hoverRadius && dist > 0) {
                        const pull = (1 - dist / hoverRadius) * 18;
                        node.x += (dx / dist) * pull;
                        node.y += (dy / dist) * pull;

                        // Burst data packets when hovering near hubs
                        if (node.type === 'hub' && Math.random() < 0.05 && packets.length < maxPackets + 10) {
                            spawnPacket(i);
                        }
                    }
                }
            }

            // 1. Draw Network Connections (Trunks, buses & data channels)
            const drawnPairs = new Set<string>();

            for (let i = 0; i < nodes.length; i++) {
                const nodeA = nodes[i];

                for (let n = 0; n < nodeA.neighbors.length; n++) {
                    const neighborIdx = nodeA.neighbors[n];
                    const nodeB = nodes[neighborIdx];
                    if (!nodeB) continue;

                    const pairKey = i < neighborIdx ? `${i}-${neighborIdx}` : `${neighborIdx}-${i}`;
                    if (drawnPairs.has(pairKey)) continue;
                    drawnPairs.add(pairKey);

                    const dx = nodeA.x - nodeB.x;
                    const dy = nodeA.y - nodeB.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Skip lines that wrap over screen edge
                    if (dist > height * 0.5) continue;

                    const isMainTrunk = nodeA.type === 'hub' || nodeB.type === 'hub';
                    const baseAlpha = isMainTrunk ? 0.25 : 0.12;
                    const strokeColor = isMainTrunk
                        ? `${darkCyan}${baseAlpha})`
                        : `rgba(148, 163, 184, ${baseAlpha})`;

                    // Draw line
                    ctx.beginPath();
                    ctx.moveTo(nodeA.x, nodeA.y);
                    ctx.lineTo(nodeB.x, nodeB.y);
                    ctx.strokeStyle = strokeColor;
                    ctx.lineWidth = isMainTrunk ? 1.5 : 0.8;
                    ctx.stroke();

                    // Main trunks have subtle periodic dash pulse
                    if (isMainTrunk) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.setLineDash([4, 12]);
                        ctx.lineDashOffset = -time * 0.02;
                        ctx.moveTo(nodeA.x, nodeA.y);
                        ctx.lineTo(nodeB.x, nodeB.y);
                        ctx.strokeStyle = `${darkYellow}0.2)`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }

            // 2. Draw & Update Data Packets flowing through network
            for (let p = packets.length - 1; p >= 0; p--) {
                const pkt = packets[p];
                const from = nodes[pkt.fromId];
                const to = nodes[pkt.toId];

                if (!from || !to) {
                    packets.splice(p, 1);
                    continue;
                }

                // Check distance
                const dx = to.x - from.x;
                const dy = to.y - from.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist > height * 0.5) {
                    packets.splice(p, 1);
                    continue;
                }

                pkt.progress += pkt.speed * deltaTime;

                if (pkt.progress >= 1) {
                    // Chained routing: When packet arrives at destination node, potentially route to next node
                    if (Math.random() < 0.4 && to.neighbors.length > 1) {
                        const nextNeighbors = to.neighbors.filter(n => n !== pkt.fromId);
                        if (nextNeighbors.length > 0) {
                            pkt.fromId = pkt.toId;
                            pkt.toId = nextNeighbors[Math.floor(Math.random() * nextNeighbors.length)];
                            pkt.progress = 0;
                            continue;
                        }
                    }
                    packets.splice(p, 1);
                    continue;
                }

                const headX = from.x + dx * pkt.progress;
                const headY = from.y + dy * pkt.progress;

                const tailProgress = Math.max(0, pkt.progress - pkt.trailLength);
                const tailX = from.x + dx * tailProgress;
                const tailY = from.y + dy * tailProgress;

                // Draw glowing packet trail
                const trailGrad = ctx.createLinearGradient(tailX, tailY, headX, headY);
                trailGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
                trailGrad.addColorStop(1, pkt.color);

                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(headX, headY);
                ctx.strokeStyle = trailGrad;
                ctx.lineWidth = pkt.size * 1.5;
                ctx.stroke();

                // Packet head glow
                ctx.beginPath();
                ctx.arc(headX, headY, pkt.size * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = pkt.color === yellow ? 'rgba(250, 204, 21, 0.4)' : 'rgba(34, 211, 238, 0.4)';
                ctx.fill();

                // Packet head bright core
                ctx.beginPath();
                ctx.arc(headX, headY, pkt.size * 0.9, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
            }

            // 3. Draw Network Nodes (Hubs, Gateways, Edge Points)
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                const pulseScale = 1 + Math.sin(node.activity * 2) * 0.15;

                // Hub: Concentric rings and router radar pulse
                if (node.type === 'hub') {
                    const ringAlpha = (0.2 + (Math.sin(node.activity * 1.5) + 1) * 0.15);

                    // Outer pulse ring
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius * 3.2 * pulseScale, 0, Math.PI * 2);
                    ctx.strokeStyle = `${darkYellow}${ringAlpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();

                    // Inner halo
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `${darkYellow}0.25)`;
                    ctx.fill();

                    // Node center
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                    ctx.fillStyle = yellow;
                    ctx.fill();

                    // Core bright dot
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius * 0.4, 0, Math.PI * 2);
                    ctx.fillStyle = '#ffffff';
                    ctx.fill();
                } else if (node.type === 'gateway') {
                    // Gateway: Diamond / Ring node
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius * 1.8, 0, Math.PI * 2);
                    ctx.strokeStyle = `${darkCyan}0.35)`;
                    ctx.lineWidth = 1;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                    ctx.fillStyle = cyan;
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius * 0.35, 0, Math.PI * 2);
                    ctx.fillStyle = '#ffffff';
                    ctx.fill();
                } else {
                    // Edge node
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
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
            {/* Subtle cyber grid ambient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.12),rgba(5,8,16,0))] pointer-events-none" />
        </div>
    );
}
