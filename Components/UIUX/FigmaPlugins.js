import React from "react";
import { motion } from "framer-motion";
import { downAnimation, upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const Categories = [
  {
    id: 1,
    title: "Foodepi - Food And Restaurant app",
    text: "Mobile App",
    image: "/Assets/uiux/pexels.svg",
  },
  {
    id: 2,
    title: "Ecomme - E-shop ecommerce website",
    text: "Mobile App",
    image: "/Assets/uiux/removebg.svg",
  },
  {
    id: 3,
    title: "Ecomme - E-shop ecommerce website",
    text: "Mobile App",
    image: "/Assets/uiux/blus.svg",
  },
  {
    id: 1,
    title: "Foodepi - Food And Restaurant app",
    text: "Mobile App",
    image: "/Assets/uiux/openicon.png",
  },
  {
    id: 1,
    title: "Foodepi - Food And Restaurant app",
    text: "Mobile App",
    image: "/Assets/uiux/contentreel.svg",
  },
  {
    id: 1,
    title: "Foodepi - Food And Restaurant app",
    text: "Mobile App",
    image: "/Assets/uiux/unsplash.svg",
  },
];
const FigmaPlugins = () => {
  const [element, controls] = useScroll();

  return (
    <>
      <div className="" ref={element}>
        <motion.div
          className="py-10  container bg-gradient-to-r from-[#021125] via-[#180901] to-[#021125] "
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
          {Categories.map((category, i) => (
            <motion.div
              className=" rounded-2xl border border-[#7250ac] shadow-lg cursor-pointer hover:scale-95"
              variants={upAnimation}
              animate={controls}
              transition={{ delay: 0.1, type: "tween" }}
            >
                 <a href="https://www.figma.com/community" target="_blank">
                <div className="px-3 flex justify-between items-center py-5">
                  <div className="flex">
                    <img
                      className="w-20 h-20 rounded-xl"
                      src={category.image}
                      alt=""
                    />
                    <div className="pl-4  flex flex-col  gap-1">
                      <p className="text-white font-medium lg:text-xl">
                       {category.title}
                      </p>
                      <p className="text-gray-500 font-medium text-xs lg:text-sm">
                       {category.text}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

       
        </motion.div>
      </div>
    </>
  );
};

export default FigmaPlugins;
