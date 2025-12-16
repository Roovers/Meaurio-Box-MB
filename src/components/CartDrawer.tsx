import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const CartDrawer = () => {
  const { items, total, itemCount } = useCart();

  return (
    <div className="flex flex-col h-full bg-zinc-950 text-white">
      <SheetHeader className="p-6 border-b border-white/10">
        <SheetTitle className="text-white font-bold tracking-widest flex items-center gap-2">
          CARRITO <span className="text-red-600">({itemCount})</span>
        </SheetTitle>
      </SheetHeader>

      <ScrollArea className="flex-1 px-6">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[50vh] text-zinc-500 space-y-4">
            <ShoppingBag className="w-16 h-16 opacity-20" />
            <p>Tu carrito está vacío</p>
            <SheetClose asChild>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-white">
                Ver Productos
              </Button>
            </SheetClose>
          </div>
        ) : (
          <div className="py-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </ScrollArea>

      {items.length > 0 && (
        <div className="p-6 border-t border-white/10 bg-zinc-900/30">
          <div className="flex justify-between items-center mb-4">
            <span className="text-zinc-400">Total Estimado</span>
            <span className="text-xl font-bold text-white">${total.toLocaleString()}</span>
          </div>
          <SheetClose asChild>
            <Link to="/checkout" className="w-full">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold tracking-wider py-6">
                FINALIZAR PEDIDO <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </SheetClose>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;