"use client";

import Base from "@/components/base";
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
import Link from "next/link";

export default function Home() {
  let counter = 4;
  const [image, setImage] = useState("");
  const [imghref,setImghref] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, counter * 1000 + 1000);
  });

  return (
    <>
    {
      image !== "" && (
        <Link href={imghref}>
        <Image
        src={image}
        alt="project"
        width={600}
        height={600}
        className="fixed bottom-0 right-0  ease-in-out  -rotate-6 translate-x-32 translate-y-10 shadow-md z-50"
      />
        </Link>
      )
    }
    <Image
      src='/bubble.gif'
      alt="bg"
      width={300}
      height={300}
      className="absolute top-0 right-[15%] rounded-lg m-5 -z-40"
    />
    <Ribbon/>
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
        <Projects setImage={setImage} setImghref={setImghref} />
        <Footer/>
      </div>
    </>
  );
}
