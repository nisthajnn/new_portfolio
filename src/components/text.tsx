"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const words = `"I don't just imagine solutions, I implement them."`;
const text = () => {
  return (
    <div>
      <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">The <span className="text-orange-500 dark:text-orange-500">Technologies</span> Behind My Projects</h1>
    <TextGenerateEffect className="text-center"words={words} />
    </div>
  )
}

export default text;