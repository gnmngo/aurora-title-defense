import SystemEvaluation from "./SystemEvaluation";

export default function RRL_SystemEvaluation() {
  return (
    <section id="rrl-system-evaluation">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          System Evaluation and User Acceptance{" "}
          <span className="text-royal dark:text-blue-300">(Specific Objective 4)</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          This objective focuses on measuring AURORA’s usability and acceptance. The
          subsections review UTAUT, TAM, SUS, usability testing methods, and user acceptance
          testing – the exact frameworks that will be used to evaluate the final system.
        </p>
      </div>

      {/* 2.4.1–2.4.5 summary */}
      <div className="mb-4">
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          Venkatesh et al. (2003) and Tatlı et al. (2024) show that performance and effort
          expectancy drive technology adoption; Davis (1989) and extensions highlight perceived
          usefulness and ease of use; Brooke (1996) provides the SUS benchmark of 68. These
          validated instruments will be applied directly in AURORA’s alpha and beta testing.
          Each framework’s relevance is explained inside the detailed cards.
        </p>
      </div>
      <SystemEvaluation />
    </section>
  );
}