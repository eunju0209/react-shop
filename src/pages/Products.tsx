import { useEffect, useState } from 'react';
import Product, { ProductType } from '../components/Product';

type ProductListProps = {
  category: string;
  title: string;
  slice?: boolean;
};

export default function Products({ category, title, slice }: ProductListProps) {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const filtered = getFilteredItems(products, category, slice);

  return (
    <section className='px-14'>
      <h1 className='text-4xl font-bold mt-16 mb-7 text-center'>{title}</h1>
      <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list'>
        {filtered.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}

function getFilteredItems(
  products: ProductType[],
  category: string,
  slice?: boolean
) {
  const filtered = products.filter((product) => product.category === category);

  if (slice) {
    return filtered.slice(0, 4);
  }

  if (category === 'fashion') {
    return products.filter(
      (product) =>
        product.category === `men's clothing` ||
        product.category === `women's clothing`
    );
  }

  return filtered;
}
