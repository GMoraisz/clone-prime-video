"use client";
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

interface Signatures {
    thumbnailUrl: string;
}

const SignaturesList: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerSlide = 2;


    const slides: Signatures[] = [
        { thumbnailUrl: "https://imgur.com/u3NYB6O.png" },
        { thumbnailUrl: "https://imgur.com/wSXqYFN.png" },
        { thumbnailUrl: "https://imgur.com/mtGuO1Y.png" },
        { thumbnailUrl: "https://imgur.com/RPdgrEo.png" },
        { thumbnailUrl: "https://imgur.com/KOXPdkk.jpg" },
        { thumbnailUrl: "https://imgur.com/h2GWiPr.jpg" },
        { thumbnailUrl: "https://imgur.com/Ca84c5F.jpg" },
        { thumbnailUrl: "https://imgur.com/ZBYWQpx.jpg" },
    ];

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - imagesPerSlide : prevIndex - imagesPerSlide));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + imagesPerSlide >= slides.length ? 0 : prevIndex + imagesPerSlide));
    };

    const transitionDuration = 0.4;

    return (
        <div className={`max-w-[800px] h-[200px] m-6 relative overflow-hidden lg:h-[305px] lg:m-auto text-center`}>
            <h1 className='text-tertiary text-2xl shadow-black font-semibold row-span-1'> Minhas assinaturas </h1>
          
            <div className="h-full flex mt-2 gap-4 overflow-hidden row-span-2">
                {slides.slice(currentIndex, currentIndex + imagesPerSlide).map((slide, index) => (
                    <div
                        key={index}
                        className={`w-1/2 h-full rounded-2xl bg-center bg-cover `}
                        style={{ backgroundImage: `url(${slide.thumbnailUrl})`,
                        transition: `background-image ${transitionDuration}s ease-in-out`,
                     }}
                        
                    />
                ))}
            </div>
            {/* Seta Esquerda */}
            <div
                className={`absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ${currentIndex === 0 ? 'hidden' : ''}`}
                onClick={goToPreviousSlide}
            >
                <BsChevronCompactLeft size={30} />
            </div>
            {/* Seta Direita */}
            <div
                className={`absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ${currentIndex + imagesPerSlide >= slides.length ? 'hidden' : ''}`}
                onClick={goToNextSlide}
            >
                <BsChevronCompactRight size={30} />
            </div>
        </div>
    );
};

export default SignaturesList;