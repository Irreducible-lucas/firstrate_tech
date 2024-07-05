import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { reviews, partners } from "../constant";
import { star } from "../assets/image";


const AboutUs = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <div className="bg-[#212120] py-[2rem] text-center px-10" id="client">
    <h6 className="h6 font-bold text-yellow-600 tracking-widest">OUR CLIENTS</h6>
    <div className="mt-20 px-8 mb-20"
  style={{ paddingBottom: '30px', position: 'relative' }}
>
      <Carousel
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1,
          
         
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
         
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1,
        
        }
      }}
      removeArrowOnDeviceType={['tablet', 'mobile',]}
      additionalTransfrom={0}
      renderDotsOutside
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
      >
        {reviews.map((review, index) => (
          <div key={index} className="text-slate-400">
            <img src={review.imgURL} width={80} height={80} className="rounded-full mx-auto mb-3"  />
            <h6 className="lg:px-[10rem] leading-10 text-xl md:text-2xl mb-5 md:leading-relaxed ">{review.feedback}</h6>
            <div className="flex items-center justify-center gap-5">
            <img src={star} alt="star" width={30} height={30}/>
            <p className="h6 ">{review.rating}</p>
            </div>
            <p className="mb-3 font-bold h6">{review.customerName}</p>


          </div>
        ))}
     </Carousel>
     </div>
          <div>
          <h2 className="h2 font-semibold">
    We are honored to partner up with these clients
    </h2>
    <div className="mt-20 px-8"
  style={{ paddingBottom: '30px', position: 'relative' }}
>
      <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      additionalTransfrom={0}
      autoPlay
      autoPlaySpeed={2000}
      infinite
      renderDotsOutside
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
      >
        {partners.map((item) => (
          <div key={item.id}>
            <img src={item.iconUrl} width={120} height={120} className="hover:bg-red"/>
          </div>
        ))}
     </Carousel>
    </div>
          </div>
     </div>
  )
}

export default AboutUs
