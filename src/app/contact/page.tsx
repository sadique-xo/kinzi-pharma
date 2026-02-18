
"use client";

import { Mail, MapPin, Phone } from "lucide-react";
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
                                        <p className="text-lg">+91-7738246202 <br /> +91-9446761633</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="shrink-0 text-kinzi-teal w-6 h-6" />
                                        <p className="text-lg">info@kinzipharma.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative circles */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-kinzi-teal/20 rounded-full blur-2xl"></div>
                            <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center text-center space-y-6 h-full">
                            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-2">
                                <Phone className="w-8 h-8 text-[#25D366]" />
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
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                    <path d="M17.472 14.382C17.111 14.202 15.336 13.324 15.003 13.204C14.669 13.084 14.426 13.024 14.182 13.384C13.939 13.744 13.243 14.554 13.03 14.794C12.818 15.035 12.605 15.065 12.245 14.885C11.885 14.704 10.724 14.325 9.349 13.099C8.257 12.126 7.519 10.925 7.307 10.565C7.095 10.204 7.285 10.008 7.465 9.829C7.626 9.668 7.823 9.41 8.004 9.2C8.185 8.989 8.246 8.839 8.367 8.599C8.488 8.358 8.428 8.148 8.337 7.968C8.246 7.788 7.519 5.996 7.216 5.275C6.921 4.573 6.622 4.667 6.4 4.657C6.195 4.648 5.96 4.639 5.725 4.639C5.49 4.639 5.108 4.726 4.786 5.076C4.464 5.426 3.554 6.277 3.554 8.008C3.554 9.739 4.814 11.41 4.995 11.651C5.176 11.892 7.491 15.462 11.034 16.992C11.877 17.356 12.535 17.573 13.048 17.736C13.882 18.001 14.644 17.961 15.244 17.871C15.912 17.771 17.306 17.029 17.596 16.218C17.886 15.407 17.886 14.717 17.8 14.566C17.714 14.417 17.472 14.328 17.472 14.382Z" fill="currentColor" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.012 2C6.502 2 2.017 6.486 2.015 11.996C2.013 13.759 2.473 15.485 3.364 17.029L2 22L7.086 20.665C8.571 21.474 10.258 21.901 12.006 21.902H12.011C17.52 21.902 22.005 17.417 22.007 11.906C22.008 9.256 20.978 6.764 19.105 4.887C17.232 3.011 14.743 1.989 12.012 2ZM12.01 20.224H12.005C10.43 20.223 8.879 19.8 7.534 19.003L7.215 18.813L3.916 19.678L4.796 16.463L4.588 16.133C3.714 14.744 3.253 13.125 3.255 11.467C3.257 6.643 7.184 2.716 12.014 2.716C14.351 2.717 16.549 3.628 18.203 5.282C19.855 6.936 20.766 9.135 20.765 11.474C20.762 16.3 16.837 20.224 12.01 20.224Z" fill="currentColor" />
                                </svg>
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
