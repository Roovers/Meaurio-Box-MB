import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/lib/data'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const { items, total } = useCart()

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    provincia: '',
    localidad: '',
    codigoPostal: '',
    aclaraciones: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let message = `NUEVO PEDIDO - MB MEAURIO\n\n`

    message += `CLIENTE\n`
    message += `Nombre: ${formData.nombre}\n`
    message += `Apellido: ${formData.apellido}\n`
    message += `Telefono: ${formData.telefono}\n\n`

    message += `DIRECCION\n`
    message += `Provincia: ${formData.provincia}\n`
    message += `Localidad: ${formData.localidad}\n`
    message += `Codigo Postal: ${formData.codigoPostal}\n`
    if (formData.aclaraciones) {
      message += `Aclaraciones: ${formData.aclaraciones}\n`
    }

    message += `\nDETALLE DEL PEDIDO\n`

    items.forEach((item, index) => {
      message += `\n${index + 1}. ${item.name}\n`
      message += `Color: ${item.selectedColor}\n`
      message += `Talle: ${item.selectedSize}\n`
      if (item.selectedVelcro) {
        message += `Abrojos: ${item.selectedVelcro}\n`
      }
      message += `Cantidad: ${item.quantity}\n`
      message += `Subtotal: $${(
        item.price * item.quantity
      ).toLocaleString('es-AR')}\n`

      if (item.instagramUrl) {
        message += `Ver modelo: ${item.instagramUrl}\n`
      }
    })

    message += `\nTOTAL: $${total.toLocaleString('es-AR')}\n`
    message += `Metodo de pago: Acordar con el vendedor\n`
    message += `Forma de entrega: Acordar con el vendedor\n`

    const whatsappUrl = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappUrl, '_blank')
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-4">
          Tu carrito esta vacio
        </h2>
        <Link to="/products">
          <Button className="bg-red-600 hover:bg-red-700">
            Explorar Productos
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-10 md:py-12 bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link
          to="/products"
          className="inline-flex items-center text-zinc-400 hover:text-white mb-6 md:mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a comprar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* RESUMEN */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Card className="bg-zinc-900 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl font-bold uppercase tracking-wider">
                  Resumen del Pedido
                </CardTitle>
              </CardHeader>
              <CardContent>
                {items.map(item => (
                  <div
                    key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                    className="flex gap-4 py-3 border-b border-white/5 last:border-0"
                  >
                    <div className="h-16 w-16 bg-zinc-800 rounded overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-xs text-zinc-400">Color: {item.selectedColor}</p>
                      <p className="text-xs text-zinc-400">Talle: {item.selectedSize}</p>
                      {item.selectedVelcro && (
                        <p className="text-xs text-zinc-400">Abrojos: {item.selectedVelcro}</p>
                      )}
                      <p className="text-xs text-zinc-400">Cantidad: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm">
                        ${(item.price * item.quantity).toLocaleString('es-AR')}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-base md:text-lg font-bold">TOTAL</span>
                  <span className="text-xl md:text-2xl font-bold text-red-500">
                    ${total.toLocaleString('es-AR')}
                  </span>
                </div>

                <div className="mt-5 rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent p-4 md:p-5">
                  <p className="text-xs font-semibold text-amber-400 uppercase mb-2">
                    Importante
                  </p>
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    El método de pago y la forma de entrega se coordinan directamente
                    con el vendedor una vez enviado el pedido.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* FORM */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-zinc-900 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl font-bold uppercase tracking-wider">
                  Datos de Envio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-zinc-400">Nombre *</Label>
                      <Input name="nombre" required className="bg-black border-white/10 text-white" value={formData.nombre} onChange={handleChange} />
                    </div>
                    <div>
                      <Label className="text-zinc-400">Apellido *</Label>
                      <Input name="apellido" required className="bg-black border-white/10 text-white" value={formData.apellido} onChange={handleChange} />
                    </div>
                  </div>

                  <div>
                    <Label className="text-zinc-400">Telefono de contacto *</Label>
                    <Input name="telefono" required className="bg-black border-white/10 text-white" value={formData.telefono} onChange={handleChange} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Input name="provincia" placeholder="Provincia *" required className="bg-black border-white/10 text-white" value={formData.provincia} onChange={handleChange} />
                    <Input name="localidad" placeholder="Localidad *" required className="bg-black border-white/10 text-white" value={formData.localidad} onChange={handleChange} />
                    <Input name="codigoPostal" placeholder="Codigo Postal *" required className="bg-black border-white/10 text-white" value={formData.codigoPostal} onChange={handleChange} />
                  </div>

                  <Textarea name="aclaraciones" placeholder="Aclaraciones (opcional)" className="bg-black border-white/10 text-white min-h-[90px]" value={formData.aclaraciones} onChange={handleChange} />

                  <div className="rounded-xl border border-[#E6C768]/30 bg-gradient-to-br from-black via-zinc-950 to-black p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#FFD97A] mb-3">
                      Condiciones del pedido
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="rounded-lg border border-[#E6C768]/20 bg-black/40 p-3">
                        <p className="text-[11px] uppercase tracking-widest text-zinc-400 mb-1">
                          Método de pago
                        </p>
                        <p className="text-sm font-semibold text-[#FFD97A]">
                          Acordar con el vendedor
                        </p>
                      </div>

                      <div className="rounded-lg border border-[#E6C768]/20 bg-black/40 p-3">
                        <p className="text-[11px] uppercase tracking-widest text-zinc-400 mb-1">
                          Forma de entrega
                        </p>
                        <p className="text-sm font-semibold text-[#FFD97A]">
                          Acordar con el vendedor
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 text-base md:text-lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    ENVIAR PEDIDO POR WHATSAPP
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
