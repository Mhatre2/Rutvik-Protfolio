import React from "react";

const Service = () => {
  return (
    <div className="container mx-auto items-center py-10 ">
      <div className="flex items-center gap-3">
        <hr className="w-10 border-orange-500 border" />
        <span className="md:text-[18px] font-medium text-gray-800 mb-5">
          My Latest Design & Development
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 ">
        <div className="md:my-6 md:px-8 h-[500px]">
          <div className="bg-[#daddf1] relative rounded-xl h-[370px] flex justify-center items-center cursor-pointer">
            <img className="md:h-[340px] transition duration-300 hover:scale-105 hover:blur-sm" src="/Assets/protfolio/foodepi.png" alt="" />
           
          </div>
          <div className="flex justify-between pt-2">
          <div className="flex flex-col">
          <p className=" text-xs md:text-md font-normal">Mobile App</p>
            <p className="text-md md:text-2xl">Foodepi - Food And Restaurant app</p>
          </div>
          <div className="flex gap-3">
          <div className="flex items-center gap-2 cursor-pointer text-xs md:text-lg">
          <img className="w-4" src="/Assets/heart.svg" alt="" />
         <p >200</p>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer text-xs md:text-lg">
          <img className="w-5" src="/Assets/eye.svg" alt="" />
         <p>200</p>
          </div>
          </div>
         
            </div>
        </div>
        <div className="md:my-6 md:px-8 h-[500px]">
          <div className="bg-[#daddf1] relative rounded-xl h-[370px] flex justify-center items-center cursor-pointer">
            <img className="md:h-[340px] transition duration-300 hover:scale-105 hover:blur-sm" src="/Assets/protfolio/ecommerce.png" alt="" />
           
          </div>
          <div className="flex justify-between pt-2">
          <div className="flex flex-col">
          <p className=" text-xs md:text-md font-normal">Mobile App</p>
            <p className="text-md md:text-2xl">Foodepi - Food And Restaurant app</p>
          </div>
          <div className="flex gap-3">
          <div className="flex items-center gap-2 cursor-pointer text-xs md:text-lg">
          <img className="w-4" src="/Assets/heart.svg" alt="" />
         <p >200</p>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer text-xs md:text-lg">
          <img className="w-5" src="/Assets/eye.svg" alt="" />
         <p>200</p>
          </div>
          </div>
         
            </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
