export function SolutionsSection() {
  const sections = [
    {
      title1: 'PARA',
      title2: 'TU CASA',
      description: 'Encuentra aquí la variedad de productos, recetas y tips de preparación que tenemos para ti.',
      buttonText: 'Conocer más',
      image: 'https://images.unsplash.com/photo-1609428058261-ef5b2954875a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBlYXRpbmclMjBmcmllcyUyMGhvbWV8ZW58MXx8fHwxNzczMTE1OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title1: 'PARA',
      title2: 'TU NEGOCIO',
      description: 'Conoce el portafolio de productos que te ofrece, además de soluciones que te ayudarán a rentabilizar tu negocio.',
      buttonText: 'Conocer más',
      image: 'https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGJ1c2luZXNzJTIwY2hlZnxlbnwxfHx8fDE3NzMxMTU5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2 grid-cols-1">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative h-[500px] md:h-[650px] overflow-hidden group"
          >
            {/* Background Image con efecto zoom al pasar el mouse */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${section.image})` }}
            />
            
            {/* Overlay de oscuridad para legibilidad */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
            
            {/* Contenido Centralizado */}
            <div className="relative h-full flex flex-col justify-center items-start px-12 md:px-20 z-10">
              <h2 className="mb-4">
                <span className="block text-[#FFC107] text-5xl md:text-7xl font-bold italic drop-shadow-lg">
                  {section.title1}
                </span>
                <span className="block text-white text-5xl md:text-7xl font-bold drop-shadow-lg">
                  {section.title2}
                </span>
              </h2>
              
              <p className="text-white text-lg md:text-xl max-w-md mb-8 leading-relaxed drop-shadow-sm">
                {section.description}
              </p>
              
              <button className="bg-[#FFC107] text-[#003DA5] px-10 py-3 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center gap-2 group/btn">
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
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}