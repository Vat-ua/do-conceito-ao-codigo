import ChoiceSection from "./components/sections/ChoiceSection";
import ClosingSection from "./components/sections/ClosingSection";
import EvolutionSection from "./components/sections/EvolutionSection";
import FaqSection from "./components/sections/FaqSection";
import GettingStartedSection from "./components/sections/GettingStartedSection";
import HeroSection from "./components/sections/HeroSection";
import SiteFooter from "./components/sections/SiteFooter";
import TopicsSection from "./components/sections/TopicsSection";

export default function App() {
  return (
    <div className="page">
      <a href="#evolution" className="skip-link focus-ring">
        Pular para a evolução
      </a>

      <HeroSection />

      <main>
        <TopicsSection />
        <ChoiceSection />
        <EvolutionSection />
        <GettingStartedSection />
        <FaqSection />
        <ClosingSection />
      </main>

      <SiteFooter />
    </div>
  );
}
