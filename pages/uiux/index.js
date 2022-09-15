import React from 'react'
import Tools from '../../Components/UIUX/Tools'
import UIHero from '../../Components/UIUX/UIHero'
import Figma from '../../Components/UIUX/Figma'
import FigmaPlugins from '../../Components/UIUX/FigmaPlugins'

const index = () => {
  return (
    <div className='py-16'>
        <UIHero/>
        <Tools/>
        <Figma/>
        <FigmaPlugins/>
    </div>
  )
}

export default index