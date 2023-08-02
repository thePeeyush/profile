import Link from "next/link";
import React from "react";

export default function Project({ text, href, setImage,setImghref ,image }) {

  const setCurrentImage = () => {
    setImage(image);
    setImghref(href);
  };

  return (
    <Link href={href}>
      <div
        onMouseEnter={setCurrentImage}
        className=" ostrap overflow-hidden border border-gray-700 relative w-screen"
      >
          <div className=" w-full h-full absolute backdrop-invert bg-transparent strap whitespace-nowrap text-ellipsis "></div>
          <h1 className=" text-3xl md:text-7xl savo-reg py-5 pl-5 ">{text}</h1>
      </div>
      </Link>
  );
}
