import Link from 'next/link'
import React from 'react'

const BlogHero = () => {
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
    <div className='container mx-auto py-20'>
       <div className=' grid grid-cols-1 md:grid-cols-2 gap-10  items-center'>
        <div className="rounded-2xl overflow-hidden">
            <img src="/Assets/developmentblog.png" alt="" />
        </div>
        <div className="">
            <p className='text-xl font-medium text-cyan-500 capitalize mb-4'>technology</p>
            <p className='text-5xl font-medium text-white capitalize mb-4 hover:underline cursor-pointer'>An Extraordinary WebGL Has Been Released By Great China Scientists</p>
            <p className='text-base font-medium text-slate-300 capitalize line-clamp-3'>Back in 2019, Gucci brought video games to its app With a new
section called Gucci Arcade, inspired by creative director Alessandria
Michele's „unique ability to combine the Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsa quas iure iusto adipisci unde, fugit minus atque sapiente veritatis dicta ut hic repellendus quisquam explicabo illum similique ratione cupiditate. Laudantium aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nemo!....</p>
<div className="flex mt-5 items-center gap-4">
    <img className='w-14 rounded-full h-14 object-cover' src="/Assets/rownokmahbub.jpg" alt="" />
    <div className="flex flex-col">
        <p className='text-xl font-medium text-gray-200 capitalize'>rownok mahbub</p>
        <p className='text-slate-400 capitalize'>20 sep 2022</p>
    </div>
</div>
        </div>
    </div>
    <p className='text-center text-6xl text-white font-bebasneo my-10'>My Resent Blog</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-16 my-10">
     {Blog.map((blog,i)=>{
        return(
            <div key={i}>
            <img className='overflow-hidden rounded-2xl' src={blog.img} alt="" />
            <div className="flex justify-between items-center">
            <p className='text-lg font-medium text-cyan-500 capitalize my-4'>{blog.tag}</p>
            <p className='text-lg font-medium text-slate-400 capitalize my-4'>{blog.date}</p>
            </div>
            <Link href='blog/blogdetails'>
            <p className='text-xl font-medium text-slate-100 capitalize mb-4 cursor-pointer hover:underline line-clamp-1'>{blog.title}</p>
            </Link>
          
<p className='text-base  text-slate-400 capitalize line-clamp-3'>{blog.content}</p>
        </div>
        )
     })}
        
    </div>
    </div>
 
  )
}

export default BlogHero