import Link from 'next/link';
import React from 'react'

 function TopNavbar() {
  return (
    <div children className=' '>
     <div className=''> 
      <div className='  bg-gray-200 h-[75px] 
      text-center text-[18px] py-[20px]  pl-[25px] ' >
      
       
      <Link href="/Detail/Home" className='Nav_Bar  hover:text-red-900
       hover:underline focus:underline  transition duration-400 '> Home</Link>
      <Link href="/Detail/Mens" className='Nav_Bar  hover:text-red-900
       hover:underline focus:underline  transition duration-400 pl-[30px]'> Men's</Link>
      <Link href="/Detail/Women" className='Nav_Bar   hover:text-red-900
       hover:underline focus:underline  transition duration-400 pl-[30px]'> Women</Link>
      <Link href="/Detail/Perfume" className='Nav_Bar  hover:text-red-900
       hover:underline focus:underline  transition duration-400 pl-[30px]'> Perfume</Link>
      <Link href="/Detail/Contact" className='Nav_Bar  hover:text-red-900
       hover:underline focus:underline  transition duration-400 pl-[30px] '> Contact </Link>
        
       <Link href="/Detail/About" className='Nav_Bar  hover:text-red-900
       hover:underline focus:underline  transition duration-400  pl-[30px]'> About Us</Link>  
       </div>
      
    </div> 
    </div>
  )
}
export default TopNavbar;
 