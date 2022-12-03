import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <CartProvider>
      <DarkModeProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </DarkModeProvider>
    </CartProvider>
  );
}

export default App;
