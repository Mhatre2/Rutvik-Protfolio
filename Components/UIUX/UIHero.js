import React from "react";
import { motion } from "framer-motion";
import { downAnimation, upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";

const UIHero = () => {
  const [element, controls] = useScroll();

  return (
    <>

    <div className="container lg:h-screen" ref={element}>
        <motion.div className="bg-gradient-to-r from-[#032a41] via-[#650a45] to-[#032a41] my-10  rounded-t-[50px] lg:rounded-[50px] flex flex-col justify-center items-center lg:-space-y-40"   variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
            <div className="flex flex-col items-center justify-center gap-10" >
            <p className="uppercase text-white text-4xl lg:text-7xl text-center pt-10 lg:pt-20 font-bebasneo max-w-2xl">Ui design is the power to get any user attention</p>
        <button className="font-medium uppercase text-[16px] flex items-center px-5 py-3 md:py-4 md:px-4 rounded-xl bg-gradient-to-r from-pink-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass text-center">
               Get Free Design 😃
                <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-purple -400 to-purple-700 "></span>
              </button>
            </div>
    
        <div className="flex justify-center max-w-5xl">
        <img className="w-full" src="/Assets/uiux/hero.svg" alt="" />
        </div>
       
        </motion.div>
      
    </div>
   
    </>
  );
};

export default UIHero;
