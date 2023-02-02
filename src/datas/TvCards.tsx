import Image from 'next/image';
import React from 'react';
import { useMotionValue, useTransform, motion } from 'framer-motion';

type TvCardsProps = {
  poster_path: string;
  first_air_date: string;
  name: string;
  title: string;
  release_date: string;
};

const tvImg = (poster_path: string) => `https://www.themoviedb.org/t/p/w370_and_h556_multi_faces${poster_path}`;

function TvCards({
  poster_path, name, first_air_date, title, release_date,
}: TvCardsProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (

    <motion.div
      style={{
        x, y, rotateX, rotateY, z: 100, scale: 1,
      }}
      drag
      dragElastic={0.18}
      dragConstraints={{
        left: 0, right: 0, top: 0, bottom: 0,
      }}
      whileTap={{ cursor: 'grabbing' }}
      className="cursor-pointer relative group max-w-2xl mx-auto sm:px-4 py-8 lg-max-7xl grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-3 xl:grid-cols-4 sm:w-[370px]"
    >
      <Image className="w-full lg:group-hover:delay-150 lg:group-hover:opacity-20 w-[231.5px] h-[347.5px] sm:w-[370px] sm:h-[556px] select-none shadow-xl rounded-md object-cover" src={tvImg(poster_path)} alt={name || title} width={370} height={556} draggable="false" />
      <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center px-3 opacity-0 lg:group-hover:delay-150 lg:group-hover:opacity-100">
        <h2 className="w-full mx-auto select-none py-5 px-20 font-bold  text-black    bg-[#F8E6BD] ">{name || title}</h2>
        <p className="select-none font-semibold text-white   bg-[#F6765E] py-5 px-20 whitespace-nowrap">{first_air_date || release_date}</p>
      </div>
    </motion.div>
  );
}

export default TvCards;
