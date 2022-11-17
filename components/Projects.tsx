import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
    initial={{
      opacity: 0,
      // x:-500
    }}
    whileInView={{
      opacity: 1,
      // x:0
    }}
    transition={{
      duration: 1,ease:"circInOut"
    }} 
      className="h-screen relative flex overflow-hidden 
    flex-col text-center md:flex-row max-w-full 
    justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] font-bold text-[#69C9C1] text-2xl">
        Projects
      </h3>
      <h3 className="absolute z-50 top-36 uppercase tracking-[5px] text-xs text-[#1e9d93]">
        use arrow keys or swipe on a{" "}
        <span className="text-[#f98547] text-lg font-bold animate-pulse">
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
            <div className=" space-y-2 max-w-xl ">
              {/* <a href="https://github.com/AdarshMasekar/Bus-Ticket-Reservation-/tree/main/Project" className=" heroButton btn  border rounded-full p-2" role="button">Source Code</a> */}
              <button className="heroButton"><a href="https://github.com/AdarshMasekar/Bus-Ticket-Reservation-/tree/main/Project">Source code</a></button>
              <button className="heroButton"><a href="https://github.com/AdarshMasekar/Bus-Ticket-Reservation-/tree/main/Project">live demo</a></button>
              <h4 className="uppercase text-lg text-[#1e9d93] tracking-[2px]">
                case study :
                <span className="uppercase text-xl font-semibold text-[#f98547] animate-pulse">
                  {" "}
                  Android App
                </span>
              </h4>
              <p className="text-[16px] px-2 tracking-wider">
                Android Application developed using java and xml it is basically a clone app for online ticket booking
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[28%] bg-gradient-to-r from-[#69C9C1] via-[#1e9d93]/70 to-[#55ff9c] left-0 h-[4px] -skew-y-12 animate-pulse " />
      <div className="w-full absolute top-[29%] bg-gradient-to-r from-[#55ff9c] via-[#1e9d93]/70 to-[#1e9d93] left-0 h-[3px] -skew-y-12 " />
      <div className="w-full absolute top-[30%] bg-gradient-to-r from-[#69C9C1] via-[#1e9d93]/70 to-[#55ff9c] left-0 h-[2px] -skew-y-12 " />
      <div className="w-full absolute top-[31%] bg-gradient-to-r from-[#69C9C1] via-[#1e9d93]/70 to-[#1e9d93] left-0 h-[1px] -skew-y-12 " />

      <div className="w-full absolute bottom-[10%] bg-gradient-to-r from-[#1e9d93] via-[#1e9d93]/70 to-[#69C9C1] left-0 h-[4px] -skew-y-12 animate-pulse" />
      <div className="w-full absolute bottom-[11%] bg-gradient-to-r from-[#1e9d93] via-[#55ff9c]/70 to-[#69C9C1] left-0 h-[3px] -skew-y-12" />
      <div className="w-full absolute bottom-[12%] bg-gradient-to-r from-[#55ff9c] via-[#1e9d93]/70 to-[#69C9C1] left-0 h-[2px] -skew-y-12" />
      <div className="w-full absolute bottom-[13%] bg-gradient-to-r from-[#1e9d93] via-[#55ff9c]/70 to-[#69C9C1] left-0 h-[1px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;