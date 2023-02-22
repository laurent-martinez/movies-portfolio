import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type TvCardsProps = {
  // These props are required and cannot be null or undefined
  poster_path: string;
  first_air_date: string;
  name: string;
  title: string;
  release_date: string;
};

const tvImg = (poster_path: string) => `https://www.themoviedb.org/t/p/w370_and_h556_multi_faces${poster_path}`;

function TvCards({
  poster_path,
  name,
  first_air_date,
  title,
  release_date,
}: TvCardsProps) {
  return (
    <motion.div
      // Framer Motion animation for hover and tap effects
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      // Styling for the card and responsive layout for different screen sizes
      className="cursor-pointer relative group max-w-2xl my-4 mx-auto sm:px-4 py-8 lg-max-7xl grid-cols-1 gap-y-6 sm:gap-y-10 sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-3 xl:grid-cols-4 sm:w-[370px]"
    >
      {/* Framer Motion animation for image fade in */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image component with server-side rendering support */}
        <Image
          className="sm:w-full mb-5 sm:mb-0 lg:group-hover:delay-150 lg:group-hover:opacity-20 w-[231.5px] h-[347.5px] sm:w-[370px] sm:h-[556px] select-none shadow-xl rounded-md object-cover"
          src={tvImg(poster_path)}
          alt={name || title}
          width={370}
          height={556}
          draggable="false"
        />
      </motion.div>
      {/* Bottom section of the card with title and release date */}
      <div className="w-full absolute mx-auto bottom:20 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center lg:opacity-0 md:group-hover:delay-150 md:group-hover:opacity-100">
        <h2
          className="w-full text-center mx-auto select-none py-5 text-2xl text-[#dd6a54] sm:bg-opacity-90 lg:bg-opacity-100 bg-[#F8E6BD]"
        >
          {name || title}
        </h2>
        <p
          className="select-none text-center font-semibold text-white sm:bg-opacity-80 lg:bg-opacity-100 bg-[#F6765E] py-5 whitespace-nowrap"
        >
          {first_air_date?.slice(0, 4) || release_date?.slice(0, 4)}
        </p>
      </div>
    </motion.div>
  );
}

export default TvCards;
