"use client";

import { useState } from "react";
import RubricBasedAssessment from "./RubricBasedAssessment";

export default function RRL_RubricBasedAssessment() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="rrl-rubric-assessment">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Rubric‑Based Assessment Module
          </h2>
          <p className="text-sm text-royal dark:text-blue-300 font-medium mb-4">Specific Objective 3</p>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            The goal is a configurable rubric system with automatic scoring. The subsections below cover
            the educational framework, design principles, digital grading, assessment consistency, and
            formative feedback that shape AURORA’s evaluation module.
          </p>

          <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full text-left px-5 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-2">2.3.1–2.3.5</span>
                <span className="font-medium text-slate-900 dark:text-white">
                  OBE, Rubric Design, Digital Grading, Consistency, Formative Feedback
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
                  Spanning Outcome‑Based Education (Spady, 1994) through to formative assessment (Black &
                  Wiliam, 1998), these studies confirm that well‑designed rubrics improve consistency,
                  transparency, and learning. AURORA puts these principles into practice with
                  college‑specific rubrics, automatic score calculation, and instant feedback.
                </p>
                <RubricBasedAssessment />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}