import React from "react";
import { rightAnimation, textAnimation } from "../../styles/Animation";
import { motion } from "framer-motion";
import { headerAnimation,imageAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const Service = () => {
  const [element,controls]= useScroll();
  return (
    <>
     <div className="container mx-auto items-center py-10 overflow-x-hidden" ref={element}>
      <motion.div className="flex items-center gap-3 mb-5 overflow-hidden"  variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
        <hr className="w-10 bg-orange-500 " />
        <span className="md:text-[18px] font-medium text-gray-800">
          My Latest Design & Development
        </span>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 overflow-x-hidden">
        <motion.div className="md:my-6 md:px-8 h-[500px] overflow-hidden"  variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
          <div className="bg-[#daddf1] relative rounded-xl h-[370px] flex justify-center items-center cursor-pointer">
            <img className="md:h-[340px] transition duration-300 hover:scale-105 hover:blur-sm" src="/Assets/protfolio/foodepi.png" alt="" />
           
          </div>
          <div className="flex justify-between pt-2">
          <div className="flex flex-col">
          <p className=" text-xs md:text-sm font-normal">Mobile App</p>
            <p className="text-md md:text-2xl">Foodepi - Food And Restaurant app</p>
          </div>
          <div className="flex gap-3">
          <div className="flex items-center gap-2 cursor-pointer text-xs md:text-lg">
          <img className="w-4" src="/Assets/heart.svg" alt="" />
         <p >200</p>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer text-xs md:text-lg">
          <img className="w-5" src="/Assets/eye.svg" alt="" />
         <p>200</p>
          </div>
          </div>
         
            </div>
        </motion.div>
        <motion.div className="md:my-6 md:px-8 h-[500px] overflow-hidden" variants={rightAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
          <div className="bg-[#daddf1] relative rounded-xl h-[370px] flex justify-center items-center cursor-pointer">
            <img className="md:h-[340px] transition duration-300 hover:scale-105 hover:blur-sm" src="/Assets/protfolio/ecommerce.png" alt="" />
           
          </div>
          <div className="flex justify-between pt-2">
          <div className="flex flex-col">
          <p className=" text-xs md:text-sm font-normal">Mobile App</p>
            <p className="text-md md:text-2xl">Foodepi - Food And Restaurant app</p>
          </div>
          <div className="flex gap-3">
          <div className="flex items-center gap-2 cursor-pointer text-xs md:text-lg">
          <img className="w-4" src="/Assets/heart.svg" alt="" />
         <p >200</p>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer text-xs md:text-lg">
          <img className="w-5" src="/Assets/eye.svg" alt="" />
         <p>200</p>
          </div>
          </div>
         
            </div>
        </motion.div>
        
      </div>
    </div>
    </>
   
  );
};

export default Service;
