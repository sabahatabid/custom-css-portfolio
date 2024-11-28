import React from 'react';
import Navbar from './Navbar';
import '@/app/style/hero.css';

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero-container"
      style={{
        backgroundImage: 'url(/profile.jpeg)',
        backgroundSize: '20%',
        backgroundPosition: 'left 100px top 100px',
      }}
    >
      <Navbar />
      <div className="hero-content">
        <div className="hidden lg:block"></div>
        <div className="hero-text">
          <div className='hero-msin'>
            <p data-aos="zoom-in-up" className="text-[50px] sm:text-[60px] md:text-[80px] font-bold leading-tight">
              I am
            </p>
            <p data-aos="zoom-in-up" className="text-[50px] sm:text-[60px] md:text-[80px] font-bold leading-tight">
              Syeda
            </p>
            <p data-aos="zoom-in-up" className="text-[50px] sm:text-[60px] md:text-[80px] font-bold leading-tight">
              Sabahat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

