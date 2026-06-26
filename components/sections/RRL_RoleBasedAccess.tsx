"use client";

import { useState } from "react";
import RoleBasedAccessControl from "./RoleBasedAccessControl";
import AuthenticationIdentity from "./AuthenticationIdentity";
import InformationSecurity from "./InformationSecurity";
import AuditTrail from "./AuditTrail";

const subsections = [
  { number: "2.1.1", title: "Role‑Based Access Control (RBAC) Framework", Component: RoleBasedAccessControl },
  { number: "2.1.2", title: "Authentication and Identity Management", Component: AuthenticationIdentity },
  { number: "2.1.3", title: "Information Security Standards and Compliance", Component: InformationSecurity },
  { number: "2.1.4", title: "Audit Trail and Accountability", Component: AuditTrail },
];

export default function RRL_RoleBasedAccess() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="rrl-role-based-access">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Role‑Based Access Control System
          </h2>
          <p className="text-sm text-royal dark:text-blue-300 font-medium mb-6">Specific Objective 1</p>

          <div className="space-y-2">
            {subsections.map((sub, idx) => (
              <div key={sub.number}>
                {/* Toggle header – not a card, just a clickable bar */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50
                             border border-slate-200 dark:border-slate-600
                             hover:bg-slate-100 dark:hover:bg-slate-700
                             hover:border-royal/30 dark:hover:border-blue-400/30
                             transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-900 dark:text-white text-sm">
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-2">{sub.number}</span>
                      {sub.title}
                    </span>
                    <svg
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Expanded content – the original card, no extra wrapper */}
                {openIndex === idx && (
                  <div className="mt-2">
                    <sub.Component />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}