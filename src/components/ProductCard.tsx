import { useMemo, useState } from 'react'
import type { Product } from '@/lib/data'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

const goldText =
  'text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24D] via-[#FFD97A] to-[#B08D2F]'

const goldButton =
  'bg-gradient-to-r from-[#C9A24D] via-[#FFD97A] to-[#B08D2F] hover:from-[#B08D2F] hover:via-[#FFD97A] hover:to-[#C9A24D] text-[#2B1B00] shadow-lg hover:shadow-xl border border-[#E6C768] transition-all duration-300'

const SizeTableBoots = () => (
  <div className="overflow-x-auto">
    <table className="w-full border border-white/10 text-sm">
      <thead className="bg-zinc-900">
        <tr className="text-[#FFD97A]">
          <th className="p-2 border border-white/10">AR</th>
          <th className="p-2 border border-white/10">CM</th>
          <th className="p-2 border border-white/10">US</th>
        </tr>
      </thead>
      <tbody className="text-white">
        {[
          ['38', '24', '6.5'],
          ['39', '25', '7'],
          ['40', '26', '8'],
          ['41', '27', '9'],
          ['42', '28', '9.5'],
          ['43', '28.5', '10.5'],
          ['44', '29', '11'],
          ['45', '30', '12'],
        ].map((row, i) => (
          <tr key={i} className="text-center odd:bg-black/30">
            {row.map((cell, j) => (
              <td key={j} className="p-2 border border-white/10">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const SizeTableClothes = () => (
  <div className="overflow-x-auto">
    <table className="w-full border border-white/10 text-sm">
      <thead className="bg-zinc-900">
        <tr className="text-[#FFD97A]">
          <th className="p-2 border border-white/10">Talle</th>
          <th className="p-2 border border-white/10">Pecho (cm)</th>
          <th className="p-2 border border-white/10">Hombo a Cintura (cm)</th>
        </tr>
      </thead>
      <tbody className="text-white">
        {[
          ['S', '50', '74'],
          ['M', '52', '77'],
          ['L', '55', '82'],
          ['XL', '58', '85'],
          ['XXL', '61', '87'],
          ['XXXL', '64', '88'],
        ].map((row, i) => (
          <tr key={i} className="text-center odd:bg-black/30">
            {row.map((cell, j) => (
              <td key={j} className="p-2 border border-white/10">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart()

  const images = useMemo(() => {
    const arr = product.images?.length ? product.images : [product.image]
    return arr.filter(Boolean)
  }, [product.images, product.image])

  const [activeIndex, setActiveIndex] = useState(0)
  const [open, setOpen] = useState(false)

  const activeImg = images[Math.min(activeIndex, images.length - 1)]

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative bg-zinc-900/50 border border-white/5 rounded-lg overflow-hidden hover:border-[#E6C768]/40 transition-all duration-300"
      >
        <div className="aspect-square overflow-hidden bg-zinc-900 relative">
          <img
            src={activeImg}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />

          {images.length > 1 && (
            <div className="absolute bottom-3 left-3 flex gap-2 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 w-2 rounded-full ${i === activeIndex
                    ? 'bg-[#FFD97A]'
                    : 'bg-white/40 hover:bg-[#FFD97A]/70'
                    }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-lg font-black text-white mb-1">
            {product.name}
          </h3>

          <p className="text-zinc-400 text-sm mb-4 line-clamp-2 min-h-[40px]">
            {product.description}
          </p>

          <p className="text-xl font-black text-white">
            ${product.price.toLocaleString('es-AR')}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button
              onClick={() => addToCart(product)}
              className={`${goldButton} font-black tracking-wider`}
            >
              <Plus className="w-4 h-4 mr-2" />
              AGREGAR
            </Button>

            <Button
              onClick={() => setOpen(true)}
              variant="outline"
              className="bg-transparent border-[#E6C768]/50 text-[#FFD97A] hover:bg-[#FFD97A]/10 font-black tracking-wider"
            >
              DETALLES
            </Button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="relative w-full md:max-w-5xl bg-zinc-950 border border-white/10 rounded-t-2xl md:rounded-2xl max-h-[90vh] overflow-y-auto"
            >

              <div className="sticky top-0 z-10 bg-zinc-950 border-b border-white/10 p-4 md:p-6 flex justify-between">
                <div>
                  <h3 className={`text-xl md:text-2xl font-black italic uppercase ${goldText}`}>
                    {product.name}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base mt-1">
                    {product.description}
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6">

                <div className="flex flex-col gap-4">
                  <div
                    className="
    bg-black/40
    rounded-xl
    border border-white/10
    overflow-hidden
    flex
    items-center
    justify-center
    h-[220px]
    md:h-[280px]
  "
                  >
                    <img
                      src={activeImg}
                      alt={product.name}
                      className="
      h-full
      w-full
      object-cover
    "
                    />
                  </div>

                  <div className="bg-black/30 rounded-xl border border-white/10 p-4">
                    <p className="text-white font-black text-2xl">
                      ${product.price.toLocaleString('es-AR')}
                    </p>

                    {product.features && (
                      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                        {product.features.map((f, i) => (
                          <li key={i}>• {f}</li>
                        ))}
                      </ul>
                    )}

                    <Button
                      onClick={() => addToCart(product)}
                      className={`${goldButton} w-full mt-4 font-black tracking-wider`}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      AGREGAR AL CARRITO
                    </Button>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl border border-white/10 p-4 h-fit">
                  <h4 className={`font-black uppercase italic mb-3 ${goldText}`}>
                    Guía de talles
                  </h4>

                  {product.type === 'botas' ? (
                    <SizeTableBoots />
                  ) : (
                    <SizeTableClothes />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProductCard
