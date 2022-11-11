import { useEffect, useState } from 'react';
import Product, { ProductType } from './Product';

type ProductListProps = {
  category: string;
};

export default function ProductList({ category }: ProductListProps) {
  const [products, setProducts] = useState<ProductType[] | undefined>(
    undefined
  );

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  if (!products) {
    return <p>Loading...</p>;
  }

  const filtered = getFilteredItems(products, category);

  return (
    <ul className='w-full flex items-center justify-between'>
      {filtered.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}

function getFilteredItems(products: ProductType[], category: string) {
  if (category === 'all') {
    return products;
  }
  return products
    .filter((product) => product.category === category)
    .slice(0, 4);
}
