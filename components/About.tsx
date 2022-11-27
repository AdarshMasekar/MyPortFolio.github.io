import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.module.css"

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
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center snap-mandatory"
    >
      <h3 className="absolute top-24 mb-4 uppercase font-bold tracking-[20px] text-2xl text-primary">
        About
      </h3>

     <motion.img
        initial={{
          
          x:-30
        }}
        whileInView={{
         
          x:0
        }}
        transition={{
          duration: 1.3,
        }} 
       src="https://avatars.githubusercontent.com/u/108608608?v=4"
        alt=""
        className="opacity-80 mt-32 md:mb-0 flex-shrink-0 w-[150px] h-[150px] rounded-full object-cover md:rounded-md md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-400px] my-10 sm:rounded-full sm:w-[250px] sm:h-[250px]"
      />

      <motion.div
       initial={{
        x: 30,
        opacity:0
      }}
     
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease:"easeInOut"
      }}
      // viewport={{
      //   once: true,
      // }}
       className="lg:mt-32  flex flex-col space-y-10 px-0 sm:my-3 md:px-10">
        <h4 className="text-secondary text-[18px] font-bold uppercase tracking-[10px] hover:">
          Get to{" "}
          <span className="text-primary text-2xl font-semibold animate-pulse">
            know
          </span>{" "}
          me
        </h4>
        <hr color="pink" />
        <p className="text-lg tracking-widest leading-8 text-third ">
          I&apos;m a Graduate student from <span className="branch text-secondary" id="branch">Computer Science and Engineering </span>, My current <span className="text-semibold text-secondary/90">CGPA</span> is <span className="text-bolder text-secondary">8.3. </span>
          I have done Internship in <span className="text-semibold text-secondary">Datascience</span>,
          My Technical skills include <span className="text-semi-bold text text-secondary"> Python, C++, HTML/CSS, REACT</span> etc.
          I have Been active on  <span className="text-bold text-xl text-secondary"><a href="https://leetcode.com/adarshmasekar/">Leetcode</a> </span> and <span className="text-bold text-xl text-secondary"> <a href="https://www.codingninjas.com/codestudio/profile/Adarsh_55">Coding Ninjas</a></span> platforms for practicing problem solving skills and enhancing how to use my <span className="text-semibold text-secondary/90">DSA</span> knowledge in realworld .
        </p>
      </motion.div>
      
    
    </motion.div>
  );
};

export default About;
