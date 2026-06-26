export default function PurposeDescription() {
  const roles = [
    {
      title: "Students",
      desc: "Submit manuscripts and track revisions across all defense stages.",
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
    },
    {
      title: "Panelists",
      desc: "Review manuscripts, annotate, and complete rubric‑based evaluations. Includes advisers and external evaluators.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "System Administrators",
      desc: "Manage workflows, schedules, reporting, and system configuration. Includes coordinators and deans.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const defenseStages = [
    "Concept Defense",
    "Title Defense",
    "Progress Report 1",
    "Progress Report 2",
    "Final Defense",
  ];

  return (
    <section id="purpose-description">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">
          Purpose and Description
        </h2>

        {/* Lead statement */}
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          This study aims to design, develop, and assess <strong className="text-slate-900 dark:text-white">AURORA</strong>,
          a web‑based, paperless capstone defense management system that digitizes
          manuscript submission, annotation, evaluation, feedback, revision tracking,
          and workflow coordination for Partido State University – Goa Campus, serving
          all five colleges.
        </p>

        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          AURORA is an integrated platform that <strong className="text-slate-900 dark:text-white">eliminates printed documents</strong> and
          unifies all defense activities across five stages:
        </p>

        {/* Defense stages tag row */}
        <div className="flex flex-wrap gap-2 mb-8">
          {defenseStages.map((stage) => (
            <span
              key={stage}
              className="group px-3 py-1.5 rounded-full text-xs font-medium
                         bg-royal-light dark:bg-blue-900/30 text-royal dark:text-blue-200
                         border border-royal/20 dark:border-blue-800/50
                         hover:bg-royal hover:text-white dark:hover:bg-royal dark:hover:text-white
                         transition-all duration-200 cursor-default"
            >
              {stage}
            </span>
          ))}
        </div>

        {/* Role cards */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
          Three Primary User Roles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
            >
              <div className="text-royal dark:text-blue-400 mb-2 group-hover:text-royal-dark dark:group-hover:text-blue-300 transition-colors">
                {role.icon}
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                {role.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>

        {/* Innovation highlight card */}
        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 relative overflow-hidden mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-xl" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Core Innovation: Split‑Screen Evaluation
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              AURORA&rsquo;s premier feature enables panelists to view manuscripts in one pane while
              simultaneously completing rubric‑based evaluations in the other. This dual‑pane interface
              reduces cognitive load, minimizes multitasking, and enhances review efficiency (Sweller, 1988;
              Grudin, 1994).
            </p>
          </div>
        </div>

        {/* Methodology footnote */}
        <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
          <strong className="text-slate-500 dark:text-slate-400">Methodology:</strong> In accordance with the
          Design Science Research (DSR) methodology (Hevner et al., 2004), AURORA develops and evaluates an
          innovative IT artifact that addresses the recognized organizational problem of paper‑based capstone
          defense management.
        </p>
      </div>
    </section>
  );
}