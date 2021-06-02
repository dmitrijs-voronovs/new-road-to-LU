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
            src="/logo2@3x.png"
            alt="DV Logo"
            className="h-12 cursor-pointer"
          />
        </Link>
        <Link href={currentLink ?? "/"}>
          <span className="text-p1 my-auto cursor-pointer">{label}</span>
        </Link>
      </div>
    </header>
  );
};
