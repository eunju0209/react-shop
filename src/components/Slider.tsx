import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ImArrowRight2 } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

export default function Slider() {
  const navigate = useNavigate();
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay
      dynamicHeight={false}
    >
      {banners.map((banner, index) => (
        <div key={index} className='max-h-700px relative'>
          <div className='absolute top-1/2 left-20 text-left -translate-y-1/2'>
            <h1 className='text-4xl text-white font-bold mb-2'>
              {banner.tiitle}
            </h1>
            <p className='text-white mb-3'>{banner.description}</p>
            <button
              className='flex items-center btn'
              onClick={() => navigate(banner.link)}
            >
              바로가기
              <ImArrowRight2 className='ml-2' />
            </button>
          </div>
          <img src={banner.imgPath} />
        </div>
      ))}
    </Carousel>
  );
}

const banners = [
  {
    tiitle: '물빠진 청바지!',
    description: '이제 막 도착한 패션 청바지를 구경해 보세요.',
    link: '/fashion',
    imgPath: 'https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg',
  },
  {
    tiitle: '신속한 업무처리!',
    description: '다양한 디지털 상품을 둘러보세요.',
    link: '/accessory',
    imgPath: 'https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg',
  },
  {
    tiitle: '신선한 식품!',
    description: '농장 직배송으로 더욱 신선한 식료품을 만나보세요.',
    link: '/grocery',
    imgPath: 'https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg',
  },
];
