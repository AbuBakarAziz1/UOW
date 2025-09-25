import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit): [boolean, React.RefObject<HTMLDivElement | null>] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [inView, ref];
}
