import type { CartItem as CartItemType } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';


interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-white/10">
      <div className="h-20 w-20 bg-zinc-900 rounded-md overflow-hidden flex-shrink-0">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-sm text-white line-clamp-1">{item.name}</h4>
          <p className="text-xs text-zinc-400">${item.price.toLocaleString()}</p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center bg-zinc-900 rounded-md border border-white/10">
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1 hover:text-red-500 transition-colors disabled:opacity-50"
              disabled={item.quantity <= 1}
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-xs font-medium w-6 text-center">{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1 hover:text-red-500 transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          
          <button 
            onClick={() => removeFromCart(item.id)}
            className="text-zinc-500 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;