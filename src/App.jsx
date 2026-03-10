import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { Footer } from "./components/Footer";
import { WhyChooseSection } from './components/WhyChooseSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyChooseSection />
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
}