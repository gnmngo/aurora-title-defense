export default function ProjectContext() {
  return (
    <section id="project-context">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Project Context</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          The digital transformation of academic processes in higher education is an essential objective of the 21st century; yet, systematic literature studies indicate the absence of a comprehensive and holistic approach for managing capstone and thesis defenses (Benavides et al., 2020). Current solutions tackle discrete functions, such as submission portals, evaluation tools, or scheduling systems, but do not integrate the entire defense lifecycle.
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          AURORA addresses this gap by offering a web-based, paperless capstone defense management platform that consolidates:
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {["Manuscript Submission", "Digital Annotation", "Rubric‑Based Evaluation", "Real‑Time Feedback", "Version Control", "Defense Scheduling", "Analytics Reporting"].map(
            (item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-royal-light dark:bg-blue-900/30 text-royal dark:text-blue-200 border border-royal/20 dark:border-blue-800/50"
              >
                {item}
              </span>
            )
          )}
        </div>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          The system&rsquo;s main innovation is a split-screen workspace that allows panelists to simultaneously examine papers and finalize evaluations, therefore diminishing cognitive load and enhancing review efficiency (Sweller, 1988; Cognitive Load Theory).
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Based on the Unified Theory of Acceptance and Use of Technology (UTAUT), which identifies performance expectancy and effort expectancy as critical factors in technology adoption (Venkatesh et al., 2003; Tatli et al., 2024), AURORA emphasizes intuitive interface design and measurable efficiency improvements to boost adoption among faculty and students. The system is designed for implementation at Partido State University - Goa Campus, serving five colleges with diverse capstone requirements. AURORA enhances institutional sustainability (Green IT), accreditation preparedness (auditable trails), and learning outcomes (timely, structured feedback) by abolishing paper manuscripts, centralizing defense records, and automating workflow coordination.
        </p>
      </div>
    </section>
  );
}