import { Link } from 'react-router-dom';
import { HiOutlineMoon, HiOutlineShoppingBag } from 'react-icons/hi';

export default function Navbar() {
  return (
    <header className='flex justify-between w-full shadow-lg py-2 px-10'>
      <div className='flex gap-8 items-center'>
        <Link to='/'>
          <h1 className='text-xl font-bold'>React Shop</h1>
        </Link>
        <nav className='flex gap-8 text-sm font-bold'>
          <Link to='/fashion'>패션</Link>
          <Link to='/accessory'>액세서리</Link>
          <Link to='/digital'>디지털</Link>
        </nav>
      </div>
      <div className='flex'>
        <button className='text-3xl'>
          <HiOutlineMoon />
        </button>
        <form className='mx-5'>
          <input
            className='py-3 px-4 outline-none bg-gray-300 rounded-md'
            type='text'
            placeholder='검색'
          />
        </form>
        <button className='text-2xl'>
          <HiOutlineShoppingBag />
        </button>
      </div>
    </header>
  );
}
