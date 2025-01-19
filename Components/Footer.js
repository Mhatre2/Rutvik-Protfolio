import React from 'react'
import { motion } from "framer-motion";
import { upAnimation, downAnimation } from '../styles/Animation';
import { useScroll } from './UseScroll';
const Footer = () => {
  const [element, controls] = useScroll();
  return (
   <div></div>
  )
}

export default Footer