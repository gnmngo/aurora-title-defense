export default function Synthesis() {
  return (
    <section id="synthesis">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">
          Synthesis of the State‑of‑the‑Art
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          The reviewed literature reveals consistent findings across four areas relevant to AURORA's specific objectives.
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Role‑Based Access Control",
              text: "Ferraiolo and Kuhn (1992) established RBAC as a non‑discretionary access control mechanism that provides a means of naming and describing relationships between individuals and rights. Research on paperless systems (Bihary & Shrader, 1994; Sherman & Freeman, 2007; Kamal, 2021) confirms that access control is essential for protecting sensitive information. ISO/IEC 27001:2022 provides comprehensive security requirements including access control and audit logging. Research consistently demonstrates that RBAC simplifies administration and supports organizational structures. This supports the implementation of RBAC in AURORA.",
            },
            {
              title: "Split‑Screen Workspace",
              text: "Sweller (1988) established Cognitive Load Theory, demonstrating that split attention effects reduce learning efficiency when multiple information sources must be integrated. Research on Hypertext (Kellett, 1989) and electronic feedback (Kavadlo, 2013) shows that integrated interfaces and annotation improve document review. CSCW research (Grudin, 1994) establishes that collaborative systems must support communication and coordination. Studies on thesis management (Molinatto, 2025; Erradi, 2012) confirm that well designed interfaces improve user satisfaction. This supports the implementation of a split screen workspace in AURORA.",
            },
            {
              title: "Rubric‑Based Assessment",
              text: "Spady (1994) established OBE principles, emphasizing clear outcomes and aligned assessment. Research on capstone assessment (Erradi, 2012; Azmi, 2025) demonstrates that rubrics with clearly defined criteria improve evaluation consistency. Studies on digital grading (Chio et al., 2022; Kurniawan et al., 2021) confirm that digital rubrics improve grading efficiency and transparency. Research on formative assessment (Black & Wiliam, 1998; Kavadlo, 2013) shows that timely, specific feedback improves learning outcomes. This supports the implementation of rubric based assessment in AURORA.",
            },
            {
              title: "System Evaluation",
              text: "Venkatesh et al. (2003) developed UTAUT, establishing that performance expectancy, effort expectancy, social influence, and facilitating conditions predict technology acceptance. Tatlı et al. (2024) validated UTAUT for paperless technologies, finding that performance expectancy and effort expectancy are strongest predictors. Brooke (1996) developed SUS, providing a reliable measure of perceived usability. Research (Sauro & Lewis, 2016; Bangor et al., 2009) established the SUS average of 68 as a benchmark. This supports the evaluation of AURORA using UTAUT and SUS.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}