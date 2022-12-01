import React from 'react';

type StarRatingProps = {
  rating: {
    rate: number;
    count: number;
  };
};

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <div className='rating rating-md rating-half mr-3'>
      <input type='radio' name='rating-10' className='rating-hidden' />
      {Array.from({ length: 10 }).map((_, idx) => {
        const rate = Number(
          rating.rate
            .toString()
            .split('.')
            .map((value: string, idx: number) => {
              if (idx === 0) {
                return Number(value) * 2;
              }
              return value;
            })
            .join('.')
        );
        if (idx % 2 === 0) {
          return (
            <input
              key={idx}
              type='radio'
              name='rating-10'
              className='bg-yellow-400 mask mask-star-2 mask-half-1'
              checked={Math.round(rate) - 1 === idx}
              disabled
            />
          );
        }
        return (
          <input
            key={idx}
            type='radio'
            name='rating-10'
            className='bg-yellow-400 mask mask-star-2 mask-half-2'
            checked={Math.round(rate) - 1 === idx}
            disabled
          />
        );
      })}
    </div>
  );
}
