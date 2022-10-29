import React from 'react'
import DarkCv from '../../Components/Cv/DarkCv'

const index = () => {
  return (
    <div className='container mx-auto items-center py-24 grid grid-cols-1 md:grid-cols-2 gap-20'>
        <DarkCv/>
        <DarkCv/>
    </div>
  )
}

export default index