import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='w-full flex flex-col items-center py-10 bg-gray-50 dark:bg-slate-800'>
      <a
        className='text-sm hover:underline'
        href='https://zero-base.co.kr/'
        target='_blank'
      >
        제로베이스
      </a>
      <ul className='flex gap-2 my-10'>
        <li>
          <img src='../images/payment/visa.svg' alt='visa' />
        </li>
        <li>
          <img src='../images/payment/master.svg' alt='master' />
        </li>
        <li>
          <img src='../images/payment/american.svg' alt='american' />
        </li>
        <li>
          <img src='../images/payment/paypal.svg' alt='paypal' />
        </li>
        <li>
          <img src='../images/payment/diners.svg' alt='diners' />
        </li>
        <li>
          <img src='../images/payment/discover.svg' alt='discover' />
        </li>
      </ul>
      <div className='flex gap-4 mb-10'>
        <a
          className='text-2xl tooltip'
          data-tip='facebook'
          href='https://www.facebook.com/0base'
          target='_balnk'
        >
          <FaFacebookF />
        </a>
        <a
          className='text-3xl tooltip'
          data-tip='instagram'
          href='https://www.instagram.com/zerobase.official/'
          target='_balnk'
        >
          <FaInstagram />
        </a>
        <a
          className='text-3xl tooltip'
          data-tip='github'
          href='https://github.com/oinochoe'
          target='_balnk'
        >
          <FaGithub />
        </a>
      </div>
      <p className='text-sm'>Copyright © 2022 Zero Base</p>
    </footer>
  );
}
