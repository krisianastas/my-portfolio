import { useEffect, useRef, useState } from "react";

const MIN_THUMB_PX = 44;

const ScrollIndicator = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbOffset, setThumbOffset] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const root = document.documentElement;
      const scrollTop = root.scrollTop;
      const scrollHeight = root.scrollHeight;
      const clientHeight = root.clientHeight;
      const trackHeight = trackRef.current?.getBoundingClientRect().height ?? 0;

      const scrollable = Math.max(1, scrollHeight - clientHeight);
      const progress = Math.min(1, Math.max(0, scrollTop / scrollable));
      const nextThumbHeight = Math.max(
        MIN_THUMB_PX,
        (clientHeight / scrollHeight) * trackHeight
      );
      const maxOffset = Math.max(0, trackHeight - nextThumbHeight);

      setThumbHeight(nextThumbHeight);
      setThumbOffset(progress * maxOffset);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden h-[60vh] -translate-y-1/2 xl:flex">
      <div
        ref={trackRef}
        className="relative h-full w-2 rounded-full border border-primary/20 bg-secondary/70 shadow-inner"
      >
        <div
          className="absolute left-1/2 w-1.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary to-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
          style={{ height: `${thumbHeight}px`, transform: `translate(-50%, ${thumbOffset}px)` }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
