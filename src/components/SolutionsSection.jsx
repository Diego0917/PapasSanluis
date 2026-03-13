import { Link } from "react-router";
import { motion } from "framer-motion";

// Importación de assets locales
import imagenLavadas from "../assets/lavados.png";
import imagenCongelados from "../assets/congelados.png";

export function SolutionsSection() {
  const sections = [
    {
      title1: "PARA",
      title2: "TU CASA",
      description:
        "Encuentra aquí la variedad de productos, recetas y tips de preparación que tenemos para ti.",
      buttonText: "Conocer más",
      link: "/productos",
      image:
        "https://images.unsplash.com/photo-1609428058261-ef5b2954875a?q=80&w=1080",
    },
    {
      title1: "PARA",
      title2: "TU NEGOCIO",
      description:
        "Conoce el portafolio de productos y soluciones que te ayudarán a rentabilizar tu negocio.",
      buttonText: "Conocer más",
      link: "/congelados",
      image:
        "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?q=80&w=1080",
    },
    {
      title1: "Papas",
      title2: "Lavadas",
      description:
        "Papas seleccionadas y procesadas con limpieza superior, listas para cocinar y garantizar frescura.",
      buttonText: "Conocer más",
      link: "/lavadas",
      image: imagenLavadas,
    },
    {
      title1: "Productos",
      title2: "Congelados",
      description:
        "La solución perfecta para ahorrar tiempo en cocina sin perder calidad. Variedad de cortes listos para freír.",
      buttonText: "Conocer más",
      link: "/congelados-detalles",
      image: imagenCongelados,
    },
  ];

  const unificationVariants = {
    hiddenLeft: { x: "-20%", opacity: 0 },
    hiddenRight: { x: "20%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section className="w-full overflow-hidden bg-white">
      {/* Grid: 1 columna en móvil, 2 en tablets/desktop */}
      <div className="grid md:grid-cols-2 grid-cols-1">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={unificationVariants}
            // Los pares entran por la derecha, los impares por la izquierda
            initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] md:h-[750px] overflow-hidden group"
          >
            {/* Imagen de fondo con zoom suave */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${section.image})` }}
            />

            {/* Overlay: Degradado para legibilidad del texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

            {/* Contenido alineado al fondo */}
            <div className="relative h-full flex flex-col justify-end items-start px-8 md:px-16 pb-16 z-10">
              <h2 className="mb-4">
                <span className="block text-[#FFC107] text-5xl md:text-6xl font-bold italic drop-shadow-2xl uppercase">
                  {section.title1}
                </span>
                <span className="block text-white text-6xl md:text-8xl font-bold drop-shadow-2xl leading-[0.8] uppercase">
                  {section.title2}
                </span>
              </h2>

              <p className="text-white text-lg md:text-xl max-w-sm mb-8 leading-snug drop-shadow-md font-medium">
                {section.description}
              </p>

              {/* Botón con Link funcional */}
              <Link to={section.link}>
                <button className="bg-[#FFC107] text-[#003DA5] px-10 py-3 rounded-full font-extrabold text-lg hover:bg-white hover:text-black transition-all flex items-center gap-2 group/btn shadow-2xl">
                  {section.buttonText}
                  <svg
                    className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
