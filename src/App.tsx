import ProductList from './components/ProductList';
// "men's clothing" "women's clothing" "jewelery" "electronics"
function App() {
  return (
    <div className='w-full max-w-screen-2xl flex flex-col items-center px-6'>
      <h1 className='text-4xl font-bold mt-16 mb-5'>패션</h1>
      <ProductList category={`men's clothing`} />
      <h1 className='text-4xl font-bold mt-16 mb-5'>액세서리</h1>
      <ProductList category='jewelery' />
      <h1 className='text-4xl font-bold mt-16 mb-5'>디지털</h1>
      <ProductList category='electronics' />
    </div>
  );
}

export default App;
