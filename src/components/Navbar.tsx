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
      <div className="relative hero bg-cover bg-center object-cover" style={{ backgroundImage: 'url(\'/workingMaterial.webp\')' }}>
        <nav className="bg-transparent fixed w-full top-0 z-10  p-5 sm:p-2 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-50 sm:h-[80px] h-[150px]">
          <Link href="/Tv">
            <h1 className="text-white text-2xl sm:text-4xl font-bold p-2 hover:text-[#fac267]">Margaux Didier 🇬🇧🇫🇷</h1>
          </Link>
          <ul className="flex flex-row pr-3">
            <Link href="/Tv">
              <li className="text-white  text-xl font-semibold p-4 hover:bg-[#F6765E] hover:bg-opacity-80 hover:delay-150 rounded">Séries</li>
            </Link>
            <Link href="/Movies">
              <li className="text-white   text-xl  font-semibold p-4 hover:delay-150 hover:bg-[#F6765E] hover:bg-opacity-80 rounded">Films</li>
            </Link>
            <Link href="/Anime">
              <li className="text-white  text-xl  font-semibold p-4 hover:delay-150 hover:bg-[#F6765E] hover:bg-opacity-80 rounded">Anime</li>
            </Link>
          </ul>
        </nav>
        <div className="cursor-pointer sm:p-10 p-3 bg-[#F6765E] bg-opacity-70 rounded shadow-lg drop-shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  whitespace-nowrap text-xl md:text-4xl lg:text-5xl z-600">
          <h2>✅ Adaptatrice de Doublage</h2>
          <h3>☑ Parolière</h3>
          <h3>☑ post-synchro</h3>
        </div>
      </div>
    </>
  );
}

export default Navbar;
