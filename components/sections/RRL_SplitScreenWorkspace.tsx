import SplitScreenWorkspace from "./SplitScreenWorkspace";

export default function RRL_SplitScreenWorkspace() {
  return (
    <section id="rrl-split-screen">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Split‑Screen Annotation Workspace{" "}
          <span className="text-royal dark:text-blue-300">(Specific Objective 2)</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          This objective aims to develop a dual‑pane interface that allows simultaneous
          manuscript review and evaluation. The subsections below provide the theoretical
          foundation – from cognitive load reduction to collaborative work – that justifies
          this design choice.
        </p>
      </div>

      {/* 2.2.1–2.2.4 are contained within SplitScreenWorkspace; we just add an overview */}
      <div className="mb-4">
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          The literature under this section is organised into four themes: Cognitive Load
          Theory, Computer‑Supported Cooperative Work, Human‑Computer Interaction, and Document
          Review Interfaces. Together they demonstrate that an integrated, split‑screen
          environment reduces mental effort, supports collaborative annotation, and improves
          review quality. Each theme closes with a dedicated “Relevance to AURORA” note.
        </p>
      </div>
      <SplitScreenWorkspace />
    </section>
  );
}