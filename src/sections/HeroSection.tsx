"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteData";
import { Button } from "@/components/Button";
import Image from "next/image";

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Soft radial glow */}
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

                {/* Left Side: Text Area */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 max-w-2xl"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-[2px] bg-accent" />
                        <h2 className="text-xl md:text-2xl font-medium text-accent">
                            {siteConfig.greeting}
                        </h2>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4 group tracking-tight">
                        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{siteConfig.name}</span>
                        <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent inline-block ml-2 mb-2" />
                    </h1>

                    <h3 className="text-2xl md:text-4xl font-semibold text-foreground/90 mb-6 tracking-wide">
                        {siteConfig.jobTitle}
                    </h3>

                    <p className="text-lg text-foreground/70 mb-10 max-w-lg leading-relaxed">
                        {siteConfig.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Button href="#contact" variant="primary">
                            Got a project?
                        </Button>
                        <Button href={siteConfig.resumeLink} variant="secondary">
                            My resume
                        </Button>
                    </div>
                </motion.div>

                {/* Right Side: Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex-1 flex justify-center md:justify-end relative"
                >
                    {/* Glowing Ring Background */}
                    <div className="absolute inset-0 m-auto w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                        <div className="w-full h-full rounded-full bg-glow shadow-accent/20 blur-2xl"></div>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-card border border-white/5 z-10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src="/images/profile.png"
                            alt={siteConfig.name}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Decorative small elements */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 -right-4 w-20 h-20 border border-accent/30 rounded-full z-0"
                    />
                </motion.div>
            </div>
        </section>
    );
}
