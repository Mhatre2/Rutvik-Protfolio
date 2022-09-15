import React from "react";
import { motion } from "framer-motion";
import { downAnimation, upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";

const Tools = () => {
  const [element, controls] = useScroll();

  return (
    <>

    <div className="h-screen" ref={element}>
        <motion.div className=" container bg-gradient-to-r from-[#032a41] via-[#650a45] to-[#032a41] my-10 "   variants={downAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
        
        <div className="flex items-center gap-3">
          <hr className="w-10 bg-white-500  "/>
          <span className="md:text-[18px] font-medium text-gray-400 ">
          Tools I use for my daily work
          </span>
        </div>

        
       
        </motion.div>
      
    </div>
   
    </>
  );
};

export default Tools;
