import { Check, Truck, Boxes, Users } from 'lucide-react';
// Importamos la imagen local desde tu carpeta de assets
import fondoPapitas from "../assets/fondo de papitas san luis.jpeg";

export function WhyChooseSection() {
  const features = [
    {
      icon: <Check className="w-5 h-5" />,
      text: 'Calidad premium en cada producto.',
    },
    {
      icon: <Truck className="w-5 h-5" />,
      text: 'Entregas rápidas y seguras.',
    },
    {
      icon: <Boxes className="w-5 h-5" />,
      text: 'Catálogo variado para todo tipo de negocios.',
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'Asesoría personalizada para impulsar tu crecimiento.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
  <h2 className="text-4xl md:text-5xl font-bold text-[#003DA5] mb-2">
    ¿Por qué elegir Papas San Luis?
  </h2>
  <p className="text-[#FFC107] text-xl font-semibold mb-6">
    Calidad del campo a tu mesa
  </p>
    
  <p className="text-gray-700 mb-8 leading-relaxed">
    En Papas San Luis nos especializamos en ofrecerte la mejor selección de 
    papas lavadas y una variedad de productos congelados listos para usar. 
    Sabemos que la frescura y la practicidad son clave para tu hogar o negocio; 
    por eso, garantizamos procesos de limpieza rigurosos y soluciones que te 
    ahorran tiempo sin sacrificar el sabor natural. Confía en expertos que 
    entienden la importancia de un producto confiable y de alta calidad.
  </p>


            <div className="space-y-4">
              <p className="text-[#003DA5] font-bold mb-4">
                Lo que nos diferencia:
              </p>
              
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="text-[#003DA5] mt-1 flex-shrink-0 bg-blue-50 p-1 rounded-full group-hover:bg-[#FFC107] group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 font-medium">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white">
              <img 
                src={fondoPapitas}
                alt="Papas San Luis" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Elementos decorativos de fondo */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFC107] rounded-full opacity-30 blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#003DA5] rounded-full opacity-20 blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}