import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import 'animate.css';
import Link from "next/link";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    <nav className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 w-full fixed top-0 z-50 bg-gradient-to-r from-[#010113] via-[#130227] to-[#010113]/80  drop-shadow-lg border-b border-purple-400">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
          <div className="flex-shrink-0 cursor-pointer">
            <p className="font-bold text-2xl animate__animated animate__fadeInDown animate__delay-.5s text-white"> RM <span className="text-purple-500
            ">.</span></p>
            </div>
          </Link>
       
          <div className="flex items-center">
          
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10 animate__animated animate__fadeInDown animate__delay-.5s">
                <Link
                  href="uiux"
                 
                >
                  <p  className="font-medium text-[18px] text-white cursor-pointer">UI</p>
                
                </Link>

                <Link
                  href="uiux"
                 
                >
                  <p  className="font-medium text-[18px] text-white cursor-pointer">UX</p>
                
                </Link>

                <Link
                  href="blog"
                 
                >
                  <p  className="font-medium text-[18px] text-white cursor-pointer">Blog</p>
                
                </Link>

                <Link
                  href="portfolio"
                 
                >
                  <p  className="font-medium text-[18px] text-white cursor-pointer">Portfolio</p>
                
                </Link>

                <Link
                  href="projects"
                 
                >
                  <p  className="font-medium text-[18px] text-white cursor-pointer">Projects</p>
                
                </Link>
                <a
                  href="#"
                  className="font-medium text-[18px] text-gray-200 py-2 px-4  capitalize bg-gradient-to-r from-purple-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500 rounded-[20px] transition duration-300 hover:scale-105 "
                >
                    Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex flex-col md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="dark:bg-gray-900 text-white inline-flex items-center justify-center p-2 rounded-md dark:text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden " id="mobile-menu">
            <div ref={ref} className="px-2 pt-20 pb-5 space-y-3 sm:px-3 flex flex-col items-center bg-gradient-to-r from-[#010113] via-[#130227] to-[#010113]">
            <Link
                  href="uiux"
                 
                >
                  <p  className="font-medium text-[18px] text-white cursor-pointer">UI</p>
                
                </Link>

                <Link
                  href="uiux"
                 
                >
                  <p  className="font-medium text-[18px] text-white cursor-pointer">UX</p>
                
                </Link>

                <Link
                  href="blog"
                 
                >
                  <p  className="font-medium text-[18px] text-white cursor-pointer">Blog</p>
                
                </Link>

                <Link
                  href="portfolio"
                 
                >
                  <p  className="font-medium text-[18px] text-white cursor-pointer">Portfolio</p>
                
                </Link>

                <Link
                  href="projects"
                 
                >
                  <p  className="font-medium text-[18px] text-white cursor-pointer">Projects</p>
                
                </Link>
              <a
                  href="#"
                  className="font-medium text-[18px] text-gray-200 py-2 px-4  capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500 rounded-[20px] transition duration-300 hover:scale-105 "
                >
                    Download CV
                </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>


  </div>
  )
}

export default Nav