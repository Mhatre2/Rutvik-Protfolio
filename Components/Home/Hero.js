import React from "react";
import 'animate.css';
import { Parallax, ParallaxProvider, useParallax, HTMLDivElement } from 'react-scroll-parallax';
const Hero = () => {
  const parallax = useParallax<HTMLDivElement>({
    rotate: [0, 360],
  });
  return (
    <>
    <div className="relative  bg-gradient-to-t from-[#fffbf5] to-[#fffef4] pt-10 sm:pt-0 mb-10">
 
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
      <div className="">
        <div className="flex items-center gap-3">
          <hr className="w-10 bg-orange-500 border animate__animated animate__fadeInLeft animate__delay-1s"/>
          <span className="md:text-[18px] font-medium text-gray-800 animate__animated animate__fadeInLeft animate__delay-1s">
            UI/UX Designer  Developer
          </span>
        </div>
        <p className="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 animate__animated animate__fadeInLeft animate__delay-1s">
          I'm Rownok Mahbub <br />
          Designer And Developer 
        </p>
        <p className="mt-5 md:text-md animate__animated animate__fadeInLeft animate__delay-1s">
          I'm creative designer based in Bangladesh, and I'm very passionate and
          dedicated to my <br className="hidden md:block" /> work.Your Satisfaction is my success
        </p>
        <div className="flex gap-4 mt-10">
       
        <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass animate__animated animate__fadeInLeft animate__delay-1s">Get In Touch
          <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
         </button>
         <img className="cursor-pointer animate__animated animate__fadeInLeft animate__delay-1s" src="/Assets/facebook.svg" alt="" />
         <img className="cursor-pointer animate__animated animate__fadeInLeft animate__delay-1s" src="/Assets/linkedin.svg" alt="" />
         <img className="cursor-pointer animate__animated animate__fadeInLeft animate__delay-1s" src="/Assets/behance.svg" alt="" />
        </div>
    
      </div>
      <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
        <img className="w-14  top-14 sm:-left-5 hidden sm:absolute" src="/Assets/figma.png" alt="" />
        <img className="w-32 hidden sm:absolute  bottom-0 sm:-left-10" src="/Assets/nextjs.png" alt="" />
       
        <img className="w-[600px] animate__animated animate__fadeInRight animate__delay-.5s" src="/Assets/mainhero.png" alt="" />
      </div>
    </div>
    </div>
  
  
    </>
 
  );
};

export default Hero;
