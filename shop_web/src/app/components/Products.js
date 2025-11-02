"use client"
import React, { useState } from 'react';
import useSWR from 'swr';
import ProductCards from './ProductCards';
import Link from 'next/link';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Products() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useSWR(`http://localhost:3001/shop_product?limit=9&page=${page}`, fetcher);

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className='container pt-16'>
      <div className='font-medium text-2xl pb-4'>
        <div className='grid grid-col-1 ml-[120px] place-content-center sm:place-items-start sm:grid-cols-3
          lg:grid-col-3 xl:grid-col-4 gap-10 xl-gap-x-20 xl:gap-y-10'>
          {isLoading && <h2>Loading...</h2>}

          {!isLoading && data?.map((item) => (
            <div key={item.id}>
              <Link href={'Detail/' + item.id}>
                <ProductCards
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  rating={item.rating}
                  price={item.price}
                />
              </Link>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-4'>
          <button
            onClick={handlePrev}
            className='px-2 py-1 bg-gray-300  text-[20px] rounded-md mr-2 disabled:opacity-50'
            disabled={page === 1}>
            Previous
          </button>
          <button
            onClick={handleNext}
            className='px-2 py-1 bg-gray-300 text-[20px] rounded-md'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
