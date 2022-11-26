import { useNavigate } from 'react-router-dom';

export type ProductType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};

type ProductProps = {
  product: ProductType;
  pageTitle: string;
};

export default function Product({ product, pageTitle }: ProductProps) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() =>
        navigate(`/product/${product.id}`, { state: { product, pageTitle } })
      }
      className='border rounded-2xl'
    >
      <div className='flex justify-center items-center h-80'>
        <img
          className='max-w-[50%] max-h-[50%]'
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className='flex flex-col justify-center bg-slate-100 px-8 h-40'>
        <h3 className='text-md font-bold mb-5'>{product.title}</h3>
        <span className='text-md'>${product.price}</span>
      </div>
    </li>
  );
}
