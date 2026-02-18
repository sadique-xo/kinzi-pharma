
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Gavel, AlertTriangle, Globe, Lock } from 'lucide-react';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">

                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-kinzi-blue mb-4">Terms of Service</h1>
                    <p className="text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

                    <div className="space-y-8 text-gray-700 leading-relaxed">

                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-kinzi-blue mb-4">
                                <FileText className="text-kinzi-teal w-6 h-6" />
                                Welcome
                            </h2>
                            <p>
                                Welcome to Kinzi Pharma. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our Privacy Policy govern Kinzi Pharma's relationship with you in relation to this website.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-kinzi-blue mb-4">
                                <Globe className="text-kinzi-teal w-6 h-6" />
                                Use of Our Services
                            </h2>
                            <p className="mb-3">
                                Kinzi Pharma is a pharmaceutical export company. The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-kinzi-teal">
                                <li>You must be at least 18 years of age to use this website.</li>
                                <li>You agree not to use this website for any unlawful purpose.</li>
                                <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-kinzi-blue mb-4">
                                <Lock className="text-kinzi-teal w-6 h-6" />
                                Intellectual Property
                            </h2>
                            <p>
                                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-kinzi-blue mb-4">
                                <AlertTriangle className="text-kinzi-teal w-6 h-6" />
                                Limitation of Liability
                            </h2>
                            <p>
                                Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
                            </p>
                            <p className="mt-2">
                                Kinzi Pharma shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-kinzi-blue mb-4">
                                <Gavel className="text-kinzi-teal w-6 h-6" />
                                Governing Law
                            </h2>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Mumbai, India.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-kinzi-blue mb-4">
                                <FileText className="text-kinzi-teal w-6 h-6" />
                                Changes to Terms
                            </h2>
                            <p>
                                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page. You are advised to review this Terms of Service periodically for any changes.
                            </p>
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
