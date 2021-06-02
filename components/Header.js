import Link from "next/link";
import React from "react";
import { usePath } from "../utils/usePath";

export const Header = () => {
  const { currentLink, homepageLink, label } = usePath();

  return (
    <header className="bg-p5 bg-opacity-20">
      <div className="flex justify-between p-5 md:max-w-screen-sm md:mx-auto">
        <Link href={homepageLink ?? "/"}>
          <img
            src="/SVG/logo1.svg"
            alt="DV Logo"
            className="w-10 h-10 cursor-pointer"
          />
        </Link>
        <Link href={currentLink ?? "/"}>
          <span className="text-p1 my-auto cursor-pointer">{label}</span>
        </Link>
      </div>
    </header>
  );
};
