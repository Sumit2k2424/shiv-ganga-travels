"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
export function NumberTicker({ value, startValue = 0, direction = "up", delay = 0, className, decimalPlaces = 0, ...props }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === "down" ? value : startValue);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "0px" });
    // LOCAL PATCH (not upstream): skip the spring entirely under
    // prefers-reduced-motion and show the final figure immediately.
    const shouldReduceMotion = useReducedMotion();
    useEffect(() => {
        if (!shouldReduceMotion || !ref.current) return;
        ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
        }).format(Number(value.toFixed(decimalPlaces)));
    }, [shouldReduceMotion, value, decimalPlaces]);
    useEffect(() => {
        let timer = null;
        if (isInView && !shouldReduceMotion) {
            timer = setTimeout(() => {
                motionValue.set(direction === "down" ? startValue : value);
            }, delay * 1000);
        }
        return () => {
            if (timer !== null) {
                clearTimeout(timer);
            }
        };
    }, [motionValue, isInView, delay, value, direction, startValue]);
    useEffect(() => springValue.on("change", (latest) => {
        if (ref.current) {
            ref.current.textContent = Intl.NumberFormat("en-US", {
                minimumFractionDigits: decimalPlaces,
                maximumFractionDigits: decimalPlaces,
            }).format(Number(latest.toFixed(decimalPlaces)));
        }
    }), [springValue, decimalPlaces]);
    return (<span ref={ref} className={cn("inline-block tracking-wider text-black tabular-nums dark:text-white", className)} {...props}>
      {startValue}
    </span>);
}
