import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Instagram, X, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo/logo.png'

type ModalType =
  | 'produccion'
  | 'envio'
  | 'devolucion'
  | null

const Footer = () => {
  const [modal, setModal] = useState<ModalType>(null)

  return (
    <>
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
                <li
                  className="hover:text-[#FFD97A] transition-colors cursor-pointer"
                  onClick={() => setModal('produccion')}
                >
                  Política de Producción
                </li>

                <li
                  className="hover:text-[#FFD97A] transition-colors cursor-pointer"
                  onClick={() => setModal('envio')}
                >
                  Detalles de envío
                </li>

                <li
                  className="hover:text-[#FFD97A] transition-colors cursor-pointer"
                  onClick={() => setModal('devolucion')}
                >
                  Política de devolución / cambios
                </li>

                <li className="hover:text-[#FFD97A] transition-colors">
                  <Link to="/about">Sobre nosotros</Link>
                </li>
              </ul>
            </div>

{/* CONTACTO */}
<div>
  <h4 className="text-gold font-bold tracking-widest mb-6 text-sm uppercase">
    Contacto
  </h4>

  <div className="space-y-4 text-sm text-zinc-400">
    <p>Buenos Aires, Argentina</p>

    <div className="flex items-center space-x-5">
      <a
        href="https://www.instagram.com/calzado_box_meaurio/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-[#FFD97A] transition-all hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>

      <a
        href="https://wa.me/5491139501590"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-[#FFD97A] transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5" />
      </a>

      <a
        href="mailto:brunoemeaurio1997@gmail.com"
        className="text-zinc-400 hover:text-[#FFD97A] transition-all hover:scale-110"
        aria-label="Correo"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  </div>
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

      {/* MODAL */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative bg-zinc-950 border border-white/10 rounded-xl max-w-lg w-full p-6 text-zinc-300">

            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {modal === 'envio' && (
              <>
                <h3 className="text-gold text-lg font-bold mb-4">
                  Detalles de envío
                </h3>
                <p className="text-sm leading-relaxed">
                  Todos los envíos son realizados a través de Andreani con número
                  de remito para ver el seguimiento. El envío puede ser a
                  domicilio o a sucursal.
                </p>
              </>
            )}

            {modal === 'devolucion' && (
              <>
                <h3 className="text-gold text-lg font-bold mb-4">
                  Política de devolución / cambios
                </h3>
                <p className="text-sm leading-relaxed">
                  El producto tiene 30 días para el cambio en caso de no estar
                  usado. Si el producto tiene un desperfecto nos hacemos cargo.
                  En caso de estar usado y desear cambiarse, no se acepta el
                  cambio.
                </p>
              </>
            )}

            {modal === 'produccion' && (
              <>
                <h3 className="text-gold text-lg font-bold mb-4">
                  Política de Producción
                </h3>
                <p className="text-sm leading-relaxed">
                  Los productos se fabrican a medida en un lapso de 4 días
                  hábiles luego de realizar un encargo.
                </p>
              </>
            )}

          </div>
        </div>
      )}
    </>
  )
}

export default Footer
