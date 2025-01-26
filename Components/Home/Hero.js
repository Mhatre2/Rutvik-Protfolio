import React from "react";
import 'animate.css';
import { motion } from "framer-motion";
import { leftAnimation, imageAnimation, rightAnimation, upAnimation, downAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
import { RiFacebookFill } from 'react-icons/ri'
import { SiBehance } from 'react-icons/si'
import { FiLinkedin } from 'react-icons/fi'
import { GoMarkGithub } from 'react-icons/go'
const Hero = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <div className="relative lg:h-screen lg:py-5 sm:pt-0 py-20 bg-gradient-to-r from-[#030332] via-[#100114] to-[#030332] animate__animated animate__zoomIn animate__delay-.5s" ref={element}>
        <motion.div className="container my-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center lg:pt-24 " variants={downAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>
          <div
            className="content"
          >
            <p className="text-[40px] lg:text-[50px] xl:text-[53px] font-bold leading-tight mt-5 sm:mt-0 text-gray-100">
              I'm Rutvik Shinde <br />
              UI/UX Designer
            </p>
            <p className="mt-5 md:text-md text-gray-400">
              Crafting intuitive, visually captivating UI/UX designs for web & mobile experiences that engage and convert.<br></br>
              Currently based in Mumbai, India
            </p>
            <div className="flex gap-10 mt-10 items-center">
              {/* Hire Me Button */}
              <a
                href="http://www.linkedin.com/in/rutvikshinde17"
                target="_blank"
                className="font-medium text-[20px] md:text-[24px] flex items-center px-8 py-4 md:py-5 md:px-10 rounded-xl capitalize bg-gradient-to-r from-purple-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500 relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass"
              >
                Hire Me 😊
                <span className="animate-ping absolute right-0 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-700"></span>
              </a>

              {/* Behance Button */}
              <a href="https://www.behance.net/rutvik17" target="_blank">
                <SiBehance className="cursor-pointer text-5xl md:text-6xl text-gray-300 hover:text-purple-300 transition duration-200 hover:scale-125" />
              </a>
            </div>
          </div>
          <div className="relative lg:ml-20">
            <img
              className="w-[300px] lg:w-[500px] xl:w-[600px] mx-auto lg:mx-0"
              src="/Assets/rutvik.png"
              alt="Rutvik Shinde"
            />
          </div>
        </motion.div>
      </div>
    </>

  );
};

export default Hero;
