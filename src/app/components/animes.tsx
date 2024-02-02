"use client";
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


interface AnimesX {
    thumbnailUrl: string;
}

const AnimesList: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides: AnimesX[] = [
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/nG8v9AyYSz5L5FpPnBbo9CiZEGz.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/nah8AaZkcwCqY5YZfPvWpMT774o.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/7JIcAdO0mKxYTVbngJ2ejQLRcir.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/iWc6rzyWeUgW61JZNgIxBLD3nsG.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/fsZrHyICFykVbuRfFg7N46rJ8vT.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/Au7QgbKJlbGQqiK17LjcInb6qb0.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/bK6WyPx5oexcxoRrC7mryC2XROn.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/iqSKVcacNxzw0H6wPe3rctpJPbz.jpg" },
    ];

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const transitionDuration = 0.5;

    return (
        <div className={`max-w-[1175px] h-[200px] lg:h-[700px]   w-full m-auto relative`}>
            <div className='ml-6 flex shadow-black mb-2 text-xl font-semibold'>
                <span className='text-blue-500'> Prime </span>
            </div>
            <div
                style={{
                    backgroundImage: `url(${slides[currentIndex].thumbnailUrl})`,
                    transition: `background-image ${transitionDuration}s ease-in-out`,
                }}
                className='w-full h-full rounded-2xl bg-center bg-cover relative'
            />
            {/* Seta Esquerda */}
            <div className={`absolute top-[68%] lg:top-[56.5%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full
             p-2 bg-black/20 text-white cursor-pointer`} onClick={goToPreviousSlide}>
                <BsChevronCompactLeft size={30} />
            </div>
            <div className={`absolute top-[68%] lg:top-[56.5%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full 
            p-2 bg-black/20 text-white cursor-pointer`} onClick={goToNextSlide}>
                <BsChevronCompactRight size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, index) => (
                    <div key={slide.thumbnailUrl}
                        className={`mx-1 cursor-pointer ${index === currentIndex ? 'text-white' : 'text-hover'}`}
                        onClick={() => setCurrentIndex(index)}>
                        <RxDotFilled size={30} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimesList;
