import React from "react";
import { RiLinkM } from "react-icons/ri";
import { motion } from "framer-motion";
import { leftAnimation,imageAnimation, rightAnimation ,upAnimation,downAnimation} from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const LetestProject = () => {
  const exp = [
    {
      img: "/Assets/dutypedia.png",
      name: "Powerful Design system",
      description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut impedit dolorum incidunt minus nostrum voluptates asperiores illo necessitatibus fuga.",
      link: "www.rmportfolio.com",
    },
    {
        img: "/Assets/dutypedia.png",
        name: "Powerful Design system",
        description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut impedit dolorum incidunt minus nostrum voluptates asperiores illo necessitatibus fuga.",
        link: "https://rm-protfolio.vercel.app/",
      },
   
  ];
  const [element,controls]= useScroll();
  return (
    <div ref={element}  variants={downAnimation}
    animate={controls}
    transition={{ delay: 0.2, type: "tween" }}>
      <p className="text-white text-xl font-semibold">Latest Projects</p>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10  my-5">
        {exp.map((ex, i) => {
          return (
            <div
              key={i}
              className="bg-gradient-to-r from-slate-900 shadow-lg to-gray-900 p-4 rounded-lg"
            >
              <div className="flex flex-col md:flex-row gap-5">
                <img className="md:w-14 md:h-14 object-cover rounded-xl" src={ex.img} alt="" />
                <div className="">
                  <p className="text-lg md:text-2xl text-white font-medium">
                   {ex.name}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base text-justify">
                  {ex.description}
                  </p>
                  <div className='flex gap-2 items-center mt-2'>
                  
                        <RiLinkM className='text-cyan-300 text-lg'/>
                        <a href={ex.link} className="text-cyan-300 hover:underline text-xs md:text-base" target='_blank'>{ex.link}</a>
                    </div>
                </div>
              </div>
              
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default LetestProject;
