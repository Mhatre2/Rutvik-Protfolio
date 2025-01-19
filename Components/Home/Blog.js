import React from "react";
import { motion } from "framer-motion";
import {
  headerAnimation,
  imageAnimation,
  leftAnimation,
  upAnimation,
  downAnimation,
} from "../../styles/Animation";
import { useScroll } from "../UseScroll";
import Link from "next/link";

const Blog = () => {
  const [element, controls] = useScroll();
  const Categories = [
    {
      id: 1,
      image: "/Assets/jurassic.png",
    },
    {
      id: 2,
      image: "/Assets/cosmic.png",
    },
    {
      id: 3,
      image: "/Assets/thar.jpg",
    },
    {
      id: 4,
      image: "/Assets/aajana.jpg",
    },
    {
      id: 5,
      image: "/Assets/BMW.jpg",
    },
    {
      id: 6,
      image: "/Assets/Juice.png",
    },
    {
      id: 7,
      image: "/Assets/nike.jpg",
    },
    {
      id: 8,
      image: "/Assets/OG1.jpg",
    },
    {
      id: 9,
      image: "/Assets/poster chicken.jpg",
    },
    {
      id: 10,
      image: "/Assets/TU.jpg",
    },
  ];

  return (
    <div
      className="container mx-auto items-center bg-gradient-to-r from-[#030332] via-[#100113] to-[#030332] py-10 rounded-t-[60px]"
      ref={element}
    >
      <motion.div
        className="text-6xl lg:text-8xl uppercase text-center font-monoton text-gray-300 py-5"
        variants={downAnimation}
        animate={controls}
        transition={{ delay: 0.2, type: "tween" }}
      >
        My Graphics
      </motion.div>
      <motion.div
        className="flex items-center gap-3"
        variants={leftAnimation}
        animate={controls}
        transition={{ delay: 0.1, type: "tween" }}
      >
      </motion.div>

      {/* Horizontal Scrollable Div */}
      <div className="flex overflow-x-scroll space-x-6 py-10 px-6 custom-scrollbar">
        {Categories.map((category, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-[300px] h-[400px] flex justify-center items-center cursor-pointer"
            variants={downAnimation}
            animate={controls}
            transition={{ delay: 0.1, type: "tween" }}
          >
            <div className="relative flex justify-center items-center">       
                <img
                  className="max-h-full max-w-full object-contain rounded-xl transition duration-300 hover:scale-105"
                  src={category.image}
                  alt={`Graphic ${i + 1}`}
                />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
