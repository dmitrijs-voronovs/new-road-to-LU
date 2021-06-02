import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const { locale, asPath } = useRouter();

  return (
    <header className="bg-p5 bg-opacity-20">
      <div className="flex justify-between p-5 md:max-w-screen-sm md:mx-auto">
        <Link href="/">
          <img
            src="/logo2@3x.png"
            alt="DV Logo"
            className="h-12 cursor-pointer"
          />
        </Link>
        <Link href={asPath} locale={locale === "en" ? "lv" : "en"}>
          <span className="text-p1 my-auto cursor-pointer uppercase">
            {locale === "en" ? "lv" : "en"}
          </span>
        </Link>
      </div>
    </header>
  );
};
