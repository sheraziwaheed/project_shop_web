import Footerlast from '@/app/components/Footerlast';
import TopNavbar from '@/app/components/TopNavbar';
 
import React from 'react'

function ContactPage() {
  return (
    <div>
      <div className='bg-gray-200 border-b-2 border-slate-300 h-[80px] items-center text-center content-center'>
      <h2 className='text-[30px] font-bold  '>CONTACT US</h2>
      <h2 className='text-[15px]  '>ENJOY FREE DELIVERY ON ORDERS ABOVE PKR 10000.</h2>
      </div>
      <TopNavbar/>
      
      <div className='w-[1200px]'>
         <div className=' ml-[100px]  mt-[50px]'>
      <h1 className='text-[35px] font-bold '> Here to Help</h1>
      <h2 lassName='text-[35px] '>Have a question? You may find an answer 
      in our FAQs. But you can also contact us:</h2></div>

      <div className='container ml-[100px]  mt-[40px]'>
      <h1 className='text-[30px] font-bold '> Address:</h1>
      <h2 lassName='text-[35px] '>Unit XX, Phase X, USA Businesss Avenue,
       SITE area, Abcdefgh.:</h2></div>
       <div className='container ml-[100px]  mt-[40px]'>
      <h1 className='text-[30px] font-bold '> Whatsapp:</h1>
      <h2 lassName='text-[35px] '>0100-000111000</h2></div>

      <div className='container ml-[100px]  mt-[40px]'>
      <h1 className='text-[30px] font-bold '>Get in Touch</h1>
      <h2 lassName='text-[35px] '>We'd love to hear from you about our 
      entire service. Your comments and suggestions will be highly appreciated.
       Please complete the form below.</h2>
       <div>
        <input className=" border b-1 mt-[10px] border-slate-400 py-3 
        w-[400px] px-3
         rounded-[7px] "
        type="text"
        placeholder='Name'
        />
          <input className=" border b-1 ml-[20px] mt-[10px]
           border-slate-400 py-3 w-[400px] px-3 rounded-[7px] "
        type="text"
        placeholder='Email'
        />
       </div>
       <div className='   '>
        <input className=" border b-1  border-slate-400 
        w-[1000px] h-[200px] px-3 mt-10 pt-[20px] py-1
         rounded-[7px] "
        type="text"
        placeholder='comment'
        /> </div>
       </div>
       

      </div>

       <Footerlast/>
    
    
      
    </div>
  )
}
export default ContactPage;