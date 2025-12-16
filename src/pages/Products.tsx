import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div className="py-12 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white italic uppercase mb-4"
          >
            COLECCIÓN ELITE
          </motion.h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Descubre nuestra gama completa de calzado profesional. Cada par está diseñado para ofrecer el máximo rendimiento en el cuadrilátero.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;