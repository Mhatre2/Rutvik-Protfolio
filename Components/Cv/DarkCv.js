import React from 'react'

const DarkCv = () => {
  return (
    <div className='relative group'>
        <img className='w-full rounded-xl md:group-hover:blur-md transition-all duration-500' src="/Assets/rownokmahbub.jpg" alt="" />
        <a
                  href="#"
                  className=" absolute top-1/2 w-full hidden md:group-hover:flex"
                >
                    <p className='font-medium text-[18px] text-gray-200 py-2 px-4 w-36 mx-auto capitalize bg-gradient-to-r from-purple-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500 rounded-[20px] transition duration-300 hover:scale-105 flex justify-center'> Download CV</p>
                   
                </a>
        <p className='text-white flex justify-center mt-3 text-2xl capitalize'>light mode</p>
        <p className='font-medium text-[18px] text-gray-200 py-2 px-4 w-36 mx-auto capitalize bg-gradient-to-r from-purple-300 to-purple-500 hover:from-pink-500 hover:to-yellow-500 rounded-[20px] transition duration-300 hover:scale-105 flex justify-center mt-5 md:hidden'> Download CV</p>
    </div>
  )
}

export default DarkCv