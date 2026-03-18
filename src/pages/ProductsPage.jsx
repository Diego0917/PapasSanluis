import { Star, Check, Truck, FileText, Award, Headset } from "lucide-react";
const imagenesCargadas = import.meta.glob(
  "../assets/Productos/*.{png,jpg,jpeg,svg}",
  { eager: true },
);
const listaDeImagenes = Object.values(imagenesCargadas).map(
  (img) => img.default,
);
export default function ProductsPage() {
  const products = [
    {
      name: "CRIOLLA MINI ",
      presentation: "Presentación:\n750 GR",
      image: listaDeImagenes[0],
    },
    {
      name: "CRIOLLA MINI GRANEL",
      presentation: "Presentación:\n1 kilo",
      image: listaDeImagenes[1],
    },
    {
      name: "PASTUSA GRUESA ",
      presentation: "Presentación:\n 10 LB",
      image: listaDeImagenes[2],
    },
    {
      name: "PASTUSA GRUESA ",
      presentation: "Presentación:\n3 LB",
      image: listaDeImagenes[3],
    },
    {
      name: "PASTUSA GRUESA ",
      presentation: "Presentación:\n5 LB",
      image: listaDeImagenes[4],
      rating: 5,
    },
    {
      name: "PASTUSA PARA SALAR",
      presentation: "Presentación:\n",
      image: listaDeImagenes[5],
    },
    {
      name: "PASTUSA PAREJA ",
      presentation: "Presentación:\n10 lb ",
      image: listaDeImagenes[6],
    },
    {
      name: "PASTUSA PAREJA ",
      presentation: "Presentación:\n5 LB",
      image: listaDeImagenes[7],
    },
    {
      name: "PASTUSA PAREJA BULTO",
      presentation: "Presentación:\n",
      image: listaDeImagenes[8],
    },
    {
      name: "PQ SABANERA GRUESA",
      presentation: "Presentación:\n3KL",
      image: listaDeImagenes[9],
    },
    {
      name: "SABANERA GRUESA ",
      presentation: "Presentación:\n10 LB",
      image: listaDeImagenes[10],
    },
    {
      name: "SABANERA GRUESA ",
      presentation: "Presentación:\n3 LB",
      image: listaDeImagenes[11],
    },
    {
      name: "SABANERA GRUESA ",
      presentation: "Presentación:\n5 LB",
      image: listaDeImagenes[12],
    },
    {
      name: "SABANERA GRUESA GRANEL ",
      presentation: "Presentación:\n",
      image: listaDeImagenes[13],
    },
    {
      name: "SABANERA MINI ",
      presentation: "Presentación:\n",
      image: listaDeImagenes[14],
    },
  ];

  const features = [
    "Pure de papas",
    "Papas para freir",
    "Papas para hornear",
    "Papas para guisar",
    "Papas para ensaladas",
    "Papas chorreadas",
    "Papas rellenas",
  ];

  const benefits = [
    {
      icon: <Truck className="w-12 h-12 text-[#FFC107]" />,
      title: "Entrega gratis",
      description:
        "Recibe tus aceites en presentaciones seguras y adecuadas para tu uso sin costo de envío.",
    },
    {
      icon: <FileText className="w-12 h-12 text-[#FFC107]" />,
      title: "Impuestos incluidos",
      description:
        "Aceites 100% funcionales para frituras, salteado y preparaciones horneadas con impuestos incluidos.",
    },
    {
      icon: <Award className="w-12 h-12 text-[#FFC107]" />,
      title: "Calidad garantizada",
      description:
        "Rendimiento prolongado sin alterar el sabor de tus preparaciones y otras ventajas adicionales.",
    },
    {
      icon: <Headset className="w-12 h-12 text-[#FFC107]" />,
      title: "Atención personalizada",
      description:
        "Te ayudamos a elegir el tipo de aceite ideal según el volumen y tipo de preparaciones de tu negocio.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-center text-[#003DA5] font-bold mb-12">
          LAVADOS
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-gray-100 rounded-xl p-6 mb-4 flex items-center justify-center h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-[#003DA5] font-bold text-center mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm text-center mb-3 whitespace-pre-line">
                {product.presentation}
              </p>
              {/*<div className="flex justify-center gap-1">
                {[...Array(product.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FFC107] text-[#FFC107]"
                  />
                ))}
              </div>*/}
            </div>
          ))}
        </div>

        {/* Características Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Features */}
            <div>
              <h2 className="text-3xl text-[#003DA5] font-bold mb-6">
                PRODUCTOS PERFECTOS PARA FRITURAS CRUJIENTES Y SABROSAS
              </h2>
              <h3 className="text-xl text-[#003DA5] font-semibold mb-4">
                PARA RECETAS COMO:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#003DA5] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <div className="flex gap-1 my-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-[#FFC107] text-[#FFC107]"
                  />
                ))}
              </div>*/}
            </div>
            {/* Right - Image */}
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1656711776904-993edf967bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMG9pbCUyMGZyeWluZ3xlbnwxfHx8fDE3NzMxMTc4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef cooking"
                className="rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-[#003DA5] font-bold text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Sections - Placeholders */}
        {/* <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 min-h-[200px] flex items-center justify-center border-2 border-dashed border-[#003DA5]">
            <p className="text-[#003DA5] text-center">
              Espacio para información adicional 1
            </p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8 min-h-[200px] flex items-center justify-center border-2 border-dashed border-[#003DA5]">
            <p className="text-[#003DA5] text-center">
              Espacio para información adicional 2
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mt-8 min-h-[200px] flex items-center justify-center border-2 border-dashed border-[#003DA5]">
          <p className="text-[#003DA5] text-center">
            Espacio para información adicional 3
          </p>
        </div> */}
      </div>
    </div>
  );
}
