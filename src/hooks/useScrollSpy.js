import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently in view.
 * @param {string[]} ids - list of section ids in order
 */
export default function useScrollSpy(ids = []) {
  const [activeId, setActiveId] = useState(ids[0] || "");

  useEffect(() => {
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveId(id);
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids.join("|")]);

  return activeId;
}
// This hook can be used in components to determine which section is currently active based on scroll position.