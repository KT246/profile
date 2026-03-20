
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    index: number;
}

export function ProjectCard({
    title,
    description,
    tags,
    liveUrl,
    githubUrl,
    index,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between bg-card border border-card-border rounded-2xl overflow-hidden hover:border-accent/50 transition-colors duration-500"
        >
            {/* Abstract Placeholder block for missing image */}
            <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                {/* Title text overlay as placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-2xl tracking-widest uppercase">
                    {title.split(' ')[0]}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <p className="text-foreground/70 text-sm mb-6 flex-1">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-foreground/80 font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                        <FaGithub size={16} />
                        Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
