import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";

const projects_new = () => {
  return (
    <div>
      <h1 className="mb-2 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        A Small Selection Of My<span className="text-orange-500 dark:text-orange-500"> Recent Projects</span>
      </h1>
      <section id="projects">
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-24 gap-y-4 p-4">
          {projects.map(
            ({ id, des, iconLists, img, link, sourceCode, title }) => (
              <div
                key={id}
                className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[35rem] sm:w-[570px] lg:min-h-[32.5rem]"
              >
                <PinContainer title="Visit" href={link}>
                  <div className="relative mb-4 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                    <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                      <Image
                        height={330}
                        width={552}
                        src="/bg.png"
                        alt="bg-img"
                      />
                    </div>

                    <Image
                      height={300}
                      width={464}
                      src={img}
                      alt={title}
                      className="absolute bottom-0 z-10"
                    />
                  </div>

                  <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                    {title}
                  </h1>

                  <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                    {des}
                  </p>

                  <div className="mb-3 mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      {iconLists.map((icon, i) => (
                        <div
                          key={icon}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                          style={{
                            transform: `translateX(-${5 * i * 2}px)`,
                          }}
                        >
                          <Image
                            height={40}
                            width={40}
                            src={icon}
                            alt={icon}
                            className="p-2"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center">
                      <Link
                        href={sourceCode}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex text-sm text-purple md:text-xs lg:text-xl"
                      >
                        Source Code
                      </Link>

                      <FaLocationArrow className="ms-3" color="#cbacf9" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            )
          )}
        </div>
      </section>
      <br />
    </div>
  );
};
export default projects_new;
