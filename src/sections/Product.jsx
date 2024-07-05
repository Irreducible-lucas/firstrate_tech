import PopularProductCard from "./PopularProductCard";
import { products } from "../constant";
import Button from "./Button";

const Product = () => {
  return (
    <div>
        <section className="container max-sm:mt-12 " id="product">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className=" text-yellow-600">Products</span> </h2>
        <p className=" mt-2 font-montserrat text-slate-gray ">
        Discover top-notch quality and style with our range of laptops, phones, printers, and accessories. We offer expert repairs, upgrades, and technical support to keep your devices running smoothly. Enjoy the convenience of fast delivery straight to your doorstep.
        </p>

      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-2 md:gap-3 lg:gap-5  items-center justify-center ">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        
        ))}
       

      </div>
      <div className="flex items-center justify-center mb-10">
        <a href="/product" >
          <Button>See More</Button>
        </a>
        </div>

    </section>
    </div>
  )
}

export default Product
