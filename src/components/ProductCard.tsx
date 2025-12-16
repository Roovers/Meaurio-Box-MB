import type { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';



interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-zinc-900/50 border border-white/5 rounded-lg overflow-hidden hover:border-red-600/30 transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden bg-zinc-900 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
        
        <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button 
            onClick={() => addToCart(product)}
            size="icon" 
            className="bg-red-600 hover:bg-red-700 text-white rounded-full h-10 w-10 shadow-lg shadow-red-900/20"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{product.name}</h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2 min-h-[40px]">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">${product.price.toLocaleString()}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;