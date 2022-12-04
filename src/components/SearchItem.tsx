import { ProductType } from './Product';
import { useNavigate } from 'react-router-dom';

type SearchItemPops = {
  product: ProductType;
  removeKeyword: () => void;
};

export default function SearchItem({ product, removeKeyword }: SearchItemPops) {
  const navigate = useNavigate();
  const { id, title } = product;

  const handleClick = () => {
    navigate(`/product/${id}`, { state: { product } });
    removeKeyword();
  };

  return (
    <li tabIndex={0}>
      <a onClick={handleClick}>{title}</a>
    </li>
  );
}
