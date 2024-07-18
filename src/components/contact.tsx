"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const words = `"Let's Collaborate and Build Something Amazing Together"`;
const contact = () => {
  return (
    <div id="contact">
        <br />
           <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Join My<span className="text-orange-500 dark:text-orange-500"> Network</span>
      </h1>
      <TextGenerateEffect className="text-center"words={words} />
      <br />
      <div className="flex justify-center">
      <a href="mailto:nisthajnn1234@gmail.com">
  <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#020300,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    Connect with me
  </button>
  
  </a>
</div>

    </div>
  )
}

export default contact