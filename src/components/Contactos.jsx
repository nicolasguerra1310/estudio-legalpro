import React, { useRef, useEffect, useState } from 'react';
import ShowTransition from '../animations/ShowTransition'
import CardAnimation from '../animations/CardAnimation'
import CardContact from '../otherComponents/CardContact'
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";
import FormContact from '../otherComponents/FormContact';
import Map from '../otherComponents/Map';

const Contactos = () => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className='py-8 flex flex-col items-center text-white font-libreBaskerville'>
      <ShowTransition>
        <div className='relative mt-10'>
          <h1 className='text-3xl md:text-4xl font-montserrat text-center'>Contactos</h1>
          <div className="w-40 h-0.5 bg-white mt-1 mb-10 mx-auto"></div>
        </div>
      </ShowTransition>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-center mb-16'>
        <div ref={(el) => (cardRefs.current[0] = el)}>
          <CardAnimation isVisible={visibleCards.includes(cardRefs.current[0])} delay={0.1}>
            <CardContact icon={TbBrandLinktree} text="Enlaces" link="https://linktr.ee/legalprotucuman" />
          </CardAnimation>
        </div>
        <div ref={(el) => (cardRefs.current[1] = el)}>
          <CardAnimation isVisible={visibleCards.includes(cardRefs.current[1])} delay={0.2}>
            <CardContact icon={FaEnvelope} text="legalprotucuman@gmail.com" link="https://mail.google.com/mail/?view=cm&fs=1&to=legalprotucuman@gmail.com" />
          </CardAnimation>
        </div>
        <div ref={(el) => (cardRefs.current[2] = el)}>
          <CardAnimation isVisible={visibleCards.includes(cardRefs.current[2])} delay={0.3}>
            <CardContact icon={FaMapMarkerAlt} text="Yerba Buena, Tucumán" link="https://www.google.com/maps/place/Plaza+Mayor/@-26.8134215,-65.2911055,17z/data=!4m6!3m5!1s0x942242d5c983fe8b:0xb277fe0be4b6b12!8m2!3d-26.8123039!4d-65.2903642!16s%2Fg%2F11bc8c3xlr?entry=ttu" />
          </CardAnimation>
        </div>
      </div>

      <div className='contenedorForm'>
        <div className="overlayForm"></div>
        <FormContact />
      </div>

      <div className='contenedorMap'>
        <Map/>
      </div>
    </div>
  )
}

export default Contactos;