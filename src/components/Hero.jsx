import React, { useEffect, useState } from 'react';
import ShowAnimation from '../animations/ShowAnimation';

const Hero = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  // Función para manejar el scroll y ajustar la opacidad del título
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / (window.innerHeight * 0.4); 
    setScrollOpacity(opacity >= 0 ? opacity : 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='backgroundHero min-h-screen mx-auto text-center flex flex-col justify-center relative font-libreBaskerville'>
      <div className="overlayHero"></div>
      <div className="container px-4 md:px-6 flex flex-col items-center text-center relative z-10">
        <div className="space-y-4">
          <ShowAnimation>
            <h1 className="hero-title text-3xl md:text-6xl lg:text-7xl uppercase font-semibold text-white" style={{ opacity: scrollOpacity }}>
              Estudio Jurídico
            </h1>
          </ShowAnimation>

          <ShowAnimation>
            <p className="hero-subtitle text-sm md:text-xl text-[#fff]" style={{ opacity: scrollOpacity }}>
              Brindamos servicios legales de alta calidad con un enfoque en la atención personalizada y la resolución
              efectiva de problemas.
            </p>
          </ShowAnimation>
        </div>
      </div>
    </div>
  )
}

export default Hero;
