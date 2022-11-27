import { motion } from "framer-motion";
import React from "react";

import Skills from "./Skills.js"


type Props = {};

const TechSkills = (props: Props) => {
  // let color = 'pink'
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
      
      className="flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[1500px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto 
    items-center snap-mandatory"
    >
      <h3 className="uppercase absolute top-24 px-2 font-bold tracking-[18px] text-2xl text-primary">
        tech stacks
      </h3>
      
      <h3 className="absolute top-40 font-bold uppercase mb-0 tracking-[5px] text-[18px] text-secondary/70">
        hover over a{" "}
        <span className="text-primary  font-bold text-2xl animate-pulse">
          skill
        </span>{" "}
        for currency proficiency
        
      </h3>
    
    

      <motion.div
      initial={{
        opacity: 0,
        y:30,
      }}
      whileInView={{
        opacity: 1,
        y:0,
      }}
      transition={{
        duration: 1,ease:"easeIn"
      }}
     className="grid  justify-center grid-cols-3 gap-10 lg:grid-cols-5 lg:gap-10 md:grid-cols-4 md:gap-8 xs:grid-cols-4 sm:gap-6 absolute top-60">
        <Skills tech="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" lvl="90%" stack="PYTHON"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" lvl="80%" stack="C++"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/3161/3161133.png" lvl="70%" stack="SQL"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" lvl="60%" stack="REACT"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/226/226777.png" lvl="50%" stack="JAVA"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/174/174854.png" lvl="90%" stack="HTML"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/732/732190.png" lvl="80%" stack="CSS"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" lvl="80%" stack="BOOTSTRAP"/>
        <Skills tech="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" lvl="80%" stack="TAILWIND"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" lvl="70%" stack="JAVASCRIPT"/>
        <Skills tech="https://seeklogo.com/images/N/numpy-logo-479C24EC79-seeklogo.com.png" lvl="80%" stack="NUMPY"/>
        <Skills tech="https://seeklogo.com/images/P/pandas-logo-776F6D45BB-seeklogo.com.png?v=637737823900000000" lvl="70%" stack="PANDAS"/>
        <Skills tech="https://seeklogo.com/images/M/matplotlib-logo-7676870AC0-seeklogo.com.png" lvl="70%" stack="MATPLOTLIB"/>
        <Skills tech="https://seeklogo.com/images/S/seaborn-logo-244EB2DEC5-seeklogo.com.png" lvl="70%" stack="SEABORN"/>
        <Skills tech="https://3.bp.blogspot.com/-yvrV6MUueGg/ToICp0YIDPI/AAAAAAAAADg/SYKg4dWpyC43AAfrDwBTR0VYmYT0QshEgCPcBGAYYCw/s1600/OpenCV_Logo.png" lvl="60%" stack="OPENCV"/>

       
      </motion.div>
    </motion.div>
  );
};

export default TechSkills;
