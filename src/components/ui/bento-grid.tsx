"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import ShimmerButton from "@/components/ui/shimmer-button";

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <Link
        key={name}
        href={href}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
            // standard styles (white card)
            "bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300",
            className,
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <Icon className="h-12 w-12 origin-left transform-gpu text-kinzi-teal transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="text-xl font-bold text-neutral-900">
                {name}
            </h3>
            <p className="max-w-lg text-neutral-600">{description}</p>
        </div>

        <div
            className={cn(
                "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <ShimmerButton className="text-xs h-8 px-4 w-full" background="var(--kinzi-teal)">
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </ShimmerButton>
        </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
    </Link>
);

export { BentoCard, BentoGrid };
