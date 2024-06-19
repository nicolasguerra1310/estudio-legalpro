import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Lazy load the components
const Hero = lazy(() => import('../components/Hero'));
const Perfil = lazy(() => import('../components/Perfil'));
const Enfoque = lazy(() => import('../components/Enfoque'));
const Practicas = lazy(() => import('../components/Practicas'));
const Contactos = lazy(() => import('../components/Contactos'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>}>
      <Header />
        <div id='home'>
          <Hero />
        </div>
        <div id='perfil'>
          <Perfil />
          <Enfoque />
        </div>
        <div id='practicas'>
          <Practicas />
        </div>
        <div id='contact'>
          <Contactos />
        </div>
      </Suspense>
      <div id='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
