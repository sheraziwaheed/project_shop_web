import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footerlast() {
  return (
    <div className='bg-gray-300 h-[500px] flex mt-[50px]'>

<div className='w-[600px] pt-[50px] text-justify   pl-[100px]'>
<h1 className='font-bold text-[20px] pb-[20px] text-red-900'> Customer Care</h1> 
<p> Welcome to our online shopping destination, where convenience meets 
variety! Our website is designed to bring you a seamless and enjoyable 
shopping experience from the comfort of your home. With an extensive
 collection of products across categories including fashion, electronics, 
 home essentials, beauty, and more, we aim to meet all your needs in one 
 place. Each item is carefully curated to ensure quality, affordability,
  and style, so you can shop with confidence. Our easy-to-use interface,
   secure payment options, and reliable delivery service make shopping 
   simple and safe. Whether you're browsing for the latest trends or 
   stocking up on everyday essentials, our site offers something for 
   everyone. Enjoy exploring our wide range of products and experience
    the joy of online shopping with us!
</p></div>

<div className='ml-[100px] mt-[100px] '>
<h1 className='font-bold text-red-900'>Contact Us</h1>
<h2>0300-1234567</h2>
<h2>+9323-9876543</h2>
<h2>abc@gmail.com</h2></div>
<div className='mt-[400px]' >
    <h2 className='font-bold text-red-900'>Follow Us</h2>
    <div className=' flex items-start py-[12px] px-[80px] gap-[20px]'>
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
                   </div>
</div>
    </div>

  )
}

export default Footerlast;
