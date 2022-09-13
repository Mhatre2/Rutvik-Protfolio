import React from "react";
import { motion } from "framer-motion";
import {
  headerAnimation,
  imageAnimation,
  upAnimation,
} from "../../styles/Animation";
import { useScroll } from "../UseScroll";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
const Service = () => {
  const [element, controls] = useScroll();
  const Categories = [
    {
      id: 1,
      title: "Foodepi - Food And Restaurant app",
      price: "288$",
      text: "Mobile App",
      loved: "200",
      view: "23",
      image: "/Assets/protfolio/foodepi.png",
    },
    {
      id: 2,
      title: "Ecomme - E-shop ecommerce website",
      price: "288$",
      text: "Mobile App",
      loved: "200",
      view: "23",
      image: "/Assets/protfolio/ecommerce.png",
    },
    {
      id: 3,
      title: "Ecomme - E-shop ecommerce website",
      price: "288$",
      text: "Mobile App",
      loved: "200",
      view: "23",
      image: "/Assets/protfolio/ecommerce.png",
    },
    {
      id: 1,
      title: "Foodepi - Food And Restaurant app",
      price: "288$",
      text: "Mobile App",
      loved: "200",
      view: "23",
      image: "/Assets/protfolio/foodepi.png",
    },
  ];
  return (
    <>
      <div
        className="container mx-auto items-center bg-gradient-to-r from-[#010113] via-[#090014] to-[#010113] py-10 "
        ref={element}
      >
          <motion.div className="text-6xl lg:text-8xl uppercase text-center font-monoton text-gray-300 py-5"    variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}>Recent Work</motion.div>
        <motion.div
          className="flex items-center gap-3 mb-5"
          variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <hr className="w-10 bg-gray-500 " />
          <span className="lg:text-[18px] font-medium text-gray-400">
            My Latest Design & Development
          </span>
        </motion.div>
      
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {Categories.map((category, i) => (
            <motion.div
              className=" lg:px-8 h-[500px] "
              variants={upAnimation}
              animate={controls}
              transition={{ delay: 0.1, type: "tween" }}
            >
              <div
                key={i}
                className="lg:my-6 lg:px-8 h-[500px] overflow-hidden"
              >
                <div className="border border-gray-600 relative rounded-xl h-[370px] flex justify-center items-center cursor-pointer hover:border ">
                  <img
                    className="lg:h-[340px] transition duration-300 hover:scale-105 hover:blur-sm "
                    src={category.image}
                  />
                </div>
                <div className="flex justify-between pt-2">
                  <div className="flex flex-col">
                    <p className=" text-xs lg:text-sm font-normal text-gray-300">
                      {category.text}
                    </p>
                    <p className="text-[16px] lg:text-2xl font-normal text-gray-100">
                      {category.title}
                    </p>
                  </div>
                  <div className="flex gap-1 lg:gap-3">
                    <div className="flex items-center gap-1 cursor-pointer text-xs lg:text-lg">
                      <AiOutlineHeart className="text-white" />
                      <p className="text-xs text-gray-300">{category.loved}</p>
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer text-xs lg:text-lg">
                      <AiOutlineEye className="text-white" />
                      <p className="text-xs text-gray-300">{category.view}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mx-auto container flex justify-center">
        <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-purple-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">Load More
          <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-purple -400 to-purple-700 "></span>
         </button>
        </div>
      
      </div>
    </>
  );
};

export default Service;
