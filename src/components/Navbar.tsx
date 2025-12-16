import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingCart,
  Menu,
  X,
  Mail,
  Instagram,
  MessageCircle
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import CartDrawer from './CartDrawer';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'PRODUCTOS', path: '/products' },
    { name: 'NOSOTROS', path: '/about' },
  ];

  const contactLinks = {
    email: 'mailto:contacto@tumarca.com',
    instagram: 'https://instagram.com/tumarca',
    whatsapp: 'https://wa.me/5491112345678',
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="MB Meaurio"
            className="w-auto h-18 object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-widest transition-colors ${
                location.pathname === link.path
                  ? 'text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
<div className="flex items-center gap-4">
  {/* Contact Icons */}
  <div className="flex items-center gap-3">
    <a
      href={contactLinks.email}
      className="text-zinc-500 hover:text-white transition-colors"
      aria-label="Email"
    >
      <Mail className="w-4 h-4" />
    </a>

    <a
      href={contactLinks.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-white transition-colors"
      aria-label="Instagram"
    >
      <Instagram className="w-[18px] h-[18px]" />
    </a>

    <a
      href={contactLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-white transition-colors"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-[18px] h-[18px]" />
    </a>
  </div>

  {/* Divider */}
  <span className="hidden md:block w-px h-5 bg-white/10" />

  {/* Cart */}
  <Sheet>
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        className="relative text-white hover:bg-white/5"
        aria-label="Carrito"
      >
        <ShoppingCart className="w-5 h-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
    </SheetTrigger>

    <SheetContent className="w-full sm:max-w-md bg-zinc-950 border-l border-white/10 p-0">
      <CartDrawer />
    </SheetContent>
  </Sheet>

  {/* Mobile Menu */}
  <button
    className="md:hidden text-white"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    aria-label="Menú"
  >
    {isMobileMenuOpen ? <X /> : <Menu />}
  </button>
</div>

      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-white/10"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-bold tracking-widest text-zinc-400 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
