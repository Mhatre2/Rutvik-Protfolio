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
          price:"288$",
          text:"I will create a outstanding creative design including your needs and also do some research for your project and more.",
          image: "/Assets/creative.gif",
        },
        {
          id: 2,
          title: "UI/UX Design",
          price:"288$",
          text:"I will create a outstanding creative design including your needs and also do some research for your project and more.",
          image: "/Assets/uiux.gif",
        },
        {
          id: 3,
          title: "Web Design",
          price:"288$",
          text:"I will create a outstanding creative design including your needs and also do some research for your project and more.",
          image: "/Assets/webdesign.gif",
        },
        {
          id: 4,
          title: "Web Development",
          price:"288$",
          text:"I will create a outstanding creative design including your needs and also do some research for your project and more.",
          image: "/Assets/webdevelopment.gif",
        },
       
        
      ];
  return (
    <div className='container mx-auto py-10' ref={element}>
         <motion.div className="flex items-center gap-3"  variants={leftAnimation}
                animate={controls}
                transition={{ delay: 0.1, type: "tween" }}>
          <hr className="w-10 bg-orange-500 border "/>
          <span className="lg:text-[18px] font-medium text-gray-800 ">
            Services
          </span>
        </motion.div>
        <motion.div className='text-4xl font-semibold'  variants={leftAnimation}
                animate={controls}
                transition={{ delay: 0.1, type: "tween" }}>What I do for Clients</motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:mx-auto gap-4  lg:gap-16 lg:px-24 mt-10">
         
         
            {Categories.map((category, i) => (
              <motion.div
                key={i}
                className=" lg:flex lg:px-10 py-5 shadow-card-shadow rounded-2xl px-4"  variants={upAnimation}
                animate={controls}
                transition={{ delay: 0.1, type: "tween" }}
              >
            
                  <img className='w-20 h-20 lg:w-32 lg:h-32 object-fill' src={category.image} />
                  <div className='pl-3'>
                  <p className='text-xl lg:text-3xl font-medium lg:pt-5'>{category.title}</p>
                  <p className=' lg:text-xl pt-2'>Start From <span className='text-orange-400 pl-1'>{category.price}</span> </p>
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