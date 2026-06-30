export default function GapBridged() {
  return (
    <section id="gap-bridged">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            Gap Bridged by the Study
          </h2>

          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            Existing capstone systems handle only parts of the defense process. None combine role‑based access,
            split‑screen annotation, rubric‑based assessment, and systematic evaluation into one platform.
            Benavides et al. (2020) confirmed that no complete digital solution exists for capstone defense
            management. AURORA fills this void by bringing all these pieces together.
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                title: "Integration Gap",
                text: "Different systems handle RBAC, annotation, rubrics, and evaluation separately. AURORA unites them in a single platform that covers the entire defense lifecycle.",
              },
              {
                title: "Annotation Gap",
                text: "Digital annotation improves review speed and quality, but current capstone tools lack built‑in annotation. AURORA lets panelists annotate manuscripts and complete rubrics at the same time, in one workspace.",
              },
              {
                title: "Workflow Gap",
                text: "Defense processes involve many stages and people, yet existing systems treat each step as separate. AURORA manages the whole workflow — from Concept Defense to Final Defense — with automatic notifications and role‑based access.",
              },
              {
                title: "Evaluation Gap",
                text: "Proven evaluation models like UTAUT and SUS are rarely used in capstone systems. AURORA applies them to measure usability and acceptance, making sure the system truly meets user needs.",
              },
            ].map((gap) => (
              <div
                key={gap.title}
                className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600
                           hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400
                           hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                  {gap.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{gap.text}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            By closing these gaps, AURORA contributes to educational technology research and offers a
            practical model that other institutions can adapt for their own capstone processes.
          </p>
        </div>
      </div>
    </section>
  );
}