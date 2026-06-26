"use client";

import { useState } from "react";

const features = [
  "Manuscript Submission",
  "Digital Annotation",
  "Rubric‑Based Evaluation",
  "Real‑Time Feedback",
  "Version Control",
  "Defense Scheduling",
  "Analytics Reporting",
];

export default function ProjectContext() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="project-context">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        {/* Left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            Project Context
          </h2>

          {/* Lead paragraph – clear and direct */}
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            The digital transformation of academic processes is an essential 21st‑century priority, yet
            no comprehensive solution exists that fully integrates the complete capstone defense lifecycle.
            Existing tools handle only isolated tasks — submission, evaluation, scheduling — without
            connecting them into a single workflow.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            AURORA closes this gap by consolidating seven core functions into one paperless platform:
          </p>

          {/* Feature tag chips */}
          <div className="flex flex-wrap gap-2 mb-5">
            {features.map((item) => (
              <span
                key={item}
                className="group px-3 py-1.5 rounded-full text-xs font-medium 
                           bg-royal-light dark:bg-blue-900/30 text-royal dark:text-blue-200 
                           border border-royal/20 dark:border-blue-800/50
                           hover:bg-royal hover:text-white dark:hover:bg-royal dark:hover:text-white
                           transition-all duration-200 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Expandable detailed section */}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-sm font-medium text-royal dark:text-blue-300 
                         hover:text-royal-dark dark:hover:text-blue-200 transition-colors group"
            >
              <span>{expanded ? "Hide detailed context" : "Read more about the approach"}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expanded && (
              <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base animate-in fade-in">
                <p>
                  The system&rsquo;s main innovation is a <strong className="text-slate-900 dark:text-white">split‑screen workspace</strong> that
                  allows panelists to simultaneously examine papers and finalize evaluations, diminishing
                  cognitive load and enhancing review efficiency (Sweller, 1988; Cognitive Load Theory).
                </p>
                <p>
                  Grounded in the <strong className="text-slate-900 dark:text-white">Unified Theory of Acceptance and Use of Technology (UTAUT)</strong>,
                  which identifies performance expectancy and effort expectancy as critical adoption factors
                  (Venkatesh et al., 2003; Tatli et al., 2024), AURORA prioritizes intuitive interface design
                  and measurable efficiency improvements to boost adoption among faculty and students.
                </p>
                <p>
                  Designed for <strong className="text-slate-900 dark:text-white">Partido State University – Goa Campus</strong>, serving
                  five colleges with diverse capstone requirements, AURORA enhances institutional
                  sustainability (Green IT), accreditation preparedness (auditable trails), and learning
                  outcomes (timely, structured feedback) by abolishing paper manuscripts, centralizing
                  defense records, and automating workflow coordination.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}