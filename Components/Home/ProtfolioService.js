import React from 'react'
import { motion } from "framer-motion";
import { headerAnimation,imageAnimation, rightAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const ProtfolioService = () => {
    const [element,controls]= useScroll();
  return (
    <div className='container mx-auto items-center my-10 ' ref={element}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            <motion.div className=" items-center text-center px-6 py-6 rounded-2xl"  variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
            <img className='w-24 mx-auto' src="/Assets/design.gif" alt="" />
                <p className='text-2xl font-semibold'>Design With Emotion</p>
                <p className='text-sm text-gray-600 pt-4'>Designing a page or any website it's need's to be user friendly and more user interactive so that user will get attached and stay for longtime.</p>
            </motion.div>
            <motion.div className=" items-center text-center px-6 py-6 rounded-2xl"  variants={imageAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
            <img className='w-24 mx-auto' src="/Assets/developer.gif" alt="" />
                <p className='text-2xl font-semibold'>Design With Emotion</p>
                <p className='text-sm text-gray-600 pt-4'>Designing a page or any website it's need's to be user friendly and more user interactive so that user will get attached and stay for longtime.</p>
            </motion.div>
            <motion.div className=" items-center text-center px-6 py-6 rounded-2xl"  variants={rightAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
            <img className='w-24 mx-auto' src="/Assets/research.gif" alt="" />
                <p className='text-2xl font-semibold'>Design With Emotion</p>
                <p className='text-sm text-gray-600 pt-4'>Designing a page or any website it's need's to be user friendly and more user interactive so that user will get attached and stay for longtime.</p>
            </motion.div>
        </div>
      
    </div>
  )
}

export default ProtfolioService