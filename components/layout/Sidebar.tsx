"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "AURORA" },
  { id: "chapter-1", label: "I. Introduction", isChapter: true },
  { id: "project-context", label: "Project Context" },
  { id: "purpose-description", label: "Purpose & Description" },
  { id: "objectives", label: "Objectives" },
  { id: "scope-limitations", label: "Scope & Limitations" },
  { id: "significance", label: "Significance of the Study" },
  { id: "definition-of-terms", label: "Definition of Terms" },
  { id: "chapter-2", label: "II. Review of Related Literature", isChapter: true },
  { id: "rrl-role-based-access", label: "2.1 Role‑Based Access Control" },
  { id: "rrl-split-screen", label: "2.2 Split‑Screen Workspace" },
  { id: "rrl-rubric-assessment", label: "2.3 Rubric‑Based Assessment" },
  { id: "rrl-system-evaluation", label: "2.4 System Evaluation" },
  { id: "rrl-local-studies", label: "2.5 Local Studies" },
  { id: "synthesis", label: "Synthesis of the State‑of‑the‑Art" },
  { id: "gap-bridged", label: "Gap Bridged by the Study" },
  { id: "chapter-3", label: "III. Technical Background", isChapter: true },
  { id: "system-architecture", label: "System Architecture" },
  { id: "software-requirements", label: "Software Requirements" },
  { id: "hardware-requirements", label: "Hardware Requirements" },
  { id: "system-features", label: "System Features" },
  { id: "evaluation-plan", label: "Evaluation Plan" },
  { id: "technical-stack", label: "Technical Stack" },
  { id: "workflow", label: "Workflow" },
];

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0.1 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
    if (onNavigate) onNavigate();
  };

  return (
    <nav
      className="hidden lg:block sticky top-24 self-start w-[280px] flex-shrink-0
                 max-h-[calc(100vh-96px)] overflow-y-auto"
      style={{ height: "fit-content" }}
    >
      <div className="py-6">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 ml-3">
          Contents
        </h3>
        <ul className="space-y-0">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`w-full text-left px-3 py-2.5 text-sm rounded-lg transition-all duration-200
                           hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:text-royal dark:hover:text-blue-300
                           border-l-[3px] border-transparent hover:border-slate-300 dark:hover:border-slate-600
                           active:scale-[0.99]
                           ${(section as any).isChapter ? "font-semibold text-base mt-3 first:mt-0 bg-slate-50 dark:bg-slate-700/50 border-l-slate-300 dark:border-l-slate-600" : "text-sm font-normal"}`}
                style={{
                  color: activeId === section.id ? "var(--color-royal)" : undefined,
                  fontWeight: activeId === section.id ? 500 : undefined,
                  backgroundColor: activeId === section.id
                    ? "var(--color-royal-light)"
                    : (section as any).isChapter && activeId !== section.id
                      ? "var(--bg-card)"
                      : undefined,
                  borderLeftColor: activeId === section.id
                    ? "var(--color-royal)"
                    : (section as any).isChapter && activeId !== section.id
                      ? "var(--border)"
                      : undefined,
                }}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}