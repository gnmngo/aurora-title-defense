const colleges = [
  "College of Education",
  "College of Business and Management",
  "College of Engineering and Computational Sciences",
  "College of Arts and Humanities",
  "College of Science",
];

const defenseStages = [
  "Concept Defense",
  "Title Defense",
  "Progress Report 1",
  "Progress Report 2",
  "Final Defense",
];

const userRoles = [
  { role: "Students", users: "All enrolled capstone students" },
  { role: "Panelists", users: "Faculty advisers, panel members, external evaluators" },
  { role: "System Administrators", users: "Department coordinators, research coordinators, college deans" },
];

const limitations = [
  {
    title: "No External System Integration",
    desc: "The system does not integrate with external learning management systems (LMS) or student information systems (SIS).",
  },
  {
    title: "Basic Security Implementation",
    desc: "Security relies on RBAC and university authentication; lacks multi‑factor authentication and blockchain‑based audit trails.",
  },
  {
    title: "Single Institution Focus",
    desc: "Designed specifically for Partido State University – Goa Campus; may require customization for other institutions.",
  },
];

export default function ScopeLimitations() {
  return (
    <section id="scope-limitations">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Scope and Limitations</h2>

        {/* SCOPE */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Scope</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          This study centers on the design, development, and assessment of AURORA for
          Partido State University – Goa Campus, covering five colleges and all defense stages.
        </p>

        {/* College cards */}
        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Colleges Covered</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {colleges.map((college) => (
            <div
              key={college}
              className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="text-royal dark:text-blue-400 group-hover:text-royal-dark dark:group-hover:text-blue-300 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                  {college}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Defense stages tag chips */}
        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Defense Stages</h4>
        <div className="flex flex-wrap gap-2 mb-6">
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

        {/* User roles */}
        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">User Roles</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {userRoles.map((r) => (
            <div
              key={r.role}
              className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
            >
              <h5 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">{r.role}</h5>
              <p className="text-xs text-slate-600 dark:text-slate-300">{r.users}</p>
            </div>
          ))}
        </div>

        {/* LIMITATIONS */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Limitations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {limitations.map((lim) => (
            <div
              key={lim.title}
              className="group bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 border border-amber-200 dark:border-amber-800/30
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400
                         hover:bg-amber-100/50 dark:hover:bg-amber-900/30 transition-all duration-200 cursor-default"
            >
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M10.29 3.86l-8.6 14.86A1 1 0 002.56 20h18.88a1 1 0 00.86-1.28l-8.6-14.86a1 1 0 00-1.72 0z" />
                </svg>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{lim.title}</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">{lim.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}