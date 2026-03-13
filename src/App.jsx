import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProductCarousel } from './components/ProductCarousel'; // El carrusel
import { WhyChooseSection } from './components/WhyChooseSection';
import { SolutionsSection } from "./components/SolutionsSection";
import { BlogSection } from './components/BlogSection';
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Impacto inicial */}
        <HeroSection />
        
        {/* Muestra de productos inmediata */}
        <ProductCarousel /> 
        
        {/* Argumentos de venta y catálogo detallado */}
        <WhyChooseSection />
        <SolutionsSection />
        
        {/* Contenido de valor antes del cierre */}
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}