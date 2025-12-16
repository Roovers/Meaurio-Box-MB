import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/data'
import ProductCard from '@/components/ProductCard'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Zap, Trophy } from 'lucide-react'
import heroBg from '@/assets/hero/HERO3.png'

const Home = () => {
  const featuredProducts = products.slice(0, 3)

  const goldText =
    'text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24D] via-[#FFD97A] to-[#B08D2F]'

  const goldButton =
    'bg-gradient-to-r from-[#C9A24D] via-[#FFD97A] to-[#B08D2F] hover:from-[#B08D2F] hover:via-[#FFD97A] hover:to-[#C9A24D] text-[#2B1B00] shadow-lg hover:shadow-xl border border-[#E6C768] transition-all duration-300'

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        </motion.div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className={`font-bold tracking-[0.3em] mb-4 text-sm md:text-base uppercase ${goldText}`}
            >
              La primera marca de botas de boxeo del país
            </h2>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 italic leading-tight">
              LAS MEJORES BOTAS <br />
              <span className={goldText}>CON LOS MEJORES</span>
            </h1>

            <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Indumentaria profesional diseñada por boxeadores. Ligereza, soporte
              superior y estilo inigualable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button
                  size="lg"
                  className={`${goldButton} px-8 py-6 text-lg font-bold tracking-wider w-full sm:w-auto`}
                >
                  PRODUCTOS
                </Button>
              </Link>

<Link to="/about">
  <Button
    variant="outline"
    size="lg"
    className="
      bg-transparent
      border-[#E6C768]/50
      text-[#FFD97A]
      hover:bg-[#FFD97A]/10
      hover:text-[#FFD97A]
      px-8 py-6
      text-lg font-bold tracking-wider
      transition-all
    "
  >
    LA MARCA
  </Button>
</Link>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                icon: Zap,
                title: 'Extrema Ligereza',
                text: 'Diseñadas para maximizar tu velocidad y agilidad.'
              },
              {
                icon: ShieldCheck,
                title: 'Soporte Total',
                text: 'Horma segura y plantilla adaptable.'
              },
              {
                icon: Trophy,
                title: 'Calidad Elite',
                text: 'Materiales premium de nivel profesional.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/20 border border-[#E6C768]/10 hover:border-[#E6C768]/40 transition-colors"
              >
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#FFD97A]" />
                </div>
                <h3 className={`text-xl font-bold mb-3 uppercase tracking-wide ${goldText}`}>
                  {item.title}
                </h3>
                <p className="text-zinc-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className={`text-3xl md:text-4xl font-black italic uppercase mb-2 ${goldText}`}>
                Destacados
              </h2>
              <p className="text-zinc-400">Lo más elegido por nuestros campeones.</p>
            </div>

            <Link
              to="/products"
              className="hidden md:flex items-center font-bold text-[#FFD97A] hover:text-[#C9A24D] transition-colors"
            >
              VER TODO <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A24D]/10 via-transparent to-[#B08D2F]/10" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className={`text-4xl md:text-6xl font-black italic uppercase mb-10 ${goldText}`}>
            ¿LISTO PARA SUBIR DE NIVEL?
          </h2>

          <Link to="/products">
            <Button
              size="lg"
              className={`${goldButton} px-10 py-8 text-xl font-black tracking-wider`}
            >
              COMPRAR AHORA
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
