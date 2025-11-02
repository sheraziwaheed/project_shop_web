import TopNavbar from '@/app/components/TopNavbar';
import TopSearch from '@/app/components/TopSearch';
import MenProducts from '@/app/components/MenProducts';
import React from 'react'
import Footerlast from '@/app/components/Footerlast';

function MenPage() {
  return (
    <div>
      <div className='bg-gray-200 border-b-2 border-slate-300 h-[80px] items-center text-center content-center'>
      <h2 className='text-[30px] font-bold  '>Men's Product</h2>
      <h2 className='text-[15px]  '>ENJOY FREE DELIVERY ON ORDERS ABOVE PKR 10000.</h2>
      </div>
      <TopSearch/>
      <TopNavbar/>
      <MenProducts/>
      <Footerlast/>
    </div>
  )
}

export default MenPage;
