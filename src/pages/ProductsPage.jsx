import { Star, Check, Truck, FileText, Award, Headset } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      name: "ACEITE FRYTOL BIDON",
      presentation: "Presentación:\n1 bidón",
      image:
        "https://images.unsplash.com/photo-1760445528823-fd942d4b459b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzMxMTA5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
    },
    {
      name: "ACEITE CHEF",
      presentation: "Presentación:\n1 bidón",
      image:
        "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzczMDUxMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
    },
    {
      name: "ACEITE PALMA",
      presentation: "Presentación:\n1 bidón",
      image:
        "https://images.unsplash.com/photo-1765850257647-811b8d3c20ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMG9pbCUyMGJvdHRsZSUyMHByZW1pdW18ZW58MXx8fHwxNzczMTE3ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
    },
    {
      name: "ACEITE PREMIUM",
      presentation: "Presentación:\n1 bidón / 500 ml",
      image:
        "https://images.unsplash.com/photo-1760445528823-fd942d4b459b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBvaWwlMjBib3R0bGVzJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NzMxMTc4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
    },
    {
      name: "MANTEQUILLA MAESTRO",
      presentation: "Presentación:\nCaja x 15lt / Caja 12 unid x 1lt",
      image:
        "https://images.unsplash.com/photo-1716972065448-e08a46809530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwb2lsJTIwcHJvZHVjdCUyMGJveHxlbnwxfHx8fDE3NzMxMTc4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
    },
    {
      name: "MANTECA VEGETAL FLAMELA",
      presentation: "Presentación:\nCaja x 15lt / Caja 12 unid x 1lt",
      image:
        "https://images.unsplash.com/photo-1656711776904-993edf967bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMG9pbCUyMGZyeWluZ3xlbnwxfHx8fDE3NzMxMTc4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
    },
  ];

  const features = [
    "Excelente rendimiento en frituras",
    "Mantiene el sabor auténtico de tus preparaciones",
    "Presentación práctica y segura",
    "Versatilidad para todo tipo de preparación",
    "Frituras crujientes, doradas e irresistibles con calidad",
    "Garantiza y resalta resultados",
    "Resistencia a la oxidación",
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
          Aceite para freír al por mayor
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
              <div className="flex justify-center gap-1">
                {[...Array(product.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FFC107] text-[#FFC107]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Características Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Features */}
            <div>
              <h2 className="text-3xl text-[#003DA5] font-bold mb-6">
                Aceites confiables para cocinas exigentes
              </h2>
              <h3 className="text-xl text-[#003DA5] font-semibold mb-4">
                Características
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#003DA5] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-1 my-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-[#FFC107] text-[#FFC107]"
                  />
                ))}
              </div>
              <button className="bg-[#FFC107] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#FFD54F] transition-colors w-full md:w-auto">
                Analiza su portafolio
              </button>
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
        <div className="grid md:grid-cols-2 gap-8 mt-16">
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
        </div>
      </div>
    </div>
  );
}
