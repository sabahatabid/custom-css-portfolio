import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: 'url(/profile.jpeg)',
        backgroundSize: '20%',
        backgroundPosition: 'left 100px top 100px',
      }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="flex justify-center items-center lg:justify-end text-center lg:text-left">
          <div>
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

