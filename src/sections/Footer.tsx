import React from "react";
import { siteConfig } from "@/data/siteData";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background py-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-white">{siteConfig.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                </div>

                <p className="text-foreground/50 text-sm text-center md:text-left">
                    &copy; {currentYear} {siteConfig.name}. All rights reserved. Designed with precision.
                </p>

                <SocialLinks />
            </div>
        </footer>
    );
}
