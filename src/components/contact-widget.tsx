"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Facebook } from "lucide-react";
import { useState } from "react";

export function ContactWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 md:bottom-10 md:right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-20 right-0 mb-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-4 bg-slate-950 border-b border-slate-800">
                            <h3 className="text-white font-bold">มีปัญหา/สอบถามข้อมูล</h3>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                หากมีข้อสงสัย มีปัญหาภายในแก๊ง หรือต้องการติดต่อสอบถามโดยตรง สามารถคลิกที่ปุ่มด้านล่างได้ทันที
                            </p>
                        </div>
                        <div className="p-4 bg-slate-900">
                            <a
                                href="https://www.facebook.com/herhighnvsscore"
                                target="_blank"
                                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#1877F2] hover:bg-[#166fe5] text-white text-center rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-blue-900/50"
                            >
                                <Facebook className="w-4 h-4" />
                                Contact via Facebook
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all hover:scale-105 active:scale-95 relative"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-6 h-6" />
                )}
            </button>
        </div>
    );
}
