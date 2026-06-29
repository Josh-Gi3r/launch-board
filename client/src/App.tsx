import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Builders from './pages/Builders';
import Partners from './pages/Partners';
import Library from './pages/Library';
import Submit from './pages/Submit';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface text-on-surface flex flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* /manifesto kept as alias for backward compat */}
            <Route path="/manifesto" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/builders" element={<Builders />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/library" element={<Library />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
