import { Metadata } from "next";
import { Globe, Truck, Package, HeartPulse, Building2, Stethoscope } from "lucide-react";
import BlurIn from "@/components/ui/blur-in";

export const metadata: Metadata = {
    title: "Services | Kinzi Pharma",
    description: "Explore the comprehensive range of pharmaceutical services offered by Kinzi Pharma, including global distribution, wholesale sourcing, and named patient supply.",
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen pb-20">
            {/* Hero Section */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <BlurIn word="Our Services" className="text-4xl md:text-6xl font-bold text-kinzi-blue mb-6" />
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        Delivering excellence in pharmaceutical distribution, sourcing, and specialized healthcare solutions worldwide.
                    </p>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-kinzi-teal transition-all hover:shadow-lg group">
                            <div className="w-12 h-12 bg-kinzi-teal/10 rounded-xl flex items-center justify-center mb-6 text-kinzi-teal group-hover:bg-kinzi-teal group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-kinzi-blue mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

const services = [
    {
        title: "Global Distribution",
        description: "Efficient and secure supply chain solutions ensuring timely delivery of pharmaceutical products across 30+ countries worldwide.",
        icon: <Globe className="w-6 h-6" />
    },
    {
        title: "Wholesale Sourcing",
        description: "Strategic partnerships with leading manufacturers to provide a comprehensive range of high-quality medicines at competitive prices.",
        icon: <Building2 className="w-6 h-6" />
    },
    {
        title: "Named Patient Supply",
        description: "Facilitating access to critical and unavailable medications for specific patient needs under compassionate use programs.",
        icon: <HeartPulse className="w-6 h-6" />
    },
    {
        title: "Orphan Drugs",
        description: "Specialized sourcing of vital medications for rare diseases, bridging the gap between manufacturers and patients who need them most.",
        icon: <Stethoscope className="w-6 h-6" />
    },
    {
        title: "Export Logistics",
        description: "End-to-end export documentation, compliance, and cold-chain logistics to maintain product integrity throughout transit.",
        icon: <Truck className="w-6 h-6" />
    },
    {
        title: "Bulk Consignments",
        description: "Handling large-scale institutional, hospital, and government tenders with precision and strict quality assurance.",
        icon: <Package className="w-6 h-6" />
    }
];
