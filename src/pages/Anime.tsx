import Navbar from '@/components/Navbar';
import TvList from '@/components/TvList';
import React from 'react';

function Anime() {
  return (
    <div className="bg-[#F8E6BD]">
      <Navbar />
      <TvList listId="8238532" />
    </div>
  );
}

export default Anime;
