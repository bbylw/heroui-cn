import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ComponentsSection } from "@/components/components-section";
import { ComponentShowcase } from "@/components/showcase-section";
import { PackagesSection } from "@/components/packages-section";
import { QuickStartSection } from "@/components/quickstart-section";
import { ThemingSection } from "@/components/theming-section";
import { StylingSection } from "@/components/styling-section";
import { UseCasesSection } from "@/components/usecases-section";
import { EcosystemSection } from "@/components/ecosystem-section";
import { AISection } from "@/components/ai-section";
import { VersionsSection } from "@/components/versions-section";
import { ComparisonSection } from "@/components/comparison-section";
import { FAQSection } from "@/components/faq-section";
import { CommunitySection } from "@/components/community-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PhilosophySection />
      <ComponentsSection />
      <ComponentShowcase />
      <PackagesSection />
      <QuickStartSection />
      <ThemingSection />
      <StylingSection />
      <UseCasesSection />
      <EcosystemSection />
      <AISection />
      <VersionsSection />
      <ComparisonSection />
      <FAQSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
