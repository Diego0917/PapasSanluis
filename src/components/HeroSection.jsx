export function HeroSection() {
  return (
    <section className="bg-[#003DA5] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl mb-4">
              La calidad que tu negocio necesita, en menos tiempo.
            </h1>
            <p className="text-[#FFC107] text-2xl mb-4">
              fácil, rápido y listo
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
              src="https://images.unsplash.com/photo-1625331725309-83e4f3c1373b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBidXJnZXIlMjBmb29kfGVufDF8fHx8MTc3MjQ2NjcyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Deliciosas hamburguesas"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
