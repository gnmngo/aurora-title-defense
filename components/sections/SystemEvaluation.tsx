export default function SystemEvaluation() {
  return (
    <section id="system-evaluation">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">System Evaluation</h2>

        {/* UTAUT */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Unified Theory of Acceptance and Use of Technology (UTAUT)</h3>
        <div className="space-y-3 mb-4">
          {[
            { author: "Venkatesh et al. (2003)", text: "developed UTAUT, explaining 69% of the variance in user intentions through four determinants: performance expectancy, effort expectancy, social influence, and facilitating conditions." },
            { author: "Tatlı et al. (2024)", text: "applied UTAUT to paperless technology use across 13 Turkish institutions (N=726), finding performance expectation (β = 0.469) and effort expectation (β = 0.272) positively affected intention." },
            { author: "Isaeva and Yoon (2016)", text: "examined challenges of transitioning to a paperless university, establishing user acceptance as key." },
            { author: "Bihary and Shrader (1994)", text: "and Sherman and Freeman (2007) emphasized user acceptance as essential for system implementation." },
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
            UTAUT provides the framework for evaluating user acceptance of AURORA. Performance expectancy (improved efficiency) and effort expectancy (ease of use) are expected to predict adoption. The evaluation includes demographic moderators to understand adoption patterns.
          </p>
        </div>

        {/* TAM */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Technology Acceptance Model (TAM)</h3>
        <div className="space-y-3 mb-4">
          {[
            { author: "Davis (1989)", text: "introduced TAM, establishing perceived usefulness and perceived ease of use as primary determinants of technology acceptance." },
            { author: "Davis et al. (1989)", text: "compared TAM with the Theory of Reasoned Action, finding TAM provided superior predictive validity." },
            { author: "Venkatesh and Davis (2000)", text: "extended TAM to TAM2, incorporating social influence and cognitive instrumental processes." },
            { author: "Venkatesh (2000)", text: "and Bagozzi et al. (1999) explored determinants of ease of use and the role of emotions in acceptance." },
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
            TAM complements UTAUT by emphasizing perceived usefulness and ease of use as predictors of adoption. AURORA&rsquo;s user acceptance evaluation uses TAM and UTAUT constructs to assess user satisfaction and adoption readiness.
          </p>
        </div>

        {/* SUS */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">System Usability Scale (SUS)</h3>
        <div className="space-y-3 mb-4">
          {[
            { author: "Brooke (1996)", text: "developed the SUS, a 10‑item questionnaire for measuring perceived usability." },
            { author: "Sauro and Lewis (2016)", text: "established the average SUS score is 68, representing the 50th percentile." },
            { author: "Bangor et al. (2009)", text: "provided an adjective rating scale: Good ≥ 68, Excellent ≥ 80.3." },
            { author: "Kortum and Bangor (2023)", text: "confirmed SUS reliability; Tullis and Albert (2013) and Lewis and Sauro (2024) provided practical guidance." },
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
            AURORA&rsquo;s usability evaluation uses SUS, targeting a score of ≥ 68 to demonstrate above average usability. The benchmark of 68 provides a clear target for evaluation, and the adjective rating scale provides a meaningful interpretation of results.
          </p>
        </div>

        {/* Usability Testing Methods */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Usability Testing Methods</h3>
        <div className="space-y-3 mb-4">
          {[
            { author: "Nielsen (1993)", text: "established that testing with five users identifies approximately 85% of usability problems." },
            { author: "Molich and Nielsen (1990)", text: "developed heuristic evaluation methods for identifying usability problems efficiently." },
            { author: "Lewis (2024)", text: "examined sample sizes, finding 10–15 participants typically sufficient." },
            { author: "Schrepp (2023)", text: "provided guidance on SUS score interpretation for benchmarking." },
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
            AURORA&rsquo;s usability evaluation involves 15–20 representative users performing structured tasks, following established methods for usability testing. SUS is used as the primary measure of perceived usability.
          </p>
        </div>

        {/* User Acceptance Testing */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">User Acceptance Testing</h3>
        <div className="space-y-3 mb-4">
          {[
            { author: "Rogers (1962, 2003)", text: "developed Diffusion of Innovations, identifying factors influencing adoption: relative advantage, compatibility, complexity, trialability, and observability." },
            { author: "Dillon and Morris (1996)", text: "confirmed TAM predictions across multiple contexts." },
            { author: "Parasuraman (2000)", text: "developed the Technology Readiness Index (TRI)." },
            { author: "Hu et al. (2023)", text: "found perceived usefulness, ease of use, and compatibility predict adoption of academic systems." },
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
            AURORA&rsquo;s user acceptance evaluation considers adoption factors including performance expectancy, effort expectancy, and compatibility with work practices, using established models such as UTAUT and TAM to assess user satisfaction and adoption readiness.
          </p>
        </div>
      </div>
    </section>
  );
}