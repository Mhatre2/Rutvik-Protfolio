import React from 'react'
import { MdOutlineLocationCity } from 'react-icons/md'
import {SiAltiumdesigner} from 'react-icons/si'
const Skill = () => {
    
  return (
    <>
    <p className='text-white text-xl font-semibold'>Skills</p>
     <div className='flex items-center gap-5 my-5'>
       <div className="flex flex-col items-center border border-purple-600 p-6 rounded-lg md:mr-10">
            <div className="bg-purple-600 px-2 py-2 rounded-full">
                <SiAltiumdesigner className='text-white'/>
            </div>
            <p className='capitalize text-white '>Design</p>
       </div>
       <div className="flex flex-col gap-4 items-center p-4">
        <div className="flex flex-wrap gap-4">
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>website design</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>Mobile app design</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>UI/UX design</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>wireframing</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>prototype</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>Design system</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>figma</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>color system</p>
       
        </div>
      
           
        
       </div>
      
    </div>

    <div className='flex items-center gap-5 my-5'>
       <div className="flex flex-col items-center border border-purple-600 p-6 rounded-lg ">
            <div className="bg-purple-600 px-2 py-2 rounded-full">
                <SiAltiumdesigner className='text-white'/>
            </div>
            <p className='capitalize text-white '>Development</p>
       </div>
       <div className="flex flex-col gap-4 items-center p-4">
        <div className="flex flex-wrap gap-4">
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>website design</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>Mobile app design</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>UI/UX design</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>wireframing</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>prototype</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>Design system</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>figma</p>
        <p className='text-white bg-gradient-to-r from-slate-800 shadow-lg to-gray-900 capitalize  p-2.5 rounded-lg'>color system</p>
       
        </div>
      
           
        
       </div>
      
    </div>
    </>
   
  )
}

export default Skill