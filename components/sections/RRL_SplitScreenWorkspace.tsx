export default function RRL_SplitScreenWorkspace() {
  return (
    <section id="rrl-split-screen">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Split‑Screen Annotation Workspace
          </h2>
          <p className="text-sm text-royal dark:text-blue-300 font-medium mb-6">Specific Objective 2</p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-4">
            <p>
              <strong className="text-slate-900 dark:text-white">Sweller’s (1988) Cognitive Load Theory</strong>
              provides the central justification for AURORA’s split‑screen interface: the split‑attention
              effect forces panelists to mentally integrate manuscripts and evaluation forms, increasing
              extraneous load. By presenting both panels simultaneously,{" "}
              <span className="text-royal dark:text-blue-300 font-medium">AURORA reduces cognitive effort</span>{" "}
              and improves review efficiency.
            </p>
            <p>
              Studies on <strong>Hypertext navigation (Kellett, 1989)</strong> and electronic feedback
              (<strong>Kavadlo, 2013</strong>) show that integrated interfaces and annotation reduce mental
              strain. <strong>Computer‑Supported Cooperative Work</strong> research (<strong>Grudin, 1994</strong>)
              confirms that real‑time annotation and presence awareness support collaborative evaluation.
              Practical implementations like <strong>EasyCapstone (Erradi, 2012)</strong> and findings from
              <strong> Molinatto (2025)</strong> further validate that unified workspaces enhance user
              satisfaction and consistency.
            </p>
            <p>
              AURORA’s interface also follows <strong className="text-slate-900 dark:text-white">user‑centered design</strong>{" "}
              principles, with card‑based layouts (<strong>Molinatto, 2025</strong>) and responsive behaviour
              (<strong>Kurniawan et al., 2021</strong>) that have been shown to improve adoption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}