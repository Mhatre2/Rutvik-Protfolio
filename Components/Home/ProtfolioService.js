import React from "react";
import { motion } from "framer-motion";
import {
  headerAnimation,
  imageAnimation,
  leftAnimation,
  upAnimation,downAnimation
} from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const ProtfolioService = () => {
  const [element, controls] = useScroll();
  const Categories = [
    {
      id: 1,
      title: "Research",
      text: "I will research  creative ideas and find the best solution for you.",
      image: "/Assets/research.gif",
    },
    {
      id: 2,
      title: "UI/UX Design",
      text: "I will research  creative ideas and find the best solution for you.",
      image: "/Assets/design.gif",
    },
    {
      id: 3,
      title: "Develop",
      text: "I will research  creative ideas and find the best solution for you.",
      image: "/Assets/developer.gif",
    },
    {
      id: 4,
      title: "Develop",
      text: "I will research  creative ideas and find the best solution for you.",
      image: "/Assets/developer.gif",
    },
    {
      id: 5,
      title: "Develop",
      text: "I will research  creative ideas and find the best solution for you.",
      image: "/Assets/developer.gif",
    },
    {
      id: 6,
      title: "Develop",
      text: "I will research  creative ideas and find the best solution for you.",
      image: "/Assets/developer.gif",
    },
  ];
  return (
    <div className="container mx-auto items-center bg-gradient-to-r from-[#030332] via-[#100113] to-[#030332] py-10" ref={element}>
          <motion.div className="text-6xl lg:text-8xl uppercase text-center font-monoton text-gray-300 py-5"    variants={downAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>My skills</motion.div>
             <motion.div className="flex items-center gap-3"  variants={leftAnimation}
                animate={controls}
                transition={{ delay: 0.1, type: "tween" }}>
          <hr className="w-10 bg-white "/>
          <span className="lg:text-[18px] font-medium text-gray-400 capitalize">
         These are the main skills
          </span>
        </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:px-20 py-10">
        {Categories.map((category, i) => (
          <motion.div
            key={i}
            className=" items-center text-center px-6 py-6 rounded-2xl hover:bg-gradient-to-r from-[#030332] via-[#100113] to-[#030332] hover:border border-purple-200"  variants={downAnimation}
            animate={controls}
            transition={{ delay: 0.1, type: "tween" }}
          >
            <img className="w-24 mx-auto" src={category.image} alt="" />
            <p className="text-2xl font-semibold text-gray-100">{category.title}</p>
            <p className="text-xl pt-4 text-gray-400">{category.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProtfolioService;
