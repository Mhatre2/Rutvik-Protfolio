import React from "react";
import { motion } from "framer-motion";
import {
  headerAnimation,
  imageAnimation,
  leftAnimation,
  upAnimation,downAnimation
} from "../../styles/Animation";
import { useScroll } from "../UseScroll";
import Link from "next/link";
const Blog = () => {
  const [element, controls] = useScroll();
  const Categories = [
    {
      id: 1,
      title: "User Is Our Main Priority",
      text: "I will research  creative ideas and find the best solution for you.",
      date:"23",
      month:"jan",
      image: "/Assets/uiblog.png",
    },
    {
      id: 2,
      title: "Web Development Goal",
      text: "I will research  creative ideas and find the best solution for you.",
      date:"12",
      month:"Jun",
      image: "/Assets/developmentblog.png",
    },
  
    {
        id: 3,
        title: "UX Research Is More Important",
        text: "I will research  creative ideas and find the best solution for you.",
        date:"2",
        month:"Mar",
        image: "/Assets/uxresearchblog.png",
      },
  ];
  return (
    <div className="container mx-auto items-center bg-gradient-to-r from-[#030332] via-[#100113] to-[#030332] py-10 rounded-t-[60px]" ref={element}>
          <motion.div className="text-6xl lg:text-8xl uppercase text-center font-monoton text-gray-300 py-5"    variants={downAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>My Blog</motion.div>
             <motion.div className="flex items-center gap-3"  variants={leftAnimation}
                animate={controls}
                transition={{ delay: 0.1, type: "tween" }}>
          <hr className="w-10 bg-white "/>
          <span className="lg:text-[18px] font-medium text-gray-400 capitalize">
         These are the Blog for different category
          </span>
        </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:px-20 py-10">
        {Categories.map((category, i) => (
          <motion.div
            key={i}
            className=" items-center px-6 py-6 rounded-2xl cursor-pointer"  variants={downAnimation}
            animate={controls}
            transition={{ delay: 0.1, type: "tween" }}
          >
            <div className="relative ">
              <Link href='blog/blogdetails'>
              <img className=" mx-auto rounded-xl transition duration-300 hover:scale-105" src={category.image} alt="" />
              </Link>
           
            <div className="flex text-white flex-col items-center absolute -space-y-1 top-4 right-4 bg-gradient-to-r from-[#0c0c6a] via-[#25064d] to-[#0c0c6a] px-3 py-1 rounded-2xl shadow-lg">
                <p className="capitalize">{category.date}</p>
                <p className="capitalize">{category.month}</p>
            </div>
            </div>
           <Link href='blog/blogdetails'>
           <p className="text-lg md:text-2xl font-semibold text-gray-100 mt-2 hover:underline">{category.title}</p>
           </Link>
          
            <p className="text-sm md:text-lg pt-2 text-gray-400">{category.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
