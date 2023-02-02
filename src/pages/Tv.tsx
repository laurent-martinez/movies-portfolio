import Navbar from '@/components/Navbar';
import TvList from '@/datas/TvList';
import React from 'react';

function Tv() {
  return (
    <div className="bg-[#F8E6BD]">

      <Navbar />
      <TvList listId="8238504" />

    </div>
  );
}

export default Tv;
