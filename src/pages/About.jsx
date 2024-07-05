import React from 'react'
import { choose, team } from '../constant'
import ReviewCard from '../sections/design/ReviewCard'

const About = () => {
  return (
    <div className='mt-[6rem] container mb-10'>
      <h1 className='text-2xl text-center text-color-1'>About Us</h1>
      <div className='flex bg-yellow-600 px-5 lg:px-10 py-10 lg:py-20 gap-5 rounded-lg shadow-md shadow-slate-700 mb-5'>
        <div className='w-[20%]'>OUR MISSION</div>
        <div className='flex-1'>We're your tech lifeline, providing peace of mind through top-notch products and reliable repair services. Dedicated to keeping you connected an thriving, we promise satisfaction with our passion for technology.</div>
      </div>
      <div className='flex bg-slate-700 px-5 lg:px-10 py-10 lg:py-20 gap-5 rounded-lg shadow-md shadow-yellow-800'>
        <div className='w-[20%]'>OUR VISION</div>
        <div className='flex-1'>To shape a future where technology seamlessly enhance daily life, improving productivity and connectivity for all our customers.</div>
      </div>
     
      <div className='mt-15'>
        <h3 className='text-center mb-10 h6 lg:h5 text-color font-sora'>Why You Should <span className='text-color-1'>Choose Us</span> </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-[5rem] my-10 ">
      {choose.map((item) => (
        <div key={item.id} className="px-10 md:px-20 flex items-center flex-col md:items-start">
          <div className="flex flex-col md:flex-row items-center gap-5">     
            <img src={item.icon} width={50} height={40} className="md:-mb-4"/>
          <h2 className="h6 font-semibold text-yellow-600">{item.title}</h2>
          </div>
          <p className=" text-center text-slate-200 mt-3 mb-8 md:text-start md:ms-[5rem]">{item.description}</p>
           </div>
      ))}
    </div>
        </div>
        <div>
            <h3 className='text-center h5 lg:h4'>Meet The <span className='text-color-1 font-sora'>Team</span> </h3>
           
            <div className='mt-10 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {team.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            teamName={review.teamName} 
            description={review.description}
           
          />
        ))}
      </div>
      

        </div>
        <div className='w-[80%] lg:w-[60%] bg-yellow-600 p-5 mt-10 -mb-10 mx-auto rounded-md  text-center'>
          <h1 className='h6 lg:h4 text-black'>
            From Sales to repairs,
          </h1>
          <p className='body- lg:h6'>we've got you covered</p>

        </div>
      

      </div>
      

    
  )
}

export default About