"use client";
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

// Defina a interface para o objeto Sports
interface Sports {
  thumbnailUrl: string;
}

const SportsList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: Sports[] = [
    { thumbnailUrl: "https://imgur.com/k3bA2zF.jpg" },
    { thumbnailUrl: "https://imgur.com/WTj5gQa.jpg" },
    { thumbnailUrl: "https://imgur.com/mQmFuos.png" },
    { thumbnailUrl: "https://imgur.com/XggTBX h.png" },
    { thumbnailUrl: "https://imgur.com/UwkF1iT.png" },
    { thumbnailUrl: "https://imgur.com/u74CTa1.png" },
    { thumbnailUrl: "https://imgur.com/PfETgM3.png" },
  ];

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const transitionDuration = 0.75; 

  return (
    <div className={`max-w-[1080px]  h-[225px]  w-full m-auto relative mt-24 lg:h-[615px]`}>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].thumbnailUrl})`,
          transition: `background-image ${transitionDuration}s ease-in-out`,
        }}
      className='w-full h-full rounded-2xl bg-center bg-cover relative'
      />
      {/*  Seta Esquerda */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full
             p-2 bg-black/20 text-white cursor-pointer' onClick={goToPreviousSlide}>
        <BsChevronCompactLeft size={30} />
      </div>
      {/* Seta Direita */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full 
            p-2 bg-black/20 text-white cursor-pointer' onClick={goToNextSlide}>
        <BsChevronCompactRight size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((_, index) => (
          <div key={index}
            className={`mx-1 cursor-pointer ${index === currentIndex ? 'text-white' : 'text-hover'}`}
             onClick={() => setCurrentIndex(index)}>
            <RxDotFilled size={30} />
          </div>  
          
        ))}
      </div>

    </div>
  );
};

export default SportsList;
