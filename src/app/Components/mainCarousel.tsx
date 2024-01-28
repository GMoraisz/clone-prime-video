"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MainCarousel: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const apiKey = '0d16df4c106d6090ab663e2861ec7cee';
  const language = 'pt-BR';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}`
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchMovies();
  }, [apiKey, language]);

  return (
    <div className='text-primary text-2xl mt-12 text-center font-medium shadow-md'>
      <h2 className='mb-5'>Filmes Populares</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} style={{ maxWidth: '250px' }}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <p className='mt-4'>{movie.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainCarousel;