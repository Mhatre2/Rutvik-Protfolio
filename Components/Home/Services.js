import React from 'react'
import { useState } from "react";
import Image from "next/image"
const Services = () => {
    const Categories = [
        {
          id: 1,
          title: "Creative Design",
          price:"288$",
          text:"I will create a outstanding creative design including your needs and also do some research for your project and more.",
          image: "/Assets/creative.gif",
        },
        {
          id: 2,
          title: "UI/UX Design",
          price:"288$",
          text:"I will create a outstanding creative design including your needs and also do some research for your project and more.",
          image: "/Assets/uiux.gif",
        },
        {
          id: 3,
          title: "Web Design",
          price:"288$",
          text:"I will create a outstanding creative design including your needs and also do some research for your project and more.",
          image: "/Assets/webdesign.gif",
        },
        {
          id: 4,
          title: "Web Development",
          price:"288$",
          text:"I will create a outstanding creative design including your needs and also do some research for your project and more.",
          image: "/Assets/webdevelopment.gif",
        },
       
        
      ];
  return (
    <div className='container mx-auto'>
         <div className="flex items-center gap-3">
          <hr className="w-10 bg-orange-500 border "/>
          <span className="md:text-[18px] font-medium text-gray-800 ">
            Services
          </span>
        </div>
        <p className='text-4xl font-semibold'>What I do for Clients</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:mx-auto gap-4  md:gap-16 md:px-24 mt-10">
         
         
            {Categories.map((category, i) => (
              <div
                key={i}
                className=" md:flex md:px-10 py-5 shadow-card-shadow rounded-2xl w-full"
              >
            
                  <img className='w-32 h-32 object-fill' src={category.image} />
                  <div className='pl-3'>
                  <p className='text-3xl font-medium pt-5'>{category.title}</p>
                  <p className='text-xl pt-2'>Start From <span className='text-orange-400 pl-1'>{category.price}</span> </p>
                <h4 className="text-gray-400 text-lg pt-5">
                  {category.text}
                </h4>
                  </div>
              
                 
              </div>
            ))}
          
         
        
        </div>
       
    </div>
  )
}

export default Services