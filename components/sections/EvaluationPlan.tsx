export default function EvaluationPlan() {
  return (
    <section id="evaluation-plan">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Evaluation Plan</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Usability Testing */}
          <div className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-royal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Usability Testing
            </h3>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <p><strong className="text-slate-900 dark:text-white">Method:</strong> System Usability Scale (SUS)</p>
              <p><strong className="text-slate-900 dark:text-white">Target Score:</strong> ≥ 68 (above average)</p>
              <p><strong className="text-slate-900 dark:text-white">Participants:</strong> 15–20 representative users</p>
            </div>
          </div>

          {/* User Acceptance Testing */}
          <div className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-royal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              User Acceptance Testing
            </h3>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <p><strong className="text-slate-900 dark:text-white">Method:</strong> UTAUT‑based acceptance survey</p>
              <p><strong className="text-slate-900 dark:text-white">Dimensions:</strong> Performance expectancy, effort expectancy, social influence, facilitating conditions</p>
            </div>
          </div>
        </div>

        {/* Success Criteria Table – no hover needed on table rows */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Success Criteria</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-2 font-semibold text-slate-900 dark:text-white">Metric</th>
                <th className="text-left py-2 font-semibold text-slate-900 dark:text-white">Target</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 dark:border-slate-700">
                <td className="py-2 text-slate-700 dark:text-slate-200">SUS Score</td>
                <td className="py-2 text-slate-600 dark:text-slate-300">≥ 68</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-700">
                <td className="py-2 text-slate-700 dark:text-slate-200">UTAUT Satisfaction</td>
                <td className="py-2 text-slate-600 dark:text-slate-300">Positive response to all constructs</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-700">
                <td className="py-2 text-slate-700 dark:text-slate-200">Task Completion Rate</td>
                <td className="py-2 text-slate-600 dark:text-slate-300">&gt; 80%</td>
              </tr>
              <tr>
                <td className="py-2 text-slate-700 dark:text-slate-200">Time Efficiency</td>
                <td className="py-2 text-slate-600 dark:text-slate-300">38% reduction in review time (Babatunde et al., 2025)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}