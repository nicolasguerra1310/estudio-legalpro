import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll';
import NavAnimation from '../animations/NavAnimation';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
        toggleMenu();
    };

    const menuVariants = {
        hidden: { opacity: 0, x: '-100%' },
        visible: { opacity: 1, x: '0%', transition: { duration: 1, ease: 'easeInOut' } }
    };
    

    return (
        <NavAnimation>
            <nav className={`fixed top-0 w-full transition-all z-50  ${isScrolled ? ' bg-[#06091a] shadow-md py-3' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <a className="text-xl md:text-2xl uppercase font-semibold text-white" href="#page-top">Legal Pro</a>
                    <button className="block md:hidden text-white focus:outline-none" onClick={toggleMenu}>
                        {isMenuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
                    </button>
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={menuVariants}
                                className="flex flex-col md:hidden absolute inset-x-0 top-0 mt-12 text-sm bg-[#06091a] bg-opacity-10 backdrop-blur-lg shadow-md items-center justify-center transition-all"
                            >
                                <ScrollLink className={`text-white mt-5 block uppercase font-semibold hover:text-gray-700 py-2 nav-link ${activeLink === '#home' ? 'active' : ''}`}
                                    to="home" smooth={true} duration={500} onClick={() => handleSetActiveLink('#home')}>Home
                                </ScrollLink>

                                <ScrollLink className={`text-white block uppercase font-semibold hover:text-gray-700 py-2 nav-link ${activeLink === '#perfil' ? 'active' : ''}`}
                                    to="perfil" smooth={true} duration={500} onClick={() => handleSetActiveLink('#perfil')}>Perfil
                                </ScrollLink>

                                <ScrollLink className={`text-white block uppercase font-semibold hover:text-gray-700 py-2 nav-link ${activeLink === '#practicas' ? 'active' : ''}`}
                                    to="practicas" smooth={true} duration={500} onClick={() => handleSetActiveLink('#practicas')}>Practicas
                                </ScrollLink>

                                <ScrollLink className={`text-white mb-5 block uppercase font-semibold hover:text-gray-700 py-2 nav-link ${activeLink === '#contact' ? 'active' : ''}`}
                                    to="contact" smooth={true} duration={500} onClick={() => handleSetActiveLink('#contact')}>Contacto
                                </ScrollLink>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="hidden md:flex md:space-x-4">
                        <ScrollLink className={`text-white uppercase font-semibold hover:text-gray-700 nav-link ${activeLink === '#home' ? 'active' : ''}`}
                            to="home" smooth={true} duration={500} onClick={() => handleSetActiveLink('#home')}>Home
                        </ScrollLink>

                        <ScrollLink className={`text-white uppercase font-semibold hover:text-gray-700 nav-link ${activeLink === '#perfil' ? 'active' : ''}`}
                            to="perfil" smooth={true} duration={500} onClick={() => handleSetActiveLink('#perfil')}>Perfil
                        </ScrollLink>

                        <ScrollLink className={`text-white uppercase font-semibold hover:text-gray-700 nav-link ${activeLink === '#practicas' ? 'active' : ''}`}
                            to="practicas" smooth={true} duration={500} onClick={() => handleSetActiveLink('#practicas')}>Practicas
                        </ScrollLink>

                        <ScrollLink className={`text-white uppercase font-semibold hover:text-gray-700 nav-link ${activeLink === '#contact' ? 'active' : ''}`}
                            to="contact" smooth={true} duration={500} onClick={() => handleSetActiveLink('#contact')}>Contacto
                        </ScrollLink>
                    </div>
                </div>
            </nav>
        </NavAnimation>
    );
};

export default Header;