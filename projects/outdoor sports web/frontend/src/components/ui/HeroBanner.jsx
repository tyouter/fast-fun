import React from 'react';

const HeroBanner = ({ title, subtitle, ctaText, ctaLink, imageSrc }) => {
  return (
    <div 
      className="relative bg-cover bg-center h-96 flex items-center justify-center text-white font-strava-sans"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <a 
          href={ctaLink} 
          className="bg-strava-orange hover:bg-strava-grenadier text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;