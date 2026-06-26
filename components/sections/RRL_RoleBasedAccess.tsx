import RoleBasedAccessControl from "./RoleBasedAccessControl";
import AuthenticationIdentity from "./AuthenticationIdentity";
import InformationSecurity from "./InformationSecurity";
import AuditTrail from "./AuditTrail";

export default function RRL_RoleBasedAccess() {
  return (
    <section id="rrl-role-based-access">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Role‑Based Access Control System{" "}
          <span className="text-royal dark:text-blue-300">(Specific Objective 1)</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          This objective aims to design a secure access system for three user roles. The
          subsections below cover the foundational framework, authentication, security
          standards, and accountability mechanisms that directly inform AURORA’s RBAC
          implementation.
        </p>
      </div>

      {/* 2.1.1 */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          2.1.1 Role‑Based Access Control (RBAC) Framework
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
          Ferraiolo and Kuhn (1992) introduced RBAC as a method to assign permissions based
          on organizational roles. Subsequent studies (Bihary & Shrader, 1994; Sherman &
          Freeman, 2007; Kamal, 2021) confirmed that role‑based access reduces security
          breaches and simplifies administration in paperless environments. These findings
          provide the blueprint for AURORA’s three‑role structure, ensuring that students,
          panelists, and administrators have precisely the access they need.
        </p>
        <RoleBasedAccessControl />
      </div>

      {/* 2.1.2 */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          2.1.2 Authentication and Identity Management
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
          Research on e‑thesis systems (Bajrami, 2024), paperless meeting management (Perera,
          2018), and thesis portals (Chio et al., 2022; Molinatto, 2025) consistently shows
          that secure, university‑credential‑based authentication is essential. AURORA adopts
          this model to verify users through the institution’s existing identity system,
          guaranteeing that only authorized individuals can access sensitive defense records.
        </p>
        <AuthenticationIdentity />
      </div>

      {/* 2.1.3 */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          2.1.3 Information Security Standards and Compliance
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
          ISO/IEC 27001:2022 outlines international best practices for information security,
          including access control, identity management, and incident response. Studies by
          Bihary & Shrader (1994) and Isaeva & Yoon (2016) stress that security must be
          embedded into system architecture. AURORA aligns with these standards, embedding
          security controls from the ground up.
        </p>
        <InformationSecurity />
      </div>

      {/* 2.1.4 */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          2.1.4 Audit Trail and Accountability
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
          ISO/IEC 27001 Section 8.15 requires logging of all significant events, and studies
          (Bihary & Shrader, 1994; Sherman & Freeman, 2007; Drake et al., 1992) demonstrate
          that audit trails are essential for accountability and compliance. AURORA logs every
          submission, evaluation, and workflow change, creating a verifiable record for
          accreditation.
        </p>
        <AuditTrail />
      </div>
    </section>
  );
}