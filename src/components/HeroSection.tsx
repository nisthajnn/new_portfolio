"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import React from 'react';

const words = [
  { text:"A" },
  { text:"Passionate" },
  { text:"Developer", className: "text-orange-500 dark:text-orange-500" },
];

const HeroSection = () => {
  return (
    <div className="hero bg-base-100 min-h-screen dark:bg-base-900 bg-grid-dark dark:bg-grid-light">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          {/* <p>Hi, I'm Nistha 🤗</p> */}
          {/* <TypewriterEffectSmooth words={words} /> */}
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
