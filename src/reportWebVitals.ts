import type { Metric } from "web-vitals";
import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals";

/**
 * Reports web vitals metrics for performance monitoring.
 *
 * @param {Function} onPerfEntry - Optional callback to handle performance metrics
 *
 * @description
 * Measures and reports Core Web Vitals:
 * - CLS (Cumulative Layout Shift)
 * - FCP (First Contentful Paint)
 * - INP (Interaction to Next Paint)
 * - LCP (Largest Contentful Paint)
 * - TTFB (Time to First Byte)
 *
 * @see {@link https://web.dev/vitals/}
 */
const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
    if (onPerfEntry && typeof onPerfEntry === "function") {
        onCLS(onPerfEntry);
        onINP(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
    }
};

export default reportWebVitals;
