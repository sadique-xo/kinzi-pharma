"use client";

// @ts-ignore
import createGlobe from "cobe";
import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export default function Globe({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 0,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.5, 0.5, 0.5], // Grey for visible lines
            markerColor: [0.03, 0.57, 0.7], // Kinzi Teal
            glowColor: [0.8, 0.8, 0.8], // Subtle grey glow
            markers: [
                // longitude latitude
                { location: [19.076, 72.8777], size: 0.1 }, // Mumbai
                { location: [40.7128, -74.006], size: 0.05 }, // New York
                { location: [51.5074, -0.1278], size: 0.05 }, // London
                { location: [35.6895, 139.6917], size: 0.05 }, // Tokyo
                { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
                { location: [55.7558, 37.6173], size: 0.05 }, // Moscow
                { location: [25.2048, 55.2708], size: 0.05 }, // Dubai
                { location: [-26.2041, 28.0473], size: 0.05 }, // Johannesburg
            ],
            onRender: (state: any) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div
            className={cn(
                "flex h-full w-full items-center justify-center overflow-hidden bg-transparent rounded-full border border-slate-200",
                className,
            )}
        >
            <canvas
                ref={canvasRef}
                style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
                className="size-full opacity-100 transition-opacity duration-1000 ease-in-out"
            />
        </div>
    );
}
