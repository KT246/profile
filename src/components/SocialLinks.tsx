import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { siteConfig } from "@/data/siteData";

export function SocialLinks({ className = "" }: { className?: string }) {
    const links = [
        { icon: FaGithub, url: siteConfig.socials.github, label: "GitHub" },
        { icon: FaLinkedin, url: siteConfig.socials.linkedin, label: "LinkedIn" },
        { icon: FaEnvelope, url: siteConfig.socials.email, label: "Email" },
    ];

    return (
        <div className={`flex items-center gap-6 ${className}`}>
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-foreground/70 hover:text-accent transition-colors duration-300"
                >
                    <link.icon className="w-6 h-6" />
                </a>
            ))}
        </div>
    );
}
