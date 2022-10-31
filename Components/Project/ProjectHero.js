import React from "react";
import { motion } from "framer-motion";
import { downAnimation, upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const ProjectHero = () => {
  const [element, controls] = useScroll();
  return (
    <div className="relative lg:h-screen lg:py-5 sm:pt-0 py-20 bg-gradient-to-r from-[#030332] via-[#100114] to-[#030332] animate__animated animate__zoomIn animate__delay-.5s" ref={element}>
    <motion.div className="container my-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center lg:pt-24 "  variants={downAnimation}
               animate={controls}
               transition={{ delay: 0.2, type: "tween" }}>
    <div
          className="content"
        
        >
        <div className="flex items-center gap-3">
          <hr className="w-10 bg-white-500  "/>
          <span className="md:text-[18px] font-medium text-gray-400 ">
            Development Projects
          </span>
        </div>
        <p className="text-[40px] lg:text-[50px] xl:text-[53px] font-bold leading-tight mt-5 sm:mt-0 text-gray-100">
          My projects of<br />
          Designing & Developing
        </p>
        <p className="mt-5 md:text-md text-gray-400">
          I'm creative designer based in Bangladesh, and I'm very passionate and
          dedicated to my <br className="hidden md:block" /> work.Your Satisfaction is my success
        </p>
        <div className="flex gap-4 mt-10 items-center">
       
        <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-purple-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">Hire Me 😊
          <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-purple -400 to-purple-700 "></span>
         </button>
       
        </div>
    
      </div>
      <div className="">
    
        <img className="" src="/Assets/projects.svg" alt="" />
      </div>
    </motion.div>
    </div>
  )
}

export default ProjectHero