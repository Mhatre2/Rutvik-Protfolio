import React from "react";
import { motion } from "framer-motion";
import {
  headerAnimation,
  imageAnimation,
  rightAnimation,
  upAnimation
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
  ];
  return (
    <div className="container mx-auto items-center bg-gradient-to-r from-[#030332] via-[#100113] to-[#030332] py-10" ref={element}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:px-20">
        {Categories.map((category, i) => (
          <motion.div
            key={i}
            className=" items-center text-center px-6 py-6 rounded-2xl hover:border border-gray-600"  variants={upAnimation}
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
