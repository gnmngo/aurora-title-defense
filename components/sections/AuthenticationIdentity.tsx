export default function AuthenticationIdentity() {
  return (
    <section id="authentication-identity">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Authentication and Identity Management</h2>

        <div className="space-y-3 mb-6">
          {[
            { author: "Kellett (1989)", text: "explored Hypertext for information retrieval, establishing that secure authentication is essential for protecting sensitive information in digital systems." },
            { author: "Bajrami (2024)", text: "developed an e‑Thesis Repository System, establishing that authentication and identity management are essential for secure access to academic documents." },
            { author: "Perera (2018)", text: "developed a web‑based paperless meeting management system, establishing that authentication is essential for managing user access." },
            { author: "Chio et al. (2022)", text: "developed THESIST, establishing that secure login and authentication are essential for protecting thesis information." },
            { author: "Molinatto (2025)", text: "found that users expect secure access to their academic information when redesigning thesis management systems." },
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

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-800/40">
          <p className="text-xs font-semibold text-royal dark:text-blue-300 uppercase tracking-wide mb-2">Relevance to AURORA</p>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            AURORA implements authentication via university credentials, leveraging the existing institutional identity management system. The system implements secure session management and role based access enforcement, ensuring that only authorized users can access the system.
          </p>
        </div>
      </div>
    </section>
  );
}