const stakeholders = [
  {
    role: "Students",
    benefits: [
      "Faster feedback & clear revision tracking",
      "Digital access to manuscripts & results",
      "Centralized panelist remarks history",
      "Reduced delays, improved learning outcomes",
    ],
  },
  {
    role: "Panelists",
    benefits: [
      "Split‑screen workspace for review",
      "Standardized rubrics for consistent evaluation",
      "Reduced administrative burden",
      "Easy access to submission history",
    ],
  },
  {
    role: "Administrators",
    benefits: [
      "Streamlined workflow management",
      "Real‑time analytics dashboards",
      "Audit trails for accreditation",
      "Green IT & sustainability compliance",
    ],
  },
  {
    role: "Future Researchers",
    benefits: [
      "Baseline system for comparative studies",
      "Reference architecture for other HEIs",
    ],
  },
];

export default function SignificanceOfStudy() {
  return (
    <section id="significance">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Significance of the Study</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stakeholders.map((s) => (
            <div
              key={s.role}
              className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                {s.role}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.benefits.map((b, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}