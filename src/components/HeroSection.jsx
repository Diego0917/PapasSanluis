import Imagendepapas from "../assets/imagendepapas.png";
import fondoImagen from "../assets/1.jpeg";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center text-white bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${fondoImagen})` }}
    >
      {/* Capa de oscuridad suave para que el texto se lea mejor */}
      <div className="absolute inset-0 bg-black/35"></div>

      <div className="container mx-auto px-4 relative z-10 pt-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Texto Principal */}
          <div className="space-y-5">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl">
              Del congelador a su mesa de <span className="text-[#FFC107]">5 a 6</span> minutos.
            </h1>
            <p className="text-2xl font-semibold italic text-white/90 drop-shadow-md">
              Gracias por preferirnos.
            </p>
            <p className="text-lg text-gray-200 max-w-md">
              Conoce nuestro catálogo y sorprende a tus clientes con productos
              precocidos de sabor irresistible.
            </p>
            
            <div className="flex gap-4 pt-4">
              <button className="border-2 border-white text-white px-9 py-3 rounded-full hover:bg-white hover:text-[#003DA5] transition-all font-bold">
                CATÁLOGO
              </button>
              <button className="bg-[#FFC107] text-[#003DA5] px-9 py-3 rounded-full hover:bg-white transition-all font-bold shadow-lg">
                COTIZAR
              </button>
            </div>
          </div>

          {/* Imagen de los Personajes */}
          <div className="flex items-center justify-center">
            <img
              src={Imagendepapas}
              alt="papas"
              className="w-full max-w-2xl object-contain -scale-x-100 drop-shadow-[0_25px_25px_rgba(0,0,0,0.4)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}