"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

export default function ScrollControls() {
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showTop, setShowTop] = useState(false);

  // grab all the page sections on mount
  useEffect(() => {
    const secs = Array.from(
      document.querySelectorAll("section")
    ) as HTMLElement[];
    setSections(secs);
  }, []);

  // update currentIdx and showTop as user scrolls
  useEffect(() => {
    const onScroll = () => {
      // figure out which section we're currently above
      const index = sections.findIndex(
        (sec) => sec.getBoundingClientRect().top >= 50
      );
      setCurrentIdx(
        index === -1 ? sections.length - 1 : Math.max(0, index - 1)
      );

      // show "back to top" once we've scrolled past the first section
      if (sections[0]) {
        setShowTop(window.scrollY > sections[0].offsetHeight);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const next = () => setCurrentIdx((c) => (c + 1) % sections.length);

  useEffect(() => {
    if (!sections.length) return;
    const timer = setInterval(() => {
      setCurrentIdx((c) => (c + 1) % sections.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [sections.length]);

  const goNext = () => {
    const nextIdx = Math.min(currentIdx + 1, sections.length - 1);
    sections[nextIdx]?.scrollIntoView({ behavior: "smooth" });
    setCurrentIdx(nextIdx);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (sections.length < 2) return null;

  return (
    <>
      {/* Scroll to Next Section */}
      <button
        onClick={goNext}
        className="
          fixed bottom-6 right-6
          bg-orange-600 hover:bg-orange-700
          text-white p-3 rounded-full shadow-lg
          transition-colors z-50
          animate-bounce
        "
        aria-label="Scroll to next section"
      >
        <ChevronDoubleDownIcon className="w-6 h-6" />
      </button>

      {/* Back to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="
            fixed top-6 right-6
            bg-blue-800 hover:bg-blue-900
            text-white p-3 rounded-full shadow-lg
            transition-colors z-50
          "
          aria-label="Back to top"
        >
          Back To Top
        </button>
      )}
    </>
  );
}
