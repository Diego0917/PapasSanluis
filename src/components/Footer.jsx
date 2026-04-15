import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import logoSanLuis from "../assets/sanluislogo.png";
import papaImg from "../assets/5.png";

const FallingFry = ({ delay }) => (
  <div
    className="absolute top-0 w-10 h-auto opacity-0 animate-fall-fry pointer-events-none z-50"
    style={{
      animationDelay: `${delay}s`,
      left: `${Math.random() * 90}%`,
    }}
  >
    <img
      src={papaImg}
      alt="Papa San Luis"
      className="w-full h-full object-contain bg-transparent border-none outline-none shadow-none"
    />
  </div>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [frysGroup, setFrysGroup] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrysGroup((prev) => prev + 1);
    }, 40000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#FFC107] text-[#003DA5] pt-24 pb-10 overflow-hidden font-sans">

      {/* OLA SUPERIOR */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">

        {/* ola lenta */}
        <svg
          className="relative block w-[200%] h-[80px] animate-wave-slow"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z"
            fill="#f8fafc"
          />
        </svg>

        {/* ola rápida */}
        <svg
          className="absolute top-0 block w-[200%] h-[80px] animate-wave-fast opacity-60"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C240,10 480,110 720,70 C960,10 1200,110 1440,70 L1440,0 L0,0 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* LLUVIA DE PAPAS */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <FallingFry key={`${frysGroup}-${i}`} delay={i * 0.8} />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#003DA5]/20 pb-12">

          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={logoSanLuis}
                alt="Logo San Luis"
                className="h-20 w-auto object-contain"
              />
            </button>
            <p className="font-bold text-xs tracking-widest uppercase italic text-[#003DA5]">
              "Calidad del campo a tu mesa"
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-black italic underline decoration-2 decoration-white/50">
              NAVEGACIÓN
            </h4>

            <ul className="space-y-2">
  {[
    { label: "Inicio", id: "inicio" },
    { label: "Catálogo", id: "Solutions" },
    { label: "Nosotros", id: "why-choose" },
  ].map((item) => (
    <li key={item.id}>
      <a
        href={`#${item.id}`}
        onClick={(e) => {
          if (item.label === "Inicio") {
            scrollToTop(e);
          } else {
            // Lógica de scroll suave manual
            e.preventDefault();
            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="flex items-center gap-2 font-bold hover:translate-x-2 transition-transform duration-300"
      >
        <ChevronRight className="w-4 h-4 text-white" />
        {item.label}
      </a>
    </li>
  ))}
</ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-black italic underline decoration-2 decoration-white/50">
              CONTACTO
            </h4>

            <div className="space-y-3 font-bold text-sm">
              <div className="flex items-center gap-3">
                <div className="bg-[#003DA5] text-white p-2 rounded-lg shadow-md">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+57 311 248 6210</span>
                <div className="bg-[#003DA5] text-white p-2 rounded-lg shadow-md">
                  <Phone className="w-4 h-4" />
                </div>
                <span>(601) 3058486</span>
                
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#003DA5] text-white p-2 rounded-lg shadow-md">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+57 311 8400968</span>
                <div className="bg-[#003DA5] text-white p-2 rounded-lg shadow-md">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Bogotá, Colombia</span>
                
              </div>  
            </div>
          </div>

        </div>

        <div className="pt-8 text-center text-[10px] font-black opacity-50 tracking-[0.2em]">
          © {currentYear} PAPAS SAN LUIS - TODOS LOS DERECHOS RESERVADOS
        </div>
      </div>

      <style>{`

        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-wave-slow {
          animation: waveMove 18s linear infinite;
        }

        .animate-wave-fast {
          animation: waveMove 10s linear infinite;
        }

        @keyframes fall-fry {
          0% {
            transform: translateY(-80px) rotate(0deg);
            opacity: 0;
          }

          10% { opacity: 1; }

          40% { transform: translateY(100px) rotate(90deg); }

          80% { opacity: 1; }

          100% {
            transform: translateY(600px) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fall-fry {
          animation: fall-fry 7s cubic-bezier(0.4,0,0.2,1) forwards;
        }

      `}</style>
    </footer>
  );
}