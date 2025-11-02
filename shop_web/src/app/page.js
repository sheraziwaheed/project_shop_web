 import React from 'react' 
import TopHead from './components/TopHead';
import TopNavbar from './components/TopNavbar';
import Slide from './components/Slide';
import Products from './components/Products';
import Footerlast from './components/Footerlast';
import TopSearch from './components/TopSearch';
 
 
 function homePage() {
   return (
   
      <div> 

<TopHead />
<TopSearch/>
<TopNavbar/>
<Slide />
<Products/>
<Footerlast/>
  
 
</div>

                 
   )
 }
 export default homePage;