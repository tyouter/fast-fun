import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function HeroBanner({ title, subtitle, ctaText, ctaLink, imageSrc }) {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden rounded-lg my-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt="Hero Banner" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      {/* Content */}
      <div className="relative px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">{subtitle}</p>
        <Link 
          to={ctaLink} 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export default HeroBanner;