"use client";

import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


interface Films {
  thumbnailUrl: string;
}

const MainCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerClass, setContainerClass] = useState('h-52 w-full m-auto'); // Default value

  const slides: Films[] = [
    { thumbnailUrl: "https://i.imgur.com/e0cRMKj.jpg" },
    { thumbnailUrl: "https://imgur.com/LCSxyDb.png" },
    { thumbnailUrl: "https://i.imgur.com/VvdcTlg.jpg" },
    { thumbnailUrl: "https://i.imgur.com/ivJHWTB.jpg" },
    { thumbnailUrl: "https://i.imgur.com/LfAOeZQ.jpg" },
    { thumbnailUrl: "https://i.imgur.com/uNwx9GA.jpg" },
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setContainerClass('h-52 w-full m-auto');
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

  return (
    <div className={`max-w-[1440px] h-[560px] w-full m-auto relative  ${containerClass}`}>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].thumbnailUrl})`,
          transition: `background-image 0.5s ease-in-out`,
        }}
        className='w-full h-full rounded-2xl bg-center bg-cover relative'

      />
      <div className={`absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full
             p-2 bg-black/20 text-white cursor-pointer`} onClick={goToPreviousSlide}>
        <BsChevronCompactLeft size={30} />
      </div>
      <div className={`absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full 
            p-2 bg-black/20 text-white cursor-pointer`} onClick={goToNextSlide}>
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

export default MainCarousel;
