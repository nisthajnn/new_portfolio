"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
const background = () => {
  return (
    // <div className="flex flex-col overflow-hidden">
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-2xl font-semibold text-black dark:text-white">
          Hi I am <span className="text-emerald-500">Nistha </span><br />
            <span className="text-2xl md:text-[4rem] font-bold mt-1 leading-none ">
            A Passionate 
            </span>
            <span className="text-emerald-500 text-2xl md:text-[4rem] font-bold mt-1 leading-none "> Developer 
            </span>
          </h1>
        </>
      }
    >
      <Image
        src={`/images/back.png`}
        alt="hero"
        height={720}
        width={1400}
        className="mx-auto rounded-2xl object-cover h-full object-left-top"
        draggable={false}
      />
    </ContainerScroll>
//   </div>
  )
}

export default background