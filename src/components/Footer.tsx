import { Instagram } from 'lucide-react'
import logo from '@/assets/logo/logo.png'

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* LOGO + DESCRIPCIÓN */}
<div className="-mt-8">
  <img
    src={logo}
    alt="Meaurio Box"
    className="w-30 mb-0"
  />

<p className="text-zinc-400 text-sm leading-tight max-w-xs">
  Indumentaria profesional de boxeo diseñada para la elite.
  Fabricada por boxeadores, para boxeadores.
</p>

</div>

          {/* ENLACES */}
          <div>
            <h4 className="text-gold font-bold tracking-widest mb-6 text-sm uppercase">
              Enlaces
            </h4>

            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="hover:text-[#FFD97A] transition-colors cursor-pointer">
                Política de Producción
              </li>
              <li className="hover:text-[#FFD97A] transition-colors cursor-pointer">
                Detalles de envío
              </li>
              <li className="hover:text-[#FFD97A] transition-colors cursor-pointer">
                Política de devolución / cambios
              </li>
              <li className="hover:text-[#FFD97A] transition-colors cursor-pointer">
                Sobre nosotros
              </li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="text-gold font-bold tracking-widest mb-6 text-sm uppercase">
              Contacto
            </h4>

            <ul className="space-y-3 text-sm text-zinc-400">
              <li>info@mbmeaurio.com</li>
              <li>Buenos Aires, Argentina</li>

              <li className="flex items-center space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD97A] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>
            &copy; {new Date().getFullYear()} Meaurio Box.
            Todos los derechos reservados.
          </p>
          <p className="mt-2 md:mt-0 italic">
            Diseñado para la elite.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
