/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Image from 'next/image';
import useFetch from '../datas/fetchData';
import TvCards from './TvCards';

// Define the interface for the props of the component
interface TvListProps {
  listId: string;
}

export default function TvList({ listId }: TvListProps) {
  // Call the useFetch hook to fetch data from the API
  const { data, loading, error } = useFetch(listId);

  // If an error occurred during data fetch, display an error message
  if (error) {
    return (
      <div>
        An error occurred:
        {' '}
        {error}
      </div>
    );
  }

  // If data is still being loaded or hasn't been fetched yet, display a loading message
  if (!data || loading) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <Image src="/public/clapper.svg" alt="loader" width={500} height={500} className="animate-bounce" />
        <div>Loading...</div>
      </div>
    );
  }

  // Render the fetched data using the TvCards component
  return (
    <div className="flex flex-wrap p-1 sm:p-5">
      {data.map((tv) => (
        <TvCards
          key={tv.id}
          poster_path={tv.poster_path}
          first_air_date={tv.first_air_date}
          title={tv.title}
          release_date={tv.release_date}
          name={tv.name}
        />
      )) }
    </div>
  );
}
