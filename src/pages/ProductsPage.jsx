import { Check, ChevronRight } from "lucide-react";
import marcaAgua from "../assets/marcaagua.png";
import lavados2 from "../assets/lavados2.png";

const imagenesCargadas = import.meta.glob(
  "../assets/*.{png,jpg,jpeg,svg,PNG,JPG,JPEG}",
  { eager: true },
);
const listaDeImagenes = Object.values(imagenesCargadas).map(
  (img) => img.default,
);

export default function ProductsPage() {
  console.log("Orden de mis fotos:", listaDeImagenes);
  const rawProducts = [
    { id: 1, name: "CRIOLLA MINI", presentation: "Bolsa 750 GR", image: listaDeImagenes[18] },
    { id: 2, name: "CRIOLLA ", presentation: "Kilo / Granel", image: listaDeImagenes[15] },
    { id: 3, name: "PASTUSA GRUESA", presentation: "10 LB", image: listaDeImagenes[5] },
    { id: 4, name: "PASTUSA GRUESA", presentation: "5 LB", image: listaDeImagenes[22] },
    { id: 5, name: "PASTUSA GRUESA", presentation: "3 LB", image: listaDeImagenes[21] },
    { id: 6, name: "PASTUSA PARA SALAR", presentation: "Presentación: Bulto", image: listaDeImagenes[23] },
    { id: 7, name: "PASTUSA PAREJA", presentation: "10 LB / 5 LB", image: listaDeImagenes[24] },
    { id: 8, name: "PASTUSA PAREJA", presentation: "Presentación: Bulto", image: listaDeImagenes[25] },
    { id: 9, name: "SABANERA GRUESA", presentation: "10 LB / 5 LB / 3 LB", image: listaDeImagenes[27] },
    { id: 10, name: "SABANERA GRUESA", presentation: "Paquete 3 Kilos", image: listaDeImagenes[27] },
    { id: 11, name: "SABANERA MINI", presentation: "Bolsa 750 GR", image: listaDeImagenes[26] },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 relative z-10">
          {rawProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
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
              <img
                src={lavados2}
                className="rounded-[3rem] border-4 border-white/20 shadow-2xl relative z-10 w-full h-auto object-cover"
                alt="Calidad San Luis"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="group bg-white/70 backdrop-blur-xl rounded-[3rem] p-8 shadow-xl border border-white/10 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
      <div className="relative w-full aspect-square bg-white rounded-[2.5rem] mb-6 overflow-hidden flex items-center justify-center p-8 border border-gray-100">
        <img
          src={product.image}
          className="max-h-full max-w-full object-contain transition-all duration-1000 transform group-hover:scale-110"
          alt={product.name}
        />
      </div>

      <h3 className="text-[#003DA5] font-black text-center text-2xl mb-2 uppercase italic tracking-tighter leading-none">
        {product.name}
      </h3>
      <div className="h-1.5 w-12 bg-[#FFC107] mb-4 group-hover:w-24 transition-all duration-500 rounded-full shadow-md"></div>

      <p className="text-gray-500 font-bold text-xs text-center uppercase tracking-widest min-h-[32px] flex items-center leading-tight">
        {product.presentation}
      </p>

      {/* BOTÓN WHATSAPP INTEGRADO */}
      <div className="mt-6 flex items-center gap-2 text-[#003DA5] font-black text-[10px] uppercase tracking-tighter bg-blue-50 px-4 py-2 rounded-full italic group-hover:bg-[#FFC107] group-hover:text-[#003DA5] transition-colors duration-500">
        <ChevronRight className="w-3 h-3 stroke-[4px]" />
        <a
          href="https://wa.me/qr/SWZ6O7SGDA6UI1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frescura garantizada
        </a>
      </div>
    </div>
  );
}