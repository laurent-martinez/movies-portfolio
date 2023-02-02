import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#F6765E] to-[#F8E6BD] shadow-md  p-5 sm:p-2 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-50 sm:h-[80px] h-[150px]">
      <Link href="/Tv">
        <h1 className="text-white text-3xl font-bold p-2 shadow-md">Margaux Didier</h1>
      </Link>
      <ul className="flex flex-row pr-3">
        <Link href="/Tv">
          <li className="text-[#000952] hover:text-white text-xl font-semibold p-4 hover:bg-[#F6765E] hover:delay-150 rounded">Séries</li>
        </Link>
        <Link href="/Movies">
          <li className="text-[#000952]  hover:text-white text-xl  font-semibold p-4 hover:delay-150 hover:bg-[#F6765E] rounded">Films</li>
        </Link>
        <Link href="/Anime">
          <li className="text-[#000952] hover:text-white text-xl  font-semibold p-4 hover:delay-150 hover:bg-[#F6765E] rounded">Anime</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
