"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-20 bg-card border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono uppercase tracking-widest text-white">
                            About The <span className="text-primary">Clan</span>
                        </h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Founded in 2024, Her Highness is more than just a gaming clan. We are a brotherhood of elite players dedicated to dominance across multiple titles. from tactical shooters to battle royales, our presence is felt.
                        </p>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Our mission is to foster a competitive yet supportive environment where every member can grow, improve, and win. We value skill, loyalty, and sportsmanship above all.
                        </p>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-white">50+</span>
                                <span className="text-sm text-primary uppercase tracking-wider">Members</span>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-white">10+</span>
                                <span className="text-sm text-primary uppercase tracking-wider">Tournaments</span>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-white">3</span>
                                <span className="text-sm text-primary uppercase tracking-wider">Games</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10" />
                        <div className="bg-muted p-8 rounded-lg border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full" />
                            <h3 className="text-2xl font-bold mb-4 text-white">Why Join Us?</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                    Professional Coaching & Training
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                    Regular Internal Scrims
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                    Active Discord Community
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                    Sponsorship Opportunities
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
