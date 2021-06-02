import React from "react";
import Link from "next/link";
import { usePath } from "../utils/usePath";

export const ProjectCard = ({ path = "/", text, heading, src }) => {
  const { code } = usePath();
  return (
    <Link href={code + path}>
      <div className="flex flex-col w-full p-5 mb-5">
        <div className=" h-[300px] mx-auto">
          <img src={src} className="h-full object-scale-down" alt="text" />
        </div>
        <div className="flex flex-col p-5 my-auto text-center">
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};
