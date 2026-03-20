"use client";

import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { motion } from "framer-motion";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-white/[0.02] border-t border-white/5">
            {/* Background glow for contact section */}
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-accent/10 rounded-full blur-[100px] z-0" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">

                    <div className="flex-1">
                        <SectionTitle title="Get in touch" subtitle="Say Hello" />
                        <p className="text-foreground/70 text-lg mb-8">
                            Whether you have a question, a project in mind, or just want to say hi, I'd love to hear from you.
                            Drop me a message and I'll get back to you soon.
                        </p>
                        <div className="mb-8">
                            <h4 className="text-white font-medium mb-4">Connect on Socials</h4>
                            <SocialLinks />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 bg-card border border-card-border rounded-2xl p-8"
                    >
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>
                            <Button type="submit" variant="primary" className="w-full mt-2">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
