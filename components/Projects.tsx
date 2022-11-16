import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden 
    flex-col text-center md:flex-row max-w-full 
    justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#FF0080] text-2xl">
        Projects
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[5px] text-xs text-[#EC9EC0]">
        swipe on a{" "}
        <span className="text-[#FF0080] text-lg font-bold animate-pulse">
          mockup
        </span>{" "}
        for demo projects
      </h3>

      <div
        className="relative w-full flex overflow-x-hidden overflow-y-hidden
      snap-x snap-mandatory z-20"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center 
          flex flex-col -space-y-[80px] items-center justify-center
          p-25 md:p-20 h-screen w-screen"
          >
            <picture className="mt-5">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                src="https://www.freeiconspng.com/uploads/responsive-icon-1.png"
                width="350"
                alt="Photos Icon Responsive"
              />
            </picture>
            <div className=" space-y-2 max-w-xl">
              <button className="heroButton">source code</button>
              <button className="heroButton">live demo</button>
              <h4 className="uppercase text-lg text-[#EC9EC0] tracking-[2px]">
                case study {i + 1} of {projects.length} :{" "}
                <span className="uppercase text-xl font-semibold text-[#FF0080] animate-pulse">
                  {" "}
                  web demo clone
                </span>
              </h4>
              <p className="text-[16px] px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                iusto provident, quaerat eum reiciendis ullam perferendis itaque
                labore omnis aperiam?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[28%] bg-gradient-to-r from-[#B21368] via-[#EC9EC0] to-[#EC9EC0] left-0 h-[4px] -skew-y-12 animate-pulse " />
      <div className="w-full absolute top-[29%] bg-gradient-to-r from-[#B21368] via-[#EC9EC0] to-[#EC9EC0] left-0 h-[3px] -skew-y-12 " />
      <div className="w-full absolute top-[30%] bg-gradient-to-r from-[#B21368] via-[#EC9EC0] to-[#EC9EC0] left-0 h-[2px] -skew-y-12 " />
      <div className="w-full absolute top-[31%] bg-gradient-to-r from-[#B21368] via-[#EC9EC0] to-[#EC9EC0] left-0 h-[1px] -skew-y-12 " />

      <div className="w-full absolute bottom-[10%] bg-gradient-to-r from-[#EC9EC0] via-[#EC9EC0] to-[#B21368] left-0 h-[4px] -skew-y-12 animate-pulse" />
      <div className="w-full absolute bottom-[11%] bg-gradient-to-r from-[#EC9EC0] via-[#EC9EC0] to-[#B21368] left-0 h-[3px] -skew-y-12" />
      <div className="w-full absolute bottom-[12%] bg-gradient-to-r from-[#EC9EC0] via-[#EC9EC0] to-[#B21368] left-0 h-[2px] -skew-y-12" />
      <div className="w-full absolute bottom-[13%] bg-gradient-to-r from-[#EC9EC0] via-[#EC9EC0] to-[#B21368] left-0 h-[1px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
