"use client";

import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

// Defina a interface para o objeto Sports
interface Sports {
  thumbnailUrl: string;
}

const SportsList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerClass, setContainerClass] = useState('py-72'); // Defina o valor padrão

  const slides: Sports[] = [
    { thumbnailUrl: "https://imgur.com/PYUPehl.png" },
    { thumbnailUrl: "https://imgur.com/BThPUMn.png" },
    { thumbnailUrl: "https://imgur.com/gGuu5dg.png" },
    { thumbnailUrl: "https://imgur.com/ayIG9Eb.png" },
    { thumbnailUrl: "https://imgur.com/Xd4zSgW.png" },
    { thumbnailUrl: "https://imgur.com/nRcub9v.png" },
    { thumbnailUrl: "https://imgur.com/27xCf2e.jpg" },
  ];

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setContainerClass('py-72');
      } else {
        setContainerClass('');
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const transitionDuration = 0.5; // Defina a duração da transição em segundos

  return (
    <div className={`max-w-[1200px] h-[900px] w-full m-auto relative ${containerClass}`}>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].thumbnailUrl})`,
          transition: `background-image 0.5s ease-in-out`,
        }}
        className='w-full h-full rounded-2xl bg-center bg-cover relative'
      />
      {/* Seta Esquerda */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full
             p-2 bg-black/20 text-white cursor-pointer' onClick={goToPreviousSlide}>
        <BsChevronCompactLeft size={30} />
      </div>
      {/* Seta Direita */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full 
            p-2 bg-black/20 text-white cursor-pointer' onClick={goToNextSlide}>
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
};

export default SportsList;
