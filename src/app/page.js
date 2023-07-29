"use client";

import Base from "@/components/base";
import Cursor from "@/components/cursor";
import Header from "@/components/header";
import Intro from "@/pages/intro";
import Projects from "@/pages/projects";
import Ribbon from "@/components/ribbon";
import Sample from "@/pages/sample";
import Image from "next/image";
import Skills from "@/pages/skills";
import Footer from "@/pages/footer";
import React, { useEffect, useState } from "react";
import Loading from "@/pages/loading";

export default function Home() {
  let counter = 4;

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, counter * 1000 + 1000);
  });

  return (
    <>
    <Image
      src='/bubble.gif'
      alt="bg"
      width={300}
      height={300}
      className="absolute top-0 right-[15%] rounded-lg m-5 -z-40"
    />
    <Ribbon/>
    <Cursor/>
      {isLoading && (
        <div className=" absolute top-0 left-0 w-screen h-screen z-50">
          <Loading counter={counter} />
        </div>
      )}
      <div className="md:flex flex-col justify-between w-screen min-h-screen ">
      
      <Header/>
      <Sample/>
      <Base/> 
      </div>
      <div>
        <Intro/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </>
  );
}
