import { useState } from "react";
import { ChevronDown } from "lucide-react";
import sanLuisLogo from "../assets/sanluislogo.png";
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
    <header className="sticky top-0 z-50 bg-[#ffffff]/80 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/*logo*/}
        <div className="flex items-center justify-center">
          <div className="flex-1"></div>
          <img
            src={sanLuisLogo}
            alt="Papas San Luis"
            className="h-17 w-auto object-contain opacity-80"
          />
        </div>

        {/* Right side - Menu and Button */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-white transition-colors background-[#003DA5] border-2 border-white px-6 py-2 rounded-full bg-[#003DA5] hover:bg-white hover:text-[#003DA5] transition-colors"
            >
              <span>Menú</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="bg-[#003DA5] border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#003DA5] transition-colors">
            Cotizar
          </button>
        </div>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
