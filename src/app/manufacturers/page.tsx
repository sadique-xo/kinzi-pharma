
import { Metadata } from "next";
import BlurIn from "@/components/ui/blur-in";
import Marquee from "@/components/ui/marquee";

export const metadata: Metadata = {
    title: "Manufacturers | Kinzi Pharma",
    description: "Browse our list of trusted pharmaceutical manufacturing partners including major Indian and global pharma companies.",
};

export default function ManufacturersPage() {
    return (
        <div className="flex flex-col min-h-screen pb-20">
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <BlurIn word="Our Manufacturers" className="text-4xl md:text-6xl font-bold text-kinzi-blue mb-6" />
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        We partner with industry-leading Indian and Global pharmaceutical brands.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4 md:px-6">
                <h2 className="text-2xl font-bold text-kinzi-blue mb-8 border-l-4 border-kinzi-teal pl-4">Indian Pharma Companies</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
                    {indianCompanies.map((name, idx) => (
                        <div key={idx} className="h-24 bg-white border border-slate-100 rounded-xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                            <span className="font-semibold text-slate-700 text-center">{name}</span>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-kinzi-blue mb-8 border-l-4 border-kinzi-teal pl-4">Global Pharma Companies</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {globalCompanies.map((name, idx) => (
                        <div key={idx} className="h-24 bg-white border border-slate-100 rounded-xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                            <span className="font-semibold text-slate-700 text-center">{name}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 bg-slate-50 border-y border-slate-200 overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {[...indianCompanies, ...globalCompanies].map((logo, idx) => (
                        <div key={idx} className="mx-8">
                            <span className="text-xl font-bold text-slate-400">{logo}</span>
                        </div>
                    ))}
                </Marquee>
            </section>
        </div>
    );
}

const indianCompanies = [
    "Glenmark", "Zydus", "Alkem Ulticare", "Piramal Healthcare", "Thyrocare",
    "J.B. Chemicals", "Cadila", "Dr. Reddy's", "Wallace", "Wockhardt",
    "Lincoln Healthcare", "Ajanta", "Ranbaxy", "Torrent", "Alembic",
    "Ipca", "Ind-Swift", "Intas", "USV", "Amrutanjan", "Cipla"
];

const globalCompanies = [
    "Galderma", "Reckitt Benckiser", "UCB", "Roche", "Novartis",
    "GSK", "Abbott", "MSD", "AstraZeneca", "Pfizer",
    "Colgate-Palmolive", "Wyeth", "Pharmed"
];
