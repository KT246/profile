import React from "react";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
    return (
        <div className={`mb-12 ${className}`}>
            {subtitle && (
                <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 relative inline-block">
                {title}
                <span className="absolute -bottom-2 -right-4 w-6 h-6 bg-accent/20 rounded-full blur-sm -z-10" />
            </h2>
        </div>
    );
}
