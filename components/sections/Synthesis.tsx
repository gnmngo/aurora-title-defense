"use client";

import { useState } from "react";

const synthesisItems = [
  {
    title: "Role‑Based Access Control",
    summary:
      "RBAC, supported by ISO/IEC 27001, provides the security framework for AURORA’s three‑role structure.",
    full: "Ferraiolo and Kuhn (1992) established RBAC as a non‑discretionary access control mechanism that provides a means of naming and describing relationships between individuals and rights. Research on paperless systems (Bihary & Shrader, 1994; Sherman & Freeman, 2007; Kamal, 2021) confirms that access control is essential for protecting sensitive information. ISO/IEC 27001:2022 provides comprehensive security requirements including access control and audit logging. Research consistently demonstrates that RBAC simplifies administration and supports organizational structures. This supports the implementation of RBAC in AURORA.",
  },
  {
    title: "Split‑Screen Workspace",
    summary:
      "Cognitive Load Theory and CSCW justify the dual‑pane interface, improving efficiency and collaboration.",
    full: "Sweller (1988) established Cognitive Load Theory, demonstrating that split attention effects reduce learning efficiency when multiple information sources must be integrated. Research on Hypertext (Kellett, 1989) and electronic feedback (Kavadlo, 2013) shows that integrated interfaces and annotation improve document review. CSCW research (Grudin, 1994) establishes that collaborative systems must support communication and coordination. Studies on thesis management (Molinatto, 2025; Erradi, 2012) confirm that well designed interfaces improve user satisfaction. This supports the implementation of a split screen workspace in AURORA.",
  },
  {
    title: "Rubric‑Based Assessment",
    summary:
      "OBE principles and digital rubrics ensure consistent, transparent evaluation with automatic scoring.",
    full: "Spady (1994) established OBE principles, emphasizing clear outcomes and aligned assessment. Research on capstone assessment (Erradi, 2012; Azmi, 2025) demonstrates that rubrics with clearly defined criteria improve evaluation consistency. Studies on digital grading (Chio et al., 2022; Kurniawan et al., 2021) confirm that digital rubrics improve grading efficiency and transparency. Research on formative assessment (Black & Wiliam, 1998; Kavadlo, 2013) shows that timely, specific feedback improves learning outcomes. This supports the implementation of rubric based assessment in AURORA.",
  },
  {
    title: "System Evaluation",
    summary:
      "UTAUT, TAM, and SUS provide validated instruments to measure AURORA’s usability and acceptance.",
    full: "Venkatesh et al. (2003) developed UTAUT, establishing that performance expectancy, effort expectancy, social influence, and facilitating conditions predict technology acceptance. Tatlı et al. (2024) validated UTAUT for paperless technologies, finding that performance expectancy and effort expectancy are strongest predictors. Brooke (1996) developed SUS, providing a reliable measure of perceived usability. Research (Sauro & Lewis, 2016; Bangor et al., 2009) established the SUS average of 68 as a benchmark. This supports the evaluation of AURORA using UTAUT and SUS.",
  },
];

// List of important keywords to highlight (case‑insensitive matching)
const highlightKeywords = [
  "Ferraiolo and Kuhn",
  "Bihary & Shrader",
  "Sherman & Freeman",
  "Kamal",
  "ISO/IEC 27001",
  "RBAC",
  "Sweller",
  "Cognitive Load Theory",
  "Kellett",
  "Kavadlo",
  "CSCW",
  "Grudin",
  "Molinatto",
  "Erradi",
  "Spady",
  "OBE",
  "Azmi",
  "Chio et al.",
  "Kurniawan et al.",
  "Black & Wiliam",
  "Formative Assessment",
  "Venkatesh et al.",
  "UTAUT",
  "Tatlı et al.",
  "Brooke",
  "SUS",
  "Sauro & Lewis",
  "Bangor et al.",
  "TAM",
  "Davis",
  "Performance Expectancy",
  "Effort Expectancy",
];

function highlightText(text: string) {
  if (!text) return null;
  // Escape special regex characters in each keyword and join with pipe
  const escapedKeywords = highlightKeywords.map((kw) =>
    kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const pattern = new RegExp(`(${escapedKeywords.join("|")})`, "gi");
  const parts = text.split(pattern);

  return parts.map((part, i) => {
    // Check if this part matches any keyword (case‑insensitive)
    const isKeyword = highlightKeywords.some(
      (kw) => kw.toLowerCase() === part.toLowerCase()
    );
    if (isKeyword) {
      return (
        <strong
          key={i}
          className="text-royal dark:text-blue-300 font-semibold"
        >
          {part}
        </strong>
      );
    }
    return part;
  });
}

export default function Synthesis() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="synthesis">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          Synthesis of the State‑of‑the‑Art
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          The reviewed literature reveals consistent findings across four areas relevant to AURORA&rsquo;s specific objectives.
        </p>

        <div className="space-y-3">
          {synthesisItems.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-5 py-4 flex items-start justify-between bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                    {item.summary}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ml-3 flex-shrink-0 ${
                    expandedIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Expanded full text with highlights */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  expandedIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-5 py-4 bg-white dark:bg-slate-800">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {highlightText(item.full)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}