import TitleHero from "@/components/sections/TitleHero";
import ChapterDivider from "@/components/sections/ChapterDivider";
import ProjectContext from "@/components/sections/ProjectContext";
import PurposeDescription from "@/components/sections/PurposeDescription";
import Objectives from "@/components/sections/Objectives";
import ScopeLimitations from "@/components/sections/ScopeLimitations";
import SignificanceOfStudy from "@/components/sections/SignificanceOfStudy";
import DefinitionOfTerms from "@/components/sections/DefinitionOfTerms";
import RRL_RoleBasedAccess from "@/components/sections/RRL_RoleBasedAccess";
import RRL_SplitScreenWorkspace from "@/components/sections/RRL_SplitScreenWorkspace";
import RRL_RubricBasedAssessment from "@/components/sections/RRL_RubricBasedAssessment";
import RRL_SystemEvaluation from "@/components/sections/RRL_SystemEvaluation";
import RRL_LocalStudies from "@/components/sections/RRL_LocalStudies";
import Synthesis from "@/components/sections/Synthesis";
import GapBridged from "@/components/sections/GapBridged";
import SystemArchitecture from "@/components/sections/SystemArchitecture";
import SoftwareRequirements from "@/components/sections/SoftwareRequirements";
import HardwareRequirements from "@/components/sections/HardwareRequirements";
import SystemFeatures from "@/components/sections/SystemFeatures";
import EvaluationPlan from "@/components/sections/EvaluationPlan";
import TechnicalStackVisualization from "@/components/sections/TechnicalStackVisualization";
import Workflow from "@/components/sections/Workflow";
import SplitScreenPreview from "@/components/sections/SplitScreenPreview";
import ComparativeAnalysis from "@/components/sections/ComparativeAnalysis";

export default function TitleDefensePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <TitleHero />

      {/* Chapter I */}
      <ChapterDivider id="chapter-1" number="I" title="Introduction" />
      <ProjectContext />
      <PurposeDescription />
      <Objectives />
      <ScopeLimitations />
      <SignificanceOfStudy />
      <DefinitionOfTerms />

      {/* Chapter II */}
      <ChapterDivider id="chapter-2" number="II" title="Review of Related Literature" />
      <RRL_RoleBasedAccess />
      <RRL_SplitScreenWorkspace />
      <RRL_RubricBasedAssessment />
      <RRL_SystemEvaluation />
      <RRL_LocalStudies />
      <Synthesis />
      <GapBridged />

      {/* Chapter III */}
      <ChapterDivider id="chapter-3" number="III" title="Technical Background" />
      <SystemArchitecture />
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
      <SystemFeatures />
      <EvaluationPlan />
      <TechnicalStackVisualization />
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          AURORA Workflow
        </h2>
        <Workflow />
      </div>

      {/* Comparative Analysis – new section */}
      <ComparativeAnalysis />
    </div>
  );
}