import { Link } from 'react-router-dom';
import {
  HiOutlineShoppingBag,
  HiOutlineMoon,
  HiOutlineSun,
} from 'react-icons/hi';
import { useCarts } from '../context/CartContext';
import { themeChange } from 'theme-change';
import { useEffect } from 'react';
import { useDarkMode, useToggleDarkMode } from '../context/DarkModeContext';

export default function Navbar() {
  const carts = useCarts();
  const toggleDarkMode = useToggleDarkMode();
  const darkMode = useDarkMode();

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <header className='sticky top-0 left-0 flex justify-between w-full shadow-lg py-2 px-10 dark:bg-slate-900 z-50'>
      <div className='flex gap-8 items-center'>
        <Link to='/'>
          <h1 className='text-xl font-bold dark:text-white'>React Shop</h1>
        </Link>
        <nav className='flex gap-8 text-sm font-bold dark:text-white'>
          <Link to='/fashion'>패션</Link>
          <Link to='/accessory'>액세서리</Link>
          <Link to='/digital'>디지털</Link>
        </nav>
      </div>
      <div className='flex items-center'>
        <button
          onClick={toggleDarkMode}
          className='text-3xl active:animate-spin dark:text-white'
        >
          {!darkMode && <HiOutlineMoon />}
          {darkMode && <HiOutlineSun />}
        </button>
        <form className='mx-5'>
          <input
            className='py-3 px-4 outline-none bg-gray-300 rounded-md'
            type='text'
            placeholder='검색'
          />
        </form>
        <Link to='cart' className='text-3xl relative dark:text-white'>
          <HiOutlineShoppingBag />
          <span className='absolute -top-2.5 -right-2.5 text-xs w-6 h-6 bg-red-500 rounded-full text-white font-bold flex items-center justify-center'>
            {carts.length}
          </span>
        </Link>
      </div>
    </header>
  );
}
