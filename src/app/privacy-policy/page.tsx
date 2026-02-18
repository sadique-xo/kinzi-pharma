
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: "Privacy Policy | Kinzi Pharma",
    description: "Read Kinzi Pharma's Privacy Policy. We are committed to protecting your personal information and ensuring data privacy.",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">

                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-kinzi-blue mb-4">Privacy Policy</h1>
                    <p className="text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

                    <div className="space-y-8 text-gray-700 leading-relaxed">

                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-kinzi-blue mb-4">
                                <Shield className="text-kinzi-teal w-6 h-6" />
                                Introduction
                            </h2>
                            <p>
                                At Kinzi Pharma, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-kinzi-blue mb-4">
                                <Eye className="text-kinzi-teal w-6 h-6" />
                                Information We Collect
                            </h2>
                            <p className="mb-3">
                                We may collect the following types of information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-kinzi-teal">
                                <li><strong>Personal Information:</strong> Name, email address, phone number, and company details provided voluntarily through our contact forms.</li>
                                <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, and pages visited.</li>
                                <li><strong>Cookies:</strong> Small data files stored on your device to enhance user experience and analyze site traffic.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-kinzi-blue mb-4">
                                <Lock className="text-kinzi-teal w-6 h-6" />
                                How We Use Your Information
                            </h2>
                            <p className="mb-3">
                                Your information helps us to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-kinzi-teal">
                                <li>Provide and improve our pharmaceutical export services.</li>
                                <li>Respond to your inquiries and support requests.</li>
                                <li>Send relevant updates, newsletters, or promotional materials (you can opt-out at any time).</li>
                                <li>Analyze website performance and user behavior to improved our platform.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-kinzi-blue mb-4">
                                <Shield className="text-kinzi-teal w-6 h-6" />
                                Data Protection
                            </h2>
                            <p>
                                We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-kinzi-blue mb-4">
                                <Mail className="text-kinzi-teal w-6 h-6" />
                                Contact Us
                            </h2>
                            <p>
                                If you have any questions or concerns regarding this Privacy Policy, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-gray-100 dark:border-gray-800">
                                <p className="font-medium text-kinzi-blue">Kinzi Pharma Support</p>
                                <a href="mailto:info@kinzipharma.com" className="text-kinzi-teal hover:underline">info@kinzipharma.com</a>
                            </div>
                        </section>

                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
                        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-kinzi-teal transition-colors font-medium">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
