import React, { Children } from 'react'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <div className='bg-gradient-to-r from-[#020222] via-[#110114] to-[#050515]'>
    <Nav/>
<main> {children}</main>
    <Footer/>
    </div>
  )
}

export default Layout