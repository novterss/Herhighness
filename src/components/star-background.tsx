"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function StarBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    // Mouse position for parallax
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for mouse movement
    const springConfig = { damping: 25, stiffness: 100 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Parallax transforms
    // Stars move slightly
    const starsX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
    const starsY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

    // Background moves even less (slower)
    const bgX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
    const bgY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position from -0.5 to 0.5
            x.set(e.clientX / window.innerWidth - 0.5);
            y.set(e.clientY / window.innerHeight - 0.5);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [x, y]);

    // Canvas drawing logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Define stars
        const stars: { x: number; y: number; radius: number; alpha: number; speed: number }[] = [];
        const starCount = 150;

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                alpha: Math.random(),
                speed: Math.random() * 0.2 + 0.05,
            });
        }

        let animationFrameId: number;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                // Move stars slowly upwards/drift
                star.y -= star.speed;

                // Reset if off screen
                if (star.y < 0) {
                    star.y = canvas.height;
                    star.x = Math.random() * canvas.width;
                }

                // Mouse interaction: slight repulsion could be calculated here using spring values, 
                // but let's stick to the container parallax for performance and global feel.

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();

                // Twinkle effect
                if (Math.random() > 0.99) {
                    star.alpha = Math.random();
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [windowSize]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950 pointer-events-none">
            {/* Static Background Image with Slow Parallax */}
            <motion.div
                style={{ x: bgX, y: bgY }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/image_49.png')" }}
                />
                {/* Dark Overlay (Additional for readability if needed) */}
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Styled Canvas Layer with Faster Parallax */}
            <motion.div
                style={{ x: starsX, y: starsY }}
                className="absolute inset-0 z-10"
            >
                <canvas ref={canvasRef} className="block" />
            </motion.div>
        </div>
    );
}
