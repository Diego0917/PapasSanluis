import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
// ProductCarousel quitado
import { WhyChooseSection } from "./components/WhyChooseSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { BlogSection } from "./components/BlogSection";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        {/* El carrusel ya no está aquí */}

        <WhyChooseSection />
        <SolutionsSection />

        <div className="relative z-10 w-full bg-gray-50">
          <BlogSection />
        </div>
      </main>

      {/* Aquí NO ponemos el Footer porque ya lo tienes en el archivo Root */}
    </div>
  );
}