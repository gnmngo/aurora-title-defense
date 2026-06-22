"use client";

import { useState } from "react";

const terms = [
  {
    term: "Paperless Capstone Defense Management",
    definition:
      "The digital transformation of all activities related to submission, review, evaluation, and completion of capstone projects without printed documents. In AURORA, students submit manuscripts electronically, panelists review and annotate digitally, and administrators manage workflows paper‑free.",
  },
  {
    term: "Split‑Screen Workspace",
    definition:
      "A dual‑pane user interface that allows simultaneous viewing and interaction with multiple documents. In AURORA, panelists view the manuscript on the left while completing rubric‑based evaluations on the right, reducing cognitive load.",
  },
  {
    term: "Rubric‑Based Assessment",
    definition:
      "An evaluation method using predefined criteria and performance levels for consistent scoring. AURORA lets administrators configure college‑specific rubrics with weighted criteria and automatic total calculation.",
  },
  {
    term: "Role‑Based Access Control (RBAC)",
    definition:
      "A security mechanism that restricts access based on user roles. AURORA provides distinct permissions for Student, Panelist, and System Administrator based on their functions.",
  },
  {
    term: "Real‑Time Feedback",
    definition:
      "Immediate, timely information enabling iterative improvement. AURORA’s notification and commenting system delivers panelist feedback to students instantly upon submission.",
  },
  {
    term: "Version Control",
    definition:
      "A system that tracks changes to files over time, allowing revision comparison and rollback. AURORA maintains a complete history of manuscripts with timestamps and author attribution.",
  },
  {
    term: "Audit Trail",
    definition:
      "A chronological record of system activities for accountability and compliance. AURORA logs all user actions – submissions, evaluations, comments, and workflow transitions.",
  },
  {
    term: "Learning Analytics",
    definition:
      "The measurement and analysis of learner data to optimize outcomes. AURORA provides real‑time dashboards on submission status, evaluation completion, and defense outcomes across all colleges.",
  },
];

export default function DefinitionOfTerms() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="definition-of-terms">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Definition of Terms</h2>
        <div className="space-y-2">
          {terms.map((item, idx) => (
            <div key={item.term} className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="font-medium text-slate-900 dark:text-white text-sm">{item.term}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-5 py-4 bg-white dark:bg-slate-800 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.definition}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}