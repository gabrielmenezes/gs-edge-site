'use client';

import { motion } from 'framer-motion';

type ServiceCardProps = {
    title: string;
    description: string;
    link: string;
    buttonLabel?: string;
    icon?: React.ReactNode;
};

export default function ServiceCard({
    title,
    description,
    link,
    buttonLabel = "Solicitar",
    icon
}: ServiceCardProps) {
    return (
        <motion.div 
            whileHover={{ y: -10 }}
            className="group relative bg-edge-darker/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 border border-slate-800 hover:border-edge-cyan/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] flex flex-col justify-between h-full overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-edge-cyan to-edge-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="z-10 relative">
                {icon && <div className="text-edge-cyan mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">{icon}</div>}
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-edge-cyan transition-colors">{title}</h3>
                <p className="text-slate-400 text-base mb-8 leading-relaxed">{description}</p>
            </div>
            
            <a
                href={link}
                target="_blank"
                className="z-10 mt-auto inline-flex items-center justify-center text-slate-200 bg-slate-800 hover:bg-edge-cyan hover:text-edge-darker px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 w-full"
            >
                {buttonLabel}
            </a>
        </motion.div>
    );
}