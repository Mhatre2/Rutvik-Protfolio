import React from "react";
import { motion } from "framer-motion";
import { downAnimation, upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";

const FigmaPlugins = () => {
  const [element, controls] = useScroll();

  return (
    <>
      <div className="" ref={element}>
        <motion.div
          className="py-10 h-[550px] container bg-gradient-to-r from-[#021125] via-[#180901] to-[#021125] "
          variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-5xl capitalize text-white font-bebasneo text-center">
            My favourite Figma plugins 
            </p>
            <p className="text-gray-400 max-w-xl text-center mt-3">
              I made some useful UI Kits for designers of all levels that helps
              you speed up and spice up your designs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            <div className=" rounded-2xl border border-[#50ac9f] shadow-lg cursor-pointer hover:scale-95">
            <a href="#">
            <div className="px-3 flex justify-between items-center py-5">
                <div className="flex">
                  <img className="w-20 h-20 rounded-xl" src="/Assets/uiux/pexels.svg" alt="" />
                  <div className="pl-4  flex flex-col  gap-1">
                    <p className="text-white font-medium lg:text-xl">
                      Travel Mobile App UI Kits.
                    </p>
                    <p className="text-gray-500 font-medium text-xs lg:text-sm">
                    Add completely free images to your designs directly from Pexels.
                    </p>
                  
                  </div>
                </div>
              
              </div>
            </a>
             
            </div>
            <div className=" rounded-2xl border border-[#538cdd] shadow-lg cursor-pointer hover:scale-95">
            <a href="#">
            <div className="px-3 flex justify-between items-center py-5">
                <div className="flex">
                  <img className="w-20 h-20 rounded-xl" src="/Assets/uiux/removebg.svg" alt="" />
                  <div className="pl-4  flex flex-col  gap-1">
                    <p className="text-white font-medium lg:text-xl">
                      Travel Mobile App UI Kits.
                    </p>
                    <p className="text-gray-400 font-medium text-xs lg:text-sm">
                    Add completely free images to your designs directly from Pexels.
                    </p>
                  
                  </div>
                </div>
              
              </div>
            </a>
             
            </div>

            <div className=" rounded-2xl border border-[#91d7df] shadow-lg cursor-pointer hover:scale-95">
            <a href="#">
            <div className="px-3 flex justify-between items-center py-5">
                <div className="flex">
                  <img className="w-20 h-20 rounded-xl" src="/Assets/uiux/blus.svg" alt="" />
                  <div className="pl-4  flex flex-col  gap-1">
                    <p className="text-white font-medium lg:text-xl">
                      Travel Mobile App UI Kits.
                    </p>
                    <p className="text-gray-300 font-medium text-xs lg:text-sm">
                    Add completely free images to your designs directly from Pexels.
                    </p>
                  
                  </div>
                </div>
              
              </div>
            </a>
             
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FigmaPlugins;
