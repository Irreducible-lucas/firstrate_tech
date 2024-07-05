import React from 'react'
import { contact, contact2 } from '../assets/image'
import { contactus } from '../constant'

const Contact = () => {
  return (
    <div className='pt-[6rem] px-10 '>
      <div className='flex  flex-col lg:flex-row h-[90%]'>
      <div className='w-full '>
          <img src={contact2} alt="Contact" className='w-full h-[90%] bg-cover ' />
        </div>

      <div className='bg-yellow-600 text-black p-3 md:px-5 lg:px-10 w-full lg:w-[80%]'>
        <p className='mt-5 h6 lg:h4 lg:mb-2'>Let's Get in Touch</p>
        <p className='body-1 mb-5 lg:mb-6'>Or just reach out to us manually to <a href='"mailto:firstrate360@gmail.com"' className='underline'>
          firstrate3600@gmail.com</a></p>
        <form action="https://getform.io/f/lbkmoodb" method="POST" className="flex flex-col" >
              <label >First Name</label>
              <input type="text" placeholder="Firstname" name="firstname" minLength="2" required className="my-4 bg-transparent border border-slate-50 rounded-xl px-3 py-1 outline-0 " />
              <label >Last Name</label>
              <input type="text" placeholder="Lastname" name="lastname" minLength="2" required className="my-4 bg-transparent border border-slate-100 rounded-xl px-3 py-1 outline-0"  />
              <label >Email Address</label>
              <input type="email" placeholder="Email address" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="my-4 bg-transparent border border-slate-100 rounded-xl px-3 py-1 outline-0" />
              <label >Phone Number</label>
              <input type="tel" name="phone" placeholder="Your Phone Number" required maxLength="11" pattern="\d{10,11}" className="my-4 bg-transparent border border-slate-100 rounded-xl px-3 py-1 outline-0"  />
              <label >Your Message</label>
              <textarea name="message" placeholder="Your Message" required rows={10} cols={50} className="my-4 bg-transparent border border-slate-100 rounded-xl px-3 py-1 outline-0" ></textarea>
              <button className="bg-black text-white px-5 py-2 rounded-xl mb-20 ">SUBMIT</button>
            </form>
      </div>
      </div>
      <div className='bg-yellow-600 text-black px-10 pt-5 lg:pt-10 pb-2 -mt-24'>
        <button className=' px-2 py-1 rounded-xl mb-3 bg-white'>Reach Out to Us</button>
        <h6 className='h6 lg:h4'>We'd Love to Hear From You.</h6>
        <p className='body-1'>
        Or just reach us manually <a href='"mailto:firstrate360@gmail.com"' className='underline'>
          firstrate360@gmail.com
        </a>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 text-center gap-5 mx-5 my-5 pt-10'>
          {contactus.map((item, index) =>(
            <div key={index} className=' p-5 rounded-md shadow-lg shadow-black text-slate-100 bg-[#2A292B]'>
            <img src={item.iconUrl} width={25} height={25} className='my-2 mx-auto' />
            <h6 className='h6'>{item.title}</h6>
            <p className='text-[12px]'>{item.paragraph}</p>
            <a href={item.url}>
            <p className='text-[10px] max-text-sm'>{item.about}</p>  
            </a>
              
            </div>

          ))}

        </div>

      </div>

     
    
    </div>
  )
}

export default Contact