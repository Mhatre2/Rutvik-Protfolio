import React from "react";
import { motion } from "framer-motion";
import { headerAnimation,imageAnimation, rightAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
import {RiFacebookFill} from 'react-icons/ri'
import {SiBehance} from 'react-icons/si'
import {FiLinkedin} from 'react-icons/fi'
const Hero = () => {
  const [element,controls]= useScroll();
  return (
    <>
    <div className="relative mt-10 h-screen bg-gradient-to-t from-[#fffbf5] to-[#fffef4] pt-10 sm:pt-0 mb-10" ref={element}>
 
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
    <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
        <div className="flex items-center gap-3">
          <hr className="w-10 bg-orange-500 border "/>
          <span className="md:text-[18px] font-medium text-gray-800 ">
            UI/UX Designer  Developer 
          </span>
        </div>
        <p className="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
          I'm Rownok Mahbub <br />
          Designer And Developer 
        </p>
        <p className="mt-5 md:text-md ">
          I'm creative designer based in Bangladesh, and I'm very passionate and
          dedicated to my <br className="hidden md:block" /> work.Your Satisfaction is my success
        </p>
        <div className="flex gap-4 mt-10 items-center">
       
        <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">Get In Touch
          <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
         </button>
     
         <RiFacebookFill className="cursor-pointer text-2xl"/>
         <FiLinkedin className="cursor-pointer text-2xl"/>
         <SiBehance className="cursor-pointer text-2xl"/>
        </div>
    
      </motion.div>
      <motion.div className="relative sm:mt-0 mt-10 px-6 sm:px-0"   variants={rightAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
        <img className="w-14  top-14 sm:-left-5 hidden sm:absolute" src="/Assets/figma.png" alt="" />
        <img className="w-32 hidden sm:absolute  bottom-0 sm:-left-10" src="/Assets/nextjs.png" alt="" />
       
        <img className="w-[600px] animate__animated animate__fadeInRight animate__delay-.5s" src="/Assets/mainhero.png" alt="" />
      </motion.div>
    </div>
    </div>
  
  
    </>
 
  );
};

export default Hero;
