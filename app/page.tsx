import TitleHero from "@/components/sections/TitleHero";
import ChapterDivider from "@/components/sections/ChapterDivider";
import ProjectContext from "@/components/sections/ProjectContext";
import PurposeDescription from "@/components/sections/PurposeDescription";
import Objectives from "@/components/sections/Objectives";
import ScopeLimitations from "@/components/sections/ScopeLimitations";
import SignificanceOfStudy from "@/components/sections/SignificanceOfStudy";
import DefinitionOfTerms from "@/components/sections/DefinitionOfTerms";
import RoleBasedAccessControl from "@/components/sections/RoleBasedAccessControl";
import AuthenticationIdentity from "@/components/sections/AuthenticationIdentity";
import InformationSecurity from "@/components/sections/InformationSecurity";
import AuditTrail from "@/components/sections/AuditTrail";
import SplitScreenWorkspace from "@/components/sections/SplitScreenWorkspace";
import RubricBasedAssessment from "@/components/sections/RubricBasedAssessment";
import SystemEvaluation from "@/components/sections/SystemEvaluation";
import GapBridged from "@/components/sections/GapBridged";
import SystemArchitecture from "@/components/sections/SystemArchitecture";
import SoftwareRequirements from "@/components/sections/SoftwareRequirements";
import HardwareRequirements from "@/components/sections/HardwareRequirements";
import SystemFeatures from "@/components/sections/SystemFeatures";
import EvaluationPlan from "@/components/sections/EvaluationPlan";
import TechnicalStackVisualization from "@/components/sections/TechnicalStackVisualization";
import Workflow from "@/components/sections/Workflow";
import SplitScreenPreview from "@/components/sections/SplitScreenPreview";

export default function TitleDefensePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <TitleHero />

      {/* Chapter I – Introduction */}
      <ChapterDivider id="chapter-1" number="I" title="Introduction" />
      <ProjectContext />
      <PurposeDescription />
      <Objectives />
      <ScopeLimitations />
      <SignificanceOfStudy />
      <DefinitionOfTerms />

      {/* Chapter II – Review of Related Literature */}
      <ChapterDivider id="chapter-2" number="II" title="Review of Related Literature" />
      <RoleBasedAccessControl />
      <AuthenticationIdentity />
      <InformationSecurity />
      <AuditTrail />
      <SplitScreenWorkspace />
      <RubricBasedAssessment />
      <SystemEvaluation />
      <GapBridged />

      {/* Chapter III – Technical Background */}
      <ChapterDivider id="chapter-3" number="III" title="Technical Background" />
      <SystemArchitecture />

      {/* Split‑Screen preview */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          Split‑Screen Workspace Preview
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          The figure below illustrates the dual‑pane evaluation interface.
        </p>
        <SplitScreenPreview />
      </div>

      <SoftwareRequirements />
      <HardwareRequirements />

      {/* System Features (now under Chapter 3) */}
      <SystemFeatures />

      {/* Evaluation Plan (under Chapter 3) */}
      <EvaluationPlan />

      {/* Technical Stack Visualization (under Chapter 3) */}
      <TechnicalStackVisualization />

      {/* Workflow (under Chapter 3) */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          AURORA Workflow
        </h2>
        <Workflow />
      </div>
    </div>
  );
}