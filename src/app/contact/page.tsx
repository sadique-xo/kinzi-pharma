
"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import BlurIn from "@/components/ui/blur-in";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen pb-20">
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <BlurIn word="Contact Us" className="text-4xl md:text-6xl font-bold text-kinzi-blue mb-6" />
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        Get in touch with us for inquiries, partnerships, or support.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Contact Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-kinzi-blue text-white p-8 rounded-2xl relative overflow-hidden h-full flex flex-col justify-center">
                            <div className="relative z-10 space-y-8">
                                <h3 className="text-2xl font-bold border-b border-white/20 pb-4">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="shrink-0 text-kinzi-teal mt-1 w-6 h-6" />
                                        <p className="text-lg leading-relaxed">380, Amar Nagar Shiv Sena Lane, Dargha Road, Mulund West, Mumbai – 400082, India</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="shrink-0 text-kinzi-teal w-6 h-6" />
                                        <p className="text-lg">+91-7738246202</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="shrink-0 text-kinzi-teal w-6 h-6" />
                                        <div className="flex flex-col">
                                            <p className="text-lg">info@kinzipharma.com</p>
                                            <p className="text-lg">contact.kinzipharma@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative circles */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-kinzi-teal/20 rounded-full blur-2xl"></div>
                            <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center text-center space-y-6 h-full">
                            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-2">
                                <FaWhatsapp className="w-8 h-8 text-[#25D366]" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Chat on WhatsApp</h4>
                                <p className="text-slate-600 mb-6">Connect with us instantly for quick inquiries, quotes, or support.</p>
                            </div>
                            <a
                                href="https://wa.me/917738246202"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all shadow-md hover:shadow-xl flex items-center gap-3 transform hover:-translate-y-1"
                            >
                                <FaWhatsapp className="w-6 h-6" />
                                Open WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-96 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.665677610567!2d72.9431!3d19.1726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEwJzIxLjQiTiA3MsKwNTYnMzUuMiJF!5e0!3m2!1sen!2sin!4v1625642000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
