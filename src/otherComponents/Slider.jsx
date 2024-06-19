import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiHandcuffs } from 'react-icons/gi';
import { CiDollar, CiBank } from 'react-icons/ci';
import { PiHandshakeThin, PiBagLight } from 'react-icons/pi';
import { IoPeopleOutline } from 'react-icons/io5';

const cards = [
  { id: 1, icon: GiHandcuffs, title: 'Derecho Civil', description: 'Asesoramiento en contratos civiles, responsabilidad civil y daños, derechos de propiedad y posesión, sucesiones y testamentos, contratos de arrendamiento y desahucios.' },
  { id: 2, icon: CiDollar, title: 'Derecho Comercial', description: 'Asesoramiento en constitución de sociedades, contratos comerciales, litigios comerciales, resolución de conflictos comerciales, protección de la propiedad intelectual y marcas.' },
  { id: 3, icon: PiHandshakeThin, title: 'Derecho Laboral', description: 'Asesoramiento en contratación laboral, negociación colectiva y convenios laborales, resolución de conflictos laborales, despidos e indemnizaciones laborales, seguridad y salud laboral.' },
  { id: 4, icon: IoPeopleOutline, title: 'Derecho Societario', description: 'Asesoramiento en constitución y registro de sociedades, estatutos sociales, asesoramiento en acuerdos de accionistas, adquisiciones y reestructuraciones societarias.' },
  { id: 5, icon: PiBagLight, title: 'Derecho Administrativo', description: 'Asesoramiento en procedimientos administrativos, recursos administrativos y reclamaciones, contratación pública y licitaciones, concesiones y permisos administrativos.' },
  { id: 6, icon: CiBank , title: 'Derecho Bancario', description: 'Asesoramiento en contratos bancarios, defensa en casos de abusos bancarios, ejecución de garantías y embargos bancarios, reclamaciones por productos financieros complejos.' },
];

export default function Slider() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 md:py-16 lg:py-20 ">
      <Swiper
        spaceBetween={24}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="relative group flex flex-col items-center justify-center h-[200px] transition-transform duration-300 transform hover:scale-105">
              <card.icon className="w-10 h-10 text-white mb-4" />
              <h3 className="text-white text-xl font-semibold text-center">{card.title}</h3>
              <p className="text-gray-200 text-sm mt-2 text-center">{card.description}</p>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
