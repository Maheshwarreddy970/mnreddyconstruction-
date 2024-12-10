"use client";

import {
    KeyframeOptions,
    animate,
    useInView,
    useIsomorphicLayoutEffect,
} from "framer-motion";
import { memo, useRef } from "react";

type AnimatedCounterProps = {
    from: number;
    to: number;
    animationOptions?: KeyframeOptions;
    sign?: string;
    subheading?: string;
};

export const AnimatedCounter = memo(
    ({
        from,
        to,
        animationOptions,
        sign = "",
        subheading = "",
    }: AnimatedCounterProps) => {
        const ref = useRef<HTMLSpanElement>(null);
        const inView = useInView(ref, { once: true });

        useIsomorphicLayoutEffect(() => {
            const element = ref.current;

            if (!element || !inView) return;

            // Set initial value
            element.textContent = String(from);

            // If reduced motion is enabled
            if (window.matchMedia("(prefers-reduced-motion)").matches) {
                element.textContent = String(to);
                return;
            }

            const controls = animate(from, to, {
                duration: 10,
                ease: "easeOut",
                ...animationOptions,
                onUpdate(value) {
                    element.textContent = value.toFixed(0);
                },
            });

            return () => controls.stop();
        }, [ref, inView, from, to, animationOptions]);

        return (
            <div className=" ">
                <div className="text-4xl flex gap-1 mb-2">
                    <span className=" " ref={ref} aria-live="polite"></span>
                    <span>{sign}</span>
                </div>
                <div className="text-base md:text-lg">
                    <p>{subheading}</p>
                </div>
            </div>
        );
    }
);
