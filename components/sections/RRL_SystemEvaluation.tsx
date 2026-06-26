export default function RRL_SystemEvaluation() {
  return (
    <section id="rrl-system-evaluation">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            System Evaluation and User Acceptance
          </h2>
          <p className="text-sm text-royal dark:text-blue-300 font-medium mb-6">Specific Objective 4</p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-4">
            <p>
              <strong className="text-slate-900 dark:text-white">Venkatesh et al. (2003)</strong> developed the
              Unified Theory of Acceptance and Use of Technology (UTAUT), identifying performance expectancy
              and effort expectancy as the strongest predictors of technology adoption.{" "}
              <strong>Tatlı et al. (2024)</strong> validated UTAUT on paperless technologies in 13 Turkish
              universities, confirming that these factors explain 75% of usage intention.
            </p>
            <p>
              The <strong className="text-slate-900 dark:text-white">Technology Acceptance Model (TAM)</strong>{" "}
              (<strong>Davis, 1989</strong>; <strong>Venkatesh & Davis, 2000</strong>) complements UTAUT by
              highlighting perceived usefulness and ease of use. Both models will be applied in AURORA’s
              evaluation to ensure <span className="text-royal dark:text-blue-300 font-medium">comprehensive acceptance measurement</span>.
            </p>
            <p>
              The <strong className="text-slate-900 dark:text-white">System Usability Scale (SUS)</strong>{" "}
              (<strong>Brooke, 1996</strong>) provides a reliable benchmark (average score 68). AURORA targets
              a SUS score ≥ 68, following the guidelines of <strong>Sauro & Lewis (2016)</strong> and{" "}
              <strong>Bangor et al. (2009)</strong> for interpretation. Usability testing will involve{" "}
              <strong>15–20 representative users</strong> performing structured tasks, consistent with sample
              size recommendations by <strong>Nielsen (1993)</strong> and <strong>Lewis (2024)</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}