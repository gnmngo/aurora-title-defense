export default function PurposeDescription() {
  return (
    <section id="purpose-description">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Purpose and Description</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          This study aims to design, develop, and assess AURORA, a web-based, paperless capstone defense
          management system that digitizes manuscript submission, annotation, evaluation, feedback,
          revision tracking, and workflow coordination for Partido State University - Goa Campus.
        </p>
        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          AURORA is developed as an integrated platform that eradicates reliance on printed documents and
          consolidates all defense operations into a singular digital environment. The system accommodates
          many defense phases: Concept Defense, Title Defense, Progress Report 1, Progress Report 2, and
          Final Defense.
        </p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Role-Based Access</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { role: "Students", desc: "Submit manuscripts and track revisions" },
              { role: "Panelists", desc: "Review manuscripts and scoring (advisers & evaluators)" },
              { role: "System Administrators", desc: "Manage workflows, schedules, and reporting (coordinators & deans)" },
            ].map((r) => (
              <div
                key={r.role}
                className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600 
                           hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                           hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
              >
                <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                  {r.role}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          AURORA&rsquo;s premier feature is a split-screen workspace enabling panelists to examine
          manuscripts in one pane while concurrently doing rubric-based evaluations in the other,
          therefore minimizing multitasking and enhancing review efficiency (Sweller, 1988; Grudin, 1994).
        </p>
      </div>
    </section>
  );
}