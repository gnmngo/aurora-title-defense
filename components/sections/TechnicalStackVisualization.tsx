export default function TechnicalStackVisualization() {
  return (
    <section id="technical-stack">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Technical Stack Visualization</h2>
        <div className="space-y-6">
          {/* Frontend */}
          <div className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Next.js 15.x (Framework)", "TypeScript 5.x (Language)", "Tailwind CSS 4.x (Styling)", "React-PDF (PDF Rendering)"].map((item) => (
                <span key={item} className="bg-white dark:bg-slate-800 rounded-lg px-4 py-2 text-sm border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* Backend */}
          <div className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Node.js 20.x (Runtime)", "Supabase (Database, Auth, Storage, Realtime)"].map((item) => (
                <span key={item} className="bg-white dark:bg-slate-800 rounded-lg px-4 py-2 text-sm border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* Development Tools */}
          <div className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
              Development Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {["VS Code (Editor)", "Git + GitHub (Version Control)", "Google Chrome (Testing)", "Windows 11 (OS)"].map((item) => (
                <span key={item} className="bg-white dark:bg-slate-800 rounded-lg px-4 py-2 text-sm border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* Deployment */}
          <div className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 
                         hover:shadow-md hover:scale-[1.01] hover:border-royal dark:hover:border-blue-400 
                         hover:bg-blue-50/30 dark:hover:bg-slate-600/50 transition-all duration-200 cursor-default">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
              Deployment
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white dark:bg-slate-800 rounded-lg px-4 py-2 text-sm border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium">
                Vercel (Hosting)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}