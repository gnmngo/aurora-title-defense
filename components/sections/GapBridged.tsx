const gaps = [
  {
    gap: "Integration Gap",
    current: "RBAC, annotation, rubric assessment, and evaluation are handled by separate systems.",
    solution: "A single, unified platform supports the complete defense lifecycle.",
  },
  {
    gap: "Annotation Gap",
    current: "Existing platforms lack inline annotation capabilities.",
    solution: "Split‑screen workspace enables simultaneous annotation and evaluation.",
  },
  {
    gap: "Workflow Gap",
    current: "Defense processes are treated as disconnected functions.",
    solution: "Comprehensive workflow management across all five defense stages.",
  },
  {
    gap: "Evaluation Gap",
    current: "UTAUT and SUS are rarely applied to capstone management systems.",
    solution: "Systematic assessment using validated UTAUT and SUS frameworks.",
  },
];

export default function GapBridged() {
  return (
    <section id="gap-bridged">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Gap Bridged by the Study</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            The literature reveals a critical gap: no comprehensive capstone defense system integrates RBAC, split‑screen annotation, rubric‑based assessment, and systematic evaluation. Benavides et al. (2020) confirmed that no holistic digital transformation proposal exists in HEIs.
          </p>

          <div className="space-y-4">
            {gaps.map((g) => (
              <div key={g.gap} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* CURRENT (problem side) */}
                <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 border border-amber-200 dark:border-amber-800/30">
                  <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-1">Current</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{g.current}</p>
                </div>
                {/* AURORA SOLUTION (solution side) */}
                <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-200 dark:border-blue-800/30">
                  <p className="text-xs font-semibold text-royal dark:text-blue-400 uppercase tracking-wide mb-1">AURORA Solution</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{g.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}