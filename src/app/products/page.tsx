
import { Metadata } from "next";
import { Check, ShieldCheck, Pill } from "lucide-react";
import BlurIn from "@/components/ui/blur-in";

export const metadata: Metadata = {
    title: "Products | Kinzi Pharma",
    description: "Explore our wide range of pharmaceutical products including medicines, vaccines, and veterinary supplies available for global export.",
};

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen pb-20">
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <BlurIn word="Products & Services" className="text-4xl md:text-6xl font-bold text-kinzi-blue mb-6" />
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        Reliable pharmaceutical exports catering to diverse medical needs worldwide.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceCategories.map((service, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-kinzi-teal transition-all hover:shadow-lg group">
                            <div className="w-12 h-12 bg-kinzi-teal/10 rounded-xl flex items-center justify-center mb-6 text-kinzi-teal group-hover:bg-kinzi-teal group-hover:text-white transition-colors">
                                <ShieldCheck />
                            </div>
                            <h3 className="text-xl font-bold text-kinzi-blue mb-3">{service.title}</h3>
                            <p className="text-slate-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-kinzi-blue mb-10 text-center">Therapeutic Areas</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {therapeuticAreas.map((area, idx) => (
                            <span key={idx} className="bg-white px-4 py-2 rounded-full border border-slate-200 text-slate-600 text-sm hover:border-kinzi-teal hover:text-kinzi-teal transition-colors">
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

const serviceCategories = [
    { title: "Medicines", description: "Reliable pharmaceutical exports for diverse medical needs worldwide, ensuring quality and efficacy." },
    { title: "Veterinary Medicines", description: "High-quality veterinary medicines for animal healthcare needs, covering livestock and pets." },
    { title: "Name Patient Supply", description: "Seamless supply of medications for personalised patient needs (compassionate use)." },
    { title: "True Generics", description: "Quality generic medications at competitive prices globally, meeting international standards." },
    { title: "Antibiotic and Vaccines", description: "Comprehensive range of antibiotics and vaccines for global distribution and disease prevention." },
    { title: "Orphan Drugs", description: "Access to vital orphan drugs for rare and challenging conditions, bridging the gap for patients." }
];

const therapeuticAreas = [
    "Anti Cancer", "Kidney Disease", "Antiviral", "Osteoporosis", "Heart Disorder", "Transplant", "HIV/AIDS",
    "Women's Health", "Antibacterial", "Health Supplements", "Antifungal", "Hepatitis", "Injections & Vaccines",
    "Liver Disease", "Arthritis", "Respiratory Disorder", "Anticoagulants", "Skin Care", "Immune Disorder",
    "Allergy Medication", "Anaesthetics", "Diabetes", "Anaemia", "Hypertension", "Alzheimer", "Nerve Disorder",
    "Sexual Wellness", "Blood Disorder", "Multiple Sclerosis", "Immunoglobulin", "Iron Deficiency", "Medical Aid", "Hair Loss"
];
