export default function RRL_RoleBasedAccess() {
  return (
    <section id="rrl-role-based-access">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Role‑Based Access Control System
          </h2>
          <p className="text-sm text-royal dark:text-blue-300 font-medium mb-6">Specific Objective 1</p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-4">
            <p>
              <strong className="text-slate-900 dark:text-white">Ferraiolo and Kuhn (1992)</strong> established
              Role‑Based Access Control as a non‑discretionary method that grants permissions based on
              organisational roles—an approach ideally suited for academic institutions with clear hierarchies.
              Subsequent research on paperless systems
              (<strong>Bihary & Shrader, 1994</strong>; <strong>Sherman & Freeman, 2007</strong>;{" "}
              <strong>Kamal, 2021</strong>) confirmed that well‑defined access controls reduce security
              breaches and simplify administration.
            </p>
            <p>
              For <span className="text-royal dark:text-blue-300 font-medium">AURORA</span>, these findings
              directly inform the design of a <strong className="text-slate-900 dark:text-white">three‑role structure</strong>—
              Student, Panelist, and System Administrator—each with permissions scoped to their
              responsibilities. <strong>Bajrami (2024)</strong> and <strong>Chio et al. (2022)</strong> demonstrated
              that university‑credential‑based authentication protects sensitive academic documents, a model
              AURORA adopts by integrating with PSU’s existing identity system.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">ISO/IEC 27001:2022</strong> provides the
              security framework, and studies by <strong>Isaeva & Yoon (2016)</strong> stress that security
              must be built into the architecture from the start. AURORA embeds these controls, while
              <strong className="text-slate-900 dark:text-white"> audit trail requirements</strong> (ISO 27001
              §8.15) are met through comprehensive logging of all submissions, evaluations, and workflow
              changes, ensuring <span className="text-royal dark:text-blue-300 font-medium">accreditation‑ready accountability</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}