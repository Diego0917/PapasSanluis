import { useState } from "react";
import { Link } from "react-router"; // Recuperado del código 1
import { ChevronDown } from "lucide-react";
// CORREGIDO: Ahora usa la extensión .png
import sanLuisLogo from "../assets/sanluislogito.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Aceites",
    "Carnes",
    "Panes",
    "Francesa",
    "Apanados",
    "Congelados",
    "Salsas",
    "Vegetales",
    "Catálogo",
  ];

  return (
    <>
      {/* Header con posicionamiento absoluto para que flote sobre el Hero/Banner */}
      <header className="absolute top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm transition-all">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo - Usando la imagen del código 2 */}
          <Link to="/" className="flex items-center">
            <img
              src={sanLuisLogo}
              alt="Papas San Luis"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform"
            />
          </Link>

          {/* Lado Derecho - Menú y Botón de Cotizar */}
          <div className="flex items-center gap-4">
            {/* Selector de Menú Estilizado */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 text-[#003DA5] border-2 border-[#003DA5] px-5 py-2 rounded-full bg-white hover:bg-gray-100 transition-all shadow-lg font-bold text-sm md:text-base"
              >
                <span>Menú</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu con Links funcionales */}
              {isMenuOpen && (
                <div className="absolute top-full right-0 mt-3 bg-white rounded-xl shadow-2xl py-2 min-w-[220px] z-50 border border-gray-100 overflow-hidden">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={`/productos#${item.toLowerCase()}`}
                      className="block w-full text-left px-6 py-3 text-gray-800 hover:bg-[#003DA5] hover:text-white transition-colors font-medium border-b border-gray-50 last:border-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Botón Cotizar - Recuperado y mejorado */}
            <button className="hidden md:block bg-[#003DA5] border-2 border-white text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-[#003DA5] hover:border-[#003DA5] transition-all shadow-lg">
              Cotizar
    <header className="absolute top-0 left-0 w-full z-50 bg-black/30 transition-all">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={sanLuisLogo}
            alt="Papas San Luis"
            className="h-20 w-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Right side - Menu and Button */}
        <div className="flex items-center justify-end gap-4">
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-[#003DA5] border-2 border-[#003DA5] px-6 py-2 rounded-full bg-white hover:bg-gray-100 transition-all shadow-lg font-bold"
            >
              <span>Menú</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Overlay para cerrar el menú */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/10"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </header>
    </>
      {/* Overlay para cerrar el menú al hacer clic afuera */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}