"use client";
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


interface Series {
    thumbnailUrl: string;
}

const SeriesList: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides: Series[] = [
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/25Dy3K6QPyZ1UBK6cTvFVNi6TeJ.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/6kRRERa9Xt6oTt9EhOgjtusoDyG.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/mm53GSIMl7zF0rHFeIBGfEKtceQ.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/sgzkyIJtRnXyMiXXZBji58VUCsI.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/4FZAwmZu3u3aLM8FLcoC6z0bcSp.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/uqT16aYDXX19Q3w3xaaYmfz0Ue0.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/xm99ndfWhYaUCpPJgd70A0CWxGi.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/vVGsxdS0M8tTxjCd7pzMEgvT2ih.jpg" },
    ];

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const transitionDuration = 0.5; // Defina a duração da transição em segundos

    return (
        <div className={`max-w-[1150px] h-[200px] lg:h-[560px]   w-full m-auto relative`}>
            <div className='ml-6 flex shadow-black mb-2 text-xl font-semibold'>
                <h1 className='text-blue-500 mr-5'> Prime </h1>
                <span className='text-primary '> Séries com as melhores notas no IMDb</span>
            </div>
            <div
                style={{
                    backgroundImage: `url(${slides[currentIndex].thumbnailUrl})`,
                    transition: `background-image ${transitionDuration}s ease-in-out`,
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

export default SeriesList;
