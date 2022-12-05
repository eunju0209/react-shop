import { Link } from 'react-router-dom';
import {
  HiOutlineShoppingBag,
  HiOutlineMoon,
  HiOutlineSun,
} from 'react-icons/hi';
import { useCarts } from '../context/CartContext';
import { useDarkMode, useToggleDarkMode } from '../context/DarkModeContext';
import Search from './Search';

type NavbarProprs = {
  handleOpenMenu: () => void;
};

export default function Navbar({ handleOpenMenu }: NavbarProprs) {
  const carts = useCarts();
  const toggleDarkMode = useToggleDarkMode();
  const darkMode = useDarkMode();

  return (
    <header className='w-full navbar sticky top-0 left-0 z-50 bg-white dark:bg-slate-900 pr-4 lg:px-8 shadow-lg'>
      <div className='flex-none lg:hidden'>
        <label
          onClick={handleOpenMenu}
          htmlFor='my-drawer-3'
          className='btn btn-square btn-ghost'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </label>
      </div>
      <div className='flex justify-between w-full'>
        <div className='flex items-center'>
          <h1 className='text-xl font-semibold dark:text-white mx-2'>
            <Link to='/'>React Shop</Link>
          </h1>
          <nav className='hidden lg:block'>
            <ul className='menu menu-horizontal text-sm font-bold dark:text-white'>
              <li>
                <Link
                  to='/fashion'
                  className='rounded-lg active:bg-transparent focus:bg-transparent hover:bg-gray-300'
                >
                  패션
                </Link>
              </li>
              <li>
                <Link
                  to='/accessory'
                  className='rounded-lg active:bg-transparent focus:bg-transparent hover:bg-gray-300'
                >
                  액세서리
                </Link>
              </li>
              <li>
                <Link
                  to='/digital'
                  className='rounded-lg active:bg-transparent focus:bg-transparent hover:bg-gray-300'
                >
                  디지털
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex items-center'>
          <button
            onClick={toggleDarkMode}
            className='text-2xl active:animate-spin dark:text-white'
          >
            {!darkMode && <HiOutlineMoon />}
            {darkMode && <HiOutlineSun />}
          </button>
          <Search />
          <Link to='cart' className='text-2xl relative dark:text-white'>
            <HiOutlineShoppingBag />
            <span className='absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full text-white font-bold flex items-center justify-center'>
              {carts.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
