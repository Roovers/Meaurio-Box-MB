import { motion } from 'framer-motion';
import brunoImage from '@/assets/bruno/2.jpg';

const About = () => {
  return (
    <div className="py-12 bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-12"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase mb-6">
              NUESTRA HISTORIA
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <p className="text-lg font-medium text-white">
                MB Meaurio nació de una necesidad real en el ring.
              </p>
              <p>
                Mi nombre es Bruno Meaurio y mucho tiempo fui capacitándome sobre el calzado deportivo,
                hasta que un día decidí probar y hacer mi propia bota de boxeo, con plantilla adaptable,
                liviana y que sea cómoda para todos los pies, desde la horma ancha, hasta la fina,
                y sin darnos cuenta creamos la mejor bota del país.
              </p>
              <p>
                Lo que comenzó como un proyecto personal para mejorar mi propio
                rendimiento, se convirtió en una obsesión por crear la bota de
                boxeo perfecta.
              </p>
            </div>

            {/* Imagen Bruno */}
            <div className="relative aspect-square rounded-lg overflow-hidden border border-white/5 group">
              <img
                src={brunoImage}
                alt="Bruno Meaurio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-red-900/20"></div>

              {/* Nombre */}
              <div className="absolute bottom-4 left-4 z-10">
                <span
                  className="
    inline-block
    px-3 py-1
    font-bold tracking-[0.15em] text-sm md:text-base uppercase
    text-transparent bg-clip-text
    bg-gradient-to-r from-[#C9A24D] via-[#FFD97A] to-[#B08D2F]
    border border-[#E6C768]/40
    rounded-md
    shadow-[0_0_15px_rgba(255,217,122,0.25)]
    bg-black/40
    backdrop-blur-sm
  "
                >
                  Bruno Meaurio
                </span>
              </div>
            </div>
          </div>

          {/* Filosofía */}
          <div className="bg-zinc-900/30 p-8 rounded-2xl border border-[#E6C768]/10 mt-12">
            <h2
              className="
      text-2xl font-black mb-8 uppercase italic
      text-transparent bg-clip-text
      bg-gradient-to-r from-[#C9A24D] via-[#FFD97A] to-[#B08D2F]
      drop-shadow-[0_0_6px_rgba(255,217,122,0.25)]
    "
            >
              Filosofía de Diseño
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* PRECISIÓN */}
              <div>
                <h3
                  className="
          font-bold mb-2 uppercase tracking-[0.2em]
          text-transparent bg-clip-text
          bg-gradient-to-r from-[#FFD97A] to-[#B08D2F]
          drop-shadow-[0_0_4px_rgba(255,217,122,0.3)]
        "
                >
                  PRECISIÓN
                </h3>
                <p className="text-sm text-zinc-400">
                  Cada costura y material tiene un propósito. Nada sobra, nada falta.
                </p>
              </div>

              {/* ADAPTABILIDAD */}
              <div>
                <h3
                  className="
          font-bold mb-2 uppercase tracking-[0.2em]
          text-transparent bg-clip-text
          bg-gradient-to-r from-[#FFD97A] to-[#B08D2F]
          drop-shadow-[0_0_4px_rgba(255,217,122,0.3)]
        "
                >
                  ADAPTABILIDAD
                </h3>
                <p className="text-sm text-zinc-400">
                  Horma ancha y fina a la vez, logrando un ajuste universal gracias a
                  materiales flexibles.
                </p>
              </div>

              {/* PASIÓN */}
              <div>
                <h3
                  className="
          font-bold mb-2 uppercase tracking-[0.2em]
          text-transparent bg-clip-text
          bg-gradient-to-r from-[#FFD97A] to-[#B08D2F]
          drop-shadow-[0_0_4px_rgba(255,217,122,0.3)]
        "
                >
                  PASIÓN
                </h3>
                <p className="text-sm text-zinc-400">
                  Hecho por boxeadores, entendiendo el sacrificio y la gloria del deporte.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
