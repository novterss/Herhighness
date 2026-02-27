"use client";

import { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Member {
    id: string;
    name: string;
    role: string;
    linkUrl: string;
    avatarUrl?: string;
    status?: string;
}

const initialMembers: Member[] = [
    {
        id: "1",
        name: "Theboss Herhighnvss",
        role: "Leader",
        linkUrl: "https://www.facebook.com/herhighnvsscore",
        avatarUrl: "/assets/theboss.jpg",
    },
    {
        id: "2",
        name: "Kaning Herhighnvss",
        role: "Co-Leader",
        linkUrl: "https://www.facebook.com/novmintt.novmintt",
        avatarUrl: "/assets/kaning.jpg",
        status: "novterss is my bf ❤️"
    },
    {
        id: "3",
        name: "Gapgun Herhighnvss",
        role: "Member",
        linkUrl: "https://www.facebook.com/gapgunx",
        avatarUrl: "/assets/gapgun.jpg",
    },
    {
        id: "4",
        name: "Aungkan Herhighnvss",
        role: "Co-Leader",
        linkUrl: "https://www.facebook.com/ngx.ng.ng.ng.khx.l.li.wi.b.wab",
        avatarUrl: "/assets/Aungkan.jpg",
    },
    {
        id: "5",
        name: "Pnixe Herhighnvss",
        role: "Member",
        linkUrl: "https://www.facebook.com/profile.php?id=61578183644817",
        avatarUrl: "/assets/pnixe.jpg",
    },

];

const ProfileImage = ({ url, fallback, alt }: { url: string; fallback?: string; alt: string }) => {
    const [imgSrc, setImgSrc] = useState<string>(fallback || "/assets/per.png");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchImage = async () => {
            try {
                const res = await fetch(`/api/fb-profile?url=${encodeURIComponent(url)}`);
                if (!res.ok) throw new Error("API error");
                const data = await res.json();
                if (isMounted && data.imageUrl && !data.error) {
                    setImgSrc(data.imageUrl);
                }
            } catch (err) {
                console.error("Failed to fetch profile image for:", url);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        if (url.includes('facebook.com') || url.includes('fb.com')) {
            fetchImage();
        } else {
            setLoading(false);
        }

        return () => { isMounted = false; };
    }, [url]);

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-300 ${loading ? 'opacity-50 blur-[2px]' : 'opacity-100 blur-0'}`}
            onError={() => setImgSrc(fallback || "/assets/per.png")}
        />
    );
};

export function MemberList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const filteredMembers = initialMembers.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentMembers = filteredMembers.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 w-full relative">
            <div className="flex justify-end items-end mb-4">
            </div>

            <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search members..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="w-full pl-11 pr-4 py-4 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                />
            </div>

            <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                    {currentMembers.map((member, index) => {
                        const isLeader = member.role === "Leader";
                        const isBigLeader = member.role === "Big Leader";
                        const isOnline = ["Theboss", "Kaning", "Aungkan"].some(key => member.name.includes(key));

                        return (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.02, borderColor: 'rgba(220,38,38,0.5)' }}
                                className={`
                bg-slate-900 border rounded-2xl p-4 flex items-center justify-between transition-all group duration-300
                ${isBigLeader
                                        ? "border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.3)] bg-gradient-to-r from-yellow-900/20 to-slate-900"
                                        : isLeader
                                            ? "border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                                            : "border-slate-800 hover:border-red-500/30"
                                    }
              `}
                            >
                                <div className="flex items-center space-x-4 overflow-hidden">
                                    <div className={`
                    w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 relative
                    ${isBigLeader ? "border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)]" : isLeader ? "border-red-500 shadow-[0_0_10px_rgba(220,38,38,0.5)]" : "border-slate-700 bg-slate-800"}
                `}>
                                        <ProfileImage url={member.linkUrl} fallback={member.avatarUrl} alt={member.name} />
                                        {isOnline && (
                                            <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-black shadow-[0_0_5px_rgba(34,197,94,1)] z-10 animate-[pulse_1.5s_ease-in-out_infinite]" title="Online"></div>
                                        )}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className={`font-bold text-lg leading-tight transition-colors truncate ${isBigLeader ? "text-yellow-400 font-extrabold text-xl tracking-wide" : isLeader ? "text-red-500" : "text-slate-100 group-hover:text-red-400"}`}>
                                                {member.name}
                                            </h3>
                                            {isBigLeader && (
                                                <span className="px-1.5 py-0.5 rounded bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-[10px] font-bold tracking-wider uppercase shadow-md shadow-yellow-900/50">
                                                    BIG LEADER
                                                </span>
                                            )}
                                            {isLeader && (
                                                <span className="px-1.5 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold tracking-wider">
                                                    LEADER
                                                </span>
                                            )}
                                        </div>
                                        {member.status && (
                                            <div className="text-pink-400 text-[10px] md:text-xs font-medium italic mt-0.5 mb-1 opacity-90 drop-shadow-[0_0_2px_rgba(244,114,182,0.5)]">
                                                {member.status}
                                            </div>
                                        )}
                                        <div className="text-slate-500 text-[10px] md:text-xs font-mono opacity-60 break-all whitespace-normal leading-tight">
                                            {member.linkUrl}
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={member.linkUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-4 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all transform hover:scale-110 shrink-0 shadow-lg"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>

                {filteredMembers.length === 0 && (
                    <div className="text-center py-12 text-slate-600">
                        No members found.
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4 mt-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <span className="text-slate-500 text-xs font-mono">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
}
