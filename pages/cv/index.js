import React from 'react'
import DarkCv from '../../Components/Cv/DarkCv'
import LightCv from '../../Components/Cv/LightCv'

const index = () => {
  return (
    <div className='container mx-auto items-center py-24 grid grid-cols-1 md:grid-cols-2 gap-20'>
        <LightCv/>
        <DarkCv/>
    </div>
  )
}

export default index