import React from 'react'

const Footer = () => {
  return (
    <div className='container mx-auto bg-[#090115] py-20 rounded-t-[60px]'>
        {/* <p className='text-5xl font-semibold text-center max-w-xl flex justify-center items-center mx-auto text-white'>See if Designjoy is right for you. (It totally is.)</p>
        <p className='text-xl text-center max-w-xl flex justify-center items-center mx-auto mt-6 text-white'>Get a guided tour through Designjoy, and find out how you and your team can change the way you source design, forever.</p> */}
        <div className="flex justify-between gap-20">
        <div className="flex-shrink-0">
            <p className="font-bold text-2xl text-white animate__animated animate__fadeInDown animate__delay-1s"> RM <span className="text-orange-500
            ">.</span></p>
            </div>
            <div className="flex flex-col">
              <p className='font-medium text-xl cursor-pointer text-white'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
            </div>

            <div className="flex flex-col">
              <p className='font-medium text-xl cursor-pointer text-white'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
            </div>

            <div className="flex flex-col">
              <p className='font-medium text-xl cursor-pointer text-white'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
              <p className='font-medium text-lg cursor-pointer text-gray-300'>Latest Project</p>
            </div>
        </div>
    </div>
  )
}

export default Footer