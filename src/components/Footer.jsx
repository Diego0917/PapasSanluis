import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#003DA5] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-[#FFC107] mb-4">Sobre Nosotros</h3>
            <p className="text-sm text-gray-200">
              Proveemos productos de calidad para tu negocio, garantizando
              rapidez y excelencia en cada entrega.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#FFC107] mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#FFC107] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFC107] transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFC107] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFC107] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#FFC107] mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+57 311 248 6210</span> <br></br>
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>(601) 488 47 44</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>lol@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[#FFC107] mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#FFC107] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#FFC107] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#FFC107] transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-400 pt-6 text-center text-sm text-gray-200">
          <p>&copy;Papas San Luis. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
