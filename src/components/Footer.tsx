import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tighter italic mb-4">
              MB <span className="text-red-600">MEAURIO</span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Indumentaria profesional de boxeo diseñada para la elite. 
              Fabricada por boxeadores, para boxeadores.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-widest mb-6 text-sm">ENLACES</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="/" className="hover:text-red-500 transition-colors">Inicio</a></li>
              <li><a href="/products" className="hover:text-red-500 transition-colors">Productos</a></li>
              <li><a href="/about" className="hover:text-red-500 transition-colors">Sobre Nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest mb-6 text-sm">CONTACTO</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>Buenos Aires, Argentina</li>
              <li>info@mbmeaurio.com</li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-red-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-red-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-red-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} MB Meaurio. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Diseñado para la elite.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;