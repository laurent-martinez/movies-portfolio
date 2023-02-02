import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <>
      <Head>
        <style>
          {`
          .hero {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 100vh;
          }
        `}
        </style>
      </Head>
      <div className="relative hero bg-cover bg-center object-cover" style={{ backgroundImage: 'url(\'/workingMaterial.png\')' }}>
        <nav className="bg-transparent fixed w-full top-0 z-10  p-5 sm:p-2 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-50 sm:h-[80px] h-[150px]">
          <Link href="/Tv">
            <h1 className="text-white text-4xl font-bold p-2 ">Margaux Didier</h1>
          </Link>
          <ul className="flex flex-row pr-3">
            <Link href="/Tv">
              <li className="text-white  text-xl font-semibold p-4 hover:bg-[#F6765E] hover:delay-150 rounded">Séries</li>
            </Link>
            <Link href="/Movies">
              <li className="text-white   text-xl  font-semibold p-4 hover:delay-150 hover:bg-[#F6765E] rounded">Films</li>
            </Link>
            <Link href="/Anime">
              <li className="text-white  text-xl  font-semibold p-4 hover:delay-150 hover:bg-[#F6765E] rounded">Anime</li>
            </Link>
          </ul>
        </nav>
        <h2 className="p-10 bg-[#F6765E] rounded shadow-lg drop-shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  text-2xl md:text-6xl z-600">Adaptatrice de Doublage</h2>
      </div>
    </>
  );
}

export default Navbar;
