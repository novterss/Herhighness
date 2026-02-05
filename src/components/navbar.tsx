"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Gamepad2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Store", href: "#store" },
    { name: "Vote", href: "#vote" },
    { name: "Staff", href: "#staff" },
    { name: "Dashboard", href: "/myuf" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <Gamepad2 className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold font-mono tracking-wider text-white">
                                CLAN<span className="text-primary">NAME</span>
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-primary hover:text-shadow-neon transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-bold text-sm uppercase tracking-wide transition-colors">
                                Join Discord
                            </button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-bold uppercase transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 pb-2">
                                <button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md font-bold text-base uppercase transition-colors">
                                    Join Discord
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
