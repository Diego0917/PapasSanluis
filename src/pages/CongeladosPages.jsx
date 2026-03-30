import { useEffect, useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import marcaAgua from "../assets/marcaagua.png";
// Importamos la nueva imagen que generamos
import congelados2 from "../assets/congelados2.png";

const imagenesCargadas = import.meta.glob(
  "../assets/Productos/*.{png,jpg,jpeg,svg}",
  { eager: true },
);
const listaDeImagenes = Object.values(imagenesCargadas).map(
  (img) => img.default,
);

export default function CongeladosPage() {
  const rawProducts = [
    // CRIOLLA PORCIONADA
    {
      id: "criolla-porc",
      name: "CRIOLLA PORCIONADA",
      presentation: "Caja 3000g (Paquetes 150g)",
      image: listaDeImagenes[0],
    },

    // CRIOLLA PRECOCIDA
    {
      id: "criolla-prec",
      name: "CRIOLLA PRECOCIDA",
      presentation: "Bolsa 1000g / Kilo",
      image: listaDeImagenes[1],
    },
    {
      id: "criolla-prec",
      name: "CRIOLLA PRECOCIDA",
      presentation: "Bolsa 2500g / Granel",
      image: listaDeImagenes[7],
    },

    // YUCA
    {
      id: "yuca-croq",
      name: "CROQUETA DE YUCA",
      presentation: "Kilo / Libra",
      image: listaDeImagenes[2],
    },
    {
      id: "yuca-prec",
      name: "YUCA PRECOCIDA",
      presentation: "Bolsa 2500g / Granel",
      image: listaDeImagenes[6],
    },

    // FRANCESA
    {
      id: "fran-porc",
      name: "FRANCESA PORCIONADA",
      presentation: "Caja 3000g (Paquetes 150g)",
      image: listaDeImagenes[3],
    },
    {
      id: "fran-std",
      name: "PAPA FRANCESA",
      presentation: "Kilo / Libra",
      image: listaDeImagenes[4],
    },

    // PATACÓN
    {
      id: "patacon",
      name: "PATACÓN PRECOCIDO",
      presentation: "2500g / Libra",
      image: listaDeImagenes[5],
    },
  ];

  const groupedProducts = rawProducts.reduce((acc, curr) => {
    if (!acc[curr.id]) {
      acc[curr.id] = { name: curr.name, variants: [] };
    }
    acc[curr.id].variants.push(curr);
    return acc;
  }, {});

  const finalProducts = Object.values(groupedProducts);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* CAPA DE MARCA DE AGUA REFORZADA */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${marcaAgua})`,
          backgroundRepeat: "repeat",
          backgroundSize: "250px",
          opacity: 0.18,
          mixBlendMode: "multiply",
        }}
      />

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl text-[#003DA5] font-black uppercase italic tracking-tighter mb-4 leading-none">
            LÍNEA CONGELADOS
          </h1>
          <div className="h-2 w-32 bg-[#FFC107] mx-auto rounded-full shadow-sm"></div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 relative z-10">
          {finalProducts.map((group, index) => (
            <ProductCard key={index} group={group} />
          ))}
        </div>

        {/* Banner de Calidad (San Luis es la Ley) */}
        <div className="bg-[#003DA5]/90 backdrop-blur-xl rounded-[3rem] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden mb-24 border border-white/5">
          {/* Marca de agua interna sutil */}
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `url(${marcaAgua})`,
              backgroundSize: "180px",
            }}
          ></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-5xl font-black mb-8 leading-[0.9] uppercase italic">
                CERO DESPERDICIO, <br />
                <span className="text-[#FFC107]">MÁXIMO RENDIMIENTO.</span>
              </h2>
              <div className="space-y-5">
                {[
                  "Porciones exactas para control de costos",
                  "Ahorro de hasta 40 min en preparación",
                  "Crocancia extrema en solo 6 minutos",
                  "Mínima absorción de grasa",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-[#FFC107] p-1 rounded-lg shadow-md">
                      <Check className="w-5 h-5 text-[#003DA5] stroke-[4px]" />
                    </div>
                    <span className="text-xl font-extrabold italic uppercase tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#FFC107]/10 rounded-[3rem] blur-2xl group-hover:bg-[#FFC107]/20 transition-all"></div>
              {/* Aquí pusimos tu imagen congelados2 */}
              <img
                src={congelados2}
                alt="Calidad Congelados San Luis"
                className="rounded-[3rem] border-4 border-white/20 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ group }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (group.variants.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % group.variants.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [group.variants.length]);

  const currentVariant = group.variants[currentIndex];

  return (
    <div className="group bg-white/70 backdrop-blur-xl rounded-[3rem] p-8 shadow-xl border border-white/10 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
      <div className="relative w-full aspect-square bg-white rounded-[2.5rem] mb-6 overflow-hidden flex items-center justify-center p-8 border border-gray-100">
        <img
          src={currentVariant.image}
          alt={group.name}
          className="max-h-full max-w-full object-contain transition-all duration-1000 transform group-hover:scale-110"
          key={currentIndex}
        />
        {group.variants.length > 1 && (
          <div className="absolute bottom-4 flex gap-2">
            {group.variants.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? "w-8 bg-[#003DA5]" : "w-2 bg-gray-200"}`}
              />
            ))}
          </div>
        )}
      </div>

      <h3 className="text-[#003DA5] font-black text-center text-2xl mb-2 uppercase italic tracking-tighter leading-none">
        {group.name}
      </h3>
      <div className="h-1.5 w-12 bg-[#FFC107] mb-4 group-hover:w-24 transition-all duration-500 rounded-full shadow-md"></div>

      <p className="text-gray-500 font-bold text-xs text-center uppercase tracking-widest min-h-[32px] flex items-center leading-tight">
        {currentVariant.presentation}
      </p>

      <div className="mt-6 flex items-center gap-2 text-[#003DA5] font-black text-[10px] uppercase tracking-tighter bg-blue-50 px-4 py-2 rounded-full italic group-hover:bg-[#FFC107] group-hover:text-[#003DA5] transition-colors duration-500">
        <ChevronRight className="w-3 h-3 stroke-[4px]" />
        <a
          href="https://wa.me/message/5YVHA5TUWWOMA1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listas para freír
        </a>
      </div>
    </div>
  );
}
