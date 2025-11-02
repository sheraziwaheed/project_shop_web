import React from 'react'
import Footerlast from '@/app/components/Footerlast';
import TopNavbar from '@/app/components/TopNavbar'
function AboutPage() {
  return (
    <div>
    <div className='bg-gray-200 border-b-2 border-slate-300 h-[80px] items-center text-center content-center'>
      <h2 className='text-[30px] font-bold  '>About US</h2></div>
       <TopNavbar/>

       <div className='w-[1200px]'>
         <div className=' ml-[100px]  mt-[50px] text-justify'>
      <h1 className='text-[35px] font-bold '> 01. About our Online Shop</h1>
      <h2 className=''>Shopping is the Online Retail Shopping 
      Store in Pakistan with Cash On Delivery, We deals in Fancy Kitchen 
      Items, Household items, Electronics, Travel accessories, Baby 
      Products & many more. We offer not only the product on sale but 
      also the most efficient service and prices which are unimaginably 
      economic in order to keep customers satisfaction the first priority.

To enhance user experience, Homazing has launched an eCommerce online 
shopping website. This is designed to provide a user-friendly and easily 
accessible platform for customers on-the-go and simplify shopping by 
bringing online shopping at home. Homazing believes in not only offering
 the premium quality of every product but also completely redefining the 
 pre and post sales perspective for the customers to enjoy safe
 and convenient shopping services</h2></div> </div>

 <div className='w-[1200px] text-justify'>
         <div className=' ml-[100px]  mt-[50px] '>
      <h1 className='text-[35px] font-bold '> 02. Customer Support Service</h1>
      <h2 className='  '> Our goal has always been on helping our 
      customers save time and money. Homazing values the trust that our
       customers, associates, representatives and service providers place
        in us. This is why we’ve invested in creating an e-commerce
         platform that allows you to order your desired product and 
         endeavor to manage personal information in accordance with our 
         core value of respect for the individual.</h2></div> </div>

      <div className='w-[1200px] text-justify'>
         <div className=' ml-[100px]  mt-[50px]'>
      <h1 className='text-[35px] font-bold '>03. Product Range</h1>
      <h2 className=''>In the world of trade and sales, e
       commerce is a more preferable option due to its convenience
        and benefit of providing vast range of product in one go 
        without any physical exertion to roam around the market
         seeking the desired quality and price. Homazing completely
          understand this inevitable

phenomenon and hence has an online store with one of the largest
 hands on collection of products under all the possible categories 
 one can think of to evaluate the standard of online shopping.

Starting from an impressive range of Crockery and Household 
products to the individual needs such as fashion couture and 
make up products, Homazing stands for catering to every one of their 
loyal customers no matter what their background or interests be.
 That is why we make sure to have a diverse range of products that 
 will be adored by anyone. There is something for everyone here at
  Homazing as we make sure to cover all the demographics to convey the perfect class of upscale purchase.

We love our customers and welcome your feedback and suggestions.
 Use our Contact Us page to tell us what we’re doing right or what we
  can improve on.</h2></div> </div>

      <Footerlast/>  
    </div>
  )
}

export default AboutPage;
