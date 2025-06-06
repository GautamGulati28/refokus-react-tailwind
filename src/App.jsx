import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-auto bg-zinc-950 text-white font-satoshi'>
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
    </div>
  )
}

export default App