import Navbar from '@/components/Navbar';
import TvList from '@/datas/TvList';
import React from 'react';

function Movies() {
  return (
    <div className="bg-[#F8E6BD]">
      <Navbar />
      <TvList listId="8238527" />

    </div>
  );
}

export default Movies;
