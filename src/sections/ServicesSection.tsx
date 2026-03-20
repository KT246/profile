"use client";

import React from "react";
import { siteConfig } from "@/data/siteData";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";

const iconMap = {
    web: FaLaptopCode,
    app: FaMobileAlt,
    hosting: FaServer,
};

export function ServicesSection() {
    return (
        <div className="flex-1 w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">Services</h3>

            <div className="flex flex-col gap-6 relative">
                {/* Vertical accent line connecting services */}
                <div className="absolute left-6 top-8 bottom-8 w-px bg-accent/20 hidden md:block"></div>

                {siteConfig.services.map((service, index) => {
                    // @ts-ignore
                    const IconWrapper = iconMap[service.icon];

                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start gap-6 group relative z-10"
                        >
                            <div className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent group-hover:bg-accent/10 transition-colors duration-300">
                                <IconWrapper className="text-accent w-5 h-5" />
                            </div>
                            <div className="pt-2">
                                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                                    {service.title}
                                </h4>
                                <p className="text-foreground/70 text-sm leading-relaxed max-w-sm">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
