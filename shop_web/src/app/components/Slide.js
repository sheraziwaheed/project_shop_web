import React from 'react'

  function Slide() {
  return (
     
    <div className='bg-slate-300    '>
    <div className='overflow-hidden h-[400px] mt-0'> 
    <div> <h1 className=' absolute text-[25px]  py-[80px] pl-[100px]'> Trending Accessories </h1>
    <h1 className=' absolute text-[38px] font-bold py-[120px] pl-[100px] text-red-900  text-outline-white-[2px]'> MODERN FASSION </h1>
    <h1 className=' absolute text-[15 px]  py-[180px] pl-[100px]'> Starting From <span className=' text-[20px] text-red-700'>15.00$</span> </h1>
   <div className=' absolute py-[230px] pl-[100px]'> 
   <button className=' bg-red-900 py-[10px] px-[10px] rounded-[20px]
    text-[23 px] text-white font-bold hover:bg-red-700 '>Shop Now</button> </div>
    </div>
    
    <img src="/slid.png" className="w-full h-full object-cover mt-0" /></div>
       
    </div>
  )
}
export default Slide;
