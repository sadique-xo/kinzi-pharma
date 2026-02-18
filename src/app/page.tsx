
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Globe as GlobeIcon, ShieldCheck, Download } from "lucide-react";
import BlurIn from "@/components/ui/blur-in";
import NumberTicker from "@/components/ui/number-ticker";
import ShimmerButton from "@/components/ui/shimmer-button";
import Globe from "@/components/ui/globe";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pharmaceutical Logistics Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          {/* Subtle gradient overlay for depth but keeping it light */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
        </div>

        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
          <Globe className="top-20" />
        </div>

        <div className="container z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center rounded-full border border-kinzi-teal/30 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-kinzi-blue shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-kinzi-teal mr-2 animate-pulse"></span>
            Trusted by 30+ Countries
          </div>

          <div className="max-w-4xl space-y-6">
            <BlurIn
              word="Global Reach, Transforming Healthcare"
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-kinzi-blue to-kinzi-teal pb-2 tracking-tight drop-shadow-sm"
              variant={{
                hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
                visible: { filter: "blur(0px)", opacity: 1, y: 0 },
              }}
            />
            <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl font-light leading-relaxed">
              Leading the Way in Pharma Exports. Delivering excellence, integrity, and verified pharmaceutical products to wholesalers worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/products">
              <ShimmerButton className="shadow-lg hover:shadow-xl transition-all h-12 px-8" background="var(--kinzi-teal)">
                <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white lg:text-base">
                  Explore Products
                </span>
              </ShimmerButton>
            </Link>
            <a
              href="/Kinzi-Pharma-Profile.pdf"
              download="Kinzi-Pharma-Profile.pdf"
              className="h-12 px-8 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-700 font-semibold hover:bg-white hover:text-kinzi-teal hover:border-kinzi-teal transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Brochure</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-100 bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-kinzi-blue">
                <NumberTicker value={30} className="text-kinzi-blue dark:text-kinzi-blue" />+
              </h3>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Countries Served</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-kinzi-blue">
                <NumberTicker value={2904} className="text-kinzi-blue dark:text-kinzi-blue" />+
              </h3>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Products Delivered</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-kinzi-blue">
                <NumberTicker value={25000} className="text-kinzi-blue dark:text-kinzi-blue" />+
              </h3>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Product Lines</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-kinzi-blue">
                <NumberTicker value={156} className="text-kinzi-blue dark:text-kinzi-blue" />
              </h3>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Regular Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-kinzi-blue">
                Your Trusted Pharmaceutical Partner
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2020 in Mumbai, Kinzi Pharma has rapidly grown into a global powerhouse in pharmaceutical exports. With a team boasting over 10 years of combined experience, we bridge the gap between Indian manufacturing excellence and global healthcare needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-kinzi-teal h-5 w-5" />
                  <span>Licensed Pharmaceutical Wholesaler (FDA India)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-kinzi-teal h-5 w-5" />
                  <span>ISO 9001:2008 Certified & GDP Compliant</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-kinzi-teal h-5 w-5" />
                  <span>Global network spanning 30+ countries</span>
                </li>
              </ul>
              <Link href="/about" className="text-kinzi-teal font-semibold hover:text-kinzi-blue transition-colors flex items-center gap-2">
                Learn more about our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 rotate-2 hover:rotate-0 transition-all duration-500 group">
              <Image
                src="https://images.unsplash.com/photo-1622227922682-56c92e523e58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pharmaceutical Warehouse"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <p className="text-white font-bold text-xl">Excellence in Distribution</p>
                <p className="text-white/80 text-sm">State-of-the-art logistics & storage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-kinzi-blue mb-4">
            Why Choose Kinzi Pharma?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We deliver quality without compromise, ensuring that every product reaches its destination safely and on time.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <BentoGrid>
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-kinzi-blue mb-4">Therapeutic Categories</h2>
              <p className="text-gray-500 max-w-xl">
                Comprehensive range of pharmaceutical products catering to diverse medical needs.
              </p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-kinzi-teal font-semibold hover:text-kinzi-blue transition-colors mt-4 md:mt-0">
              View All Categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-kinzi-teal/10 flex items-center justify-center mb-4 text-kinzi-teal group-hover:bg-kinzi-teal group-hover:text-white transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{category.count} Products</p>
                <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                  <ArrowRight className="text-kinzi-teal h-5 w-5" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/products" className="flex items-center justify-center gap-2 text-kinzi-teal font-semibold">
              View All Categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Trusted Partners</p>
        </div>
        <Marquee pauseOnHover className="[--duration:40s]">
          {manufacturers.map((logo, idx) => (
            <div key={idx} className="mx-8 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <span className="text-xl md:text-2xl font-bold text-slate-800">{logo}</span>
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s] mt-8">
          {manufacturers2.map((logo, idx) => (
            <div key={idx} className="mx-8 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <span className="text-xl md:text-2xl font-bold text-slate-800">{logo}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-kinzi-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-kinzi-teal/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Find All Your Pharmaceutical Needs in One Place</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get in touch with us for competitive pricing and reliable global delivery.
          </p>
          <Link href="/contact">
            <ShimmerButton className="bg-white text-kinzi-blue hover:bg-gray-50" shimmerColor="#1A237E" background="#ffffff" >
              <span className="text-kinzi-blue font-bold px-8">Get in Touch</span>
            </ShimmerButton>
          </Link>
        </div>
      </section>
    </div>
  );
}

// Data
const features = [
  {
    Icon: ShieldCheck,
    name: "Extensive Product Range",
    description: "Over 25,000 products in stock to meet diverse medical requirements.",
    href: "/products",
    cta: "View Catalog",
    background: (
      <>
        <Image
          src="https://images.unsplash.com/photo-1528272252360-5efd274e36fb?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Extensive Product Range"
          fill
          className="absolute inset-0 object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      </>
    ),
    className: "lg:col-span-1",
  },
  {
    Icon: GlobeIcon,
    name: "Global Compliance",
    description: "Adhering to more than 20 regulatory compliances across various countries.",
    href: "/about",
    cta: "Learn More",
    background: (
      <>
        <Image
          src="https://images.unsplash.com/photo-1648337564744-f919c7c2fc02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Global Compliance"
          fill
          className="absolute inset-0 object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      </>
    ),
    className: "lg:col-span-1",
  },
  {
    Icon: CheckCircle2,
    name: "Cold Chain Solutions",
    description: "Temperature controlled logistics for -20°C, 2–8°C, and 15–25°C products.",
    href: "/services",
    cta: "Our Services",
    background: (
      <>
        <Image
          src="https://images.unsplash.com/photo-1609143739217-01b60dad1c67?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cold Chain Solutions"
          fill
          className="absolute inset-0 object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      </>
    ),
    className: "lg:col-span-1",
  },
];

const productCategories = [
  { title: "Medicines", count: "10,000+", icon: <ShieldCheck size={24} /> },
  { title: "Veterinary Medicines", count: "500+", icon: <ShieldCheck size={24} /> },
  { title: "Anti-Cancer", count: "1,200+", icon: <ShieldCheck size={24} /> },
  { title: "Vaccines", count: "300+", icon: <ShieldCheck size={24} /> },
  { title: "True Generics", count: "5,000+", icon: <ShieldCheck size={24} /> },
  { title: "Surgicals", count: "2,000+", icon: <ShieldCheck size={24} /> },
];

const manufacturers = [
  "Pfizer", "Novartis", "Roche", "Merck", "GlaxoSmithKline", "Sanofi", "AbbVie", "AstraZeneca"
];

const manufacturers2 = [
  "Johnson & Johnson", "Bristol Myers Squibb", "Eli Lilly", "Amgen", "Gilead Sciences", "Bayer", "Novo Nordisk"
];
