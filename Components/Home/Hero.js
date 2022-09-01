import React from "react";
const Hero = () => {
  return (
    <>
    <div className="relative h-screen bg-gradient-to-t from-purple-50 to-violet-50 pt-10 sm:pt-0">
      {/* <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-full w-52 blur-md h-36 absolute right-0 -z-10 top-20"></div>
      <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-full w-52 blur-md h-44  absolute left-0 -z-10 bottom-0"></div> */}
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 ">
      <div className="">
        <div className="flex items-center gap-3">
          <hr className="w-10 bg-gray-800 " />
          <span className="md:text-[18px] font-medium text-gray-800">
            UI/UX Designer  Developer
          </span>
        </div>
        <p className="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0">
          I'm Rownok Mahbub <br />
          Designer And Developer 
        </p>
        <p className="mt-5 md:text-md">
          I'm creative designer based in Bangladesh, and I'm very passionate and
          dedicated to my <br /> work.IYour Satisfaction is my success
        </p>
        <div className="flex gap-4 mt-10">
       
        <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-green-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass">Get In Touch
          <span className="animate-ping absolute right-0 top-0 w-2 h-2  rounded-full bg-gradient-to-r from-pink-400 to-red-500 "></span>
         </button>
         <img className="cursor-pointer" src="/Assets/facebook.svg" alt="" />
         <img className="cursor-pointer" src="/Assets/linkedin.svg" alt="" />
         <img className="cursor-pointer" src="/Assets/behance.svg" alt="" />
        </div>
    
      </div>
      <div className="relative sm:mt-0 mt-10 ">
        <img className="w-14 animate-bounce duration-1000 absolute top-0 -left-5" src="/Assets/figma.png" alt="" />
        <img className="w-32 animate-bounce absolute bottom-0 -left-10" src="/Assets/nextjs.png" alt="" />
        <img className="w-[600px]" src="/Assets/herorownok.png" alt="" />
      </div>
    </div>
    </div>
    </>
 
  );
};

export default Hero;
