export default function SplitScreenWorkspace() {
  return (
    <section id="split-screen-workspace">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Split‑Screen Annotation Workspace</h2>

          {/* Cognitive Load Theory */}
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-3">Cognitive Load Theory</h3>
          <div className="space-y-3 mb-4">
            {[
              { author: "Sweller (1988)", text: "introduced Cognitive Load Theory, distinguishing between intrinsic load, extraneous load, and germane load. The split‑attention effect is especially relevant to article review tasks." },
              { author: "Kellett (1989)", text: "examined Hypertext for information retrieval, illustrating that Hypertext facilitates navigation among interconnected documents, diminishing cognitive effort." },
              { author: "Kavadlo (2013)", text: "found that electronic comments reduce cognitive strain by offering integrated and accessible input." },
              { author: "Erradi (2012)", text: "presented EasyCapstone, demonstrating that systematic review processes reduce cognitive burden." },
              { author: "Molinatto (2025)", text: "concluded that interfaces with distinct visual hierarchy and unified information presentation enhance user satisfaction." },
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
              Cognitive Load Theory is the theoretical foundation for AURORA&rsquo;s split‑screen workspace. By presenting manuscripts and evaluation rubrics simultaneously, the system reduces the split attention effect and minimizes extraneous cognitive load. Panelists can focus on substantive evaluation rather than mentally integrating separate documents.
            </p>
          </div>

          {/* CSCW */}
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Computer‑Supported Cooperative Work (CSCW)</h3>
          <div className="space-y-3 mb-4">
            {[
              { author: "Grudin (1994)", text: "described how technology supports collaborative work, emphasizing that designers must attend carefully to meaning." },
              { author: "Goldman and Baker (2021)", text: "used a journal review system to track ETDs, generating digital signature pages and monitoring progress." },
              { author: "Molinatto (2025)", text: "and Azmi (2025) showed that collaborative functionalities improve thesis administration." },
              { author: "Schopfel et al. (2025)", text: "examined ETD programs, determining that collaborative workflows are crucial for efficient ETD management." },
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
              The ideas of CSCW are pertinent to AURORA&rsquo;s collaborative functionalities, including real time annotation, presence indicators, and workspace synchronization. The system enables multiple panelists to work simultaneously on manuscript review, with awareness of each other&rsquo;s activities. This supports the collaborative nature of capstone defense evaluation.
            </p>
          </div>

          {/* HCI */}
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Human‑Computer Interaction and Interface Design</h3>
          <div className="space-y-3 mb-4">
            {[
              { author: "Kavadlo (2013)", text: "noted electronic comments allow instructors to revise and replace comments easily, improving feedback quality." },
              { author: "Molinatto (2025)", text: "found card‑based visualization more effective than tabular representation for organizing large amounts of information." },
              { author: "Kurniawan et al. (2021)", text: "developed SIMONTA, establishing that responsive interface design improves user satisfaction." },
              { author: "Bajrami (2024)", text: "and Perera (2018) emphasized that user‑friendly, intuitive interfaces are essential for system usability." },
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
              AURORA&rsquo;s interface follows user centered design principles, ensuring consistency, appropriate feedback, and user control. The split screen design reduces cognitive demands by providing integrated views of manuscripts and evaluation rubrics. The interface is evaluated through usability testing to ensure it meets user needs.
            </p>
          </div>

          {/* Document Review and Annotation */}
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Document Review and Annotation Interfaces</h3>
          <div className="space-y-3 mb-4">
            {[
              { author: "Kellett (1989)", text: "explored Hypertext as a step toward paperless environments, demonstrating navigation among interconnected papers." },
              { author: "Babatunde et al. (2025)", text: "achieved 85% instructor satisfaction and 38% time reduction with a Git‑based submission system." },
              { author: "Chio et al. (2022)", text: "developed THESIST; 94% of respondents found it user‑friendly." },
              { author: "Molinatto (2025)", text: "and Kavadlo (2013) demonstrated that electronic annotation improves review quality and feedback." },
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
              The split screen workspace enables panelists to annotate manuscripts while simultaneously completing rubric based evaluations. This integrated approach reduces cognitive load and supports focused evaluation, drawing on the demonstrated benefits of electronic annotation in academic review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}