
import { cn } from "@/lib/utils";
import React from "react";

export interface MarqueeProps {
    className?: string; // Additional classes for styling the container
    reverse?: boolean; // Whether to animate in reverse direction
    pauseOnHover?: boolean; // Whether to pause the animation on hover
    children?: React.ReactNode; // Content to display in the marquee
    vertical?: boolean; // Whether to animate vertically
    repeat?: number; // Number of times to repeat the content
    [key: string]: any; // Allow any other props (like aria-label, etc.)
}

export default function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className={cn(
                "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className,
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                            "animate-marquee flex-row": !vertical,
                            "animate-marquee-vertical flex-col": vertical,
                            "group-hover:[animation-play-state:paused]": pauseOnHover,
                            "[animation-direction:reverse]": reverse,
                        })}
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
}
