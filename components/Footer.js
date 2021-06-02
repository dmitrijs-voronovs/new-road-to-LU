import React from "react";
import { usePath } from "../utils/usePath";

export const Footer = () => {
  const { isEng } = usePath();
  return (
    <footer className="text-center bg-p5 bg-opacity-20 p-5">
      <p className="md:max-w-screen-sm md:mx-auto">
        {isEng
          ? "Created by Dmitrijs Voronovs | dv18034"
          : "Izveidoja Dmitrijs Voronovs | dv18034"}
      </p>
    </footer>
  );
};
