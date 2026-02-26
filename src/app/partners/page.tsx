"use client";

import { motion } from "framer-motion";
import { ContactWidget } from "@/components/contact-widget";
import { Users, Star, ArrowLeft, Facebook } from "lucide-react";
import Link from "next/link";

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-background relative flex flex-col items-center py-20 font-sans selection:bg-green-900 selection:text-white pb-32">
            <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-900 to-transparent opacity-50" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="z-10 text-center mb-12"
            >
                <Link href="/" className="inline-flex items-center text-slate-500 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Core
                </Link>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-200 mb-2 font-mono">
                    PARTNERS
                </h1>
                <p className="text-slate-500 text-sm uppercase tracking-[0.3em]">
                    Official Alliances
                </p>
            </motion.div>

            <div className="z-10 mb-12 flex flex-wrap justify-center gap-4">
                <Link
                    href="/"
                    className="relative px-10 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800"
                >
                    <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        MEMBERS
                    </span>
                </Link>

                <button
                    className="relative px-10 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                >
                    <span className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        PARTNERS
                    </span>
                </button>
            </div>

            <div className="w-full max-w-3xl z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(220,38,38,0.5)' }}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between hover:border-red-500/30 transition-all group"
                >
                    <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.3)] shrink-0">
                            <img
                                src="/assets/gojo.jpg"
                                alt="Novterss"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-slate-100 font-bold text-xl leading-tight group-hover:text-red-400 transition-colors">
                                Novterss Novterss
                            </h3>
                            <div className="text-slate-500 text-xs mt-1 font-mono opacity-60">
                                https://www.facebook.com/novterss.novterss/
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://www.facebook.com/novterss.novterss/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all transform hover:scale-110 shadow-lg"
                    >
                        <Facebook className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>

            <ContactWidget />
        </main>
    );
}
