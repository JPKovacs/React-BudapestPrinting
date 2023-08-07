import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Training from './pages/Training';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/training" element={<Training />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
