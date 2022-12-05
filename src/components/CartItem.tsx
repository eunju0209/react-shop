import {
  CartType,
  useQuantityMinus,
  useQuantityPlus,
} from '../context/CartContext';

type CartItemProps = {
  cart: CartType;
};

export default function CartItem({ cart }: CartItemProps) {
  const quantityPlus = useQuantityPlus();
  const quantityMinus = useQuantityMinus();
  const { id, image, title, price, quantity } = cart;
  return (
    <li className='flex justify-between items-center w-full flex-col lg:flex-row mb-10'>
      <div className='basis-3/12 py-5 px-10 mr-12 bg-white rounded-2xl mb-8'>
        <img src={image} alt={title} />
      </div>
      <div className='basis-9/12'>
        <h2 className='text-xl font-bold mb-3'>{title}</h2>
        <h3 className='text-3xl mb-5'>${Math.ceil(price)}</h3>
        <div className='btn-group'>
          <button
            className='btn btn-primary'
            onClick={() => quantityMinus(cart)}
          >
            -
          </button>
          <button className='btn btn-ghost cursor-auto no-animation hover:bg-white'>
            {quantity}
          </button>
          <button className='btn btn-primary' onClick={() => quantityPlus(id)}>
            +
          </button>
        </div>
      </div>
    </li>
  );
}
