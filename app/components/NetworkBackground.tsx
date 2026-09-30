'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NetworkBackground() {
    return (
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#050810]">
            {/* Apple-style stationary architectural grid - pinned to viewport, does not roll */}
            <div 
                className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:36px_36px] pointer-events-none opacity-60" 
            />

            {/* Apple stationary ambient lighting - locked in viewport coordinates */}
            {/* Top Center Hero Cyan Glow */}
            <motion.div 
                animate={{
                    opacity: [0.75, 0.9, 0.75],
                    scale: [1, 1.04, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[500px] sm:h-[650px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.14)_0%,rgba(34,211,238,0.03)_45%,transparent_70%)] pointer-events-none" 
            />

            {/* Middle Left Sky/Blue Ambient Light */}
            <motion.div 
                animate={{
                    opacity: [0.6, 0.8, 0.6],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute top-[35%] -left-[140px] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.09)_0%,rgba(56,189,248,0.02)_50%,transparent_70%)] pointer-events-none" 
            />

            {/* Lower Right Warm Amber/Gold Glow */}
            <motion.div 
                animate={{
                    opacity: [0.5, 0.75, 0.5],
                    scale: [1, 1.03, 1],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4,
                }}
                className="absolute top-[65%] -right-[140px] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.06)_0%,rgba(250,204,21,0.01)_50%,transparent_70%)] pointer-events-none" 
            />

            {/* Vignette edge darkening to enhance foreground focus */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,8,16,0.6)_100%)] pointer-events-none" />
        </div>
    );
}
