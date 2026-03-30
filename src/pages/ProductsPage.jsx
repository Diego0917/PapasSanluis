import { useEffect, useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import marcaAgua from "../assets/marcaagua.png";
import lavados2 from "../assets/lavados2.png"; //

const imagenesCargadas = import.meta.glob(
  "../assets/Productos/*.{png,jpg,jpeg,svg}",
  { eager: true },
);
const listaDeImagenes = Object.values(imagenesCargadas).map(
  (img) => img.default,
);

export default function ProductsPage() {
  const rawProducts = [
    // BLOQUE CRIOLLA
    {
      id: "criolla-mini",
      name: "CRIOLLA MINI",
      presentation: "Bolsa 750 GR",
      image: listaDeImagenes[0],
    },
    {
      id: "criolla-mini",
      name: "CRIOLLA MINI",
      presentation: "Kilo / Granel",
      image: listaDeImagenes[1],
    },

    // BLOQUE PASTUSA GRUESA
    {
      id: "pastusa-gruesa",
      name: "PASTUSA GRUESA",
      presentation: "10 LB",
      image: listaDeImagenes[2],
    },
    {
      id: "pastusa-gruesa",
      name: "PASTUSA GRUESA",
      presentation: "5 LB",
      image: listaDeImagenes[4],
    },
    // ERROR CORREGIDO: Se cambió 'lista To listImagenes' por 'listaDeImagenes'
    {
      id: "pastusa-gruesa",
      name: "PASTUSA GRUESA",
      presentation: "3 LB",
      image: listaDeImagenes[3],
    },

    // BLOQUE PASTUSA ESPECIAL
    {
      id: "pastusa-salar",
      name: "PASTUSA PARA SALAR",
      presentation: "Presentación: Bulto",
      image: listaDeImagenes[5],
    },

    // BLOQUE PASTUSA PAREJA
    {
      id: "pastusa-pareja",
      name: "PASTUSA PAREJA",
      presentation: "10 LB / 5 LB",
      image: listaDeImagenes[6],
    },
    {
      id: "pastusa-pareja",
      name: "PASTUSA PAREJA",
      presentation: "Presentación: Bulto",
      image: listaDeImagenes[4],
    },

    // BLOQUE SABANERA GRUESA
    {
      id: "sabanera-gruesa",
      name: "SABANERA GRUESA",
      presentation: "10 LB / 5 LB / 3 LB",
      image: listaDeImagenes[1],
    },
    {
      id: "sabanera-gruesa",
      name: "SABANERA GRUESA",
      presentation: "Paquete 3 Kilos",
      image: listaDeImagenes[5],
    },

    // BLOQUE SABANERA MINI
    {
      id: "sabanera-mini",
      name: "SABANERA MINI",
      presentation: "Bolsa 750 GR",
      image: listaDeImagenes[7],
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
      {/* CAPA DE MARCA DE AGUA */}
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
            NUESTROS LAVADOS
          </h1>
          <div className="h-2 w-32 bg-[#FFC107] mx-auto rounded-full"></div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 relative z-10">
          {finalProducts.map((group, index) => (
            <ProductCard key={index} group={group} />
          ))}
        </div>

        {/* Banner de Calidad */}
        <div className="bg-[#003DA5]/90 backdrop-blur-xl rounded-[3rem] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden mb-24 border border-white/5">
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
                CALIDAD QUE SE NOTA <br />
                <span className="text-[#FFC107]">EN CADA BULTO.</span>
              </h2>
              <div className="space-y-5">
                {[
                  "Lavado industrial garantizado",
                  "Cero tierra, más rendimiento",
                  "Selección manual grano a grano",
                  "Directo de la sabana a tu negocio",
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
              <img
                src={lavados2} //
                className="rounded-[3rem] border-4 border-white/20 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] relative z-10 w-full h-auto object-cover"
                alt="Calidad San Luis"
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
          className="max-h-full max-w-full object-contain transition-all duration-1000 transform group-hover:scale-110"
          alt={group.name}
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
        <a href="https://wa.me/message/5YVHA5TUWWOMA1">Frescura Garantizada</a>
      </div>
    </div>
  );
}
