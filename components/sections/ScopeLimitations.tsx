const colleges = [
  "Education",
  "Business and Management",
  "Engineering and Computational Sciences",
  "Arts and Humanities",
  "Science",
];

const limitations = [
  {
    title: "No External System Integration",
    desc: "The system does not integrate with external LMS or SIS platforms.",
  },
  {
    title: "Basic Security Implementation",
    desc: "Security relies on RBAC and university auth; lacks multi‑factor authentication and blockchain‑based trails.",
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
          This study centers on the design, development, and assessment of AURORA for Partido State
          University – Goa Campus, covering five colleges and five defense stages.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {colleges.map((college) => (
            <span
              key={college}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-royal-light dark:bg-blue-900/30 text-royal dark:text-blue-200 border border-royal/20 dark:border-blue-800/50"
            >
              {college}
            </span>
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