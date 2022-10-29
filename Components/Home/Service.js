import React from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {GiCrossedBones} from'react-icons/gi'
import {
  headerAnimation,
  imageAnimation,
  upAnimation,
} from "../../styles/Animation";
import { useScroll } from "../UseScroll";
import { AiOutlineHeart, AiOutlineEye, AiTwotoneLike, AiFillEye } from "react-icons/ai";
const Service = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

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
      title: "Medical - Appointment Mobile App UI",
      price: "288$",
      text: "Mobile App",
      loved: "200",
      view: "23",
      image: "/Assets/protfolio/medical.png",
    },
    {
      id: 3,
      title: "Ecomme - E-shop ecommerce website",
      price: "288$",
      text: "Website",
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
       
        <div className="grid grid-cols-1 lg:grid-cols-2" onClick={openModal}>
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
        <Transition appear show={isOpen} as={Fragment}>
              <div className="fixed inset-0 bg-black/30">
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-7xl transform  rounded-2xl bg-gradient-to-r from-slate-800 via-gray-600 to-slate-800 p-6 my-20 shadow-xl transition-all">
                <div className="flex gap-4 mb-5">
                  <img className="w-14 h-14 rounded-full object-cover" src="/Assets/rownokmahbub.jpg" alt="" />
                  <div className="flex flex-col items-start ">
                    <p className='text-xl font-semibold text-white capitalize'>Ecommerce website for a company</p>
                    <p className='text-xl text-gray-100 capitalize'>rownok mahbub</p>
                  </div>
                </div>
                <div className="absolute -right-4 -top-4 bg-red-200 p-3 rounded-full cursor-pointer" onClick={closeModal}>
                  <GiCrossedBones className='text-red-600 text-xl '/>
                </div>
                <img className='w-full rounded-2xl' src="/Assets/big.png" alt="" />
                <p className=' text-white text-4xl capitalize my-10 font-bebasneo'>lets Check the interactive prototype mode</p>
                <iframe className='w-full rounded-2xl' min-width="300" height="580" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F6MAWji1dzRBNJLeF4p53pE%2FFoodepi-Mobile-App-Templete%3Fpage-id%3D366%253A2089%26node-id%3D524%253A3911%26viewport%3D168%252C-136%252C0.08%26scaling%3Dscale-down%26starting-point-node-id%3D524%253A3911%26show-proto-sidebar%3D1" allowfullscreen></iframe>
                <div className="bg-gray-900 py-5 mt-5 rounded-2xl">
                <div className="bg-purple-600 hover:bg-purple-800 cursor-pointer flex justify-center items-center w-20 h-20 rounded-full mx-auto my-5">
                    <AiTwotoneLike className="text-3xl text-white text-center"/>
                </div>
                <p className='text-2xl font-semibold text-white capitalize'>Ecommerce website for a company</p>
                <div className="flex justify-center gap-10 mt-4">
                <div className="flex gap-1 items-center text-gray-300">
                  <AiTwotoneLike/>
                  <p>12k</p>
                </div>
                <div className="flex gap-1 items-center text-gray-300">
                  <AiFillEye/>
                  <p>12k</p>
                </div>
                </div>
              
                </div>
              

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
              </div>
      
      </Transition>
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
