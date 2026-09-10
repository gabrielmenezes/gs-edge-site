'use client';

import React from 'react';

export default function NetworkBackground() {
    return (
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Apple-style deep ambient radial glows */}
            <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),rgba(5,8,16,0)_70%)] blur-[90px]" />
            <div className="absolute top-[30%] -left-[150px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),rgba(5,8,16,0)_70%)] blur-[100px]" />
            <div className="absolute top-[60%] -right-[150px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.05),rgba(5,8,16,0)_70%)] blur-[110px]" />
        </div>
    );
}
