import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // Importamos el icono de WhatsApp
import Imagendepapas from "../assets/imagendepapas.png";
import fondoImagen from "../assets/fondosanluis3.png";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center text-white bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${fondoImagen})`,
        backgroundPosition: "center 20%",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10 pt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg"
            >
              Del congelador a su mesa de 5 a 6 minutos.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[#FFC107] text-3xl font-bold italic drop-shadow-md"
            >
              Gracias por preferirnos.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-100 max-w-lg drop-shadow-sm"
            >
              Conoce nuestro catálogo y sorprende a tus clientes con productos
              precocidos de sabor irresistible.
            </motion.p>

            {/* Botón único y grande con icono de WhatsApp */}
            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="https://wa.me/qr/SWZ6O7SGDA6UI1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFC107] text-[#003DA5] w-full md:max-w-md py-5 rounded-full hover:bg-yellow-500 transition-all font-black text-2xl shadow-[0_10px_30px_rgba(255,193,7,0.4)] flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
                COTIZAR AHORA
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex items-center justify-center relative"
          >
            <motion.img
              src={Imagendepapas}
              alt="Personajes San Luis"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-2xl object-contain -scale-x-100 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
