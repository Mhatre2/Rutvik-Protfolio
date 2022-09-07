import React from "react";
import { downAnimation, leftAnimation, rightAnimation, textAnimation } from "../../styles/Animation";
import { motion } from "framer-motion";
import { headerAnimation,imageAnimation,upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const Service = () => {
  const [element,controls]= useScroll();
  const Categories = [
    {
      id: 1,
      title: "Foodepi - Food And Restaurant app",
      price:"288$",
      text:"Mobile App",
      loved:"200",
      view:"23",
      image: "/Assets/protfolio/foodepi.png",
      love: "/Assets/heart.svg",
      eye: "/Assets/eye.svg",
    },
    {
      id: 2,
      title: "Foodepi - Food And Restaurant app",
      price:"288$",
      text:"Mobile App",
      loved:"200",
      view:"23",
      image: "/Assets/protfolio/foodepi.png",
      love: "/Assets/heart.svg",
      eye: "/Assets/eye.svg",
    },
    {
      id: 1,
      title: "Foodepi - Food And Restaurant app",
      price:"288$",
      text:"Mobile App",
      loved:"200",
      view:"23",
      image: "/Assets/protfolio/foodepi.png",
      love: "/Assets/heart.svg",
      eye: "/Assets/eye.svg",
    },
    {
      id: 1,
      title: "Foodepi - Food And Restaurant app",
      price:"288$",
      text:"Mobile App",
      loved:"200",
      view:"23",
      image: "/Assets/protfolio/foodepi.png",
      love: "/Assets/heart.svg",
      eye: "/Assets/eye.svg",
    },
    
  ];
  return (
    <>
     <div className="container mx-auto items-center  py-10" ref={element}>
      <motion.div className="flex items-center gap-3 mb-5" variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
        <hr className="w-10 bg-orange-500 " />
        <span className="lg:text-[18px] font-medium text-gray-800">
          My Latest Design & Development
        </span>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2" >
       
    
       
            {Categories.map((category, i) => (
               <motion.div className=" lg:px-8 h-[500px]"  variants={upAnimation}
               animate={controls}
               transition={{ delay: 0.1, type: "tween" }}>
              <div
                key={i}
                className="lg:my-6 lg:px-8 h-[500px] overflow-hidden"
              >
                  <div className="bg-[#daddf1] relative rounded-xl h-[370px] flex justify-center items-center cursor-pointer   hover:blur-sm">
                  <img className='lg:h-[340px] transition duration-300 hover:scale-105" src="/Assets/protfolio/foodepi.png' src={category.image} />
                  </div>
                  <div className="flex justify-between pt-2">
          <div className="flex flex-col">
          <p className=" text-xs lg:text-sm font-normal">{category.text}</p>
            <p className="text-[16px] lg:text-2xl font-medium">{category.title}</p>
          </div>
          <div className="flex gap-1 lg:gap-3">
          <div className="flex items-center gap-1 cursor-pointer text-xs lg:text-lg">
          <img className="w-4" src={category.love} alt="" />
         <p className="text-xs">{category.loved}</p>
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer text-xs lg:text-lg">
          <img className="w-5" src={category.eye} alt="" />
         <p className="text-xs">{category.view}</p>
          </div>
          </div>
         
            </div>
                  
              
                  </div>
              </motion.div>
            ))}
          
         
        
    
        
      </div>
    </div>
    </>
   
  );
};

export default Service;
