import React from "react";
import { motion } from "framer-motion";
import { downAnimation, upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";

const Tools = () => {
  const [element, controls] = useScroll();

  return (
    <>

    <div className="" ref={element}>
        <motion.div className="lg:py-20 py-10 container bg-gradient-to-r from-[#011018] via-[#10000b] to-[#011018] "  variants={downAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
        <div className="flex flex-col justify-center items-center">
     <p className="text-5xl capitalize text-white font-bebasneo text-center">Tools I use for my daily work </p>
        <p className="text-gray-400 max-w-xl text-center mt-3">The best way to stay on top of my work is by using these four essential tools, either working solo or collaboratively in team.</p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-10" >
            <div className="flex justify-center items-center flex-col px-2 rounded-2xl py-6 hover:bg-gradient-to-r from-[#032a41] via-[#6095ac] to-[#032a41] hover:shadow-xl hover:skew-y-6 transition duration-400">
            <img className="w-28 h-28" src="/Assets/figma.svg" alt="" />
            <p className="text-white font-medium text-xl">Figma</p>
            </div>
            <div className="flex justify-center items-center flex-col px-2 rounded-2xl py-6 hover:bg-gradient-to-r from-[#032a41] via-[#6095ac] to-[#032a41] hover:shadow-xl hover:skew-x-6 transition duration-400">
            <img className="w-28 h-28" src="/Assets/notion.svg" alt="" />
            <p className="text-white font-medium text-xl">Notion</p>
            </div>
            <div className="flex justify-center items-center flex-col px-2 rounded-2xl py-6 hover:bg-gradient-to-r from-[#032a41] via-[#6095ac] to-[#032a41] hover:shadow-xl hover:skew-y-6 transition duration-400">
            <img className="w-28 h-28" src="/Assets/framer.svg" alt="" />
            <p className="text-white font-medium text-xl">Framer</p>
            </div>
            <div className="flex justify-center items-center flex-col px-2 rounded-2xl py-6 hover:bg-gradient-to-r from-[#032a41] via-[#6095ac] to-[#032a41] hover:shadow-xl hover:skew-y-6 transition duration-400">
            <img className="w-28" src="/Assets/figma.svg" alt="" />
            <p className="text-white font-medium text-xl">Figma</p>
            </div>
          
            
        </div>
       
        </motion.div>
      
    </div>
   
    </>
  );
};

export default Tools;
