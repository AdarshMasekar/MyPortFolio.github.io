import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.module.css"

type Props = {};

const About = (props: Props) => {
  const underline = "#F7C8E0"
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
        className="opacity-80 xs:mt-28 sm:mt-16 md:mb-0  flex-shrink-0 rounded-full object-cover md:rounded-[20px] md:border-third md:border-2 w-[150px] h-[150px]  md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-400px] my-10 sm:rounded-full xs:w-[150px] xs:h-[150px] "
      />

      <motion.div
       initial={{
        x: 100,
        opacity:0
      }}
     
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.3,
        ease:"circIn"
      }}
      viewport={{
        once: true,
      }}
       className="xs:mt-4 lg:mt-32 flex flex-col space-y-8  px-0 xs:my-0 sm:my-0 md:px-10">
        <h4 className="text-secondary xs:text-[16px] sm:text-lg xl:text-lg font-bold uppercase tracking-[10px] md:mt-28 lg:-mt-10">
          Get to{" "}
          <span className="text-primary text-2xl font-semibold animate-pulse">
            know
          </span>{" "}
          me
        </h4>
        <hr color="white" className="w-100 text-third h-[2px]"/>
        <p className="tracking-widest leading-8 text-third xs:text-sm md:text-md lg:text-lg text-justify">
          
I am a <span className="text-underline">recent graduate</span> with a <span className="text-underline">Bachelor's degree in Computer Science</span> from <span className="text-underline">Visvesvaraya Technological University (VTU)</span>, graduating in <span className="text-underline">2023</span>. I have achieved an aggregate of <span className="text-underline">8.69 CGPA</span> at the end of my 8th semester. Currently, I am gaining valuable industry experience through an internship at Kodnest, where I am immersed in Java Fullstack development.

My technical skill set is robust and includes proficiency in  <span className="text-semi-bold text text-underline">Java, MySQL, C, C++, HTML/CSS, and REACT</span>, among others. I have a keen interest in algorithmic problem-solving and have been actively participating on platforms like <span className="text-bold text-xl text-underline"><a href="https://leetcode.com/adarshmasekar/">Leetcode</a> </span> and  <span className="text-bold text-xl text-underline"> <a href="https://www.codingninjas.com/codestudio/profile/Adarsh_55">Coding Ninjas</a></span> to sharpen my data structures and algorithms knowledge while applying it to real-world scenarios.
          
        </p>
      </motion.div>
      
    
    </motion.div>
  );
};

export default About;
