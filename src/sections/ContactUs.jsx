import { bubble } from "../assets/image"
import { socials } from "../constant";


const ContactUs = () => {
  return (
    <div className=" pt-6 mx-auto px-6 md:px-10 lg:px-15" style={{ backgroundImage: `url(${bubble})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem' }} >
      <div className="absolute inset-0 opacity-[.03]" style={{ backgroundImage: `url(${bubble})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem' }}/>
      <div className="flex justify-center items-center -mt-[2rem]">
      </div>
      <div className="text-white  px-10 md:px-15  ">
        <p className="h6 font-bold  text-yellow-600 tracking-widest text-center mt-20 mb-5">Get in Touch
        </p>
        <h6 className="h2 font-semibold text-center">Reach out to us for expert repairs, product inquiries, or any tech support needs.</h6>

        <div className="flex flex-col lg:flex-row text-white bg-black-400 md:px-10">
          <div className="flex flex-col flex-1">
            <h6 className="h6 text-center mt-[6rem] mb-10 md:mb-[7rem]">SEND US A MESSAGE</h6>
            <form action="https://getform.io/f/lbkmoodb" method="POST" className="flex flex-col" >
              <input type="text" placeholder="Your Name" name="name" minLength="2" required className="bg-transparent py-3 rounded-md border-y-[0.2px] border-slate-700 border-dotted outline-0 mb-5" />
              <input type="email" placeholder="Your Email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="bg-transparent py-3 rounded-md border-y-[0.2px] border-slate-700 border-dotted outline-0 mb-5" />
              <input type="tel" name="phone" placeholder="Your Phone Number" required maxLength="11" pattern="\d{10,11}" className="bg-transparent py-3 rounded-md border-y-[0.2px] border-slate-700 border-dotted outline-0 mb-5" />
              <textarea name="message" placeholder="Your Message" required rows={10} cols={50} className="bg-transparent py-2 rounded-md border-y-[0.2px] border-slate-700 border-dotted outline-0 mb-10"></textarea>
              <button className="bg-yellow-600 text-white px-5 py-2 rounded-sm mb-20 ">SUBMIT</button>
            </form>

          </div>
          <div className="flex flex-col items-center mx-3 md:mx-10 bg-black px-5 md:px-10">
            <h6 className="h6 text-center mt-[6rem]  hidden md:block mb-[5rem]">CONTACT INFO</h6>
            <p className=" text-yellow-600 mb-7 mt-5">Where to Find Us</p>
            <p className="max-w-52 text-center leading-loose mb-8 text-slate-400">6, Oshitelu street opposite GTbank computer village Ikeja</p>
            <p className=" text-yellow-600 mb-5 ">Email Us At</p>
            <a href="mailto:firstrate360@gmail.com">
              <p className="mb-3 text-slate-400 text-sm md:text-md">firstrate360@gmail.com</p>
            </a>
            <a href="mailto:ibrahimakinsanya36@gmail.com">
              <p className="mb-9 text-slate-400 text-[12px] md:text-md">ibrahimakinsanya36@gmail.com</p>
            </a>

            <p className=" text-yellow-600 mb-5">Call Us At</p>
            <a href="tel:08108420169">
              <p className="mb-2 text-slate-400 text-sm md:text-md"> (+234) 810 842 0169</p>
            </a>
            <a href="tel:08035795013">
              <p className="mb-2 text-slate-400 text-sm md:text-md">(+234) 803 579 5013</p>
            </a>
            <a href="tel:09129585612">
              <p className="mb-9 text-slate-400 text-sm md:text-md">(+234) 912 958 5612</p>
            </a>
            <div className="flex flex-row gap-3 mt-8">

              {socials.map((item, index) => (
                <div key={item.id}>
                  <a href={item.url}
                    key={index}
                    className="flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-n-6">
                    <img src={item.iconUrl} width={16} height={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>




        </div>



      </div>
    </div>);
}

export default ContactUs;