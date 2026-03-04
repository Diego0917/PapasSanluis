import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-[#003DA5] text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1"></div>

        <div className="flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-4 border-yellow-400">
            <div className="text-center">
              <div className="text-[#003DA5] text-xs font-bold leading-tight">
                PRECO
              </div>
              <div className="text-[#003DA5] text-xs font-bold leading-tight">
                LISTO
              </div>
              <div className="text-[#FFC107] text-[8px] font-semibold">
                SINCE 2025
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Menu and Button */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <button className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors">
            <span>Menú</span>
            <Menu size={20} />
          </button>
          <button className="bg-[#003DA5] border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#003DA5] transition-colors">
            Cotizar
          </button>
        </div>
      </div>
    </header>
  );
}
