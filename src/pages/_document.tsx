import {
  Html, Head, Main, NextScript,
} from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="scrollbars scrollbar-thin scrollbar-thumb-[#F6765E] scrollbar-track-[#f7bc99]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
