import { star } from "../assets/image";
import Button from "./Button";
const PopularProductCard = ({imgURL, name, price}) => {
  return ( 
    <div className="flex flex-1 flex-col w-full max-sm:w-full items-center h-[450px] bg-yellow-500 rounded-md mb-7 ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] md:rounded-tl-md md:round-tr-md  " />

      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-semibold text-coral-red leading-normal">{price}</p>
      <div className=" flex gap-2 mx-5">
      <Button white className="py-5 my-5 w-[10%] " >Call</Button>
      <Button  className="py-5 my-5 w-[80%] " > Add to Cart</Button>
      </div>

      
    </div>
   );
}
 
export default PopularProductCard;