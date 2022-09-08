import React from "react";
import { motion } from "framer-motion";
import { leftAnimation,imageAnimation, rightAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
import {RiFacebookFill} from 'react-icons/ri'
import {SiBehance} from 'react-icons/si'
import {FiLinkedin} from 'react-icons/fi'
const Hero = () => {
  const [element,controls]= useScroll();
  return (
    <>
    <div className="relative md:h-screen mt-15 pt-10 sm:pt-0 bg-gradient-to-r from-[#030332] via-[#100113] to-[#030332]" ref={element}>
    <div className="container my-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center lg:pt-24 ">
    <motion.div
          className="content"
          variants={leftAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
        <div className="flex items-center gap-3">
          <hr className="w-10 bg-white-500  "/>
          <span className="md:text-[18px] font-medium text-gray-400 ">
            UI/UX Designer  Developer 
          </span>
        </div>
        <p className="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 text-gray-100">
          I'm Rownok Mahbub <br />
          Designer And Developer 
        </p>
        <p className="mt-5 md:text-md text-gray-400">
          I'm creative designer based in Bangladesh, and I'm very passionate and
          dedicated to my <br className="hidden md:block" /> work.Your Satisfaction is my success
        </p>
        <div className="flex gap-4 mt-10 items-center">
       
        <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">Get In Touch
          <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
         </button>
     
         <RiFacebookFill className="cursor-pointer text-2xl text-gray-300"/>
         <FiLinkedin className="cursor-pointer text-2xl text-gray-300"/>
         <SiBehance className="cursor-pointer text-2xl text-gray-300"/>
        </div>
    
      </motion.div>
      <motion.div className=""   variants={rightAnimation}
          animate={controls}
          transition={{ delay: 0.1, type: "tween" }}>
    
        <img className="" src="/Assets/coder.svg" alt="" />
      </motion.div>
    </div>
    </div>
  
  
    </>
 
  );
};

export default Hero;
