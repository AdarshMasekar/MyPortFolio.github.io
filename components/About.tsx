import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
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
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 mb-4 uppercase font-bold tracking-[20px] text-2xl text-[#69c9c1]">
        About
      </h3>

     <motion.img
        initial={{
          opacity: 0,
          x:-20
        }}
        whileInView={{
          opacity: 1,
          x:0
        }}
        transition={{
          duration: 1,
        }} 
       src="https://avatars.githubusercontent.com/u/108608608?v=4"
        alt=""
        className="mt-32 md:mb-0 flex-shrink-0 w-[150px] h-[150px] rounded-full object-cover md:rounded-md md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-400px] my-10"
      />

      <motion.div
       initial={{
        x: 20,
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
       className="lg:mt-32  flex flex-col space-y-10 px-0 sm:my-3 md:px-10">
        <h4 className="text-[#69c9c1] text-lg uppercase tracking-[10px]">
          Get to{" "}
          <span className="text-[#ff713e] text-2xl font-semibold animate-pulse">
            know
          </span>{" "}
          me
        </h4>
        <p className="text-lg tracking-[4px] leading-8 ">
          I am Graduate student from <span className="underline text-[#ff713e]">Computer science</span> branch , My current CGPA is <span className="text-bold text-[#ff713e]">8.3</span> ,
          I have done Internship in <span className="text-semibold text-[#ff713e]/90">Datascience</span> ,
          My Technical skills include <span className="text-semi-bold text text-[#ff713e]"> Python , C++ , HTML/CSS , REACT</span> etc .
          I have Been active on  <span className="text-bold text-xl text-[#ff713e]"><a href="https://leetcode.com/adarshmasekar/">Leetcode</a> </span> and <span className="text-bold text-xl text-[#ff713e]"> <a href="https://www.codingninjas.com/codestudio/profile/Adarsh_55">Coding Ninjas</a></span> platforms for practicing problem solving skills and enhancing how to use my DSA knowledge in realworld .
        </p>
      </motion.div>
      
    
    </motion.div>
  );
};

export default About;
