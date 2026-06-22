const objectives = [
  {
    title: "Role‑Based Access Control",
    desc: "Design and develop an RBAC system for Student, Panelist, and System Administrator roles with university credential authentication.",
  },
  {
    title: "Split‑Screen Annotation Workspace",
    desc: "Develop a dual‑pane interface enabling simultaneous manuscript review and rubric‑based evaluation, reducing cognitive load.",
  },
  {
    title: "Rubric‑Based Assessment Module",
    desc: "Create customizable, college‑specific rubrics with automatic score calculation and multi‑panelist aggregation.",
  },
  {
    title: "Usability & Acceptance Evaluation",
    desc: "Evaluate system usability (SUS ≥ 68) and user acceptance using UTAUT‑based surveys through alpha and beta testing.",
  },
];

export default function Objectives() {
  return (
    <section id="objectives">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Objectives</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          The main objective is to design, develop, and evaluate AURORA, a paperless capstone defense management system for Partido State University.
        </p>

        <div className="space-y-6">
          {objectives.map((obj, idx) => (
            <div key={idx} className="flex gap-5 items-start group">
              {/* Step circle */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-royal text-white flex items-center justify-center font-bold text-sm group-hover:bg-royal-dark transition-colors">
                {idx + 1}
              </div>
              {/* Content */}
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600 flex-1 group-hover:border-royal dark:group-hover:border-blue-400 transition-all duration-200">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{obj.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{obj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}