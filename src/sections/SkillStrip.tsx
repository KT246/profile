"use client";

import React from "react";
import { siteConfig } from "@/data/siteData";

export function SkillStrip() {
    return (
        <div className="w-full bg-card/60 backdrop-blur-sm border-y border-card-border overflow-hidden py-6">
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-center gap-12 overflow-x-auto no-scrollbar mask-edges">
                {siteConfig.skills.map((skill, index) => (
                    <div
                        key={skill}
                        className="flex items-center gap-6 whitespace-nowrap min-w-max group"
                    >
                        <span className="text-lg font-medium text-foreground/60 group-hover:text-white transition-colors duration-300">
                            {skill}
                        </span>
                        {index < siteConfig.skills.length - 1 && (
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
