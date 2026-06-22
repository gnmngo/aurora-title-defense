interface ChapterDividerProps {
  number: string;   // e.g. "I", "II", "III"
  title: string;    // e.g. "Introduction"
  id: string;       // e.g. "chapter-1"
}

export default function ChapterDivider({ number, title, id }: ChapterDividerProps) {
  return (
    <section
      id={id}
      className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden 
                 hover:border-royal/30 dark:hover:border-blue-400/30 hover:shadow-md transition-all duration-200"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
      <div className="ml-4">
        <p className="text-sm uppercase tracking-widest text-royal dark:text-blue-300 font-semibold mb-1">
          Chapter {number}
        </p>
        <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white">{title}</h2>
      </div>
    </section>
  );
}