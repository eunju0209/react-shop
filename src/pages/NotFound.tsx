import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function NotFound() {
  return (
    <div className='text-center py-10'>
      <h1 className='text-8xl'>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to='/' className='btn btn-primary btn-lg mt-4'>
        메인으로
      </Link>
    </div>
  );
}
