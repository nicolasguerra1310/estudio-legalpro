import React from 'react'
import logo from '../media/logoBlanco.png'
import ShowTransition from '../animations/ShowTransition'


const Perfil = () => {
  return (
    <div className='py-8 flex flex-col items-center text-white bg-[#06091a] font-libreBaskerville -mb-5 lg:-mb-24 '>
      <ShowTransition>
        <div className='relative mt-10'>
          <h1 className='text-3xl md:text-4xl font-montserrat text-center '>Perfil</h1>
          <div className=" w-14 h-0.5 bg-white mt-1  mx-auto"></div>
        </div>
      </ShowTransition>
      <div className='w-full max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8 items-center'>
        <ShowTransition>
          <img className='w-full md:w-[400px] mx-auto lg:mb-16 -mb-5' src={logo} alt='/' />
        </ShowTransition>
        <div className='flex flex-col justify-center px-4 lg:px-0 text-center lg:text-left'>
          <ShowTransition>
            <p className='text-sm md:text-ml'>
              Legal Pro Tucumán, constituido en 1972 por el Dr. Nicolas Guerra, es un Estudio Jurídico
              con alto prestigio en la Provincia de Tucumán y en el Noroeste Argentino. El Estudio
              cuenta con una importante presencia en la vida provincial tanto en ámbitos jurídicos,
              empresariales, políticos y sociales.
            </p>
          </ShowTransition>
          <br />
          <ShowTransition>
            <p className='text-sm md:text-ml'>
              Iniciado como un Estudio especializado en derecho de Seguros, continuamos con una importante
              actividad en las distintas especialidades del Derecho Empresario. En la actualidad, centramos
              nuestra actividad en el asesoramiento permanente de empresas de la más diversa índole, tales
              como agropecuarias, agro-industrias, comerciales, bancos, generadoras de energía, transportistas,
              inmobiliarias, etc.
            </p>
          </ShowTransition>
        </div>
      </div>
    </div>
  )
}

export default Perfil