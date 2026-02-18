
import { Metadata } from "next";
import { CheckCircle2, Globe as GlobeIcon, Award, Users } from "lucide-react";
import BlurIn from "@/components/ui/blur-in";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

export const metadata: Metadata = {
    title: "About Us | Kinzi Pharma",
    description: "Learn about Kinzi Pharma, a licensed pharmaceutical wholesaler and exporter based in Mumbai, India. Dedicated to global healthcare since 2020.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen pb-20">
            {/* Hero */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <BlurIn word="About Kinzi Pharma" className="text-4xl md:text-6xl font-bold text-kinzi-blue mb-6" />
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        Licensed pharmaceutical wholesaler bridging the gap between Indian manufacturing excellence and global healthcare needs since 2020.
                    </p>
                </div>
            </section>

            {/* Overview & Story */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-kinzi-blue">Our Story</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Kinzi Pharma is dedicated to providing a wide range of quality and affordable healthcare products. Founded by a young and driven entrepreneur and guided by a team with over 10 years of combined experience, we have quickly established ourselves as a trusted partner for pharmaceutical wholesalers across 30+ countries.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Based in Mumbai, the commercial capital of India, we leverage our strategic location and strong network to ensure efficient sourcing and global distribution.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-kinzi-teal/5 p-6 rounded-2xl border border-kinzi-teal/10">
                            <Users className="w-10 h-10 text-kinzi-teal mb-4" />
                            <h3 className="font-bold text-lg text-kinzi-blue">Experience</h3>
                            <p className="text-sm text-slate-500">10+ Years Combined Expertise</p>
                        </div>
                        <div className="bg-kinzi-teal/5 p-6 rounded-2xl border border-kinzi-teal/10">
                            <Award className="w-10 h-10 text-kinzi-teal mb-4" />
                            <h3 className="font-bold text-lg text-kinzi-blue">Licensed</h3>
                            <p className="text-sm text-slate-500">FDA India Approved Wholesaler</p>
                        </div>
                        <div className="bg-kinzi-teal/5 p-6 rounded-2xl border border-kinzi-teal/10">
                            <GlobeIcon className="w-10 h-10 text-kinzi-teal mb-4" />
                            <h3 className="font-bold text-lg text-kinzi-blue">Global</h3>
                            <p className="text-sm text-slate-500">Exporting to 30+ Countries</p>
                        </div>
                        <div className="bg-kinzi-teal/5 p-6 rounded-2xl border border-kinzi-teal/10">
                            <CheckCircle2 className="w-10 h-10 text-kinzi-teal mb-4" />
                            <h3 className="font-bold text-lg text-kinzi-blue">Quality</h3>
                            <p className="text-sm text-slate-500">ISO 9001:2008 Certified</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-kinzi-blue mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To enrich lives around the world by providing affordable healthcare solutions and nurturing the prosperity of our associates, all on the foundation of integrity. Committed to improving access to quality pharmaceutical products and contributing to the well-being of individuals and communities globally.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-kinzi-blue mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To sustain world-class standards in the pharmaceutical industry, create value, and resonate globally. To be recognized as a trusted and preferred partner for pharmaceutical wholesalers worldwide, offering a diverse range of high-quality healthcare products with innovation, reliability, and customer-centricity at the core.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold text-kinzi-blue mb-12">Certifications & Licenses</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {certifications.map((cert) => (
                            <div key={cert} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-600 font-medium hover:border-kinzi-teal hover:text-kinzi-teal transition-colors cursor-default shadow-sm">
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

const certifications = [
    "Wholesale Drug License (Form 20B & 21B)",
    "FSSAI Certified",
    "GST Registered",
    "Importer Exporter Code (IEC)",
    "MSME Registered",
    "PHARMEXCIL Member",
    "ISO 9001:2008",
    "D-U-N-S Registered",
    "FIEO Member"
];
