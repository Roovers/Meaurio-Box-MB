import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'sonner';

const Layout = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-black text-white flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        <Footer />
        <Toaster position="bottom-right" theme="dark" />
      </div>
    </CartProvider>
  );
};

export default Layout;
