import RubricBasedAssessment from "./RubricBasedAssessment";

export default function RRL_RubricBasedAssessment() {
  return (
    <section id="rrl-rubric-assessment">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Rubric‑Based Assessment Module{" "}
          <span className="text-royal dark:text-blue-300">(Specific Objective 3)</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          The goal is a configurable rubric system with automatic scoring. The subsections
          below cover the educational framework, design principles, digital grading, assessment
          consistency, and formative feedback that shape AURORA’s evaluation module.
        </p>
      </div>

      {/* 2.3.1–2.3.5 summary */}
      <div className="mb-4">
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          Spanning Outcome‑Based Education (Spady, 1994) through to formative assessment
          (Black & Wiliam, 1998), these studies confirm that well‑designed rubrics improve
          consistency, transparency, and learning. AURORA puts these principles into practice
          with college‑specific rubrics, automatic score calculation, and instant feedback.
          Each sub‑subsection concludes with its own “Relevance to AURORA” statement.
        </p>
      </div>
      <RubricBasedAssessment />
    </section>
  );
}