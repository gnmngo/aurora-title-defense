export default function AuditTrail() {
  return (
    <section id="audit-trail">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Audit Trail and Accountability</h2>

        <div className="space-y-3 mb-6">
          {[
            { author: "ISO/IEC 27001:2022 Section 8.15", text: "establishes logging requirements for information systems, mandating that logs record activities, exceptions, faults, and other relevant events. Requirements include log integrity protection, time synchronization (Section 8.17), and regular log review." },
            { author: "Bihary and Shrader (1994)", text: "examined the significance of audit trails in paperless information systems, demonstrating that logging is crucial for accountability and compliance." },
            { author: "Sherman and Freeman (2007)", text: "examined the policies and advantages of paperless filing systems, determining that audit trails are crucial for recording system operations." },
            { author: "Drake et al. (1992)", text: "investigated the influence of advanced automation on procurement processes, demonstrating that audit trails are crucial for recording system operations and maintaining accountability." },
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
            AURORA employs thorough audit logging in accordance with ISO/IEC 27001 standards, documenting all user activities such as document submissions, evaluations, comments, and process transitions. Logs are protected against alteration and regularly examined for adherence to compliance standards. This facilitates traceability for accreditation objectives and aids in incident investigation.
          </p>
        </div>
      </div>
    </section>
  );
}