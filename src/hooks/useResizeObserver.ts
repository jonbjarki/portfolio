import { useState, useEffect, useRef } from "react";
export function useResizeObserver() {
  const elementRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    // Initialize the ResizeObserver instance
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // extract width and height from the contentRect
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    // Start tracking the DOM element
    observer.observe(target);

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return [elementRef, dimensions] as const;
}
