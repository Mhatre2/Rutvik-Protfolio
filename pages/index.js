import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer'
import Hero from '../Components/Home/Hero'
import NewsLetter from '../Components/Home/NewsLetter'
import ProtfolioService from '../Components/Home/ProtfolioService'
import Service from '../Components/Home/Service'
import Services from '../Components/Home/Services'
import Nav from '../Components/Nav'
import ScrollToTop from '../Components/ScrolltoTop'


export default function Home() {
  return (
 <>
 <Nav/>
  <Hero/>
  <Service />
  <ProtfolioService/>
  {/* <Services/>
  <NewsLetter/> */}
  {/* <Footer/> */}
  {/* <ScrollToTop/> */}
 </>
  )
}
