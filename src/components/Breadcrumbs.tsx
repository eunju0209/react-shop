import { IoIosArrowForward } from 'react-icons/io';

type BreadcrumbsProps = {
  text1: string;
  text2: string;
};

export default function Breadcrumbs({ text1, text2 }: BreadcrumbsProps) {
  return (
    <p className='flex items-center mt-8 px-8 text-sm'>
      {text1} <IoIosArrowForward className='mx-2 text-gray-400' />
      {text2}
    </p>
  );
}
