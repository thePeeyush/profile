"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/css/loading.css";

export default function Loading({ counter }) {
  const loaddivref = useRef(null);
  let [isWide , setIsWide] = useState(false)
  useEffect(()=>{
    if (screen.width > 500 ) {
      setIsWide(true);
    }
  },[])

  return (
    <div ref={loaddivref} className=" z-50 flex flex-row overflow-hidden fixed w-full bg-white">
      {isWide && <Up/>}
      <Longdiv paref={loaddivref} delay={2.0} />
      <Longdiv paref={loaddivref} delay={2.2} counter={counter} />
      <Longdiv paref={loaddivref} delay={2.4} />
      {isWide && <Down/>}
    </div>
  );
}

const Up= ({loaddivref})=>{
  return(
    <>
      
      <Longdiv paref={loaddivref} delay={1} />
      <Longdiv paref={loaddivref} delay={1} />
      <Longdiv paref={loaddivref} delay={1.2} />
      <Longdiv paref={loaddivref} delay={1.4} />
      <Longdiv paref={loaddivref} delay={1.6} />
      <Longdiv paref={loaddivref} delay={1.8} />
    </>
  )
}

const  Down = ({loaddivref}) =>{
  return(
    <>
      <Longdiv paref={loaddivref} delay={2.6} />
      <Longdiv paref={loaddivref} delay={2.6} />
    </>
  )
}

export const Longdiv = ({ delay, counter, paref }) => {
  let [letter, setLetter] = useState("");

  useEffect(() => {
    
    longdivref.current.style.animation = `uplift ${delay}s `;
    let mindiv = document.getElementsByClassName("mindiv");
    if (counter !== undefined) {
      setLetter(counter);
      setTimeout(() => {
        paref.current.style.backgroundColor = "transparent";
        for (let i = 0; i < mindiv.length; i++) {
          mindiv[i].style.animation = `fuse ${delay-1}s forwards`;
        }
      }, counter * 1000);
    }
  }, []);

  useEffect(() => {
    if (letter !== 0) {
      decreament(letter);
    }
  }, [letter]);

  const decreament = (value) => {
    setTimeout(() => {
      setLetter(value - 1);
    }, 1000);
  };

  const longdivref = useRef(null);

  return (
    <div
      ref={longdivref}
      className="longdiv h-screen w-full bg-transparent  overflow-hidden "
    >
      <div className="w-full h-full text-center mindiv flex justify-center items-center border-r border-black bg-white">
        {counter !== undefined && (
          <h1 className=" up mindiv savo-reg text-8xl text-orange-500">{letter}</h1>
        )}
      </div>
    </div>
  );
};
