import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Importación del logo y de imágenes locales según tu estructura de assets
import logoSanLuis from "../assets/sanluislogo.png";
import imgCongelados from "../assets/congelados.PNG";
import imgLavados from "../assets/lavados.PNG";
// Nota: Asegúrate de que los nombres coincidan exactamente (mayúsculas/minúsculas)

export function ProductCarousel() {
  const products = [
    { name: "Papas Congeladas", img: imgCongelados },
    { name: "Papas Lavadas", img: imgLavados },
    {
      name: "Panes Especiales",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500",
    },
    {
      name: "Aceites Vegetales",
      img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=500",
    },
    {
      name: "Cortes de Carne",
      img: "https://images.unsplash.com/photo-1607623814075-e512199b4282?q=80&w=500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <style>
        {`
          .swiper-pagination {
            position: relative !important;
            padding-top: 30px !important;
            bottom: 0 !important;
          }
          .swiper-pagination-bullet-active {
            background: #003DA5 !important;
          }
        `}
      </style>

      <div className="container mx-auto px-4">
        {/* Cabecera del Carrusel con el Logo */}
        <div className="text-center mb-12 flex flex-col items-center">
          <img
            src={logoSanLuis}
            alt="San Luis Logo"
            className="h-16 mb-4 object-contain"
          />
          <h2 className="text-4xl font-bold text-[#003DA5] mb-2">
            Nuestro Portafolio
          </h2>
          <p className="text-gray-600 italic">
            Calidad garantizada del campo a tu negocio
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-0"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square shadow-lg">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003DA5]/90 via-[#003DA5]/20 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{item.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
