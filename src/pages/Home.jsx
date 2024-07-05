import React from 'react'
import { AboutUs, ContactUs, Footer, Header, Welcome, WhatWeDo, Product } from '../sections'




const Home = () => {
  return (
    <>   
     <div>
   
      <Welcome />
      <WhatWeDo /> 
      <Product /> 
      <AboutUs /> 
      <ContactUs /> 
   
       </div>
     

    </>
  )
}

export default Home