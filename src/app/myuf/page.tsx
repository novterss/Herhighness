"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { User, Shield, Coins, Clock, Sword, Skull } from "lucide-react";

export default function Dashboard() {
    const player = {
        username: "Steve",
        rank: "MVP+",
        balance: "1,250,000",
        coins: 500,
        kills: 1243,
        deaths: 432,
        playtime: "12d 4h",
        skinUrl: "https://minotar.net/armor/body/Steve/150.png"
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-card border border-white/5 p-8 rounded-2xl"
                >
                    <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                        {/* Using external service for 3D skin render equivalent */}
                        <img
                            src={player.skinUrl}
                            alt="Player Skin"
                            className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        />
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                            <h1 className="text-4xl font-bold font-mono text-white">{player.username}</h1>
                            <span className="px-3 py-1 rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold text-sm uppercase">
                                {player.rank}
                            </span>
                        </div>
                        <p className="text-gray-400">Last online: <span className="text-green-400">Now</span></p>

                        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                            <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-md font-bold transition-all">
                                Vote for Rewards
                            </button>
                            <button className="px-6 py-2 border border-white/10 hover:bg-white/5 text-white rounded-md font-bold transition-all">
                                Store History
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: "Balance", value: `$${player.balance}`, icon: Coins, color: "text-yellow-400" },
                        { label: "Kills", value: player.kills, icon: Sword, color: "text-red-400" },
                        { label: "Deaths", value: player.deaths, icon: Skull, color: "text-gray-400" },
                        { label: "Playtime", value: player.playtime, icon: Clock, color: "text-blue-400" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card border border-white/5 p-6 rounded-xl hover:border-primary/30 transition-colors"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-gray-400 font-medium">{stat.label}</span>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <div className="text-2xl font-bold font-mono text-white">{stat.value}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Recent Activity / Claim */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-card border border-white/5 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Shield className="text-primary" /> Active Quests
                        </h3>
                        <div className="space-y-4">
                            {[
                                { title: "Slay the Ender Dragon", progress: 100, total: 100, reward: "$50,000", complete: true },
                                { title: "Mine 1,000 Diamonds", progress: 450, total: 1000, reward: "$10,000", complete: false },
                                { title: "Win 5 Bedwars Matches", progress: 2, total: 5, reward: "Rare Key", complete: false },
                            ].map((quest) => (
                                <div key={quest.title} className="bg-background/50 p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-white">{quest.title}</span>
                                        <span className="text-sm text-primary">{quest.reward}</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${quest.complete ? 'bg-green-500' : 'bg-primary'}`}
                                            style={{ width: `${(quest.progress / quest.total) * 100}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                                        <span>{quest.progress} / {quest.total}</span>
                                        {quest.complete && <span className="text-green-500 font-bold">COMPLETED</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-background border border-primary/20 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-4">Daily Reward</h3>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                                <Coins className="w-10 h-10 text-primary" />
                            </div>
                            <p className="text-gray-300 mb-6">Claim your daily 500 coins and vote key!</p>
                            <button className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                Claim Now
                            </button>
                            <p className="text-xs text-gray-500 mt-4">Resets in 14h 32m</p>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
