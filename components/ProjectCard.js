import React from "react";
import Link from "next/link";

// eslint-disable-next-line react/prop-types
export const ProjectCard = ({ className, path = "/", text, heading, src }) => {
  return (
    <Link href={path}>
      <div
        className={`hover:scale-105 transform transition-transform duration-500 cursor-pointer flex flex-col w-full p-10 mb-5 rounded-xl ${className}`}
      >
        <div className=" h-[300px] mx-auto">
          <img src={src} className="h-full object-scale-down" alt="text" />
        </div>
        <div className="flex flex-col pt-5 my-auto text-center">
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};
