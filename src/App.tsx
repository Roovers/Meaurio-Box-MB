import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';

import Home from '@/pages/Home';
import Products from '@/pages/Products';
import About from '@/pages/About';
import Checkout from '@/pages/Checkout';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
