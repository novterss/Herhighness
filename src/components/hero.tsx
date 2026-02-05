"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 hover:bg-primary/30 blur-[100px] rounded-full transition-colors duration-700" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
                        <span className="block text-white">WE ARE</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                            HER HIGHNESS
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light"
                >
                    The ultimate Minecraft SMP experience. Join a thriving economy, participate in epic wars, and build your empire.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-10 flex flex-col items-center gap-6"
                >
                    <div
                        onClick={() => {
                            navigator.clipboard.writeText("play.herhighness.com");
                            alert("IP Copied!");
                        }}
                        className="cursor-pointer group relative px-8 py-4 bg-black/50 backdrop-blur-md border border-primary/30 hover:border-primary text-white font-mono tracking-wider rounded-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-4 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                    >
                        <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                        <span className="text-xl">play.herhighness.com</span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest group-hover:text-primary transition-colors">Click to Copy</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="text-primary font-bold">1,245</span> Players Online
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
