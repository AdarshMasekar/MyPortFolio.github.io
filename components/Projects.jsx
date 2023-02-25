import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import {projects} from "../utils/projects.js";
import Image from "next/image.js";


const Projects = () => {
const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow:1,
  slidesToScroll:-1,
  autoplay:true,
  autoplaySpeed:4000,
  draggable:true,
  pauseOnFocus:true,
  SwipeDirection:"right",
};
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-center md:flex-row max-w-full 
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
        className="relative w-full flex overflow-x-hidden overflow-y-hidden -skew-y-6
      snap-x snap-mandatory top-10 z-20"
      >
        <Slider
        {...settings} className="slider2  z-20 flex   align-middle justify-items-center -skew-y-2">
        {projects.map((project) => (

          <div
            key={project.id}
            className="project--card row-span-full snap-center relative -top-12 justify-between    p-25 md:p-20 -skew-y-2 "
          >
            <div className="project--details space-y-2 max-w-xl ">
                <h4 className="h4 uppercase xs:hidden md:block md:text-lg text-primary tracking-[2px]">
                  Project Name :
                </h4>
                <span className="uppercase xs:text-sm md:text-lg font-semibold text-[#f98547] animate-pulse">
                    {project.name}
                  </span>
                <h2 className="h2 uppercase xs:text-[10px] md:text-sm text-secondary tracking-[2px]">
                  Domain :
                  <span className="uppercase xs:text-[10px] md:text-sm font-semibold text-[#f98547]/75 animate-none">
                    {project.domain}
                  </span>
                </h2>
                <p className="p px-2 tracking-wider text-third/70">
                {project.details}
                </p>
                  <button className="heroButton"><a href={project.code}>
                    Source code</a>
                  </button>
                  <button className="heroButton"><a href={project.demo}>
                    live demo</a>
                  </button>
            </div>


            <div className="project--img xs:hidden md:block ">
              <a href={project.demo}>
                <Image
                className="text-[#fff] float-right relative top-[-9rem] img"
                src={project.image} width={400} height={400}
                alt="Photos Icon Responsive"
              />
              </a>
            </div>
          </div>
        ))}
        </Slider>
      
      </motion.div>

      <div className="w-full absolute bottom-[10%] bg-gradient-to-r from-secondary via-third/70 to-primary left-0 h-[4px] -skew-y-3 animate-pulse z-0" />
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