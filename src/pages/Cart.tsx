import CartItem from '../components/CartItem';
import { useCarts } from '../context/CartContext';
import Popup from '../components/Popup';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Cart() {
  const navigate = useNavigate();
  const carts = useCarts();

  return (
    <section className='w-full'>
      <Breadcrumbs text1='홈' text2='장바구니' />
      <div className='flex justify-center items-start my-10 flex-col lg:flex-row'>
        {carts.length < 1 ? (
          <div className='w-full px-12'>
            <p className='text-2xl mb-8'>장바구니에 물품이 없습니다.</p>
            <button className='btn btn-primary' onClick={() => navigate('/')}>
              담으러 가기
            </button>
          </div>
        ) : (
          <ul className='w-full px-12'>
            {carts.map((cart) => (
              <CartItem key={cart.id} cart={cart} />
            ))}
          </ul>
        )}
        <div className='basis-1/5 flex items-center mt-8 ml-8'>
          <span className='text-2xl mr-3'>
            총 : ${' '}
            {carts.reduce(
              (prev, curr) => prev + Math.ceil(curr.price) * curr.quantity,
              0
            )}
          </span>
          <label htmlFor='my-modal-6' className='btn btn-primary'>
            구매하기
          </label>
          <Popup />
        </div>
      </div>
    </section>
  );
}
