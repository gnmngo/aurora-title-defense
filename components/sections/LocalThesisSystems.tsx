export default function LocalThesisSystems() {
  const systems = [
    {
      name: "THESIST – University of Science and Technology of Southern Philippines",
      author: "Chio et al. (2022)",
      text: "A web‑based thesis management portal that automates defense scheduling using a genetic algorithm. It centralizes thesis documents, minutes, rating sheets, and schedules. Evaluation showed 94% found it user‑friendly and 84% confirmed it aided the thesis process.",
    },
    {
      name: "REPOCAP – Mabalacat City College",
      author: "Antonio et al. (n.d.)",
      text: "A capstone management system with four‑access levels (Admin, Faculty, Student, Guest). Features include a project catalog, smart search, and a discussion forum. It provides a centralized platform for archiving completed projects.",
    },
    {
      name: "AcademiaVault – Mabalacat City College",
      author: "David et al. (n.d.)",
      text: "A centralized digital repository for capstone and thesis projects designed to enhance research accessibility and collaboration. Developed with a modified waterfall model and ISO 25010 evaluation, it received high ratings for functionality, usability, and security.",
    },
  ];

  return (
    <section id="local-thesis-systems">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          Local Thesis and Capstone Management Systems
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          In the Philippines, several higher education institutions have developed web‑based systems to manage
          theses and capstone projects, reflecting a growing trend toward digital transformation in academic
          processes.
        </p>

        {/* System cards */}
        <div className="space-y-4 mb-6">
          {systems.map((sys) => (
            <div
              key={sys.name}
              className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                {sys.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{sys.author}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{sys.text}</p>
            </div>
          ))}
        </div>

        {/* Relevance to AURORA */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-800/40">
          <p className="text-xs font-semibold text-royal dark:text-blue-300 uppercase tracking-wide mb-2">
            Relevance to AURORA
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            While these systems demonstrate significant progress in digitizing academic processes, they primarily
            focus on document storage, repository management, or basic submission workflows. THESIST includes
            automated defense scheduling but does not offer an integrated split‑screen workspace for simultaneous
            manuscript review and rubric‑based evaluation—a key innovation of the proposed AURORA system.
            Furthermore, AURORA leverages a modern tech stack including Next.js, React, TypeScript, Tailwind CSS,
            and Supabase, and is grounded in established theories like Cognitive Load Theory and UTAUT,
            distinguishing it from existing local implementations.
          </p>
        </div>
      </div>
    </section>
  );
}