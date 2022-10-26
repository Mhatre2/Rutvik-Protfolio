import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { leftAnimation,imageAnimation, rightAnimation ,upAnimation,downAnimation} from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const BlogHero = () => {
    const [element,controls]= useScroll();
    const Blog = [{
        tag:"travel",
        title:"Web Development is the new era",
        date:"20 Sep 2022",
        img:"/Assets/developmentblog.png",
        content:"Back in 2019, Gucci brought video games to its app With a new section called Gucci Arcade inspired by creative director Alessandria Michele's „unique ability to combine the Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsa quas iure iusto adipisci unde, fugit minus atque sapiente veritatis dicta ut hic repellendus quisquam explicabo illum similique ratione cupiditate. Laudantium aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nemo!...",
    },
    {
        tag:"technology",
        title:"Simon Lizotte Take A Big Advance In The Last Tournament",
        date:"20 Dec 2022",
        img:"/Assets/developmentblog.png",
        content:"Back in 2019, Gucci brought video games to its app With a new section called Gucci Arcade inspired by creative director Alessandria Michele's „unique ability to combine the Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsa quas iure iusto adipisci unde, fugit minus atque sapiente veritatis dicta ut hic repellendus quisquam explicabo illum similique ratione cupiditate. Laudantium aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nemo!...",
    },
    {
        tag:"technology",
        title:"Simon Lizotte Take A Big Advance In The Last Tournament",
        date:"20 Dec 2022",
        img:"/Assets/developmentblog.png",
        content:"Back in 2019, Gucci brought video games to its app With a new section called Gucci Arcade inspired by creative director Alessandria Michele's „unique ability to combine the Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsa quas iure iusto adipisci unde, fugit minus atque sapiente veritatis dicta ut hic repellendus quisquam explicabo illum similique ratione cupiditate. Laudantium aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nemo!...",
    },
]
  return (
    <div className='container mx-auto py-20 ' ref={element}>
       <motion.div className=' grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10  items-center' variants={downAnimation}
               animate={controls}
               transition={{ delay: 0.2, type: "tween" }}>
        <div className="rounded-2xl overflow-hidden">
            <img src="/Assets/developmentblog.png" alt="" />
        </div>
        <div className="">
            <p className='text-xl font-medium text-cyan-500 capitalize mb-2 md:mb-4'>technology</p>
            <Link href='blog/blogdetails' className=''>
                <p className='text-xl md:text-5xl font-medium text-white capitalize mb-2 md:mb-4 hover:underline cursor-pointer'>An Extraordinary WebGL Has Been Released By Great China Scientists</p>
                </Link>
            <p className='text-sm md:text-base font-medium text-slate-300 capitalize line-clamp-3'>Back in 2019, Gucci brought video games to its app With a new
section called Gucci Arcade, inspired by creative director Alessandria
Michele's „unique ability to combine the Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsa quas iure iusto adipisci unde, fugit minus atque sapiente veritatis dicta ut hic repellendus quisquam explicabo illum similique ratione cupiditate. Laudantium aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nemo!....</p>
<div className="flex mt-5 items-center gap-4">
    <img className='w-10 md:w-14 rounded-full h-10 md:h-14 object-cover' src="/Assets/rownokmahbub.jpg" alt="" />
    <div className="flex flex-col">
        <p className='text-base md:text-xl font-medium text-gray-200 capitalize'>rownok mahbub</p>
        <p className='text-slate-400 capitalize text-xs md:text-lg'>20 sep 2022</p>
    </div>
</div>
        </div>
    </motion.div>
    <p className='text-center text-4xl md:text-6xl text-white font-bebasneo my-10'>My Resent Blog</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 my-10">
     {Blog.map((blog,i)=>{
        return(
            <div key={i}>
            <img className='overflow-hidden rounded-2xl' src={blog.img} alt="" />
            <div className="flex justify-between items-center">
            <p className='text-sm md:text-lg font-medium text-cyan-500 capitalize my-2 md:my-4'>{blog.tag}</p>
            <p className='text-sm md:text-lg font-medium text-slate-400 capitalize my-2 md:my-4'>{blog.date}</p>
            </div>
            <Link href='blog/blogdetails'>
            <p className='text-lg md:text-2xl font-medium text-slate-100 capitalize mb-1 md:mb-4 cursor-pointer hover:underline line-clamp-1'>{blog.title}</p>
            </Link>
          
<p className='text-sm md:text-base  text-slate-400 capitalize line-clamp-3'>{blog.content}</p>
        </div>
        )
     })}
        
    </div>
    </div>
 
  )
}

export default BlogHero