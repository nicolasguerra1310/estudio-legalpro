import React from 'react'
import Slider from '../otherComponents/Slider'
import ShowTransition from '../animations/ShowTransition'

const Practicas = () => {
  return (
    <div className='backgroundPracticas py-8 flex flex-col items-center text-white font-libreBaskerville'>
      <div className="overlayPracticas"></div >
      <ShowTransition>
        <div className='relative mt-10'>
          <h1 className='text-3xl md:text-4xl font-montserrat text-center  '>Áreas de práctica</h1>
          <div className=" w-48 h-0.5 bg-white mt-2 mb-5 mx-auto"></div>
        </div>
      </ShowTransition>
      <div>
        <ShowTransition>
          <Slider />
        </ShowTransition>
      </div>

    </div>
  )
}

export default Practicas