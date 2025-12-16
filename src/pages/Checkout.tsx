import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/lib/data';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { items, total } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `*NUEVO PEDIDO - MB MEAURIO*\n\n`;
    message += `*Cliente:* ${formData.name}\n`;
    message += `*Teléfono:* ${formData.phone}\n`;
    message += `*Ciudad:* ${formData.city}\n`;
    message += `*Dirección:* ${formData.address}\n`;
    if (formData.notes) message += `*Notas:* ${formData.notes}\n`;

    message += `\n*DETALLE DEL PEDIDO:*\n`;
    items.forEach((item) => {
      message += `- ${item.name} (x${item.quantity}): $${(item.price * item.quantity).toLocaleString()}\n`;
    });

    message += `\n*TOTAL: $${total.toLocaleString()}*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.phone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Tu carrito está vacío</h2>
        <Link to="/products">
          <Button className="bg-red-600 hover:bg-red-700">Explorar Productos</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link to="/products" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver a comprar
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="bg-zinc-900 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold uppercase tracking-wider">Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-2 border-b border-white/5 last:border-0">
                    <div className="h-16 w-16 bg-zinc-800 rounded overflow-hidden">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-xs text-zinc-400">Cant: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-lg font-bold">TOTAL</span>
                  <span className="text-2xl font-bold text-red-500">${total.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-zinc-900 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold uppercase tracking-wider">Datos de Envío</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-400">Nombre Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="bg-black border-white/10 focus:border-red-600 text-white"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-zinc-400">Teléfono / WhatsApp</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="bg-black border-white/10 focus:border-red-600 text-white"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-zinc-400">Ciudad</Label>
                      <Input
                        id="city"
                        name="city"
                        required
                        className="bg-black border-white/10 focus:border-red-600 text-white"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-zinc-400">Dirección</Label>
                      <Input
                        id="address"
                        name="address"
                        required
                        className="bg-black border-white/10 focus:border-red-600 text-white"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-zinc-400">Notas Adicionales (Opcional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      className="bg-black border-white/10 focus:border-red-600 text-white min-h-[100px]"
                      value={formData.notes}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg tracking-wide">
                    <MessageCircle className="mr-2 h-5 w-5" /> ENVIAR PEDIDO POR WHATSAPP
                  </Button>
                  <p className="text-xs text-center text-zinc-500 mt-4">
                    Al hacer clic, se abrirá WhatsApp con los detalles de tu pedido listos para enviar.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;