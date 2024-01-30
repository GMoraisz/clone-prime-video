"use client";

import React, { useState, useEffect, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

interface Signatures {
    thumbnailUrl: string;
}

const SignaturesList: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(5);
    const [containerClass, setContainerClass] = useState('h-[175px] w-[200px] m-auto');
    const slidesContainerRef = useRef<HTMLDivElement>(null);

    const slides: Signatures[] = [
        { thumbnailUrl: "https://imgur.com/u3NYB6O.png" },
        { thumbnailUrl: "https://imgur.com/wSXqYFN.png" },
        { thumbnailUrl: "https://imgur.com/mtGuO1Y.png" },
        { thumbnailUrl: "https://imgur.com/RPdgrEo.png" },
        { thumbnailUrl: "https://imgur.com/KOXPdkk.jpg" },
        // Adicione mais slides conforme necessário
    ];

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - visibleSlides < 0 ? slides.length - visibleSlides : prevIndex - visibleSlides));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + visibleSlides >= slides.length ? 0 : prevIndex + visibleSlides));
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setContainerClass('h-[100px] w-[200px] m-auto');
                setVisibleSlides(3);
            } else {
                setContainerClass('');
                setVisibleSlides(5);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const transitionDuration = 0.75;
    const spacingBetweenImages = 10;

    return (
        <div className={`max-w-[1200px] h-[200px] w-full m-auto ml-12 relative ${containerClass}`}>
            <div className='ml-6 flex shadow-black mb-2 text-xl font-semibold'>
                {/* Outros elementos podem ser adicionados aqui */}
            </div>
            <div ref={slidesContainerRef} className='w-full h-full flex overflow-hidden'>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        style={{
                            flex: `0 0 ${100 / visibleSlides}%`,
                            marginRight: index < slides.length - 1 ? `${spacingBetweenImages}px` : '0',
                            transition: `transform ${transitionDuration}s ease-in-out`,
                            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`, // Ajuste para mover os slides
                        }}
                        className='w-full h-full rounded-2xl bg-center bg-cover relative'
                    >
                        <img src={slide.thumbnailUrl} alt={`Slide ${index + 1}`} className='w-full h-full rounded-2xl' />
                    </div>
                ))}
            </div>
            {/* Seta Esquerda */}
            <div
                className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                onClick={goToPreviousSlide}
            >
                <BsChevronCompactLeft size={30} />
            </div>
            {/* Seta Direita */}
            <div
                className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                onClick={goToNextSlide}

            >
                <BsChevronCompactRight size={30} />
            </div>
        </div>
    );
};

export default SignaturesList;
