"use client";

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

interface Films {
  thumbnailUrl: string;
}

const MainCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: Films[] = [
    { thumbnailUrl: "https://i.imgur.com/e0cRMKj.jpg" },
    { thumbnailUrl: "https://imgur.com/xEXpvk5.png" },
    { thumbnailUrl: "https://i.imgur.com/VvdcTlg.jpg" },
    { thumbnailUrl: "https://i.imgur.com/ivJHWTB.jpg" },
    { thumbnailUrl: "https://i.imgur.com/LfAOeZQ.jpg" },
    { thumbnailUrl: "https://imgur.com/NmIdYFL.png" },
    { thumbnailUrl: "https://i.imgur.com/ol5g5dX.jpg" },
    { thumbnailUrl: "https://i.imgur.com/LujHU6w.jpg" },
    { thumbnailUrl: "https://i.imgur.com/ellh6Vg.jpg" },
  ];


  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const transitionDuration = 0.65;

  return (
    <div className={`max-w-[1400px] h-[220px] lg:h-[580px] mt-20 lg:mt-20 lg:m-auto relative m-3`}>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].thumbnailUrl})`,
          transition: `background-image ${transitionDuration}s linear`,
        }}
        className='w-full h-full rounded-2xl bg-center bg-cover relative'
      />
      <div className={`absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full
             p-2 bg-black/20 text-white cursor-pointer`} onClick={goToPreviousSlide}>
        <BsChevronCompactLeft size={30} />
      </div>
      <div className={`absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full 
            p-2 bg-black/20 text-white cursor-pointer`} onClick={goToNextSlide}>
        <BsChevronCompactRight size={30} />
      </div>
      <div className='flex top-4 justify-center py-2 ml-2 mr-2'>
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

export default MainCarousel;
