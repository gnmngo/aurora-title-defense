"use client";

import { useState } from "react";
import LocalThesisSystems from "./LocalThesisSystems";
import ComparisonTable from "./ComparisonTable";

export default function RRL_LocalStudies() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="rrl-local-studies">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Local Thesis and Capstone Management Systems
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Related Philippine Studies</p>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            A review of Philippine systems (THESIST, REPOCAP, AcademiaVault) provides context for
            AURORA’s innovation. While these platforms offer digital repositories and scheduling, none
            combine split‑screen annotation, rubric‑based auto‑scoring, and theory‑driven evaluation
            in one integrated solution.
          </p>

          <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full text-left px-5 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <div>
                <span className="font-medium text-slate-900 dark:text-white">
                  View detailed systems and comparison table
                </span>
              </div>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expanded && (
              <div className="px-5 py-4 bg-white dark:bg-slate-800 space-y-4">
                <LocalThesisSystems />
                <ComparisonTable />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}