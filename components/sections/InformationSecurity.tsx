export default function InformationSecurity() {
  return (
    <section id="information-security">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Information Security Standards</h2>

        <div className="space-y-3 mb-6">
          {[
            { author: "ISO/IEC 27001:2022", text: "establishes the international standard for information security management systems, providing requirements for establishing, implementing, maintaining, and continuously improving information security. Relevant requirements include access control (Section 5.15), identity management (Section 5.16), authentication information management (Section 5.17), access rights management (Section 5.18), and incident management (Sections 5.24–5.27)." },
            { author: "Sherman and Freeman (2007)", text: "examined the legal and regulatory requirements for paperless file systems, determining that organizations are required to adhere to security standards while adopting digital document management." },
            { author: "Bihary and Shrader (1994)", text: "concluded that security and compliance are critical factors in the introduction of digital paperless systems." },
            { author: "Isaeva and Yoon (2016)", text: "investigated challenges associated with shifting to a paperless academic setting, determining that security is a significant issue in digital document management." },
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
            AURORA&rsquo;s security architecture complies to ISO/IEC 27001 standards with extensive access restrictions, identity management, and incident response protocols. The system is designed in order to facilitate compliance to institutional security policies and data protection rules.
          </p>
        </div>
      </div>
    </section>
  );
}