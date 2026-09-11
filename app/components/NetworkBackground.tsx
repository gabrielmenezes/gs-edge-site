'use client';

import React from 'react';

export default function NetworkBackground() {
    return (
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Apple-style deep ambient radial glows using pure mathematical gradients (zero GPU blur overhead) */}
            <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12)_0%,rgba(34,211,238,0.04)_40%,transparent_70%)] pointer-events-none" />
            <div className="absolute top-[30%] -left-[120px] w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08)_0%,rgba(56,189,248,0.02)_45%,transparent_70%)] pointer-events-none" />
            <div className="absolute top-[60%] -right-[120px] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.05)_0%,rgba(250,204,21,0.01)_45%,transparent_70%)] pointer-events-none" />
        </div>
    );
}
