import React from 'react'

const ProtfolioService = () => {
  return (
    <div className='container mx-auto items-center my-10 '>
        <div className="grid grid-cols-3 gap-10">
            <div className=" items-center text-center px-6 py-6 rounded-2xl">
            <img className='w-24 mx-auto' src="/Assets/design.gif" alt="" />
                <p className='text-2xl font-semibold'>Design With Emotion</p>
                <p className='text-sm text-gray-600 pt-4'>Designing a page or any website it's need's to be user friendly and more user interactive so that user will get attached and stay for longtime.</p>
            </div>
            <div className=" items-center text-center px-6 py-6 rounded-2xl">
            <img className='w-24 mx-auto' src="/Assets/developer.gif" alt="" />
                <p className='text-2xl font-semibold'>Design With Emotion</p>
                <p className='text-sm text-gray-600 pt-4'>Designing a page or any website it's need's to be user friendly and more user interactive so that user will get attached and stay for longtime.</p>
            </div>
            <div className=" items-center text-center px-6 py-6 rounded-2xl">
            <img className='w-24 mx-auto' src="/Assets/research.gif" alt="" />
                <p className='text-2xl font-semibold'>Design With Emotion</p>
                <p className='text-sm text-gray-600 pt-4'>Designing a page or any website it's need's to be user friendly and more user interactive so that user will get attached and stay for longtime.</p>
            </div>
        </div>
      
    </div>
  )
}

export default ProtfolioService