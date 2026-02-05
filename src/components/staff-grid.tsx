"use client";

import { motion } from "framer-motion";
import { User, Shield, Crown, Gavel, Wrench } from "lucide-react";

const staff = [
    { name: "Notch", role: "Owner", roleColor: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20", icon: Crown },
    { name: "Jeb_", role: "Admin", roleColor: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20", icon: Gavel },
    { name: "Dinnerbone", role: "Developer", roleColor: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20", icon: Wrench },
    { name: "Alex", role: "Moderator", roleColor: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20", icon: Shield },
    { name: "Steve", role: "Helper", roleColor: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20", icon: User },
];

export function StaffGrid() {
    return (
        <section id="staff" className="py-20 bg-[#0f0f0f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono uppercase tracking-widest text-white">
                        Staff <span className="text-primary">Team</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {staff.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative overflow-hidden p-6 rounded-xl border ${member.border} ${member.bg} hover:bg-opacity-20 transition-all group`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/10 shrink-0">
                                    <img
                                        src={`https://minotar.net/avatar/${member.name}/100.png`}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:underline decoration-primary underline-offset-4">
                                        {member.name}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <member.icon className={`w-4 h-4 ${member.roleColor}`} />
                                        <span className={`${member.roleColor} font-bold text-sm uppercase tracking-wide`}>
                                            {member.role}
                                        </span>
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
