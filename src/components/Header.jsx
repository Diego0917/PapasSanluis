import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
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
      {/* Header principal */}
      <header className="absolute top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm transition-all">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={sanLuisLogo}
              alt="Papas San Luis"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform"
            />
          </Link>

          {/* Lado Derecho - Menú y Botón */}
          <div className="flex items-center gap-4">
            {/* Selector de Menú */}
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

              {/* Dropdown Menu */}
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

            {/* Botón Cotizar (Solo visible en desktop) */}
            <button className="hidden md:block bg-[#003DA5] border-2 border-white text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-[#003DA5] hover:border-[#003DA5] transition-all shadow-lg">
              Cotizar
            </button>
          </div>
        </div>
      </header>

      {/* Overlay para cerrar el menú al hacer clic afuera */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/5"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
