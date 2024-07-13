"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

import { Spotlight } from "./ui/Spotlight";
import React from 'react';

const words = [
  { text:"Passionate" },
  { text:"Developer", className: "text-orange-500 dark:text-orange-500" },
];

const HeroSection = () => {
  return (
    <div className="hero bg-base-100 min-h-screen dark:bg-base-900">
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      </div>
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <p>Hi, I'm Nistha 🤗</p>
          <TypewriterEffectSmooth words={words} />
          <p className="py-6 text-base-300 dark:text-amber-50">
            Combining my expertise in front-end and back-end development, I transform ideas into reality by creating seamless user experiences and robust functionalities.
          </p>
          <button className="btn btn-info">Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
