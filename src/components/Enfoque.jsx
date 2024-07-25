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
                En LEGAL PRO TUCUMÁN, ofrecemos servicios jurídicos de excelencia, adaptados a las necesidades de cada cliente. 
                  Ubicados en Tucumán, nuestro equipo de abogados altamente calificados se dedica a brindar soluciones legales efectivas y personalizadas.
                  La comunicación clara y el compromiso con los intereses de nuestros clientes son nuestras prioridades.
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
