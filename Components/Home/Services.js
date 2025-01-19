import React from 'react'
import { downAnimation, leftAnimation, rightAnimation, textAnimation } from "../../styles/Animation";
import { motion } from "framer-motion";
import { headerAnimation,imageAnimation,upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const Services = () => {
  const [element,controls]= useScroll();
    const Categories = [
        {
          id: 1,
          title: "Creative Design",
  
          text:"I will create a outstanding creative design including your needs and also do some research for your project and more.",
          image: "/Assets/creative.gif",
        },
        {
          id: 2,
          title: "UI/UX Design",
        
          text:"I will create a outstanding creative design including your needs and also do some research for your project and more.",
          image: "/Assets/uiux.gif",
        },
        
        
      ];
  return (
    <div className='container mx-auto py-10 bg-gradient-to-r from-[#010113] via-[#090014] to-[#010113]' ref={element}>
          <motion.div className="text-6xl lg:text-8xl uppercase text-center font-monoton text-gray-300 py-5 stroke-current"    variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>My Service</motion.div>
         <motion.div className="flex items-center gap-3"  variants={leftAnimation}
                animate={controls}
                transition={{ delay: 0.1, type: "tween" }}>
        </motion.div>
      
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:mx-auto gap-4  lg:gap-16 lg:px-24 mt-10 ">         
            {Categories.map((category, i) => (
              <motion.div
                key={i}
                className=" lg:flex lg:px-10 py-5  bg-gradient-to-r from-[#0e0114] via-[#05040f] to-[#0e0114] rounded-2xl px-4 border border-slate-700 transition duration-300 hover:from-[#050107] hover:via-[#05040f] hover:to-[#000000]"  variants={upAnimation}
                animate={controls}
                transition={{ delay: 0.1, type: "tween" }}
              >           
                  <img className='w-20 h-20 lg:w-32 lg:h-32 object-fill' src={category.image} />
                  <div className='pl-3'>
                  <p className='text-2xl lg:text-3xl font-medium text-gray-100 lg:pt-5'>{category.title}</p>
                <h4 className="text-gray-400 text-sm lg:text-lg pt-2 lg:pt-5">
                  {category.text}
                </h4>
                  </div>
              </motion.div>
            ))}
          
         
        
        </div>
       
    </div>
  )
}

export default Services