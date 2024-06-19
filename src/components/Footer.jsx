import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../media/logoBlanco.png';
import TransitionUp from '../animations/TransitionUp';
import ShowTransition from '../animations/ShowTransition';


const Footer = () => {
  return (
    <footer className="backgroundFooter text-white">
      <div className="overlayFooter"></div>
      <div className="footer-container container flex flex-col mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
        <div className="self-center lg:self-auto">
          <TransitionUp>
            <img src={logo} alt="Logo" className="footer-logo" />
          </TransitionUp>

        </div>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <ShowTransition>
              <section className="flex justify-center items-center">
                <a
                  href="https://www.facebook.com/people/Legal-Pro-Tucum%C3%A1n/61560429064755/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <FaFacebookF className="w-5 h-5" />
                  <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                  >
                    Facebook
                  </span>
                </a>
              </section>
            </ShowTransition>
            <ShowTransition>
              <section className="flex justify-center items-center">
                <a
                  href="https://www.instagram.com/legalprotuc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <FaInstagram className="w-5 h-5" />
                  <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                  >
                    Instagram
                  </span>
                </a>
              </section>
            </ShowTransition>
            <ShowTransition>
              <section className="flex justify-center items-center">
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B5493815575624&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#1ED760] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                  >
                    WhatsApp
                  </span>
                </a>
              </section>
            </ShowTransition>
            <ShowTransition>
              <section className="flex justify-center items-center">
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B5493815981961&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#1ED760] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                  >
                    WhatsApp
                  </span>
                </a>
              </section>
            </ShowTransition>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
