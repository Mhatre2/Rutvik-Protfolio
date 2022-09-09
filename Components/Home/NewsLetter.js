import { useState } from 'react'
import { motion } from "framer-motion";
import {
  headerAnimation,
  imageAnimation,
  upAnimation,
} from "../../styles/Animation";
import { useScroll } from "../UseScroll";
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'
const NewsLetter = () => {
  const [element, controls] = useScroll();
  return (
  <>
    <div className="container mx-auto my-10 lg:px-40 py-10" ref={element}>
    <motion.div className="text-6xl lg:text-8xl uppercase text-center font-monoton text-gray-300 py-5"    variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>Get In touch</motion.div>
        <motion.div
          className="flex items-center gap-3 mb-5"
          variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <hr className="w-10 bg-gray-500 " />
          <span className="lg:text-[18px] font-medium text-gray-400">
          Just mail or What's App me if you have any Quires 
          </span>
        </motion.div>
    
      
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10'>
       
        <div className='rounded-xl border flex items-center border-orange-300/40 py-3' >
        
       <img className='w-14 lg:w-28' src="/Assets/email.gif" alt="" />
       <div className="flex flex-col">
       <a className='lg:text-2xl text-white font-semibold' href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrlmvZcjJrhjQTlQfbjSZqXgTkfzJqJDkWBxwXlLQBHNRxDFCDCFJbKfDHRJPlKfLrzss'> design.rownok@gmail.com</a>
       <p className='text-gray-400 text-xs lg:text-sm'>Click the email to mail me directly easy process</p>
       </div>
      
       
        </div>
        <div className='rounded-xl border flex items-center border-orange-300/40 py-3' >
        
        <img className='w-14 lg:w-28' src="/Assets/call.gif" alt="" />
        <div className="flex flex-col">
        <a className='lg:text-2xl text-white font-semibold' href='https://wa.me/+8801880741710'> +8801880741710</a>
        <p className='text-gray-400 text-xs lg:text-sm'>Click the number to what's app me directly easy process</p>
        </div>
      
       
        </div>
       
   
      </div>
     
    </div>
  </>
  )
}

export default NewsLetter