export default function RoleBasedAccessControl() {
  return (
    <section id="role-based-access-control">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Role‑Based Access Control System</h2>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">RBAC Framework</h3>
        <div className="space-y-3 mb-6">
          {[
            {
              author: "Ferraiolo and Kuhn (1992)",
              text: "established RBAC as a non‑discretionary access control method that determines access decisions based on the roles a user fulfills inside an organization. Their foundational research demonstrated that RBAC facilitates the identification and articulation of links between individuals and rights, hence addressing the secure processing requirements of commercial and governmental entities.",
            },
            {
              author: "Bihary and Shrader (1994)",
              text: "investigated access control in paperless information systems, determining that digital filing systems necessitate strong authentication and authorization procedures to safeguard sensitive information. Their analysis revealed that organizations with clearly established access controls had fewer security breaches.",
            },
            {
              author: "Sherman and Freeman (2007)",
              text: "examined paperless file systems throughout DoD contracting entities, highlighting that access control and security are essential issues in digital document management.",
            },
            {
              author: "Drake et al. (1992)",
              text: "investigated advanced automation on procurement processes, concluding that information systems must enforce suitable access rules to protect sensitive information.",
            },
            {
              author: "Kamal (2021)",
              text: "deployed a Student Information Management System (SIMS), illustrating that role‑based access with varying authorization levels enhanced security and streamlined system management.",
            },
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

        {/* RELEVANCE TO AURORA — VERBATIM */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-800/40">
          <p className="text-xs font-semibold text-royal dark:text-blue-300 uppercase tracking-wide mb-2">Relevance to AURORA</p>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            The RBAC framework establishes the theoretical basis for AURORA&rsquo;s access control system. The system encompasses three primary roles—Student, Panelist, and System Administrator—each with designated access according to their respective work tasks. Panelists include academic advisers, panel members, and external assessors, whereas System Administrators comprise program coordinators and college deans. This efficient role model facilitates authentication and authorization, guaranteeing users access only the resources related to their jobs, which aligns with the concept of least privilege, thus promoting the secure administration of important academic material.
          </p>
        </div>
      </div>
    </section>
  );
}