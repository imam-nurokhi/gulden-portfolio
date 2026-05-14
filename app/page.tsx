import { Header } from "@/components/header";
import { HeroSlider } from "@/components/hero-slider";
import { IntroSection } from "@/components/intro-section";
import { RecentProjects } from "@/components/recent-projects";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSlider />
      <IntroSection />
      <RecentProjects />
      <CTASection />
      <Footer />
    </main>
  );
}
