"use client"
import React, { useState } from 'react';
import axios from 'axios';

import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductCards from './ProductCards';
import Link from 'next/link';

function TopSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
       if (searchQuery.trim() !== '') {
         console.log('Searching for:', searchQuery); // Debug log
         try {
           const response = await axios.get(`http://localhost:3001/shop_product?query=${searchQuery}`);
           console.log('Products fetched:', response.data); // Debug log
           setProducts(response.data);
         } catch (error) {
           
         }
       }
     };
  return (
    <div>
      <div className='bg-gray-200 border-b-2 border-slate-400 h-[70px] w-100% '>
        <div className='container sm:flex justify-between items-center'>
          <div className='font-bold pl-[150px] pt-[5px] text-[35px] sm:pb-0 text-red-900 text-center'>SHOP</div>
          <div className='w-full pl-[180px] sm:w-[300px] md:w-[70%] relative'>
            <input 
              className='border-slate-500 text-[14px] border b-1 px-4 rounded-lg mt-[7px] w-[500px] py-[3px]' 
              type='text'
              placeholder='Enter Any Product.......'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <CiSearch 
              className='absolute rigth-0 mt-[-25px] ml-[470px] cursor-pointer' 
              size={20} 
              onClick={handleSearch}
            />
          </div>
          <div className='hidden lg:flex gap-4 text-[30px] text-slate-700'>
            <CiUser />
            <div className='relative'>
              <FaRegHeart />
              <div className='bg-red-600 absolute rigth-0 top-0 rounded-full px-[4px]
                  h-[16px] w-[16px] text-[12px] text-white grid place-item-center translate-x-1 -translate-y-1'>0</div>
            </div>
            <div className='relative'>
              <AiOutlineShoppingCart />
              <div className='bg-red-600 absolute rigth-0 top-0 rounded-full px-[4px]
                  h-[16px] w-[16px] text-[12px] text-white grid place-item-center translate-x-1 -translate-y-1'>0</div>
            </div>
          </div>
        </div>
      </div>
 
     
     
        <div className='grid grid-col-1 ml-[120px] place-content-center sm:place-items-start sm:grid-cols-3
          lg:grid-col-3 xl:grid-col-4 gap-10 xl-gap-x-20 xl:gap-y-10'>
           
          { products?.map((item) => (
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
        </div></div> 
  );
}

export default TopSearch;
