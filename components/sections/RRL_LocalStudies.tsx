import LocalThesisSystems from "./LocalThesisSystems";
import ComparisonTable from "./ComparisonTable";

export default function RRL_LocalStudies() {
  return (
    <section id="rrl-local-studies">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Local Thesis and Capstone Management Systems
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          A review of Philippine systems (THESIST, REPOCAP, AcademiaVault) provides context
          for AURORA’s innovation. While these platforms offer digital repositories and
          scheduling, none combine split‑screen annotation, rubric‑based auto‑scoring, and
          theory‑driven evaluation in one integrated solution.
        </p>
      </div>
      <LocalThesisSystems />
      <div className="mt-4"><ComparisonTable /></div>
    </section>
  );
}