"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.2);
    const [isHovered, setIsHovered] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play blocked", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    return (
        <div
            className="fixed bottom-6 left-6 z-40 flex items-center gap-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <audio ref={audioRef} loop src="/assets/bgm.mp3" />

            <button
                onClick={togglePlay}
                className="w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-md border border-red-500/30 text-red-500 rounded-full hover:bg-red-500/20 transition-all hover:scale-105"
            >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <div className={`
        flex items-center gap-2 bg-black/50 backdrop-blur-md border border-slate-800 rounded-full px-3 py-2 transition-all duration-300 overflow-hidden
        ${isHovered ? "w-32 opacity-100" : "w-0 opacity-0 px-0 border-0"}
      `}>
                {volume === 0 ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-red-500" />}
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-16 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:rounded-full"
                />
            </div>
        </div>
    );
}
