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
    // 'absolute' para que flote sobre la imagen, 'backdrop-blur' para el efecto cristal
    <header className="absolute top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 transition-all">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Espacio para equilibrar el logo centrado */}
        <div className="flex-1 hidden md:block"></div>

        {/* Logo de San Luis Centrado */}
        <div className="flex items-center justify-center flex-1">
          <img
            src={sanLuisLogo}
            alt="Papas San Luis"
            className="h-14 w-auto object-contain drop-shadow-md" 
          />
        </div>

        {/* Botones Derecha */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-white bg-[#003DA5] border border-white/50 px-5 py-2 rounded-full hover:bg-white hover:text-[#003DA5] transition-all shadow-md text-sm"
            >
              <span>Menú</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl py-2 min-w-[180px] z-50 border border-gray-100 overflow-hidden">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-5 py-2.5 text-gray-800 hover:bg-[#003DA5] hover:text-white transition-colors text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="bg-[#003DA5] border border-white/50 text-white px-5 py-2 rounded-full hover:bg-white hover:text-[#003DA5] transition-all shadow-md font-bold text-sm">
            Cotizar
          </button>
        </div>
      </div>

      {/* Fondo oscuro al abrir menú */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/10" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </header>
  );
}