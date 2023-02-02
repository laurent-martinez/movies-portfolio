/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Image from 'next/image';
import useFetch from './fetchData';
import TvCards from './TvCards';
import yoga from '../../public/yoga2loader.svg';
import line from '../../public/line.svg';

interface Tvlist {
  listId: string;
}

export default function TvList({ listId } : Tvlist) {
  const { data, loading, error } = useFetch(listId);

  if (error) {
    return (
      <div>
        An error occurred:
        {' '}
        {error}
      </div>
    );
  }

  if (!data || loading) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        {/* <Image src={yoga} alt="loader" width={500} height={500} className="animate-bounce" />
        <Image src={line} alt="loader" width={800} height={10} className="" /> */}
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap p-1 sm:p-5">
      {data.map((tv : any, index) => <TvCards key={index} {...tv} />) }
    </div>
  );
}
