"use client";
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


interface SeriesX {
    thumbnailUrl: string;
}

const OtherSeries: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides: SeriesX[] = [
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/nA5ElZ1i1kMtO8uBk0J62VOrfsE.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/g0O55sMeYrf6PvTH5ElQVmtnVl0.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/fwselhz0qKWtvUPh2EV5uVo2KGq.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/gFHqCfKxKjFIexZSmmVXrJ6qy5z.jpg" },
        { thumbnailUrl: "https://image.tmdb.org/t/p/original/fH4nBghvxUIdmgjAMgpe6NqZxY9.jpg" },
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

    const transitionDuration = 0.5; // Defina a duração da transição em segundos

    return (
        <div className={`max-w-[1175px] h-[200px] lg:h-[680px]   w-full m-auto relative`}>
            <div className='ml-6 flex shadow-black mb-2 text-xl font-semibold'>
                <span className='text-tertiary'> Você pode gostar </span>
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

export default OtherSeries;
