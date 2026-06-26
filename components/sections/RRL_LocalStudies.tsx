export default function RRL_LocalStudies() {
  return (
    <section id="rrl-local-studies">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Local Thesis and Capstone Management Systems
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Related Philippine Studies</p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-4">
            <p>
              Philippine HEIs have developed systems such as <strong className="text-slate-900 dark:text-white">THESIST</strong>{" "}
              (USTP, automated scheduling via genetic algorithm),{" "}
              <strong className="text-slate-900 dark:text-white">REPOCAP</strong> (Mabalacat City College,
              four‑access‑level repository), and{" "}
              <strong className="text-slate-900 dark:text-white">AcademiaVault</strong> (MCC, digital repository
              with ISO 25010 evaluation). These systems successfully digitise document storage and basic
              workflows.
            </p>
            <p>
              However, <span className="text-royal dark:text-blue-300 font-medium">none of them</span> offers
              the integrated innovations that define AURORA: a{" "}
              <strong className="text-slate-900 dark:text-white">split‑screen annotation workspace</strong>,{" "}
              <strong className="text-slate-900 dark:text-white">rubric‑based auto‑scoring</strong>, and a
              systematic evaluation grounded in <strong>UTAUT</strong> and <strong>SUS</strong>. Furthermore,
              AURORA’s modern stack (Next.js, TypeScript, Supabase) ensures scalability and maintainability
              beyond what older PHP‑based implementations can provide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}