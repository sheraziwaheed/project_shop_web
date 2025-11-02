 'use client';
 import { FaStar, FaRegStar } from 'react-icons/fa';

import TopNavbar from '@/app/components/TopNavbar';
import { useEffect, useState } from 'react';
import React from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
     DialogTrigger,
  } from "@/components/ui/dialog"
import SignUp from '@/components/Custom/SignUp';

  function IdPage ({ params  }) {
    const generateRating = (rating  ) => {
      console.log("rting",rating)
      
      if(rating == 1){
         // return <h2>test {rating}</h2>
         return (
            <div className='flex gap-1 text-[15px] text-[#ff9529]'>
                   <FaStar />
                   <FaRegStar />
                   <FaRegStar />
                   <FaRegStar />
                   <FaRegStar />
                 </div>
         )

      }
      if(rating == 2){
         // return <h2>test {rating}</h2>
         return (
            <div className='flex gap-1 text-[15px] text-[#ff9529]'>
                   <FaStar />
                   <FaStar />
                   <FaRegStar /> 
                   <FaRegStar />
                   <FaRegStar />
                 </div>
         )

      }
      if(rating == 3){
         // return <h2>test {rating}</h2>
         return (
            <div className='flex gap-1 text-[15px] text-[#ff9529]'>
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaRegStar />
                   <FaRegStar />
                 </div>
         )

      } if(rating == 4){
         // return <h2>test {rating}</h2>
         return (
            <div className='flex gap-1 text-[15px] text-[#ff9529]'>
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaRegStar />
                 </div>
         )

      } if(rating == 5){
         // return <h2>test {rating}</h2>
         return (
            <div className='flex gap-1 text-[15px] text-[#ff9529]'>
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />  
                 </div>
         )

      }
     };



     const [shopnow , setShopnow]= useState(false);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const unwrappedParams = React.use(params); // Unwrap the `params` promise

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch data using unwrapped `params.id`
        const response = await fetch(`http://localhost:3001/shop_product/id/${unwrappedParams.id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [unwrappedParams.id]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div> <div className='bg-gray-200 border-b-2 border-slate-300 h-[80px] pt-[15px] text-center  '>
    <h2 className='text-[30px] font-bold  '> Product detail</h2></div>
    <TopNavbar/>
    
    <div className=' flex items-center justify-center   mt-[30px] '>
        <div className="h-[500px] border border-gray-300 
        rounded-xl max-w-[25%]   "> 
      <img src={data.image} alt={data.title}
       className=" w-[100%] h-[400px]" />

       </div> 
<div className='  bg-gray-200 h-[500px] w-[400px] p-[60px] '> 
<h1 className="   uppercase text-[25px] font-bold">{data.title}</h1>
<p className='text-[18px] pt-[10px]'>{data.description}</p>
<h1 className='flex pt-[20px] '>{generateRating(data.rating)}__{data.rating }Rating | Branded</h1>
<div className=' pt-[20px]  gap-6'><span className='pt-[20px] font-bold text-[30px]  text-red-950'> Rs.{data.price}</span>
      <del className='text-gray-500 text-[15px]'> Rs. {parseInt(data.price)+50}.00</del></div>
  
      <Dialog  open={shopnow} onOpenChange={ setShopnow}>
   <DialogContent>
    <DialogHeader>
      <DialogTitle>SignUp</DialogTitle>
      <DialogDescription>
      </DialogDescription>
    </DialogHeader>
    <SignUp/>
  </DialogContent>
</Dialog>
<Button className=" mt-[40px] w-[150px] bg-red-950 hover:bg-red-600" onClick={()=> setShopnow(true)}>shopNow</Button>
</div>
      
 
    </div>
 </div> );
}

export default IdPage;
