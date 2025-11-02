 
 import React from 'react'
 import { FaStar, FaRegStar } from 'react-icons/fa';

 
 function ProductCards({ image, title, description, rating ,price }) {

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

   return (
     <div className='px-4  border border-gray-300 rounded-xl max-w-[300px] 
     hover:border-gray-500 hover:shadow-xl h-[320px] mt-[30px]'>
       <div>
        <img
          src={image}
          width={300}
          height={300}
          className="w-[150px] h-[200px] object-cover"
          alt={title}
        />
       </div>
    
       <div className='py-[2px] '>
      <h1 className='text-[18px] font-bold uppercase text-red-950'>{title}</h1>
      <p className=' text-gray-400 maz-w-[150px] text-[14px] '>{description}</p>
      <div className=''>{generateRating(rating)}</div>
      <div className='  flex  gap-6'><span className='font-bold text-[18px]'> Rs.{price}</span>
      <del className='text-gray-500 text-[15px]'> Rs. {parseInt(price)+50}.00</del></div>
      </div>
     </div>
   )
 }
 
 export default ProductCards;
 