import React from 'react'
import {GiWingedArrow} from 'react-icons/gi'
import { motion } from "framer-motion";
import { leftAnimation,imageAnimation, rightAnimation ,upAnimation,downAnimation} from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const BlogHome = () => {
  const [element,controls]= useScroll();
  return (
    <div className='container mx-auto  py-20 animate__animated animate__backInUp animate__delay-.5s lg:h-screen items-center md:pt-36' ref={element}>
        <motion.div className="space-y-16 md:-space-y-6 flex flex-col"  variants={downAnimation}
               animate={controls}
               transition={{ delay: 0.2, type: "tween" }}>
        <div className='text-7xl sm:text-6xl md:text-8xl lg:text-[200px] text-white capitalize flex items-center md:justify-around'>
            <p>Creative</p>
            <p className='text-sm sm:text-lg md:text-xl lg:text-xl hidden lg:flex'>Blog makes people happy <br />we love to read blog </p>
        </div>
        <div className="flex justify-around items-center">
<GiWingedArrow className='text-4xl sm:text-6xl md:text-8xl lg:text-8xl text-white'/>
        <p className='text-6xl sm:text-6xl md:text-8xl lg:text-[200px] text-white capitalize flex justify-end gap-10'> <span className='font-clash italic text-purple-300 text-6xl sm:text-6xl md:text-8xl lg:text-[180px] '>Blog</span> Post</p>
        </div>
      
        </motion.div>
     
    </div>
  )
}

export default BlogHome