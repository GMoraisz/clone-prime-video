"use client";
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

interface Signatures {
    thumbnailUrl: string;
}

const SignaturesList: React.FC = () => {
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

    const [startIndex, setStartIndex] = useState(0);

    const visibleSlides = 5;
    const totalSlides = slides.length;

    const goToPreviousSlide = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - visibleSlides, 0));
    };

    const goToNextSlide = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + visibleSlides, totalSlides - visibleSlides));
    };

    return (
        <div className={`max-w-[1200px] h-[260px] w-full m-auto relative overflow-hidden`}>
            <div className="ml-6 flex shadow-black mb-2 text-xl font-semibold">
                <span className={`text-${startIndex === 0 ? 'primary' : 'tertiary'}`}>{startIndex === 0 ? 'Minhas Assinaturas' : 'Você Pode Gostar'}</span>
            </div>
            <div className="h-full flex gap-4 overflow-hidden">
                {slides.slice(startIndex, startIndex + visibleSlides).map((slide, index) => (
                    <div
                        key={index}
                        className="w-full h-full rounded-2xl bg-center bg-cover transition-transform transform hover:scale-105"
                        style={{ backgroundImage: `url(${slide.thumbnailUrl})` }}
                    />
                ))}
            </div>
            {/* Seta Esquerda */}
            <div
                className={`absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ${startIndex === 0 ? 'hidden' : ''}`}
                onClick={goToPreviousSlide}
            >
                <BsChevronCompactLeft size={30} />
            </div>
            {/* Seta Direita */}
            <div
                className={`absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ${startIndex + visibleSlides >= totalSlides ? 'hidden' : ''}`}
                onClick={goToNextSlide}
            >
                <BsChevronCompactRight size={30} />
            </div>
        </div>
    );
};

export default SignaturesList;
