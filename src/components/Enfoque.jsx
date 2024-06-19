import React from 'react';
import ShowTransition from '../animations/ShowTransition';
import TransitionUp from '../animations/TransitionUp';

const Enfoque = () => {
  return (
    <ShowTransition>
      <div className='py-8 flex flex-col items-center text-white font-libreBaskerville mb-10'>
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full">
            <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <div className="py-8 px-6 md:px-10">
                <TransitionUp>
                  <h1 className="text-2xl md:text-3xl font-montserrat text-white text-center">Nuestro Enfoque</h1>
                  <div className=" w-44 h-0.5 bg-white mt-2 mb-5 mx-auto"></div>
                </TransitionUp>
                <p className="text-sm md:text-ml text-white mt-4 leading-relaxed text-center">
                  Es un estudio jurídico con alto prestigio en la provincia de Tucumán y en el Noroeste Argentino.
                  Cuenta con una importante presencia en la vida de los tucumanos, tanto en ámbitos jurídicos,
                  empresariales, políticos y sociales.

                  Nacido como un estudio especializado en Derecho de Seguros, Courel & Asociados se desarrolló
                  como, con una actividad importante, en las distintas especialidades del Derecho Empresario de Tucumán.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShowTransition>
  );
};

export default Enfoque;
