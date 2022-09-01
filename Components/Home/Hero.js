import React from "react";
const Hero = () => {
  return (
    <div className="container mx-auto flex justify-between items-center mt-20 flex-wrap">
      <div className="">
        <div className="flex items-center gap-3">
          <hr className="w-10 bg-gray-800 " />
          <span className="text-[18px] font-medium text-gray-800">
            UI/UX Designer  Developer
          </span>
        </div>
        <p className="text-[55px] font-bold leading-tight">
          Im Rownok Mahbub <br />
          Designer And Developer
        </p>
        <p className="mt-5 text-md">
          Im creative designer based in Bangladesh, and Im very passionate and
          dedicated to my <br /> work.IYour Satisfaction is my success
        </p>
        <div className="flex gap-4 mt-10 ">
       
        <button className="font-medium text-[18px] flex items-center py-2 px-4 rounded-xl capitalize bg-gradient-to-r from-green-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white">Get In Touch
          <img src="/Assets/rightarrow.svg" alt="" />
          <span className="animate-ping absolute right-0 top-0 w-2 h-2  rounded-full bg-gradient-to-r from-pink-400 to-red-500 "></span>
         </button>
         <img className="cursor-pointer" src="/Assets/facebook.svg" alt="" />
         <img className="cursor-pointer" src="/Assets/linkedin.svg" alt="" />
         <img className="cursor-pointer" src="/Assets/behance.svg" alt="" />
        </div>
    
      </div>
      <div className="relative mt-10 sm:mt-0">
        <img className="w-14 animate-bounce transition duration-3000 absolute top-0 -left-5" src="/Assets/figma.png" alt="" />
        <img className="w-32 animate-bounce absolute bottom-0 -left-10" src="/Assets/nextjs.png" alt="" />
        <img className="w-96 " src="/Assets/rownok.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
