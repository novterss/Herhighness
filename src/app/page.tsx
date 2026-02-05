"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MemberList } from "@/components/member-list";
import { ContactWidget } from "@/components/contact-widget";
import { Users, Star } from "lucide-react";
import Link from "next/link";

import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative flex flex-col items-center py-10 md:py-20 font-sans selection:bg-red-900 selection:text-white pb-24 md:pb-32">
      <LoadingScreen />


      {/* Background Decorative */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-50" />
      </div>

      {/* Header / Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-center mb-12"
      >
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tighter text-slate-200 mb-2 font-mono">
          HERHIGHNESS
        </h1>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="z-10 mb-12 flex flex-wrap justify-center gap-4">
        <button
          className="relative px-10 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all bg-red-600 text-slate-100 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
        >
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            MEMBERS
          </span>
        </button>

        <Link
          href="/partners"
          className="relative px-10 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800"
        >
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            PARTNERS
          </span>
        </Link>
      </div>

      {/* Content Area - Only Members here */}
      <div className="w-full max-w-4xl z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <MemberList />
        </motion.div>
      </div>

      <ContactWidget />
    </main>
  );
}
