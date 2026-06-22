import FeatureCard from "@/components/ui/FeatureCard";

const highlights = [
  { title: "Paperless Workflow", description: "Eliminate printed manuscripts entirely." },
  { title: "Role-Based Access Control", description: "Secure permissions for students, panelists, and staff." },
  { title: "Split-Screen Evaluation", description: "Simultaneous manuscript review and assessment." },
  { title: "Rubric-Based Assessment", description: "Standardised, customisable scoring." },
  { title: "Real-Time Feedback", description: "Instant comments and notifications." },
  { title: "Version Control", description: "Track every revision automatically." },
  { title: "Audit Trail Logging", description: "Complete activity logs for accreditation." },
  { title: "Analytics Dashboard", description: "Real‑time progress and performance metrics." },
];

export default function TitleHero() {
  return (
    <section id="hero" className="pt-8 pb-4">
      <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="max-w-3xl ml-4">
          {/* Main title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4 leading-tight">
            <span className="text-royal dark:text-blue-300">AURORA:</span> Academic Unified Review, Observation, Rating, and Assessment System
            <br />
            <span className="text-base md:text-lg font-medium text-slate-600 dark:text-slate-300">
              for Paperless Capstone Defense Management at Partido State University
            </span>
          </h1>

          {/* Short descriptor subtitle */}
          <p className="text-lg text-slate-700 dark:text-slate-200 mb-4 font-medium">
            A Web‑Based Paperless Capstone Defense Management System
          </p>

          {/* Institutional context */}
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Presented to the Faculty of the College of Engineering and Computational Sciences
            <br />
            Partido State University – Goa Campus
          </p>

          {/* Badges row: SDG 4, SDG 12, Fully Paperless */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* SDG 4 – Quality Education */}
            <div className="relative group">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium cursor-default
                               bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200
                               border border-blue-200 dark:border-blue-800/50
                               hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors">
                SDG 4 – Quality Education
              </span>
              {/* Hover detail card */}
              <div className="absolute bottom-full left-0 mb-2 w-72 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300">
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Improves the capstone defense process through digital transformation.</li>
                    <li>Provides faster feedback and better access to academic resources.</li>
                    <li>Enhances collaboration between students, advisers, and panelists.</li>
                  </ul>
                  <div className="absolute top-full left-6 w-3 h-3 bg-white dark:bg-slate-800 border-l border-t border-slate-200 dark:border-slate-700 rotate-45 -mt-1.5"></div>
                </div>
              </div>
            </div>

            {/* SDG 12 – Responsible Consumption and Production */}
            <div className="relative group">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium cursor-default
                               bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-200
                               border border-green-200 dark:border-green-800/50
                               hover:bg-green-100 dark:hover:bg-green-800/50 transition-colors">
                SDG 12 – Responsible Consumption and Production
              </span>
              <div className="absolute bottom-full left-0 mb-2 w-72 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300">
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Eliminates the need for printed manuscripts.</li>
                    <li>Reduces paper consumption and printing expenses.</li>
                    <li>Promotes sustainable academic practices.</li>
                  </ul>
                  <div className="absolute top-full left-6 w-3 h-3 bg-white dark:bg-slate-800 border-l border-t border-slate-200 dark:border-slate-700 rotate-45 -mt-1.5"></div>
                </div>
              </div>
            </div>

            {/* Fully Paperless badge (green) */}
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                             bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-200
                             border border-green-200 dark:border-green-800/50">
              Fully Paperless
            </span>
          </div>

          {/* Conclusion sentence about SDG */}
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            The system contributes to PSU&rsquo;s digital transformation initiatives while supporting environmentally responsible education.
          </p>
        </div>
      </div>

      {/* Feature highlights grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item) => (
          <FeatureCard key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}