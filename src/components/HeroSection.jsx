import Imagendepapas from "../assets/imagendepapas.png";
export function HeroSection() {
  return (
    <section className="bg-[#003DA5]/90 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl mb-4">
              Del congelador a su mesa de 5 a 6 minutos.
            </h1>
            <p className="text-[#FFC107] text-2xl mb-4">
              Gracias por preferirnos.
            </p>
            <p className="text-lg mb-8 text-gray-100">
              Conoce nuestro catálogo y sorprende a tus clientes con productos
              precocidos de sabor irresistible.
            </p>
            <div className="flex gap-4">
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#003DA5] transition-colors">
                CATÁLOGO
              </button>
              <button className="bg-[#FFC107] text-[#003DA5] px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                COTIZAR
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <img
              src={Imagendepapas}
              alt="papas"
              className="w-full max-w-xl object-contain -scale-x-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
