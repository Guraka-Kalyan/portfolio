/**
 * Local shim for useGSAP (normally from @gsap/react Club package).
 * This replicates the core behavior using the free gsap package.
 */
import gsap from "gsap";
import { useLayoutEffect, useRef, DependencyList } from "react";

type UseGSAPCallback = () => (() => void) | void;

export function useGSAP(
    callback: UseGSAPCallback,
    deps: DependencyList = []
) {
    const cleanupRef = useRef<(() => void) | null>(null);

    useLayoutEffect(() => {
        // Run the callback and capture any explicit cleanup it returns
        const ctx = gsap.context(() => { });
        cleanupRef.current = null;

        // Execute the callback directly so we can capture the returned cleanup fn
        const returned = callback();
        if (typeof returned === "function") {
            cleanupRef.current = returned;
        }

        return () => {
            // Call the user's cleanup first (e.g. timeline.kill, ScrollTrigger kills)
            if (cleanupRef.current) {
                cleanupRef.current();
                cleanupRef.current = null;
            }
            // Then revert the gsap context (kills any tweens created inside)
            ctx.revert();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
