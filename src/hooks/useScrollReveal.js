/**
 * useScrollReveal.js — Custom hook for scroll-triggered reveal animations.
 *
 * Uses IntersectionObserver to add 'visible' class when elements enter viewport.
 * Supports staggered delays for child elements.
 */

import { useEffect, useRef } from "react";

const useScrollReveal = (options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");

                        // Stagger child card reveals
                        const cards = entry.target.querySelectorAll(".card-reveal");
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add("visible");
                            }, index * 120); // 120ms stagger between cards
                        });

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || "0px 0px -40px 0px",
            }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [options.threshold, options.rootMargin]);

    return ref;
};

export default useScrollReveal;
