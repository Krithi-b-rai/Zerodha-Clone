 import React from 'react';
import Navbar from '../Navbar';  // ⬅️ Fix: two levels up
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Openaccount from '../Openaccount';
import Footer from '../Footer';  // ⬅️ Fix: two levels up

function Homepage() {
  return (  
    <> 
      <Navbar />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <Openaccount />
      <Footer />
    </>
  );
}

export default Homepage;
