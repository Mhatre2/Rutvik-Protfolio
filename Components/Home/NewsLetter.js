import { useState } from 'react'
import { motion } from "framer-motion";
import {
  headerAnimation,
  imageAnimation,
  upAnimation,
} from "../../styles/Animation";
import { useScroll } from "../UseScroll";

const NewsLetter = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <div className="container mx-auto lg:px-40 py-10" ref={element}>
        <motion.div
          className="text-6xl lg:text-8xl uppercase text-center font-monoton text-gray-300 py-5"
          variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          Get In Touch
        </motion.div>
        <motion.div
          className="flex items-center gap-3 mb-5 justify-center"
          variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
        </motion.div>
        <div className="flex justify-center">
          <div className="max-w-lg w-full">
            <div className="rounded-xl border flex items-center border-purple-300/40 py-3 px-6 hover:bg-gradient-to-r from-[#030332] via-[#100113] to-[#030332]">
              <img
                className="w-14 lg:w-28"
                src="/Assets/call.gif"
                alt="WhatsApp"
              />
              <div className="flex flex-col ml-4">
                <a
                  className="lg:text-2xl text-white font-semibold"
                  href="https://wa.me/+7710892796"
                >
                  +7710892796
                </a>
                <p className="text-gray-400 text-xs lg:text-sm">
                  Click the number to what's app me directly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
