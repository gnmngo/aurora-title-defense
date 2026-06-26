"use client";

import { useState } from "react";
import RoleBasedAccessControl from "./RoleBasedAccessControl";
import AuthenticationIdentity from "./AuthenticationIdentity";
import InformationSecurity from "./InformationSecurity";
import AuditTrail from "./AuditTrail";

const subsections = [
  {
    id: "rrl-2-1-1",
    number: "2.1.1",
    title: "Role‑Based Access Control (RBAC) Framework",
    summary:
      "Ferraiolo and Kuhn (1992) established RBAC as a non‑discretionary access control method. Subsequent studies (Bihary & Shrader, 1994; Sherman & Freeman, 2007; Kamal, 2021) confirmed that role‑based access reduces security breaches and simplifies administration in paperless environments. These findings provide the blueprint for AURORA’s three‑role structure, ensuring that students, panelists, and administrators have precisely the access they need.",
    component: RoleBasedAccessControl,
  },
  {
    id: "rrl-2-1-2",
    number: "2.1.2",
    title: "Authentication and Identity Management",
    summary:
      "Research on e‑thesis systems (Bajrami, 2024), paperless meeting management (Perera, 2018), and thesis portals (Chio et al., 2022; Molinatto, 2025) consistently shows that secure, university‑credential‑based authentication is essential. AURORA adopts this model to verify users through the institution’s existing identity system, guaranteeing that only authorized individuals can access sensitive defense records.",
    component: AuthenticationIdentity,
  },
  {
    id: "rrl-2-1-3",
    number: "2.1.3",
    title: "Information Security Standards and Compliance",
    summary:
      "ISO/IEC 27001:2022 outlines international best practices for information security. Studies by Bihary & Shrader (1994) and Isaeva & Yoon (2016) stress that security must be embedded into system architecture. AURORA aligns with these standards, embedding security controls from the ground up.",
    component: InformationSecurity,
  },
  {
    id: "rrl-2-1-4",
    number: "2.1.4",
    title: "Audit Trail and Accountability",
    summary:
      "ISO/IEC 27001 Section 8.15 requires logging of all significant events, and studies (Bihary & Shrader, 1994; Sherman & Freeman, 2007; Drake et al., 1992) demonstrate that audit trails are essential for accountability and compliance. AURORA logs every submission, evaluation, and workflow change, creating a verifiable record for accreditation.",
    component: AuditTrail,
  },
];

export default function RRL_RoleBasedAccess() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="rrl-role-based-access">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Role‑Based Access Control System
          </h2>
          <p className="text-sm text-royal dark:text-blue-300 font-medium mb-4">Specific Objective 1</p>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            This objective aims to design a secure access system for three user roles. The subsections
            below cover the foundational framework, authentication, security standards, and accountability
            mechanisms that directly inform AURORA’s RBAC implementation.
          </p>

          {/* Subsections */}
          <div className="space-y-3">
            {subsections.map((sub) => (
              <div
                key={sub.id}
                className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => toggle(sub.id)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-2">
                      {sub.number}
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">{sub.title}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                      expandedId === sub.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedId === sub.id && (
                  <div className="px-5 py-4 bg-white dark:bg-slate-800 space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {sub.summary}
                    </p>
                    {/* The full literature card with hover effects and Relevance box */}
                    <sub.component />
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