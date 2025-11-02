 import React from 'react'
import Footerlast from '@/app/components/Footerlast';
import Slide from '@/app/components/Slide';
import TopHead from '@/app/components/TopHead';
import TopNavbar from '@/app/components/TopNavbar';
import TopSearch from '@/app/components/TopSearch';
import Homeproducts from '@/app/components/Homeproducts';
 
  
 
 
 function HomePage() {
   return (
   
      <div> 

<TopHead/>
<TopSearch/>
<TopNavbar/>
<Slide/>
<Homeproducts/>
 
<Footerlast/>
  
 
</div>

                 
   )
 }
 export default HomePage;