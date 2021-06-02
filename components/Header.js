import Link from "next/link";
import React from "react";
import { usePath } from "../utils/usePath";

export const Header = () => {
  const { currentLink, homepageLink, label } = usePath();

  return (
    <header>
      <div className="flex justify-between m-5">
        <Link href={homepageLink ?? "/"}>
          <img src="/SVG/logo1.svg" alt="DV Logo" className="w-10 h-10" />
        </Link>
        <Link href={currentLink ?? "/"}>{label}</Link>
      </div>
    </header>
  );
};
