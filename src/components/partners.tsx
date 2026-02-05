"use client";

import { motion } from "framer-motion";

const partners = [
    "Razer",
    "Logitech",
    "Secretlab",
    "Nvidia",
    "Discord",
];

export function Partners() {
    return (
        <section id="partners" className="py-20 bg-background relative overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 font-mono uppercase tracking-wider text-white">
                        Our <span className="text-accent">Partners</span>
                    </h2>
                    <p className="text-gray-400 text-sm">Supported by the best in the game.</p>
                </motion.div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="px-8 py-4 bg-white/5 rounded-lg border border-white/5 hover:border-accent/50 hover:bg-accent/10 transition-all cursor-pointer">
                                <span className="text-xl md:text-2xl font-bold text-gray-500 group-hover:text-accent transition-colors uppercase tracking-widest">
                                    {partner}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
