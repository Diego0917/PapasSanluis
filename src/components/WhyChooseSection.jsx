import { motion } from "framer-motion";
import { Truck, Boxes, Star, Utensils } from 'lucide-react';
import fondoPapitas from "../assets/fondo de papitas san luis.jpeg";
// Importamos el logo
import logoSanLuis from "../assets/sanluislogo.png";

export function WhyChooseSection() {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Calidad Premium',
      text: 'Selección rigurosa desde el origen.',
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Logística Voraz',
      text: 'Entregas que desafían el reloj.',
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: 'Stock Variado',
      text: 'Variedad total para tu negocio.',
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: 'Sabor que Atrapa',
      text: 'Textura y crocancia inigualable.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Encabezado con el LOGO integrado en el título */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-4xl md:text-6xl font-black text-[#003DA5] uppercase tracking-tighter"
          >
            <span>¿Por qué</span>
            <img 
              src={logoSanLuis} 
              alt="San Luis" 
              className="h-16 md:h-24 w-auto object-contain" 
            />
            <span>es la ley?</span>
          </motion.div>
          <div className="w-24 h-2 bg-[#FFC107] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Imagen */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={fondoPapitas}
                alt="El arte de la papa" 
                className="w-full h-[500px] object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003DA5]/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-2xl font-black italic">EL SABOR QUE MANDA.</p>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FFC107] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          </motion.div>

          {/* Lado Contenido */}
          <div className="space-y-8">
            <p className="text-xl text-gray-600 leading-relaxed font-medium italic border-l-4 border-[#FFC107] pl-6">
              "No solo vendemos papas; entregamos la herramienta principal para que tu cocina brille. Frescura indomable y una logística que no perdona errores."
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-transparent hover:border-[#003DA5] hover:shadow-xl transition-all group"
                >
                  <div className="text-[#003DA5] mb-4 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl group-hover:bg-[#003DA5] group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-[#003DA5] text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-snug">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}