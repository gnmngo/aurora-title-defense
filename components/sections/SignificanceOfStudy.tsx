const stakeholders = [
  {
    role: "Students",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 9v5a9 9 0 0018 0V9" />
      </svg>
    ),
    benefits: [
      "Faster feedback & clear revision tracking",
      "Digital access to manuscripts & results",
      "Centralized panelist remarks history",
      "Reduced delays, improved learning outcomes",
    ],
  },
  {
    role: "Panelists",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    benefits: [
      "Split‑screen workspace for review",
      "Standardized rubrics for consistent evaluation",
      "Reduced administrative burden",
      "Easy access to submission history",
    ],
  },
  {
    role: "Administrators",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    benefits: [
      "Streamlined workflow management",
      "Real‑time analytics dashboards",
      "Audit trails for accreditation",
      "Green IT & sustainability compliance",
    ],
  },
  {
    role: "Future Researchers",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
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

        {/* Lead with AURORA highlighted */}
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          The development of <strong className="text-royal dark:text-blue-300">AURORA</strong> brings measurable
          benefits to all stakeholders in the capstone defense process.
        </p>

        {/* Stakeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stakeholders.map((s) => (
            <div
              key={s.role}
              className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-royal dark:text-blue-400 group-hover:text-royal-dark dark:group-hover:text-blue-300 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                  {s.role}
                </h3>
              </div>
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

        {/* Closing statement */}
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          <strong className="text-royal dark:text-blue-300">AURORA</strong> contributes to
          PSU&rsquo;s digital transformation by modernizing the entire defense workflow, reducing paper waste,
          and providing a scalable model for other institutions.
        </p>
      </div>
    </section>
  );
}