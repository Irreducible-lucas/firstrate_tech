import React from 'react'
import PopularProductCard from '../sections/PopularProductCard'
import { products } from '../constant'

const Product = () => {
  return (
    <div className='mt-[6.5rem] px-10 '>
    
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-2 md:gap-3 lg:gap-5  items-center justify-center ">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        
        ))}
       

      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-2 md:gap-3 lg:gap-5  items-center justify-center ">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        
        ))}
       

      </div>
   
    </div>
  )
}

export default Product