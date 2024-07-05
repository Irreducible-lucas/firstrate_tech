import { Tech } from "../assets/image"
import { socials } from "../constant"


const Welcome = () => {
  return (
    <div className='text-white px-5 lg:px-10'  >
      <div className="absolute inset-0 opacity-[.15]" style={{ 
      backgroundImage: `url(${Tech})`, 
      backgroundSize: 'cover',           
      backgroundPosition: 'center',      
      padding: '2rem',                    
      backgroundColor: 'rgba(0, 0, 0, 0.5)' 
    }}/>
      
     <div className='flex justify-between mt-[6rem]'>
    <div className='mx-6 lg:ps-[5rem] lg:pe-20 '>
    <h3 className='text-lg text-center text-slate-500 md:text-left mb-3'>WELCOME TO FIRST-RATE TECH </h3>

    <h1 className='h1 text-center md:text-left md:max-w-xl lg:max-w-3xl '>We specialize in expert laptop repairs and offer a wide range of high-quality laptops, phones, and accessories to meet all your tech needs.</h1>
    </div>
    <div className='mt-10 hidden md:block' >
      {socials.map((item) =>(
        <li key={item.id} className='list-none w-[30] h-[30] rounded-full border-2 p-2 opacity-40 hover:opacity-120 ' style={{marginBottom: '20px'}}>
          <a href={item.url}  >
            <img src={item.iconUrl} width={30} height={30} className=""/>
          </a>
        </li>
      ))}
    </div>
        </div>
    </div>
    
  )
}

export default Welcome
