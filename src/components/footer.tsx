import { Github, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold font-mono text-white">
                            CLAN<span className="text-primary">NAME</span>
                        </h2>
                        <p className="text-gray-400 text-sm mt-1">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Twitter className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Instagram className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Youtube className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Github className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
