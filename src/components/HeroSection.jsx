import Imagendepapas from "../assets/imagendepapas.png";
import fondoImagen from "../assets/fondosanluis3.png";
import sanLuisLogo from "../assets/sanluislogo.png";


export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center text-white bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${fondoImagen})` }}
    >
      {/* Capa de oscuridad (Overlay) - Ajusta el 0.3 si quieres que se vea más clara o más oscura */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Lado Izquierdo: Texto */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
              Del congelador a su mesa de 5 a 6 minutos.
            </h1>
            <p className="text-[#FFC107] text-3xl font-bold italic drop-shadow-md">
              Gracias por preferirnos.
            </p>
            <p className="text-xl text-gray-100 max-w-lg drop-shadow-sm">
              Conoce nuestro catálogo y sorprende a tus clientes con productos
              precocidos de sabor irresistible.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="border-2 border-white text-white px-10 py-3 rounded-full hover:bg-white hover:text-[#003DA5] transition-all font-bold text-lg">
                CATÁLOGO
              </button>
              <button className="bg-[#FFC107] text-[#003DA5] px-10 py-3 rounded-full hover:bg-yellow-500 transition-all font-bold text-lg shadow-lg">
                COTIZAR
              </button>
            </div>
          </div>

          {/* Lado Derecho: Imagen de los Personajes */}
          <div className="flex items-center justify-center relative">
            <img
              src=""
              alt=""
              className="w-full max-w-2xl object-contain -scale-x-100 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
