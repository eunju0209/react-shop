import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOpenMenu = () => setIsChecked(true);

  return (
    <CartProvider>
      <DarkModeProvider>
        <div className='drawer'>
          <input
            id='my-drawer-3'
            type='checkbox'
            className='drawer-toggle'
            checked={isChecked}
            readOnly
          />
          <div className='drawer-content flex flex-col'>
            <Navbar handleOpenMenu={handleOpenMenu} />
            <Outlet />
            <Footer />
          </div>
          <div className='drawer-side'>
            <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
            <ul className='menu p-4 w-80 bg-base-100'>
              <li>
                <Link to='/fashion' onClick={() => setIsChecked(false)}>
                  패션
                </Link>
              </li>
              <li>
                <Link to='/accessory' onClick={() => setIsChecked(false)}>
                  액세서리
                </Link>
              </li>
              <li>
                <Link to='/digital' onClick={() => setIsChecked(false)}>
                  디지털
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </DarkModeProvider>
    </CartProvider>
  );
}

export default App;
