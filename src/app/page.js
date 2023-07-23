"use client";

import Loading from "@/pages/loading";
import Sample from "@/pages/sample";
import React, { useEffect, useState } from "react";

export default function Home() {
  let counter = 3;

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, counter * 1000 + 1600);
  });

  return (
    <div className=" bg-black z-10">
      {isLoading && (
        <div className=" absolute top-0 left-0 w-screen">
          <Loading counter={counter} />
        </div>
      )}
      <Sample/>
    </div>
  );
}
