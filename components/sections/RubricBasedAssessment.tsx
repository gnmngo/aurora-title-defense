export default function RubricBasedAssessment() {
  return (
    <section id="rubric-assessment">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Rubric‑Based Assessment Module</h2>

        {/* OBE Framework */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Outcome‑Based Education Framework</h3>
        <div className="space-y-3 mb-4">
          {[
            { author: "Spady (1994)", text: "defined OBE, establishing that rubrics bring objectivity to subjective assessments." },
            { author: "Erradi (2012)", text: "incorporated rubric‑based assessment with a five‑point descriptive scale." },
            { author: "Azmi (2025)", text: "implemented an assessment configurator with rubric management, criteria weighting, and automatic score calculation." },
            { author: "Kurniawan et al. (2021)", text: "established that assessment modules are essential for thesis management." },
          ].map((item) => (
            <div
              key={item.author}
              className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
            >
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">{item.author}</strong> {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800/40 mb-6">
          <p className="text-xs font-semibold text-royal dark:text-blue-300 uppercase tracking-wide mb-1">Relevance to AURORA</p>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            OBE principles inform AURORA&rsquo;s rubric based assessment module. Administrators can configure college specific rubrics with weighted criteria, enabling panelists to score manuscripts against standardized criteria. Automatic calculation of scores ensures consistency and transparency.
          </p>
        </div>

        {/* Rubric Design and Development */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Rubric Design and Development</h3>
        <div className="space-y-3 mb-4">
          {[
            { author: "Chio et al. (2022)", text: "demonstrated the effectiveness of rubric‑based assessment in thesis defense." },
            { author: "Azmi (2025)", text: "found that digital rubrics significantly reduced human error and improved transparency." },
            { author: "Erradi (2012)", text: "established that rubrics should have clearly defined criteria with descriptive performance levels." },
            { author: "Kurniawan et al. (2021)", text: "found that structured assessment modules improve evaluation efficiency." },
          ].map((item) => (
            <div
              key={item.author}
              className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
            >
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">{item.author}</strong> {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800/40 mb-6">
          <p className="text-xs font-semibold text-royal dark:text-blue-300 uppercase tracking-wide mb-1">Relevance to AURORA</p>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            AURORA&rsquo;s rubric module enables configuration of rubrics with weighted criteria, providing detailed feedback on specific performance dimensions. The system supports college specific customization while maintaining consistent evaluation standards.
          </p>
        </div>

        {/* Digital Grading and Assessment Systems */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Digital Grading and Assessment Systems</h3>
        <div className="space-y-3 mb-4">
          {[
            { author: "Azmi (2025)", text: "demonstrated the effectiveness of digital grading systems." },
            { author: "Erradi (2012)", text: "found automated score calculation reduces administrative burden." },
            { author: "Molinatto (2025)", text: "found users value integrated systems that reduce switching between applications." },
            { author: "Schopfel et al. (2025)", text: "and Goldman and Baker (2021) confirmed digital systems improve thesis management efficiency." },
          ].map((item) => (
            <div
              key={item.author}
              className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
            >
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">{item.author}</strong> {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800/40 mb-6">
          <p className="text-xs font-semibold text-royal dark:text-blue-300 uppercase tracking-wide mb-1">Relevance to AURORA</p>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            AURORA&rsquo;s rubric module implements best practices from digital assessment platforms, enabling configurable rubrics, automatic score calculation, and integration with manuscript review workflows.
          </p>
        </div>

        {/* Assessment Consistency and Reliability */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Assessment Consistency and Reliability</h3>
        <div className="space-y-3 mb-4">
          {[
            { author: "Erradi (2012)", text: "established that clearly defined criteria improve inter‑rater reliability." },
            { author: "Chio et al. (2022)", text: "found standardized processes reduce variation in assessment." },
            { author: "Azmi (2025)", text: "found digital rubrics reduce human error and improve grading consistency." },
            { author: "Kurniawan et al. (2021)", text: "found structured criteria produce more reliable results." },
          ].map((item) => (
            <div
              key={item.author}
              className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
            >
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">{item.author}</strong> {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800/40 mb-6">
          <p className="text-xs font-semibold text-royal dark:text-blue-300 uppercase tracking-wide mb-1">Relevance to AURORA</p>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            AURORA&rsquo;s rubric module supports consistent evaluation across multiple panelists, reducing subjectivity and improving reliability. The system provides clear criteria and automated score calculation to ensure consistent assessment.
          </p>
        </div>

        {/* Formative Assessment and Feedback */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Formative Assessment and Feedback</h3>
        <div className="space-y-3 mb-4">
          {[
            { author: "Black and Wiliam (1998)", text: "showed that frequent, specific feedback yields substantial learning gains." },
            { author: "Kavadlo (2013)", text: "demonstrated electronic feedback allows more detailed, focused comments." },
            { author: "Molinatto (2025)", text: "found users value systems that provide timely, specific feedback." },
            { author: "Azmi (2025)", text: "found students appreciate detailed feedback showing strengths and weaknesses." },
          ].map((item) => (
            <div
              key={item.author}
              className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
            >
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">{item.author}</strong> {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800/40">
          <p className="text-xs font-semibold text-royal dark:text-blue-300 uppercase tracking-wide mb-1">Relevance to AURORA</p>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            AURORA&rsquo;s rubric based assessment provides structured feedback that is task specific, timely, and actionable, supporting formative assessment principles. Panelist comments and rubric scores are immediately visible to students upon evaluation completion, enabling timely revisions and iterative improvement.
          </p>
        </div>
      </div>
    </section>
  );
}