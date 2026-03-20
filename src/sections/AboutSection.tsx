"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteData";

export function AboutSection() {
    return (
        <div className="flex-1 w-full md:w-1/2 pt-12 md:pt-0">
            <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">About me</h3>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-foreground/80 text-lg leading-relaxed mb-10">
                    My journey in software development began a decade ago, driven by a fascination
                    with bringing ideas to life through code. Today, I focus on building scalable,
                    accessible, and premium user experiences. I believe in writing clean code and
                    never stop learning.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {siteConfig.stats.map((stat, index) => (
                        <div key={index} className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300">
                            <div className="text-3xl md:text-4xl font-bold text-white">
                                {stat.value.replace("+", "")}
                                <span className="text-accent">+</span>
                            </div>
                            <div className="text-xs uppercase tracking-wider text-foreground/50 font-medium whitespace-pre-wrap">
                                {stat.label.split(' ').join('\n')}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
