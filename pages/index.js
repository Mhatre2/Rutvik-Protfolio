import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/Home/Hero'
import ProtfolioService from '../Components/Home/ProtfolioService'
import Service from '../Components/Home/Service'
import Nav from '../Components/Nav'
import ScrollToTop from '../Components/ScrolltoTop'


export default function Home() {
  return (
 <>
 <Nav/>
  <Hero/>
  <Service/>
  <ProtfolioService/>
  {/* <ScrollToTop/> */}
 </>
  )
}
