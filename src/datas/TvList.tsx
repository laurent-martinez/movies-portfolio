import React from 'react';
import Image from 'next/image';
import useFetch from './fetchData';
import TvCards from './TvCards';
import yoga from '../../public/yoga2loader.svg';
import line from '../../public/line.svg';

export default function TvList({ listId } : string) {
  const { data, loading } = useFetch(listId);
  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/list/${listId}?api_key=03225d0e89af801477a3dd882952c475&language=fr-FRENCH`)
  //     .then((res) => res.json())
  //     .then((data) => setTvList(data.items))
  //     .catch((error) => console.error(error));
  // }, [listId]);

  return (
    <div className="flex flex-wrap p-1 sm:p-5">
      {loading ? (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <Image src={yoga} alt="loader" width={500} height={500} className="animate-bounce" />
          <Image src={line} alt="loader" width={800} height={10} className="" />
        </div>
      ) : data.map((tv, index) => <TvCards key={index} {...tv} />) }
    </div>
  );
}
