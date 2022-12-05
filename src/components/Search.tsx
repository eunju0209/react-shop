import { useState, useEffect, FormEvent } from 'react';
import { ProductType } from './Product';
import SearchItem from './SearchItem';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [items, setItems] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  const filterd = items.filter((item) =>
    item.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  );

  const removeKeyword = () => setKeyword('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (keyword.trim().length < 1) {
      return;
    }
    if (filterd.length < 1) {
      return;
    }
    navigate(`/product/${filterd[0].id}`, { state: { product: filterd[0] } });
    setKeyword('');
  };

  return (
    <div className='relative dropdown'>
      <form className='mx-3 w-44' onSubmit={handleSubmit}>
        <input
          className='py-3 px-4 w-full outline-none bg-gray-300 rounded-md dark:bg-slate-700 dark:text-white '
          type='text'
          placeholder='검색'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          tabIndex={0}
        />
      </form>
      {keyword && (
        <ul
          tabIndex={0}
          className='dropdown-content menu p-2 shadow absolute left-0 w-full mx-3 mt-2 max-h-96 flex-nowrap overflow-y-auto bg-white dark:bg-gray-600 dark:text-white'
        >
          {filterd.map((product) => (
            <SearchItem
              key={product.id}
              product={product}
              removeKeyword={removeKeyword}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
