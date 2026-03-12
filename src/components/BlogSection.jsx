import { useState } from "react";
import { Clock, Flame, Utensils, ChevronDown, ChevronUp } from "lucide-react";
import logoSanLuis from "../assets/sanluislogo.png";

// Importación de tus nuevas imágenes generadas
import imgFritura from "../assets/2.png";
import imgGourmet from "../assets/3.png";
import imgRapidez from "../assets/4.png";

export function BlogSection() {
  const [expandedPost, setExpandedPost] = useState(null);

  const posts = [
    {
      title: "El secreto de la fritura perfecta",
      category: "Tip Técnico",
      description: "Aprende la temperatura ideal del aceite para que tus papas queden crocantes por fuera y suaves por dentro.",
      fullContent: "Para lograr la perfección, el aceite debe estar a 180°C. No llenes demasiado la canastilla; la temperatura bajará y las papas absorberán grasa. Fríe por tandas pequeñas durante 3-4 minutos hasta obtener ese dorado San Luis.",
      icon: <Flame className="text-[#FFC107]" />,
      image: imgFritura,
    },
    {
      title: "Acompañamientos gourmet",
      category: "Recetas",
      description: "Desde salsas de la casa hasta toppings premium para elevar el nivel de tus platos y sorprender clientes.",
      fullContent: "Prueba nuestra salsa de la casa: mezcla mayonesa premium, un toque de ajo rostizado, paprika ahumada y cebollín fresco. Sírvela a temperatura ambiente sobre tus papas recién salidas para un contraste brutal.",
      icon: <Utensils className="text-[#FFC107]" />,
      image: imgGourmet,
    },
    {
      title: "Del congelador a la mesa",
      category: "Guía Rápida",
      description: "Optimiza los tiempos de tu cocina: cómo pasar de 0 a 100 en solo 6 minutos sin perder calidad.",
      fullContent: "Las papas San Luis están diseñadas para ir directo del congelador a la freidora. Esto evita que el almidón se oxide. 6 minutos a fuego constante te darán la textura crocante por fuera y puré por dentro que tus clientes aman.",
      icon: <Clock className="text-[#FFC107]" />,
      image: imgRapidez,
    },
  ];

  const togglePost = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Encabezado con Logo */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003DA5] mb-4 flex flex-wrap items-center justify-center gap-3">
            <span>Tips y Recetas</span>
            <img 
              src={logoSanLuis} 
              alt="San Luis" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </h2>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {posts.map((post, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 border border-gray-100 ${
                expandedPost === index ? 'ring-2 ring-[#FFC107] shadow-2xl scale-[1.02]' : 'hover:shadow-2xl'
              }`}
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#003DA5] text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                  {post.category}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  {post.icon}
                  <span className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Sabías que...</span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#003DA5] mb-4">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.description}
                </p>

                {/* Contenido Extra (Receta extendida) */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedPost === index ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-5 bg-blue-50/50 rounded-2xl border-l-4 border-[#003DA5] text-[#003DA5] font-medium leading-relaxed italic">
                    {post.fullContent}
                  </div>
                </div>

                <button 
                  onClick={() => togglePost(index)}
                  className={`font-bold flex items-center gap-2 transition-colors duration-300 ${
                    expandedPost === index ? 'text-[#FFC107]' : 'text-[#003DA5] hover:text-[#FFC107]'
                  }`}
                >
                  {expandedPost === index ? (
                    <>Cerrar receta <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Leer receta completa <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}