const software = [
  { software: "Next.js", spec: "15.x", desc: "Frontend framework providing page routing, server-side rendering, and API endpoints in one project" },
  { software: "Tailwind CSS", spec: "4.x", desc: "Utility-first CSS framework for building a clean, responsive, and consistent user interface" },
  { software: "TypeScript", spec: "5.x", desc: "Adds static typing to JavaScript, catching errors early and making the codebase more reliable" },
  { software: "Node.js", spec: "20.x", desc: "JavaScript runtime that runs Next.js and its server-side logic" },
  { software: "Supabase", spec: "Latest", desc: "Single backend service covering database, user authentication, manuscript storage, and real-time features" },
  { software: "React-PDF", spec: "Latest", desc: "Library that renders manuscript PDFs directly in the browser for panelist review" },
  { software: "Google Chrome", spec: "Latest", desc: "Primary browser used for testing the web application during development" },
  { software: "Git + GitHub", spec: "Latest", desc: "Version control system and cloud repository for tracking code changes and team collaboration" },
  { software: "Vercel", spec: "Latest", desc: "Hosting platform that builds, deploys, and serves the Next.js application online" },
];

export default function SoftwareRequirements() {
  return (
    <section id="software-requirements">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Software Requirements</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-2 font-semibold text-slate-900 dark:text-white">Software</th>
                <th className="text-left py-2 font-semibold text-slate-900 dark:text-white">Specification</th>
                <th className="text-left py-2 font-semibold text-slate-900 dark:text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              {software.map((s) => (
                <tr key={s.software} className="border-b border-slate-100 dark:border-slate-700">
                  <td className="py-2 text-slate-700 dark:text-slate-200 font-medium">{s.software}</td>
                  <td className="py-2 text-slate-600 dark:text-slate-400">{s.spec}</td>
                  <td className="py-2 text-slate-600 dark:text-slate-300">{s.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}