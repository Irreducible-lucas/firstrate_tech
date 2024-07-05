import { business } from "../constant";

const WhatWeDo = () => {
  return (
    
     <div id="about-us">
    
    <div className="flex items-center flex-col mt-[9rem]">
    <h6 className="text-yellow-600 h6 tracking-widest">WHAT WE DO</h6>
    <h1 className="h2 text-center px-20">We provide expert laptop repairs and high-quality tech solutions to enhance your digital experience.</h1>
      </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 mb-[5rem] mt-10">
      {business.map((item) => (
        <div key={item.id} className="px-10 md:px-20 flex items-center flex-col md:items-start">
          <div className="flex flex-col md:flex-row items-center gap-5">     
            <img src={item.icon} width={50} height={40} className="md:-mb-4"/>
          <h2 className="h6 font-semibold text-yellow-600">{item.title}</h2>
          </div>
          <p className=" text-center text-slate-200 mt-3 mb-8 md:text-start md:ms-[5rem]">{item.description}</p>
           </div>
      ))}
    </div>

   






  </div> );
}
 
export default WhatWeDo;