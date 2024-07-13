"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import React from 'react';

    const words = [
      {
        text: "Passionate",
      },
      {
        text: "Developer",
        className: "text-blue-500 dark:text-blue-500",
      },
      
    ];
const HeroSection = () => {
  return (
    <div className="hero bg-base-100 min-h-screen dark:bg-base-900">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <TypewriterEffectSmooth words={words} />
          <p className="py-6 text-base-300 dark:text-gray-400">
          Hi👋, I'm Nistha Jain.
I love the creative process of transforming ideas into functional and user-friendly web experiences.
          </p>
          <button className="btn btn-primary dark:bg-primary-dark">Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
