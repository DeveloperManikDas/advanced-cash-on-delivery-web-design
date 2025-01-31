"use client"
import React from 'react';

const MarqueeLogos: React.FC = () => {
  const images = [
    "images/brand/brand1.svg",
    "images/brand/brand2.svg",
    "images/brand/brand3.svg",
    "images/brand/brand4.svg",
    "images/brand/brand5.svg",
    "images/brand/brand6.svg",
  ];

  return (
    <>
      {/* Injecting keyframe into the document */}
      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .marquee-container {
            display: flex;
            width: max-content; /* Ensure the container is wide enough to hold all logos */
            animation: scrollLeft 20s linear infinite;
          }

          .marquee-item {
            flex-shrink: 0;
            width: 200px; /* Adjust based on your logo size */
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>

      {/* Wrapper container */}
      <div className="relative w-11/12 max-w-screen-xl mx-auto h-32 overflow-hidden flex items-center">
        <div className="marquee-container">
          {/* Items to be animated */}
          {images.map((image, index) => (
            <div key={index} className="marquee-item">
              <img
                src={image}
                alt={`Brand ${index + 1}`}
                className="w-full h-auto object-contain max-h-24" /* Adjust max-height as needed */
              />
            </div>
          ))}
          {/* Duplicate the logos for a seamless loop */}
          {images.map((image, index) => (
            <div key={`duplicate-${index}`} className="marquee-item">
              <img
                src={image}
                alt={`Brand ${index + 1}`}
                className="w-full h-auto object-contain max-h-24" /* Adjust max-height as needed */
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarqueeLogos;