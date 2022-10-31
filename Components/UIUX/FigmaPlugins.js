import React from "react";
import { motion } from "framer-motion";
import { downAnimation, upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const Categories = [
  {
    id: 1,
    title: "Pexels",
    text: "Pexels is a free stock photo and video sharing millions of high-quality photos and videos.",
    image: "/Assets/uiux/pexels.svg",
  },
  {
    id: 2,
    title: "Remove BG",
    text: "Remove the background of images automatically with just a single click ",
    image: "/Assets/uiux/removebg.svg",
  },
  {
    id: 3,
    title: "Blush",
    text: "Blush works with mixable elements, so you can customize every variablee of an illustration",
    image: "/Assets/uiux/blus.svg",
  },
  {
    id: 1,
    title: "Open Icon",
    text: "A collection of 50,000+ handpicked icons for your design.",
    image: "/Assets/uiux/openicon.png",
  },
  {
    id: 1,
    title: "Content Reel",
    text: "Design layouts more efficiently by pulling text strings, images, and icons from one palette",
    image: "/Assets/uiux/contentreel.svg",
  },
  {
    id: 1,
    title: "Unsplash",
    text: "Insert beautiful images from Unsplash straight into your designs.",
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
              My favorite Figma plugins
            </p>
            <p className="text-gray-400 max-w-xl text-sm md:text-base text-center mt-3">
              I use some useful figma plugins for designers of all levels that helps
              me speed up and spice up my designs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {Categories.map((category, i) => (
            <motion.div
              className=" rounded-2xl border border-[#7250ac] shadow-lg cursor-pointer "
              variants={upAnimation}
              animate={controls}
              transition={{ delay: 0.1, type: "tween" }}
            >
                 <a href="https://www.figma.com/community" target="_blank">
                <div className="px-3 flex justify-between items-center py-5 ">
                  <div className="flex hover:-translate-y-1 transition duration-500">
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
