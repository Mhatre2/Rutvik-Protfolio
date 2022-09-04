import { useState } from 'react'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'
const NewsLetter = () => {

  return (
  <>
    <div className="container mx-auto my-10 flex justify-between items-center px-40">
      <div className='flex flex-col'>
      <p className='text-5xl font-medium'>Get In touch</p>
      <p className='text-lg font-normal pb-5'>Just mail me if you have any Quires </p>
    
      </div>
      
      <div className='flex flex-col gap-3'>
       
        <div className='text-xl font-medium rounded-2xl bg-purple-100 px-4 py-3 flex items-center gap-3 hover:scale-95' >
        
        <MdOutlineMarkEmailUnread/>
        <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrlmvZcjJrhjQTlQfbjSZqXgTkfzJqJDkWBxwXlLQBHNRxDFCDCFJbKfDHRJPlKfLrzss'> design.rownok@gmail.com</a>
       
        </div>
        <div className='text-xl font-medium rounded-2xl bg-purple-100 px-4 py-3 flex items-center gap-3 hover:scale-95' >
        
        <AiOutlineWhatsApp/>
        <a href='https://wa.me/+8801880741710'> +8801880741710</a>
       
        </div>
       
   
      </div>
     
    </div>
  </>
  )
}

export default NewsLetter