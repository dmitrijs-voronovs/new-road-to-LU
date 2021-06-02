import React from "react";

export const Header = () => (
  <header>
    <div className="flex justify-between m-5">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/SVG/logo1.svg" alt="DV Logo" className="w-10 h-10" />
      </a>
      <button className="pr-2">Change Langugage</button>
    </div>
  </header>
);
