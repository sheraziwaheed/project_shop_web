import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
 ;
 
function TopHead() {
  return (
  <div className=''>
    <div className='   bg-gray-200 border-b-2 border-slate-300 h-[60px] flex items-start justify-normal space-5 '>
     <div className=' flex items-center py-[12px] px-[80px] gap-[20px]'>
     <a 
      href="https://www.facebook.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className='bg-red-900 text-white p-[4px] rounded-md text-[22px] cursor-pointer hover:bg-slate-400 hover:text-white'>
      <FaFacebookSquare />
    </a>
    <a 
      href="https://www.twitter.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className='bg-red-900 text-white p-[4px] rounded-md text-[22px] cursor-pointer hover:bg-slate-400 hover:text-white'>
      <FaTwitterSquare />
    </a>
    <a 
      href="https://www.instagram.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className='bg-red-900 text-white p-[4px] rounded-md text-[22px] cursor-pointer hover:bg-slate-400 hover:text-white'>
      <FaInstagramSquare />
    </a>
    <a 
      href="https://www.linkedin.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className='bg-red-900 text-white p-[4px] rounded-md text-[22px] cursor-pointer hover:bg-slate-400 hover:text-white'>
      <FaLinkedin />
    </a>
            
                        <h1 className='text-[25px] ml-[250px]  font-bold text-red-900'>FREE SHIPPING.</h1> 
                    
                   <div className=' pl-[180px] '>
                   <select className='text-slate-600 mt-[12px] text-[13px]   w-[60px]'
                   name="courncy"
                   id="courncy">
                   <option value=" USA $"> USA$</option>
                   <option value="EUR€">EUR€</option>
                   <option value="IRN">IRN</option>
                   </select></div>

                   <div className=' '>
                   <select className='text-slate-600 mt-[12px] text-[13px]   w-[80px]'
                   name="language"
                   id="language">
                   <option value="English"> English</option>
                   <option value="French">French</option>
                  </select></div>
                 </div>
                 </div>


  
                 
   </div>


    
     
  )
}
export default TopHead;