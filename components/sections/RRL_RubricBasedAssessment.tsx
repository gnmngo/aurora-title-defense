export default function RRL_RubricBasedAssessment() {
  return (
    <section id="rrl-rubric-assessment">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Rubric‑Based Assessment Module
          </h2>
          <p className="text-sm text-royal dark:text-blue-300 font-medium mb-6">Specific Objective 3</p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-4">
            <p>
              <strong className="text-slate-900 dark:text-white">Spady’s (1994) Outcome‑Based Education</strong>{" "}
              framework establishes that clear, measurable criteria bring objectivity to assessment. This
              principle underpins <span className="text-royal dark:text-blue-300 font-medium">AURORA’s rubric module</span>,
              which allows administrators to configure college‑specific rubrics with weighted criteria and
              automatic score calculation.
            </p>
            <p>
              Studies by <strong>Erradi (2012)</strong> and <strong>Azmi (2025)</strong> demonstrated that
              digital rubrics with a five‑point descriptive scale (Excellent to Very Unsatisfactory) reduce
              human error and improve grading consistency. <strong>Chio et al. (2022)</strong> and{" "}
              <strong>Kurniawan et al. (2021)</strong> confirmed that structured assessment modules enhance
              evaluation efficiency and fairness.
            </p>
            <p>
              The literature on <strong className="text-slate-900 dark:text-white">formative assessment</strong>{" "}
              (<strong>Black & Wiliam, 1998</strong>; <strong>Kavadlo, 2013</strong>) reinforces that timely,
              specific feedback improves learning outcomes. AURORA delivers panelist comments and rubric
              scores immediately, enabling <span className="text-royal dark:text-blue-300 font-medium">iterative improvement</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}