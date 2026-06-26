"use client";

import { useState } from "react";
import LocalThesisSystems from "./LocalThesisSystems";
import ComparisonTable from "./ComparisonTable";

export default function RRL_LocalStudies() {
  const [open, setOpen] = useState(false);

  return (
    <section id="rrl-local-studies">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Local Thesis and Capstone Management Systems
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Related Philippine Studies</p>

          <button
            onClick={() => setOpen(!open)}
            className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50
                       border border-slate-200 dark:border-slate-600
                       hover:bg-slate-100 dark:hover:bg-slate-700
                       hover:border-royal/30 dark:hover:border-blue-400/30
                       transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-900 dark:text-white text-sm">
                THESIST, REPOCAP, AcademiaVault – View detailed systems and comparison
              </span>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {open && (
            <div className="mt-2 space-y-4">
              <LocalThesisSystems />
              <ComparisonTable />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}