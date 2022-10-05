import React from "react";
import { motion } from "framer-motion";
import { downAnimation, upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
const ShowCase = () => {
  const [element, controls] = useScroll();
  return (
    <>

    <div className="container my-20" ref={element}>
        <motion.div className="mt-20"   variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
            <div className="flex flex-col lg:flex-row items-center lg:justify-around gap-10" >
                <div className="max-w-2xl relative ">
                <img className="" src="/Assets/protfolio/ecommerce.png" alt="" />
                <div className="absolute -right-6 -bottom-10 hover:scale-110 transition duration-300 hover:blur-md">
                    <button className="hidden lg:flex bg-gradient-to-r from-purple-500 to-purple-400 hover:from-pink-500 hover:to-yellow-500 lg:w-32 lg:h-32 rounded-full text-white flex-col items-center justify-center">
                    <BsFillArrowDownRightCircleFill className="lg:text-2xl"/>
                   <p>Live Site</p>
                    </button>
                </div>
                </div>
             
                <div className="">
                    <p className="text-white font-semibold text-3xl">E-commerce Website</p>
                    <p className="text-gray-400 font-normal text-lg max-w-xl">I build this website for a company and they really appreciate my work. This website solve their problem and their business is going on like rocket.</p>
                    <p className="text-white font-semibold text-3xl mt-10">Year</p>
                    <p className="text-gray-400 font-normal text-xl max-w-xl">2022</p>
                    <p className="text-white font-semibold text-3xl mt-10">Role</p>
                    <p className="text-gray-400 font-normal text-xl max-w-xl"> UI Designer</p>
               
                </div>
                <button className="lg:hidden flex bg-gradient-to-r px-4 from-purple-500 to-purple-400 hover:from-pink-500 hover:to-yellow-500 lg:w-32 lg:h-32 rounded-full text-white  items-center justify-around gap-2 py-2">
                   
                   <p>Live Site</p>
                   <BsFillArrowDownRightCircleFill className="lg:text-2xl"/>
                    </button>
            </div>
    
     
       
        </motion.div>

        <motion.div className="mt-20"   variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
            <div className="flex flex-col lg:flex-row items-center lg:justify-around gap-10" >
        
             
                <div className="">
                    <p className="text-white font-semibold text-3xl">E-commerce Website</p>
                    <p className="text-gray-400 font-normal text-lg max-w-xl">I build this website for a company and they really appreciate my work. This website solve their problem and their business is going on like rocket.</p>
                    <p className="text-white font-semibold text-3xl mt-10">Year</p>
                    <p className="text-gray-400 font-normal text-xl max-w-xl">2022</p>
                    <p className="text-white font-semibold text-3xl mt-10">Role</p>
                    <p className="text-gray-400 font-normal text-xl max-w-xl"> UI Designer</p>
               
                </div>
                <button className="lg:hidden flex bg-gradient-to-r px-4 from-purple-500 to-purple-400 hover:from-pink-500 hover:to-yellow-500 lg:w-32 lg:h-32 rounded-full text-white  items-center justify-around gap-2 py-2">
                   
                   <p>Live Site</p>
                   <BsFillArrowDownRightCircleFill className="lg:text-2xl"/>
                    </button>
                    <div className="max-w-2xl relative ">
                <img className="" src="/Assets/protfolio/ecommerce.png" alt="" />
                <div className="absolute -right-6 -bottom-10 hover:scale-110 transition duration-300 hover:blur-md">
                    <button className="hidden lg:flex bg-gradient-to-r from-purple-500 to-purple-400 hover:from-pink-500 hover:to-yellow-500 lg:w-32 lg:h-32 rounded-full text-white flex-col items-center justify-center">
                    <BsFillArrowDownRightCircleFill className="lg:text-2xl"/>
                   <p>Live Site</p>
                    </button>
                </div>
                </div>
            </div>
    
     
       
        </motion.div>
      
    </div>
   
    </>
  )
}

export default ShowCase