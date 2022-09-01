import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/Home/Hero'
import Service from '../Components/Home/Service'
import Nav from '../Components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
 <>
 <Nav/>
  <Hero/>
  <Service/>
 </>
  )
}
