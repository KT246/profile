"use client";

import React from "react";
import { siteConfig } from "@/data/siteData";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center text-center mb-16">
                    <SectionTitle title="Featured Projects" subtitle="Portfolio" />
                    <p className="max-w-xl text-foreground/70">
                        A selection of my recent works. Exploring different domains, from fintech dashes
                        to interactive client platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {siteConfig.projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
