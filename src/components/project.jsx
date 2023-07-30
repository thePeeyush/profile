import Link from "next/link";
import React from "react";

export default function Project({ text, href, setImage ,image }) {
  const wrapdown = () => {
    setImage("")
  };

  const unwrap = () => {
    setImage(image)
  };

  return (
      <div
        onMouseEnter={unwrap}
        onMouseLeave={wrapdown}
        className=" ostrap overflow-hidden border border-gray-700 relative w-screen"
      >
        <div className=" w-full h-full absolute backdrop-invert bg-transparent strap whitespace-nowrap text-ellipsis "></div>
        <Link href={href}>
          <h1 className=" text-3xl md:text-7xl savo-reg py-5 pl-5 ">{text}</h1>
        </Link>
      </div>
  );
}
