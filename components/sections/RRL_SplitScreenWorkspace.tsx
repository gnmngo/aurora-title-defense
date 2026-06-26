"use client";

import { useState } from "react";
import SplitScreenWorkspace from "./SplitScreenWorkspace";

export default function RRL_SplitScreenWorkspace() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="rrl-split-screen">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Split‑Screen Annotation Workspace
          </h2>
          <p className="text-sm text-royal dark:text-blue-300 font-medium mb-4">Specific Objective 2</p>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            This objective aims to develop a dual‑pane interface that allows simultaneous manuscript
            review and evaluation. The subsections below provide the theoretical foundation – from
            cognitive load reduction to collaborative work – that justifies this design choice.
          </p>

          <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full text-left px-5 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-2">2.2.1–2.2.4</span>
                <span className="font-medium text-slate-900 dark:text-white">
                  Cognitive Load Theory, CSCW, HCI, Document Review Interfaces
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
                  The literature is organised into four themes: Cognitive Load Theory, Computer‑Supported
                  Cooperative Work, Human‑Computer Interaction, and Document Review Interfaces. Together
                  they demonstrate that an integrated, split‑screen environment reduces mental effort,
                  supports collaborative annotation, and improves review quality.
                </p>
                <SplitScreenWorkspace />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}