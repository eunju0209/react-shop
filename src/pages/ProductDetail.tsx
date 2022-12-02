import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import StarRating from '../components/StarRating';
import { ProductType } from '../components/Product';
import { useAddCarts } from '../context/CartContext';

type LocationState = {
  state: {
    product: ProductType;
    pageTitle: string;
  };
};

export default function ProductDetail() {
  const navigate = useNavigate();
  const addCarts = useAddCarts();
  const {
    state: { product, pageTitle },
  } = useLocation() as LocationState;

  const { category, image, title, description, rating, price, id } = product;

  return (
    <section>
      <p className='flex items-center mt-8 px-8 text-sm'>
        {pageTitle}
        <IoIosArrowForward className='mx-2 text-gray-400' />
        {title}
      </p>
      <section className='flex items-center p-10 px-16'>
        <div className='basis-1/5 px-8'>
          <img src={image} alt={title} />
        </div>
        <div className='basis-4/5 p-8 ml-10'>
          <h2 className='text-xl font-bold mb-2'>
            {title}
            <span className='text-sm ml-4 bg-teal-400 text-white py-0.5 px-2.5 rounded-full'>
              NEW
            </span>
          </h2>
          <p className='text-lg mb-5'>{description}</p>
          <div className='flex items-center mb-5'>
            <StarRating rating={rating} />
            <span>
              {rating.rate} / {rating.count} 참여
            </span>
          </div>
          <h3 className='text-3xl mb-5'>${Math.round(price)}</h3>
          <div>
            <button
              className='btn btn-primary mr-3'
              onClick={() => addCarts({ id, image, title, price, quantity: 1 })}
            >
              장바구니에 담기
            </button>
            <button
              onClick={() => navigate('/cart')}
              className='btn btn-outline'
            >
              장바구니로 이동
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
