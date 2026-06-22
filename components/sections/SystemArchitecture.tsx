export default function SystemArchitecture() {
  return (
    <section id="system-architecture">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        {/* Left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">
            System Architecture
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            AURORA follows a three‑tier architecture that cleanly separates the user interface, 
            business logic, and data storage layers. The diagram below shows how all components connect.
          </p>

          {/* Architecture Diagram */}
          <div className="flex justify-center mb-10 overflow-x-auto">
            <svg
              viewBox="0 0 800 520"
              className="w-full max-w-[700px] h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style>
                  {`
                    @keyframes flow {
                      0% { stroke-dashoffset: 24; }
                      100% { stroke-dashoffset: 0; }
                    }
                    .animated-line {
                      stroke-dasharray: 12, 12;
                      animation: flow 1.5s linear infinite;
                    }
                  `}
                </style>
              </defs>

              {/* ---- PRESENTATION TIER ---- */}
              <rect x="40" y="20" width="720" height="110" rx="12" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1.5" />
              <text x="400" y="45" textAnchor="middle" className="fill-slate-900 dark:fill-white font-display text-sm font-semibold">
                Presentation Tier
              </text>
              {/* User boxes */}
              <rect x="70" y="60" width="130" height="45" rx="6" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
              <text x="135" y="82" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-xs font-medium">Students</text>

              <rect x="230" y="60" width="130" height="45" rx="6" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
              <text x="295" y="82" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-xs font-medium">Panelists</text>

              <rect x="390" y="60" width="130" height="45" rx="6" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
              <text x="455" y="82" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-xs font-medium">Admins</text>

              <rect x="550" y="60" width="130" height="45" rx="6" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
              <text x="615" y="82" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-xs font-medium">Web/Mobile</text>

              {/* Connecting line to Application Tier */}
              <line x1="400" y1="130" x2="400" y2="170" stroke="var(--color-royal)" strokeWidth="2" className="animated-line" />

              {/* ---- APPLICATION TIER ---- */}
              <rect x="40" y="170" width="720" height="170" rx="12" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1.5" />
              <text x="400" y="195" textAnchor="middle" className="fill-slate-900 dark:fill-white font-display text-sm font-semibold">
                Application / Logic Tier
              </text>

              {/* Module cards */}
              {[
                { label: "Auth & Access Control", x: 70, y: 215 },
                { label: "Project & Defense Mgmt", x: 230, y: 215 },
                { label: "Document Handling", x: 390, y: 215 },
                { label: "Annotation & Review", x: 550, y: 215 },
                { label: "Grading & Evaluation", x: 70, y: 270 },
                { label: "Real-time Notifications", x: 230, y: 270 },
                { label: "Analytics", x: 390, y: 270 },
                { label: "Admin Functions", x: 550, y: 270 },
              ].map((mod) => (
                <g key={mod.label}>
                  <rect
                    x={mod.x}
                    y={mod.y}
                    width="130"
                    height="38"
                    rx="6"
                    fill="var(--bg)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x={mod.x + 65}
                    y={mod.y + 19}
                    textAnchor="middle"
                    className="fill-slate-700 dark:fill-slate-200 text-[10px] font-medium"
                  >
                    {mod.label}
                  </text>
                </g>
              ))}

              {/* Connecting line to Data Tier */}
              <line x1="400" y1="340" x2="400" y2="380" stroke="var(--color-royal)" strokeWidth="2" className="animated-line" />

              {/* ---- DATA TIER ---- */}
              <rect x="40" y="380" width="720" height="120" rx="12" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1.5" />
              <text x="400" y="405" textAnchor="middle" className="fill-slate-900 dark:fill-white font-display text-sm font-semibold">
                Data Tier (Supabase)
              </text>

              {/* Database boxes */}
              <rect x="100" y="425" width="160" height="45" rx="6" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
              <text x="180" y="447" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-xs font-medium">PostgreSQL</text>

              <rect x="320" y="425" width="160" height="45" rx="6" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
              <text x="400" y="447" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-xs font-medium">File Storage</text>

              <rect x="540" y="425" width="160" height="45" rx="6" fill="var(--bg)" stroke="var(--border)" strokeWidth="1" />
              <text x="620" y="447" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-xs font-medium">Audit Logs</text>
            </svg>
          </div>

          {/* Supporting cards for each tier (replaces old grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              {
                tier: "Presentation Tier",
                desc: "Students, panelists, and administrators access AURORA via web browsers on any device. The interface is built with Next.js and Tailwind CSS for a responsive, clean experience.",
              },
              {
                tier: "Application Tier",
                desc: "Eight core modules handle authentication, defense management, annotation, evaluation, notifications, analytics, and administration. All logic runs on Node.js inside Next.js API routes.",
              },
              {
                tier: "Data Tier",
                desc: "Supabase provides PostgreSQL for structured data, secure file storage for manuscripts, and audit logs that track every action for accreditation readiness.",
              },
            ].map((t) => (
              <div
                key={t.tier}
                className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 
                           hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                           hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                  {t.tier}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}