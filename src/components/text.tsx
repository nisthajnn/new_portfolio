"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const words = `"I don't just imagine solutions, I implement them."`
;
const text = () => {
  return (
    <TextGenerateEffect className="text-center"words={words} />
  )
}

export default text;