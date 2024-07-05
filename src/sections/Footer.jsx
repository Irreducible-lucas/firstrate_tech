import { ScrollParallax } from "react-just-parallax";
import { socials } from "../constant";
import { whatsapp } from "../assets";

const Footer = () => {
  return (
    <footer>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col ">
        <p className="caption text-n-4 lg:block pt-8">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
      <ScrollParallax>
      <div className= "fixed w-15 h-15 rounded-full  bottom-0 right-0 ">
     <a href="https://wa.link/6nntzx">
      <img src={whatsapp} alt="" srcset="" width={40} height={40} />
     </a>
    </div>
    </ScrollParallax>
    </footer>
  );
};

export default Footer;
