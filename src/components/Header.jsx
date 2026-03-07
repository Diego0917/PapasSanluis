import { useState } from "react";
import { ChevronDown } from "lucide-react";
import sanLuisLogo from "../assets/sanluislogo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Aceites", "Carnes", "Panes", "Francesa", 
    "Apanados", "Congelados", "Salsas", "Vegetales", "Catálogo",
  ];

  return (
    // CAMBIO CLAVE: Quitamos bg-white y sticky. Usamos absolute y bg-transparent.
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent transition-all">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo - Ajustado para que resalte sobre el fondo */}
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
              className="flex items-center gap-2 text-white border-2 border-white px-6 py-2 rounded-full bg-[#003DA5] hover:bg-white hover:text-[#003DA5] transition-all shadow-lg"
            >
              <span>Menú</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-2xl py-2 min-w-[200px] z-50 border border-gray-100">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-6 py-3 text-gray-800 hover:bg-[#003DA5] hover:text-white transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="bg-[#003DA5] border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#003DA5] transition-all shadow-lg font-bold">
            Cotizar
          </button>
        </div>
      </div>

      {/* Overlay to close menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}