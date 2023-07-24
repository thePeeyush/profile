"use client";

import Base from "@/components/base";
import Cursor from "@/components/cursor";
import Header from "@/components/header";
import Ribbon from "@/components/ribbon";
import Loading from "@/pages/loading";
import Sample from "@/pages/sample";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  let counter = 4;

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, counter * 1000 + 1000);
  });

  return (
    <div className=" bg-black">
    <Image
      src='/tyre5.png'
      alt="image"
      width={500}
      height={500}
      className=" w-screen h-screen fixed top-0 left-0 -rotate-45 z-0"
    />
    <Ribbon/>
    <Cursor/>
      {isLoading && (
        <div className=" absolute top-0 left-0 w-screen z-50">
          <Loading counter={counter} />
        </div>
      )}
      <div className="flex flex-col justify-between w-screen h-screen">
      <Header/>
      <Sample/>
      <Base/> 
      </div>
    </div>
  );
}
