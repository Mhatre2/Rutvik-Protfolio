import React from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { GiCrossedBones } from "react-icons/gi";
import { upAnimation } from "../../styles/Animation";
import { useScroll } from "../UseScroll";

const Service = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [selectedCategory, setSelectedCategory] = useState(null);

  function closeModal() {
    setIsOpen(false);
    setSelectedCategory(null); // Reset the selected category when modal closes
  }

  function openModal(category) {
    setSelectedCategory(category); // Set the clicked category
    setIsOpen(true);
  }

  const [element, controls] = useScroll();
  const Categories = [
    {
      id: 1,
      title: "ChukleCraft - An E-commerce Shopping app",
      text: "Mobile App",
      image: "/Assets/protfolio/coverPage.jpg",
      caseStudy:
        "https://embed.figma.com/proto/M3K5ErNIW8CYMDiuKcFBoy/Shopping-App%2F-ChuckleCraft?page-id=170%3A1034&node-id=185-184&viewport=421%2C368%2C0.04&scaling=min-zoom&content-scaling=fixed&embed-host=share",
      prototype:
        "https://embed.figma.com/proto/M3K5ErNIW8CYMDiuKcFBoy/Shopping-App%2F-ChuckleCraft?page-id=0%3A1&node-id=19-34&p=f&viewport=58%2C33%2C0.13&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=14%3A26&embed-host=share",
    },
    {
      id: 2,
      title: "BlissBite Donuts - An Online Food Ordering App",
      text: "Mobile App",
      image: "/Assets/protfolio/COVER.jpg",
      caseStudy:
        "https://embed.figma.com/proto/ehGYlyqb1lAzX3I209Df1z/Food-Donut-App?page-id=216%3A973&node-id=223-1975&viewport=401%2C52%2C0.04&scaling=min-zoom&content-scaling=fixed&embed-host=share",
      prototype:
        "https://embed.figma.com/proto/ehGYlyqb1lAzX3I209Df1z/Food-Donut-App?page-id=0%3A1&node-id=75-247&p=f&viewport=156%2C-35%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=73%3A241&show-proto-sidebar=1&embed-host=share",
    },
    {
      id: 3,
      title: "Doctor - Application designed for Doctors",
      text: "Website",
      image: "/Assets/protfolio/desktop.jpg",
      caseStudy:
        "https://embed.figma.com/proto/OcMhLUD7DRSxeADQlH9RZg/CASESTUDY?page-id=0%3A1&node-id=1-436&viewport=489%2C411%2C0.03&scaling=min-zoom&content-scaling=fixed&embed-host=share",
      prototype:
        "https://embed.figma.com/proto/y1MlG3fGIQiWwVVvIDdiOe/Doc-APP?page-id=174%3A3018&node-id=174-3244&p=f&viewport=489%2C411%2C0.08&scaling=min-zoom&content-scaling=fixed&embed-host=share",
    },
    {
      id: 4,
      title: "BMW - Landing Page",
      text: "Website",
      image: "/Assets/BMW.jpg",
      prototype:
        "https://embed.figma.com/proto/SoLXwBl5LoFCH3Twa5vfHk/BMW?page-id=0%3A1&node-id=9-2&p=f&viewport=68%2C28%2C0.14&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A2&embed-host=share",
    },
  ];

  return (
    <>
      <div
        className="container mx-auto items-center bg-gradient-to-r from-[#010113] via-[#090014] to-[#010113] py-10"
        ref={element}
      >
        <motion.div
          className="text-6xl lg:text-8xl uppercase text-center font-monoton text-gray-300 py-5"
          variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          Recent Work
        </motion.div>
        <motion.div
          className="flex items-center gap-3 mb-5"
          variants={upAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <hr className="w-10 bg-gray-500" />
          <span className="lg:text-[18px] font-medium text-gray-400">
            My Latest Design & Development
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {Categories.map((category) => (
            <motion.div
              key={category.id}
              className="h-[500px]"
              variants={upAnimation}
              animate={controls}
              transition={{ delay: 0.1, type: "tween" }}
              onClick={() => openModal(category)}
            >
              <div className="h-[500px] overflow-hidden">
                <div className="border border-gray-600 relative rounded-xl h-[370px] flex justify-center items-center cursor-pointer hover:border">
                  <img
                    className="h-[340px] transition duration-300 hover:scale-105 hover:blur-sm"
                    src={category.image}
                    alt={category.title}
                  />
                </div>
                <div className="flex justify-between pt-2">
                  <div className="flex flex-col">
                    <p className="text-xs lg:text-sm font-normal text-gray-300">
                      {category.text}
                    </p>
                    <p className="text-[16px] lg:text-2xl font-normal text-gray-100">
                      {category.title}
                    </p>
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
                    <Dialog.Panel className="relative w-full max-w-7xl transform rounded-2xl bg-gradient-to-r from-slate-800 via-gray-600 to-slate-800 p-6 my-20 shadow-xl transition-all">
                      <div
                        className="absolute -right-4 -top-4 bg-red-200 p-3 rounded-full cursor-pointer"
                        onClick={closeModal}
                      >
                        <GiCrossedBones className="text-red-600 text-lg md:text-xl" />
                      </div>
                      {selectedCategory && (
                        <>
                          <img
                            className="w-full rounded-2xl"
                            src={selectedCategory.image}
                          />
                          <p className="text-white text-2xl md:text-4xl capitalize my-10 font-bebasneo">
                            Prototype
                          </p>
                          <iframe
                            className="w-full rounded-2xl"
                            min-width="300"
                            height="780"
                            src={selectedCategory.prototype}
                            allowFullScreen
                          ></iframe>
                          <p className="text-white text-2xl md:text-4xl capitalize my-10 font-bebasneo">
                            Case Study
                          </p>
                          {selectedCategory.caseStudy && (
                            <iframe
                              className="w-full rounded-2xl mb-10"
                              min-width="300"
                              height="800"
                              src={selectedCategory.caseStudy}
                              allowFullScreen
                            ></iframe>
                          )}
                        </>
                      )}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Service;
