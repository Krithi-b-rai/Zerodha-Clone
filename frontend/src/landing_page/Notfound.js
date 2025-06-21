import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Notfound() {
  return ( 
    <>
    <Navbar />
  
    <div className='container p-5 mb-5'>
        <div className='row text-center'> 
           <h1 className='mt-5 mb-4'>404 Not Found</h1>

           <p className='text-muted mb-4'>
            Sorry, the page you are looking for does not exist.
           </p>
        </div>
     </div>

     <Footer />
     </>
   );
}

export default Notfound;