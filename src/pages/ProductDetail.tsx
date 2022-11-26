import { useLocation } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

export default function ProductDetail() {
  const {
    state: {
      product: { category, image, title, description, rating, price, id },
      pageTitle,
    },
  } = useLocation();

  const renderingStar = () => {
    const result = [];
    const rate = Number(
      rating.rate
        .toString()
        .split('.')
        .map((value: string, idx: number) => {
          if (idx === 0) {
            return Number(value) * 2;
          }
          return value;
        })
        .join('.')
    );

    for (let i = 0; i < 10; i++) {
      const number = i % 2 === 0 ? 1 : 2;
      result.push(
        <input
          type='radio'
          name='rating-10'
          className={`bg-yellow-400 mask mask-star-2 mask-half-${number} cursor-auto`}
          key={i}
          checked={Math.round(rate) - 1 === i}
          readOnly
          disabled
        />
      );
    }
    return result;
  };
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
            <div className='rating rating-md rating-half mr-3'>
              <input type='radio' name='rating-10' className='rating-hidden' />
              {renderingStar()}
            </div>
            <span>
              {rating.rate} / {rating.count} 참여
            </span>
          </div>
          <h3 className='text-3xl mb-5'>${Math.round(price)}</h3>
          <div>
            <button className='btn btn-primary mr-3'>장바구니에 담기</button>
            <button className='btn btn-outline'>장바구니로 이동</button>
          </div>
        </div>
      </section>
    </section>
  );
}
