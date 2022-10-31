import React from 'react'
import { MdOutlineLocationCity } from 'react-icons/md'

const Experience = () => {
    const exp=[
        {
            img:"/Assets/dutypedia.png",
            role:'Designer & Developer',
            company:'Dutypedia',
            date:'23 feb - 16 sep 2022',
            location:'tokyo japan'
        },
        {
            img:"/Assets/dutypedia.png",
            role:'Designer & Developer',
            company:'Dutypedia',
            date:'23 feb - 16 sep 2022',
            location:'tokyo japan'
        }
    ]
  return (
    <div>
        <p className='text-white text-xl font-semibold'>Experience</p>
        {exp.map((ex,i)=>{
            return(
                <div key={i} className="flex flex-wrap md:justify-between bg-gradient-to-r from-slate-900 shadow-lg to-gray-900 p-4 rounded-lg my-5">
                <div key={i} className="flex flex-col md:flex-row items-start md:justify-between gap-5 md:items-center">
                    <div className="flex gap-2">
                    <img className='w-16 h-16 rounded-xl object-cover flex md:hidden' src={ex.img} alt="" />
                    <div className="flex flex-col">
                    <p className='text-gray-300 text-lg capitalize flex md:hidden'>{ex.role}</p>
                    <p className='text-gray-100 text-2xl capitalize  font-medium flex md:hidden'>{ex.company}</p>
                    </div>
                   
                    </div>
                <img className='w-16 h-16 rounded-xl object-cover hidden md:flex' src={ex.img} alt="" />
                <div className='space-y-2'>
                <p className='text-gray-300 text-lg capitalize hidden md:flex'>{ex.role}</p>
                    <p className='text-gray-100 text-2xl capitalize  font-medium hidden md:flex'>{ex.company}</p>
                </div>
                </div>

                <div className=" justify-around  md:hidden">
                <p className='text-gray-100 capitalize'>{ex.date}</p>
                <div className="flex">
                <MdOutlineLocationCity className='text-white text-lg'/>
                <p className='text-gray-300  capitalize  font-medium'>
                            {ex.location}
                        </p>
                </div>
               
                </div>
    
                <div className='space-y-2 md:flex flex-col items-end hidden'>
                    <p className='text-gray-100 text-lg capitalize'>{ex.date}</p>
                    <div className='flex gap-2 items-center'>
                        <MdOutlineLocationCity className='text-white text-lg'/>
                        <p className='text-gray-300 text-base capitalize  font-medium'>
                            {ex.location}
                        </p>
                    </div>
                </div>
                
            </div>
            )
        })}
      
    </div>
  )
}

export default Experience