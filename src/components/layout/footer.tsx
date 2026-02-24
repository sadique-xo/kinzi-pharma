
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Download } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative w-40 h-16">
                                <Image
                                    src="/kinzi-pharma-logo.png"
                                    alt="Kinzi Pharma Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                            Leading the way in pharmaceutical exports. Committed to providing quality healthcare solutions globally with integrity and excellence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/kinzi.pharma/" target="_blank" className="p-2 bg-white rounded-full text-slate-400 hover:text-kinzi-teal hover:shadow-md transition-all">
                                <Facebook size={18} />
                            </Link>
                            <Link href="https://www.instagram.com/kinzipharma/" target="_blank" className="p-2 bg-white rounded-full text-slate-400 hover:text-kinzi-teal hover:shadow-md transition-all">
                                <Instagram size={18} />
                            </Link>
                            <Link href="https://www.threads.com/@kinzipharma" target="_blank" className="p-2 bg-white rounded-full text-slate-400 hover:text-kinzi-teal hover:shadow-md transition-all">
                                <span className="font-bold text-lg leading-none">@</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><Link href="/" className="hover:text-kinzi-teal transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-kinzi-teal transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-kinzi-teal transition-colors">Services</Link></li>
                            <li><Link href="/products" className="hover:text-kinzi-teal transition-colors">Products</Link></li>
                            <li><Link href="/manufacturers" className="hover:text-kinzi-teal transition-colors">Manufacturers</Link></li>
                            <li><Link href="/contact" className="hover:text-kinzi-teal transition-colors">Contact</Link></li>
                            <li>
                                <a href="/Kinzi-Pharma-Profile.pdf" download="Kinzi-Pharma-Profile.pdf" className="hover:text-kinzi-teal transition-colors flex items-center gap-1">
                                    <Download size={14} /> Brochure
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-semibold text-slate-900 mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-kinzi-teal shrink-0 mt-0.5" size={18} />
                                <span>380, Amar Nagar Shiv Sena Lane, Dargha Road, Mulund West, Mumbai – 400082, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-kinzi-teal shrink-0" size={18} />
                                <span>+91-7738246202</span>
                            </li>
                            <li className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <Mail className="text-kinzi-teal shrink-0" size={18} />
                                    <a href="mailto:info@kinzipharma.com" className="hover:text-kinzi-teal transition-colors">info@kinzipharma.com</a>
                                </div>
                                <div className="flex items-center gap-3 ml-[31px]">
                                    <a href="mailto:contact.kinzipharma@gmail.com" className="hover:text-kinzi-teal transition-colors">contact.kinzipharma@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Kinzi Pharma. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <Link href="/privacy-policy" className="hover:text-slate-800">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-slate-800">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
