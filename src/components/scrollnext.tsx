"use client";

import { useState, useEffect } from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid"; // or swap in your own SVG

export default function ScrollToNext() {
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  // grab all the page sections on mount
  useEffect(() => {
    const secs = Array.from(
      document.querySelectorAll("section")
    ) as HTMLElement[];
    setSections(secs);
  }, []);

  // update currentIdx as user scrolls
  useEffect(() => {
    const onScroll = () => {
      const index = sections.findIndex(
        (sec) => sec.getBoundingClientRect().top >= 50
      );
      setCurrentIdx(
        index === -1 ? sections.length - 1 : Math.max(0, index - 1)
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const goNext = () => {
    const next = Math.min(currentIdx + 1, sections.length - 1);
    sections[next].scrollIntoView({ behavior: "smooth" });
    setCurrentIdx(next);
  };

  if (sections.length < 2) return null;

  return (
    <button
      onClick={goNext}
      className="
    fixed bottom-6 right-6 
    bg-orange-600 hover:bg-orange-700 
    text-white p-3 rounded-full shadow-lg
    transition-colors z-50

+   animate-bounce
  "
      aria-label="Scroll to next section"
    >
      <ChevronDoubleDownIcon className="w-6 h-6" />
    </button>
  );
}
