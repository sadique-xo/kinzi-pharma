"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import ShimmerButton from "@/components/ui/shimmer-button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Manufacturers", href: "/manufacturers" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out flex items-center justify-between px-6 rounded-full w-[95%] md:w-[90%] max-w-6xl h-16",
                scrolled
                    ? "bg-white/70 backdrop-blur-xl border border-black/5"
                    : "bg-transparent border border-transparent"
            )}
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
                <div className="relative overflow-hidden w-36 h-14">
                    <Image
                        src="/kinzi-pharma-logo.png"
                        alt="Kinzi Pharma Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                            "text-sm font-semibold transition-colors relative group",
                            scrolled ? "text-slate-800 hover:text-kinzi-teal" : "text-slate-700 hover:text-kinzi-teal"
                        )}
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-kinzi-teal transition-all group-hover:w-full" />
                    </Link>
                ))}
            </div>

            {/* CTA - WhatsApp */}
            <div className="hidden md:block shrink-0">
                <a
                    href="https://wa.me/917738246202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white px-3 py-1.5 rounded-full font-medium text-xs transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                    WhatsApp
                </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 mt-4 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden md:hidden mx-4"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-700 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-kinzi-teal transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/917738246202"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-2 bg-[#25D366] text-white text-center py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                                WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
