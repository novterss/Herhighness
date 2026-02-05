"use client";

import { motion } from "framer-motion";
import { User, Sword, Shield, Crown } from "lucide-react";
import Image from "next/image";

const members = [
    { name: "Viper", role: "Leader", game: "Valorant", icon: Crown, color: "text-yellow-500" },
    { name: "Shadow", role: "Co-Leader", game: "Apex Legends", icon: Sword, color: "text-red-500" },
    { name: "Ghost", role: "Strategist", game: "CS2", icon: Shield, color: "text-blue-500" },
    { name: "Spectre", role: "Member", game: "Overwatch 2", icon: User, color: "text-gray-400" },
    { name: "Phantom", role: "Member", game: "Valorant", icon: User, color: "text-gray-400" },
    { name: "Reaper", role: "Member", game: "Apex Legends", icon: User, color: "text-gray-400" },
];

export function Members() {
    return (
        <section id="members" className="py-20 bg-[#0f0f0f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono uppercase tracking-widest text-white">
                        Meet the <span className="text-primary">Squad</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card border border-white/5 p-6 rounded-xl hover:border-primary/50 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <member.icon className={`w-24 h-24 ${member.color}`} />
                            </div>

                            <div className="relative z-10 flex items-center space-x-4">
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary transition-colors">
                                    <User className="w-8 h-8 text-gray-300 group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {member.name}
                                    </h3>
                                    <div className="flex items-center space-x-2 mt-1">
                                        <span className={`text-xs font-bold uppercase ${member.color}`}>
                                            {member.role}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                                        <span className="text-xs text-gray-400">{member.game}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
