"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
                >
                    <div className="relative flex flex-col items-center">
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.5, 1, 0.5]
                            }}
                            className="relative mb-8"
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-200 font-mono relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                                HERHIGHNESS
                            </h1>
                            <div className="absolute inset-0 blur-xl bg-red-600/20 rounded-full animate-pulse scale-150" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="h-1 w-48 bg-gray-800 rounded-full overflow-hidden"
                        >
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="h-full w-full bg-red-600"
                            />
                        </motion.div>
                    </div>
                </motion.div >
            )
            }
        </AnimatePresence >
    );
}
