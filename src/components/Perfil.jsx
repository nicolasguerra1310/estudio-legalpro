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
            Legal Pro Tucumán es un estudio jurídico de prestigio con más de 15 años de experiencia y una destacada presencia 
            en los ámbitos legales. Con un equipo de profesionales altamente calificados, ofrecemos asesoramiento y representación
            legal de excelencia, adaptándonos a las necesidades de cada cliente y asegurando soluciones efectivas y personalizadas.
            </p>
          </ShowTransition>
          <br />
          <ShowTransition>
            <p className='text-sm md:text-ml'>
              Iniciado como un Estudio especializado en derecho penal, continuamos con una importante
              actividad en las distintas especialidades del Derecho. En la actualidad, centramos
              nuestra actividad en el asesoramiento en las areas de derecho penal, civil, constitucional,
              laboral, de familia y derecho administrativo.
            </p>
          </ShowTransition>
        </div>
      </div>
    </div>
  )
}

export default Perfil