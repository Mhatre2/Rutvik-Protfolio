import React from "react";
import { motion } from "framer-motion";
import { downAnimation, upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const Categories = [
  {
    id: 1,
    title: "Google Font",
    text: "Pexels is a free stock photo and video sharing millions of high-quality photos and videos.",
    image: "/Assets/uiux/googlefont.svg",
    link:"https://fonts.google.com/"
  },
  {
    id: 2,
    title: "DaFont",
    text: "Remove the background of images automatically with just a single click ",
    image: "/Assets/uiux/dafont.svg",
    link:"https://www.dafont.com/"
  },
  {
    id: 3,
    title: "Font Space",
    text: "Blush works with mixable elements, so you can customize every variablee of an illustration",
    image: "/Assets/uiux/fontspace.svg",
    link:"https://www.fontspace.com/"
  },
  {
    id: 4,
    title: "Font Tesk",
    text: "A collection of 50,000+ handpicked icons for your design.",
    image: "/Assets/uiux/fonttesk.svg",
    link:"https://fontesk.com/"
  }
];
const FigmaIcons = () => {
  const [element, controls] = useScroll();

  return (
    <>
      <div className="" ref={element}>
        <motion.div
          className="py-10  container bg-gradient-to-r from-[#021125] via-[#180901] to-[#021125] "
          variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.1, type: "tween" }}
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-5xl capitalize text-white font-bebasneo text-center">
              My favorite Figma Fonts
            </p>
            <p className="text-gray-400 max-w-xl text-sm md:text-base text-center mt-3 ">
              I use some useful figma plugins for designers of all levels that
              helps me speed up and spice up my designs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
            {Categories.map((category, i) => (
              <motion.div
                className=" rounded-2xl  shadow-lg cursor-pointer hover:scale-95"
                variants={upAnimation}
                animate={controls}
                transition={{ delay: 0.1, type: "tween" }}
              >
                <a href={category.link} target="_blank">
                  <div className=" mx-auto flex flex-col justify-center items-center relative hover:-translate-y-3 transition duration-500">
                    <img
                      className="w-40 h-52 rounded-xl pt-5"
                      src={category.image}
                      alt=""
                    />

                    <p className="absolute bottom-0 text-center text-white shadow-card-shadow font-semibold lg:text-xl bg-purple-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 px-5 py-7 w-full rounded-b-xl font-clash ">
                      {category.title}
                    </p>
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

export default FigmaIcons;
