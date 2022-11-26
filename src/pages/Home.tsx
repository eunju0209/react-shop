import Slider from '../components/Slider';
import Products from './Products';

export default function Home() {
  return (
    <>
      <Slider />
      <div className='w-full max-w-screen-2xl flex flex-col items-center px-6 mt-16'>
        <Products category={`men's clothing`} pageTitle='패션' slice={true} />
        <Products category='jewelery' pageTitle='액세서리' slice={true} />
        <Products category='electronics' pageTitle='디지털' slice={true} />
      </div>
    </>
  );
}
