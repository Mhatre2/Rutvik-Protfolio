import React from "react";
import { motion } from "framer-motion";
import { downAnimation, upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";

const Figma = () => {
  const [element, controls] = useScroll();

  return (
    <>
      <div className="" ref={element}>
        <motion.div
          className="py-10 container bg-gradient-to-r from-[#021925] via-[#180111] to-[#091d29] "
          variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-5xl capitalize text-white font-bebasneo">
              Figma with me
            </p>
            <p className="text-gray-400 max-w-xl text-center mt-3">
              I made some useful UI Kits for designers of all levels that helps
              you speed up and spice up your designs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10 ">
            <div className=" rounded-2xl shadow-glass relative">
              <img
                className="rounded-xl "
                src="/Assets/uiux/travel.png"
                alt=""
              />
              <div className="absolute top-3 right-3 h-8 lg:hidden flex justify-center items-center px-4 py-2 text-white bg-gradient-to-r from-purple-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500 rounded-3xl gap-2 transition hover:scale-90">
              Free 😉
              </div>
              <div className="px-3 flex justify-between items-center py-5">
                <div className="flex ">
                  <img className="w-10 h-10 " src="/Assets/rownok.png" alt="" />
                  <div className="flex flex-col flex-wrap">
                    <p className="text-white font-medium text-lg">
                      Travel Mobile App UI Kits.
                    </p>
                    <p className="text-gray-500 font-medium text-xs">
                      Rownok Mahbub
                    </p>
                  </div>
                </div>
                <a href="#" className="lg:flex h-8 hidden justify-center items-center px-1 lg:px-4 text-white bg-gradient-to-r from-purple-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500 rounded-3xl gap-2 transition hover:scale-90">Free 😉</a>
              </div>
            </div>
            <div className=" rounded-2xl shadow-glass relative">
              <img
                className="rounded-xl "
                src="/Assets/uiux/medical.png"
                alt=""
              />
                <div className="absolute top-3 right-3 h-8 lg:hidden flex justify-center items-center px-4 py-2 text-white bg-gradient-to-r from-purple-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500 rounded-3xl gap-2 transition hover:scale-90">
              Free 😉
              </div>
              <div className="px-3 flex justify-between items-center py-5">
                <div className="flex ">
                  <img className="w-10 h-10 " src="/Assets/rownok.png" alt="" />
                  <div className="flex flex-col flex-wrap">
                    <p className="text-white font-medium text-lg">
                      Medical Appointment App UI Kits.
                    </p>
                    <p className="text-gray-500 font-medium text-xs">
                      Rownok Mahbub
                    </p>
                  </div>
                </div>
                <a href="#" className="lg:flex h-8 hidden justify-center items-center px-2 lg:px-4 text-white bg-gradient-to-r from-purple-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500 rounded-3xl gap-2 transition hover:scale-90">Free 😉</a>
              </div>
            </div>
            <div className=" rounded-2xl shadow-glass relative">
              <img
                className="rounded-xl "
                src="/Assets/uiux/foodepi.png"
                alt=""
              />
                <div className="absolute top-3 right-3 h-8 lg:hidden flex justify-center items-center px-4 py-2 text-white bg-gradient-to-r from-purple-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500 rounded-3xl gap-2 transition hover:scale-90">
              Free 😉
              </div>
              <div className="px-3 flex justify-between flex-wrap items-center py-5">
                <div className="flex ">
                  <img className="w-10 h-10 " src="/Assets/rownok.png" alt="" />
                  <div className="flex flex-col flex-wrap" >
                    <p className="text-white font-medium text-lg">
                      Foodepi Mobile App UI Kits.
                    </p>
                    <p className="text-gray-500 font-medium text-xs">
                      Rownok Mahbub
                    </p>
                  </div>
                </div>
                <a href="#" className="lg:flex h-8 hidden justify-center items-center px-2 lg:px-4 text-white bg-gradient-to-r from-purple-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500 rounded-3xl gap-2 transition hover:scale-90">Free 😉</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Figma;
