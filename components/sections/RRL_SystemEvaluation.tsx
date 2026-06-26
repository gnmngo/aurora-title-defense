"use client";

import { useState } from "react";
import SystemEvaluation from "./SystemEvaluation";

export default function RRL_SystemEvaluation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="rrl-system-evaluation">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            System Evaluation and User Acceptance
          </h2>
          <p className="text-sm text-royal dark:text-blue-300 font-medium mb-4">Specific Objective 4</p>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            This objective focuses on measuring AURORA’s usability and acceptance. The subsections review
            UTAUT, TAM, SUS, usability testing methods, and user acceptance testing – the exact frameworks
            that will be used to evaluate the final system.
          </p>

          <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full text-left px-5 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-2">2.4.1–2.4.5</span>
                <span className="font-medium text-slate-900 dark:text-white">
                  UTAUT, TAM, SUS, Usability Testing Methods, User Acceptance Testing
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
              <div className="px-5 py-4 bg-white dark:bg-slate-800">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Venkatesh et al. (2003) and Tatlı et al. (2024) show that performance and effort
                  expectancy drive technology adoption; Davis (1989) and extensions highlight perceived
                  usefulness and ease of use; Brooke (1996) provides the SUS benchmark of 68. These
                  validated instruments will be applied directly in AURORA’s alpha and beta testing.
                </p>
                <SystemEvaluation />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}