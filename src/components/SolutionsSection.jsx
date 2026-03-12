import { motion } from "framer-motion";
// Importamos ambas imágenes locales desde assets
import imagenLavadas from "../assets/lavados.png";
import imagenCongelados from "../assets/congelados.png"; 

export function SolutionsSection() {
  const sections = [
    {
      title1: 'Papas',
      title2: 'Lavadas',
      description: 'Papas seleccionadas y procesadas con limpieza superior, listas para cocinar y garantizar frescura.',
      buttonText: 'Conocer más',
      image: imagenLavadas, // Ahora usa la imagen local lavados.png
    },
    {
      title1: 'Productos',
      title2: 'Congelados',
      description: 'La solución perfecta para ahorrar tiempo en cocina sin perder calidad. Variedad de cortes listos para freír.',
      buttonText: 'Conocer más',
      image: imagenCongelados, 
    },
  ];

  const unificationVariants = {
    hiddenLeft: { x: "-50%", opacity: 0 },
    hiddenRight: { x: "50%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section className="w-full overflow-hidden bg-white"> 
      <div className="grid md:grid-cols-2 grid-cols-1">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={unificationVariants}
            initial={index === 0 ? "hiddenLeft" : "hiddenRight"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative h-[600px] md:h-[750px] overflow-hidden group"
          >
            {/* Imagen de fondo con zoom suave */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${section.image})` }}
            />
            
            {/* Overlay: Degradado que nace desde abajo para proteger la lectura sin ocultar el logo San Luis central */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-colors duration-500" />
            
            {/* Contenido: Alineado a la base para dejar libre la parte superior y media de la imagen */}
            <div className="relative h-full flex flex-col justify-end items-start px-8 md:px-16 pb-16 z-10">
              <h2 className="mb-4">
                <span className="block text-[#FFC107] text-5xl md:text-7xl font-['Pacifico',_cursive] drop-shadow-2xl">
                  {section.title1}
                </span>
                <span className="block text-white text-6xl md:text-8xl font-['Pacifico',_cursive] drop-shadow-2xl leading-[0.8]">
                  {section.title2}
                </span>
              </h2>
              
              <p className="text-white text-base md:text-lg max-w-xs mb-6 leading-snug drop-shadow-md font-medium">
                {section.description}
              </p>
              
              <button className="bg-[#FFC107] text-[#003DA5] px-8 py-2.5 rounded-full font-bold text-base hover:bg-white transition-all flex items-center gap-2 group/btn shadow-xl">
                {section.buttonText}
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}