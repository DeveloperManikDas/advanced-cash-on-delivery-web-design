"use client"
import React, { useEffect, useState } from 'react';

const MarqueeLogos: React.FC = () => {
  const [animationDelay, setAnimationDelay] = useState<string[]>([]);

  useEffect(() => {
    // Set animation delay for each item dynamically
    const delays = Array.from({ length: 6 }, (_, index) => `-${(30 / 6) * (6 - index)}s`);
    setAnimationDelay(delays);
  }, []);

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
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-200px);
            }
          }
        `}
      </style>

      {/* Wrapper container */}
      <div className="relative w-11/12 max-w-screen-xl mx-auto mt-20 h-24 overflow-hidden flex items-center">
        <div className="flex space-x-5">
          {/* Items to be animated */}
          {images.map((image, index) => (
            <div
              key={index}
              className="w-48 h-24 flex items-center justify-center"
              style={{
                animation: `scrollLeft 30s linear infinite`,
                animationDelay: animationDelay[index],
              }}
            >
              <img
                src={image}
                alt={`Brand ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarqueeLogos;
