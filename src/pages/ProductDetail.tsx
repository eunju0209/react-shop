import { useLocation, useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { ProductType } from '../components/Product';
import { useAddCarts } from '../context/CartContext';
import Breadcrumbs from '../components/Breadcrumbs';

type LocationState = {
  state: {
    product: ProductType;
  };
};

export default function ProductDetail() {
  const navigate = useNavigate();
  const addCarts = useAddCarts();
  const {
    state: { product },
  } = useLocation() as LocationState;

  const { category, image, title, description, rating, price, id } = product;

  let pageTitle;
  switch (category) {
    case `men's clothing` || `women's clothing`:
      pageTitle = '패션';
      break;
    case 'jewelery':
      pageTitle = '액세서리';
      break;
    case 'electronics':
      pageTitle = '디지털';
      break;
  }

  return (
    <section className='max-w-screen-2xl mx-auto'>
      <Breadcrumbs text1={pageTitle ? pageTitle : ''} text2={title} />
      <section className='flex items-center p-10 px-10 flex-col lg:flex-row'>
        <div className='basis-1/5 px-10 py-5 bg-white rounded-2xl mb-8 max-w-xs'>
          <img src={image} alt={title} />
        </div>
        <div className='basis-4/5 lg:p-8 lg:ml-10'>
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
