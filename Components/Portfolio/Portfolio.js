import React from "react";
import {MdAttachEmail} from 'react-icons/md'
import {CgWebsite} from 'react-icons/cg'
import {ImPhone} from 'react-icons/im'
import {MdOutlineShareLocation} from 'react-icons/md'
import {FaFacebook} from 'react-icons/fa'
import {GrDribbble} from 'react-icons/gr'
import {ImBehance} from 'react-icons/im'
import {ImLinkedin2} from 'react-icons/im'
import Experience from "./Experience";
import Skill from "./Skill";
import LetestProject from "./LetestProject";
import Tools from "./Tools";
const Portfolio = () => {
  return (
    <div className="container mx-auto py-24 animate__animated animate__backInUp animate__delay-.5s">
      <div className="grid grid-cols-1 md:grid-cols-4 rounded-2xl overflow-hidden shadow-xl border-2 border-purple-900">
        <div className="bg-gradient-to-r from-[#010113] to-[#0c0113] px-2 py-4 md:px-4 shadow-2xl border-r-2 border-slate-800">
          <img
            className="w-32 h-32 object-cover rounded-full"
            src="/Assets/rownokmahbub.jpg"
            alt=""
          />
          <p className="capitalize text-3xl font-semibold text-white">
            rownok mahbub
          </p>
          <p className="capitalize text-xl font-medium text-gray-300 my-2">
            UI Designer & Front-end Developer
          </p>
          <p className="capitalize  font-medium text-gray-200">
            " People ignore design that ignore people. "
          </p>
          <hr className=" border-slate-400 border-dashed my-3" />
          <div className="flex items-center gap-2 my-4">
            <div className="bg-purple-900 px-2 rounded-full py-2">
            <MdAttachEmail className="text-purple-200 "/>
            </div>
         
          
            <a target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrlmvZcjJrhjQTlQfbjSZqXgTkfzJqJDkWBxwXlLQBHNRxDFCDCFJbKfDHRJPlKfLrzss" className="flex flex-col -space-y-1">
                <p className="capitalize text-gray-400">email</p>
                <p className="text-gray-300">rownok2001@gmail.com</p>
            </a>
          </div>
          <div className="flex items-center gap-2 my-4">
            <div className="bg-purple-800 px-2 rounded-full py-2">
            <CgWebsite className="text-purple-200 "/>
            </div>
         
          
            <a href="https://rm-protfolio.vercel.app/" target='_blank' className="flex flex-col -space-y-1">
                <p className="capitalize text-gray-400">website</p>
                <p  className="text-gray-300">https://rm-protfolio.vercel.app/</p>
            </a>
          </div>
          <div className="flex items-center gap-2 my-4">
            <div className="bg-purple-700 px-2 rounded-full py-2">
            <ImPhone className="text-purple-200 "/>
            </div>
         
          
            <a href="https://wa.me/+8801880741710" target='_blank' className="flex flex-col -space-y-1">
                <p className="capitalize text-gray-400">Phone</p>
                <p  className="text-gray-300">+8801880741710</p>
            </a>
          </div>
          <div className="flex items-center gap-2 my-4">
            <div className="bg-purple-600 px-2 rounded-full py-2">
            <MdOutlineShareLocation className="text-purple-200 text-md"/>
            </div>
         
          
            <a href="https://goo.gl/maps/4F5bFDxtcHomq3UV7" target='_blank' className="flex flex-col -space-y-1">
                <p className="capitalize text-gray-400">location</p>
                <p  className="text-gray-300">Dhaka,Bangladesh</p>
            </a>
          </div>
          <hr className=" border-slate-400 border-dashed my-3" />
          <p className="text-gray-400 font-medium">Social</p>
          <div className="flex items-center gap-2 my-4">
            <div className="bg-cyan-600 px-2 rounded-full py-2">
            <FaFacebook className="text-purple-200 "/>
            </div>
         
          
            <a target='_blank' href="https://www.facebook.com/rownokmahbub" className="flex flex-col -space-y-1">
                <p className="capitalize text-gray-400">Facebook</p>
                <p className="text-gray-300">www.facebook.com/rownokmahbub</p>
            </a>
          </div>
          <div className="flex items-center gap-2 my-4">
            <div className="bg-cyan-700 px-2 rounded-full py-2">
            <GrDribbble className="text-purple-200 "/>
            </div>
         
          
            <a href="https://dribbble.com/rownok_mahbub" target='_blank' className="flex flex-col -space-y-1">
                <p className="capitalize text-gray-400">Dribbble</p>
                <p  className="text-gray-300">https://dribbble.com/rownok_mahbub</p>
            </a>
          </div>
          <div className="flex items-center gap-2 my-4">
            <div className="bg-cyan-800 px-2 rounded-full py-2">
            <ImBehance className="text-purple-200 "/>
            </div>
         
          
            <a href="https://www.behance.net/rownokmahbub1" target='_blank' className="flex flex-col -space-y-1">
                <p className="capitalize text-gray-400">Behance</p>
                <p  className="text-gray-300">www.behance.net/rownokmahbub1</p>
            </a>
          </div>
          <div className="flex items-center gap-2 my-4">
            <div className="bg-cyan-900 px-2 rounded-full py-2">
            <ImLinkedin2 className="text-purple-200 text-md"/>
            </div>
         
          
            <a href="https://www.linkedin.com/in/mehbubur-rahman-rownok/" target='_blank' className="flex flex-col -space-y-1">
                <p className="capitalize text-gray-400">LinkedIn</p>
                <p  className="text-gray-300">in/mehbubur-rahman-rownok</p>
            </a>
          </div>

          <hr className=" border-slate-400 border-dashed my-3" />
          <p className="text-gray-400 font-medium">Language</p>
          <div className="flex items-center gap-2 my-4">
            <div className="bg-purple-900 px-2 rounded-full py-2">
            <FaFacebook className="text-purple-200 "/>
            </div>
         
          
            <a target='_blank' href="https://www.facebook.com/rownokmahbub" className="flex flex-col -space-y-1">
                <p className="capitalize text-gray-400">Facebook</p>
                <p className="text-gray-300">www.facebook.com/rownokmahbub</p>
            </a>
          </div>
          <div className="flex items-center gap-2 my-4">
            <div className="bg-purple-800 px-2 rounded-full py-2">
            <GrDribbble className="text-purple-200 "/>
            </div>
         
          
            <a href="https://dribbble.com/rownok_mahbub" target='_blank' className="flex flex-col -space-y-1">
                <p className="capitalize text-gray-400">Dribbble</p>
                <p  className="text-gray-300">https://dribbble.com/rownok_mahbub</p>
            </a>
          </div>
          <div className="flex items-center gap-2 my-4">
            <div className="bg-purple-700 px-2 rounded-full py-2">
            <ImBehance className="text-purple-200 "/>
            </div>
         
          
            <a href="https://www.behance.net/rownokmahbub1" target='_blank' className="flex flex-col -space-y-1">
                <p className="capitalize text-gray-400">Behance</p>
                <p  className="text-gray-300">www.behance.net/rownokmahbub1</p>
            </a>
          </div>
          <div className="flex items-center gap-2 my-4">
            <div className="bg-purple-600 px-2 rounded-full py-2">
            <ImLinkedin2 className="text-purple-200 text-md"/>
            </div>
         
          
            <a href="https://www.linkedin.com/in/mehbubur-rahman-rownok/" target='_blank' className="flex flex-col -space-y-1">
                <p className="capitalize text-gray-400">LinkedIn</p>
                <p  className="text-gray-300">in/mehbubur-rahman-rownok</p>
            </a>
          </div>
        </div>
        <div className="md:col-span-3 bg-gradient-to-r from-[#0c0113] to-[#010116] p-6">
          <Experience/>
          <Skill/>
          <LetestProject/>
          <Tools/>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
