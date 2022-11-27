import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div
 
      className="h-screen relative flex overflow-hidden 
    flex-col text-center md:flex-row max-w-full 
    justify-evenly mx-auto items-center z-0 snap-mandatory"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] font-bold text-primary text-2xl">
        Projects
      </h3>
      <h3 className="absolute px-2 z-50 top-36 uppercase tracking-[4px] text-[18px] font-bold text-secondary">
        use arrow keys or swipe on a{" "}
        <span className="text-primary text-2xl font-bold animate-pulse">
          mockup
        </span>{" "}
        for demo projects
      </h3>

      <motion.div
          initial={{
            opacity: 0,
            x:-70,
          }}
          whileInView={{
            opacity: 1,
             x:0,
          }}
          transition={{
            duration: 1.6,
          }} 
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
              <img
              
                className="text-[#fff]"
                src="https://www.freeiconspng.com/uploads/responsive-icon-1.png"
                width="350"
                alt="Photos Icon Responsive"
              />
            </picture>
            <div className=" space-y-2 max-w-xl ">
              {/* <a href="https://github.com/AdarshMasekar/Bus-Ticket-Reservation-/tree/main/Project" className=" heroButton btn  border rounded-full p-2" role="button">Source Code</a> */}
              <button className="heroButton"><a href="https://github.com/AdarshMasekar/Bus-Ticket-Reservation-/tree/main/Project">Source code</a></button>
              <button className="heroButton"><a href="https://github.com/AdarshMasekar/Bus-Ticket-Reservation-/tree/main/Project">live demo</a></button>
              <h4 className="uppercase text-lg text-primary tracking-[2px]">
                case study :
                <span className="uppercase text-xl font-semibold text-[#f98547] animate-pulse">
                  {" "}
                  Android App
                </span>
              </h4>
              <p className="text-[16px] px-2 tracking-wider text-third/70">
                Android Application developed using java and xml it is basically a clone app for online ticket booking
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="w-full absolute bottom-[10%] bg-gradient-to-r from-secondary via-third/70 to-primary   left-0 h-[4px] -skew-y-3 animate-pulse z-0" />
      <div className="w-full absolute bottom-[11%] bg-gradient-to-r from-secondary via-third/70 to-primary left-0 h-[3px] -skew-y-3 z-0" />
      <div className="w-full absolute bottom-[12%] bg-gradient-to-r from-secondary via-third/70 to-primary left-0 h-[2px] -skew-y-3 z-0" />
      <div className="w-full absolute bottom-[13%] bg-gradient-to-r from-secondary via-third/70 to-primary left-0 h-[2px] -skew-y-3 animate-pulse z-0" />

      <div className="w-full absolute top-[28%] bg-gradient-to-r from-primary via-third/70 to-secondary left-0 h-[4px] -skew-y-3 animate-pulse z-0 " />
      <div className="w-full absolute top-[29%] bg-gradient-to-r from-primary via-third/70 to-secondary left-0 h-[3px] -skew-y-3 z-0" />
      <div className="w-full absolute top-[30%] bg-gradient-to-r from-primary via-third/70 to-secondary left-0 h-[2px] -skew-y-3 z-0" />
      <div className="w-full absolute top-[31%] bg-gradient-to-r from-primary via-third/70 to-secondary left-0 h-[2px] -skew-y-3 animate-pulse z-0" />
    </div>
  );
};

export default Projects;