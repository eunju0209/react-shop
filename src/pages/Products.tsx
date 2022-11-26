import { useEffect, useState } from 'react';
import Product, { ProductType } from '../components/Product';
import { IoIosArrowForward } from 'react-icons/io';

type ProductListProps = {
  category: string;
  pageTitle: string;
  slice?: boolean;
};

export default function Products({
  category,
  pageTitle,
  slice,
}: ProductListProps) {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const filtered = getFilteredItems(products, category, slice);

  return (
    <section className='py-6 px-12 mb-20'>
      {!slice && (
        <span className='text-sm flex items-center'>
          홈<IoIosArrowForward className='mx-2 text-gray-400' />
          {pageTitle}
        </span>
      )}
      <h1 className='text-4xl font-bold mb-8 text-center'>{pageTitle}</h1>
      <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list'>
        {filtered.map((product) => (
          <Product key={product.id} product={product} pageTitle={pageTitle} />
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
