import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer'; 

function Signup () {
  return ( 
    <>
    <Navbar/>
        <section className="flex flex-col items-center justify-center text-center min-h-screen bg-white px-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 mt-5">
        Open a Zerodha account
      </h1>
      <p className="text-gray-600 mb-6 text-muted">
        Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.
      </p>
      <button className='btn btn-primary btn-lg mt-3'>
        Signup for free
      </button>
    </section>
    <Footer/>
    </>
   );
}

export default Signup;