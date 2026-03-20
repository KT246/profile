import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    className?: string;
    href?: string;
}

export function Button({
    variant = "primary",
    children,
    className = "",
    href,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 transform";

    const variants = {
        primary: "bg-accent text-white hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(255,107,107,0.4)]",
        secondary: "bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/5",
    };

    const Component = href ? motion.a : motion.button;

    return (
        // @ts-ignore - framer-motion polymorphic types issue
        <Component
            href={href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
}
