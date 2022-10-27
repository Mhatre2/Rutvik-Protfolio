import React from "react";
import { motion } from "framer-motion";
import { downAnimation, upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const Categories = [
  {
    id: 1,
    title: "Figma",
    text: "Pexels is a free stock photo and video sharing millions of high-quality photos and videos.",
    image: "/Assets/figma.svg",
    link:"https://fonts.google.com/"
  },
  {
    id: 2,
    title: "Notion",
  
    image: "/Assets/notion.svg",
    link:"https://www.dafont.com/"
  },
  {
    id: 3,
    title: "Vs Code",
    image: "/Assets/vscode.svg",
    link:"https://www.fontspace.com/"
  },
  {
    id: 4,
    title: "Github",
    image: "/Assets/github.svg",
    link:"https://fontesk.com/"
  }
];
const Tools = () => {
  const [element, controls] = useScroll();

  return (
    <>
      <div className="" ref={element}>
        <motion.div
          className="py-10  container bg-gradient-to-r from-slate-900  to-gray-900 rounded-xl"
          variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.1, type: "tween" }}
        >
         <p className="text-white text-xl font-semibold">Tools</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {Categories.map((category, i) => (
              <motion.div
                className=" rounded-2xl shadow-lg cursor-pointer hover:scale-95"
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

                    <p className="absolute bottom-0 text-center text-slate-100 shadow-card-shadow font-semibold lg:text-xl bg-purple-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 px-5 py-5 w-full rounded-b-xl font-clash ">
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

export default Tools;
