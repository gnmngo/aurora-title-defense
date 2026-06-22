const features = [
  {
    title: "Role‑Based Access Control (RBAC)",
    items: ["Three roles: Student, Panelist, Admin", "University credential auth", "Least privilege enforcement"],
  },
  {
    title: "Split‑Screen Annotation Workspace",
    items: ["Dual‑pane manuscript + evaluation", "Inline PDF annotation", "Reduced cognitive load"],
  },
  {
    title: "Rubric‑Based Assessment Module",
    items: ["Customizable per college", "Weighted scoring", "Automatic calculation", "Five‑point scale"],
  },
  {
    title: "Manuscript Submission & Version Control",
    items: ["Electronic submission", "Full revision history", "Author attribution"],
  },
  {
    title: "Real‑Time Feedback & Notifications",
    items: ["Immediate feedback delivery", "Commenting system", "Alert notifications"],
  },
  {
    title: "Defense Workflow Management",
    items: ["5 defense stages", "Automated coordination", "Status tracking"],
  },
  {
    title: "Analytics Dashboard",
    items: ["Real‑time submission status", "Completion tracking", "College‑wide analytics"],
  },
  {
    title: "Audit Trail & Compliance",
    items: ["Chronological activity logs", "ISO/IEC 27001 aligned", "Integrity protection"],
  },
];

export default function SystemFeatures() {
  return (
    <section id="system-features">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">System Features and Functionalities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 hover:shadow-md hover:border-royal dark:hover:border-blue-400 transition-all duration-200"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {feature.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}