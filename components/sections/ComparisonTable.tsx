// Custom SVG icons for presence / absence
const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const DashIcon = () => (
  <svg className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
  </svg>
);

// Dedicated edge icon – no auto margin, for use in the left‑aligned list
const EdgeCheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const features = [
  {
    feature: "Centralized Repository",
    THESIST: true, REPOCAP: true, AcademiaVault: true, AURORA: true,
  },
  {
    feature: "Role‑Based Access Control",
    THESIST: true, REPOCAP: true, AcademiaVault: true, AURORA: true,
  },
  {
    feature: "Automated Defense Scheduling",
    THESIST: "Genetic Algorithm",
    REPOCAP: false,
    AcademiaVault: false,
    AURORA: false,
  },
  {
    feature: "Split‑Screen Manuscript Review",
    THESIST: false,
    REPOCAP: false,
    AcademiaVault: false,
    AURORA: "Key Innovation",
  },
  {
    feature: "Rubric‑Based Auto‑Scoring",
    THESIST: false, REPOCAP: false, AcademiaVault: false, AURORA: true,
  },
  {
    feature: "Real‑Time Feedback",
    THESIST: false, REPOCAP: false, AcademiaVault: false, AURORA: true,
  },
  {
    feature: "Modern Stack (Next.js / React)",
    THESIST: false, REPOCAP: false, AcademiaVault: false, AURORA: true,
  },
  {
    feature: "Theory‑Based Evaluation (UTAUT / SUS)",
    THESIST: false, REPOCAP: false, AcademiaVault: false, AURORA: true,
  },
];

export default function ComparisonTable() {
  return (
    <section id="comparison-table">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Comparison with Existing Philippine Systems
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          How AURORA raises the bar for paperless capstone defense management.
        </p>

        {/* Responsive table container */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full text-sm md:text-base min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/70">
                <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">
                  Feature / System
                </th>
                <th className="text-center py-4 px-3 font-semibold text-slate-900 dark:text-white">
                  THESIST
                </th>
                <th className="text-center py-4 px-3 font-semibold text-slate-900 dark:text-white">
                  REPOCAP
                </th>
                <th className="text-center py-4 px-3 font-semibold text-slate-900 dark:text-white">
                  AcademiaVault
                </th>
                <th className="text-center py-4 px-3 font-semibold text-white bg-royal dark:bg-royal rounded-t-lg">
                  AURORA (Proposed)
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={`group transition-colors duration-150 ${
                    idx % 2 === 0
                      ? "bg-white dark:bg-slate-800"
                      : "bg-slate-50 dark:bg-slate-700/30"
                  } hover:bg-blue-50/40 dark:hover:bg-slate-600/40`}
                >
                  <td className="py-3 px-4 font-medium text-slate-700 dark:text-slate-200">
                    {row.feature}
                  </td>
                  <td className="text-center py-3 px-3">
                    {renderCell(row.THESIST)}
                  </td>
                  <td className="text-center py-3 px-3">
                    {renderCell(row.REPOCAP)}
                  </td>
                  <td className="text-center py-3 px-3">
                    {renderCell(row.AcademiaVault)}
                  </td>
                  <td className="text-center py-3 px-3 bg-blue-50/60 dark:bg-blue-900/20 font-medium">
                    {renderCell(row.AURORA, true)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AURORA Edge box – now aligned */}
        <div className="mt-8 p-5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-xl" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              The AURORA Edge
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <EdgeCheckIcon />
                <span><strong className="text-slate-900 dark:text-white">Split‑Screen Workspace</strong> – the first system to apply Cognitive Load Theory, reducing panelist fatigue and improving review quality.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <EdgeCheckIcon />
                <span><strong className="text-slate-900 dark:text-white">Rubric‑Based Auto‑Scoring</strong> – ensures consistent, transparent evaluation without manual calculation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <EdgeCheckIcon />
                <span><strong className="text-slate-900 dark:text-white">Real‑Time Feedback</strong> – panelist comments are instantly available, supporting iterative learning.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <EdgeCheckIcon />
                <span><strong className="text-slate-900 dark:text-white">Modern Tech Stack</strong> – Next.js, React, TypeScript, and Supabase provide scalability, security, and long‑term maintainability.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <EdgeCheckIcon />
                <span><strong className="text-slate-900 dark:text-white">Theory‑Driven Evaluation</strong> – UTAUT and SUS guide user acceptance and usability testing, adding academic rigor.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderCell(value: boolean | string, isAurora: boolean = false) {
  if (typeof value === "boolean") {
    return value ? <CheckIcon /> : <DashIcon />;
  }
  // String value (e.g., "Genetic Algorithm" or "Key Innovation")
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
        isAurora
          ? "bg-royal/10 text-royal dark:bg-royal/20 dark:text-blue-200"
          : "bg-slate-100 text-slate-700 dark:bg-slate-600 dark:text-slate-200"
      }`}
    >
      {value}
    </span>
  );
}