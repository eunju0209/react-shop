import Slider from '../components/Slider';
import Products from './Products';

export default function Home() {
  return (
    <>
      <Slider />
      <div className='w-full max-w-screen-2xl flex flex-col items-center px-6'>
        <Products category={`men's clothing`} title='패션' slice={true} />
        <Products category='jewelery' title='액세서리' slice={true} />
        <Products category='electronics' title='디지털' slice={true} />
      </div>
    </>
  );
}
