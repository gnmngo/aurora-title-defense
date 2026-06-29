export default function ComparativeAnalysis() {
  const comparisons = [
    {
      category: "System Vision",
      aurora:
        "Comprehensive paperless capstone defense management ecosystem supporting the complete defense lifecycle—from Concept Defense to Final Defense—with centralized workflow management, evaluation, analytics, and institutional reporting.",
      group7:
        "Focused primarily on annotation, revision tracking, document management, scheduling, and institutional archiving for thesis and capstone defenses.",
      highlight: "AURORA provides broader institutional workflow coverage.",
    },
    {
      category: "Defense Workflow Coverage",
      aurora:
        "Supports all five defense stages (Concept, Title, Progress Report 1, Progress Report 2, Final Defense) with unified workflow management across all stages.",
      group7:
        "Focuses primarily on document submission, annotation, revision tracking, scheduling, and archiving throughout the defense process.",
      highlight: "AURORA explicitly models the complete multi‑stage defense lifecycle.",
    },
    {
      category: "Evaluation Workflow",
      aurora:
        "Unique Split‑Screen Workspace – panelists simultaneously read manuscripts, annotate documents, and complete rubric‑based evaluations without changing screens, supported by Cognitive Load Theory and HCI principles.",
      group7:
        "Provides an in‑browser document viewer with contextual annotations and inline comments, emphasizing collaborative review and revision tracking.",
      highlight: "AURORA integrates manuscript review and grading in a single evaluation workspace.",
    },
    {
      category: "Assessment System",
      aurora:
        "Includes configurable rubric management, weighted criteria, automated score computation, and standardized assessment aligned with Outcomes‑Based Education principles.",
      group7:
        "The system does not include automated grading computation or formal grade encoding, as these are considered outside its scope.",
      highlight: "AURORA integrates assessment directly into the platform.",
    },
    {
      category: "User Roles",
      aurora:
        "Supports Students, Panelists, Advisers, Research Coordinators, and System Administrators, serving five colleges across the Goa Campus.",
      group7:
        "Supports Students, Panelists, and Administrators, primarily within the Computational Sciences Department.",
      highlight: "AURORA is designed for broader institutional deployment.",
    },
    {
      category: "Analytics and Monitoring",
      aurora:
        "Provides submission analytics, evaluation completion, defense monitoring, college performance, learning analytics dashboards, and administrative reports.",
      group7:
        "Focuses on monitoring defense status, scheduling, and archival records.",
      highlight: "AURORA emphasizes institutional analytics and decision support.",
    },
    {
      category: "Security and Accountability",
      aurora:
        "Implements Role‑Based Access Control, Audit Trail Logging, workflow history, activity monitoring, and ISO/IEC 27001‑based security considerations.",
      group7:
        "Implements role‑based access control and auditable revision status records for manuscript workflows.",
      highlight:
        "Both projects emphasize secure access, while AURORA additionally incorporates broader audit logging and institutional accountability features.",
    },
    {
      category: "System Evaluation",
      aurora:
        "Evaluates user acceptance using UTAUT, TAM, and SUS, supported by established usability testing methods.",
      group7:
        "Evaluates system quality using ISO/IEC 25010 software quality criteria during user acceptance testing.",
      highlight:
        "AURORA combines technology acceptance and usability evaluation frameworks, while Group 7 emphasizes software quality characteristics.",
    },
  ];

  const whyAurora = [
    {
      title: "Complete Defense Lifecycle",
      desc: "Supports every official capstone defense stage within one integrated platform.",
    },
    {
      title: "Integrated Evaluation Workspace",
      desc: "Combines manuscript review, annotation, and rubric‑based assessment in a single split‑screen interface.",
    },
    {
      title: "Institution‑Wide Deployment",
      desc: "Designed to support five colleges at Partido State University – Goa Campus rather than a single department.",
    },
    {
      title: "Data‑Driven Academic Management",
      desc: "Extends beyond document management through analytics dashboards, audit trails, RBAC, workflow automation, and institutional reporting.",
    },
  ];

  return (
    <section id="comparative-analysis">
      <div className="space-y-8">
        {/* Introductory card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Comparative Analysis
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Although both proposed systems aim to digitize and modernize the capstone or thesis defense
            process at Partido State University, they differ in terms of system scope, intended users,
            functional coverage, and overall platform architecture. The comparison below highlights how
            AURORA extends beyond manuscript annotation by providing an integrated paperless defense
            management ecosystem.
          </p>
        </div>

        {/* Comparison cards */}
        {comparisons.map((comp) => (
          <div
            key={comp.category}
            className="group bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 
                       hover:shadow-md hover:scale-[1.01] hover:border-royal/30 dark:hover:border-blue-400/30 
                       transition-all duration-200"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
              {comp.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* AURORA */}
              <div className="relative bg-blue-50/30 dark:bg-blue-900/10 rounded-xl p-5 border border-blue-100 dark:border-blue-800/20">
                <span className="text-xs font-semibold text-royal dark:text-blue-300 uppercase tracking-wide mb-2 block">
                  AURORA
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{comp.aurora}</p>
              </div>

              {/* Group 7 */}
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2 block">
                  Group 7 System
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{comp.group7}</p>
              </div>
            </div>

            {/* Highlight line */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <p className="text-sm font-medium text-royal dark:text-blue-300">
                <span className="text-slate-400 dark:text-slate-500 mr-2">▸</span>
                {comp.highlight}
              </p>
            </div>
          </div>
        ))}

        {/* Why AURORA Stands Out */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Why AURORA Stands Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyAurora.map((item) => (
              <div
                key={item.title}
                className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 
                           hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                           hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200"
              >
                <div className="text-royal dark:text-blue-400 mb-3 group-hover:text-royal-dark dark:group-hover:text-blue-300 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-base text-slate-900 dark:text-white mb-1 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}