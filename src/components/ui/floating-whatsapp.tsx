
"use client";

import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/917738246202"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="text-white h-8 w-8" />
            <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
        </a>
    );
}
