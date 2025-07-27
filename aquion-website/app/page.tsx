import CTA from "@/components/cta";
import { FrequentlyAskedQuestions } from "@/components/faq";
import { HydropanelFeatures } from "@/components/hydropanel-features";
import { Hero } from "@/components/hero";
import { PartnerOrganizations } from "@/components/partner-organizations";
import { ImpactStories } from "@/components/impact-stories";
import { TechSpecifications } from "@/components/tech-specifications";

export default function Home() {
  return (
    <div>
      <Hero />
      <HydropanelFeatures />
      <ImpactStories />
      <TechSpecifications />
      <PartnerOrganizations />
      <FrequentlyAskedQuestions />
      <CTA />
    </div>
  );
}
