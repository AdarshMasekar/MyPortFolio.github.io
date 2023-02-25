import { motion } from "framer-motion";
import React from "react";

import Skills from "./Skills.js"
import {skillset} from "../utils/skills"; 


type Props = {};

const TechSkills = (props: Props) => {
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
      
      <h3 className="absolute top-40 font-bold uppercase mb-0 tracking-[5px] xs:text-[15px] md:text-[17px] lg:text-[18px]    text-secondary/70">
        hover over a{" "}
        <span className="text-primary  font-bold text-2xl animate-pulse">
          skill
        </span>{" "}
        to see its current proficiency.
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
        duration: 1,
        ease:"easeIn"
      }}
     className="grid justify-center grid-cols-3 gap-10 lg:grid-cols-5 lg:gap-10 md:grid-cols-4 md:gap-8 xs:grid-cols-3 sm:gap-6 xs:gap-7 absolute top-60">
      {
        skillset.map(item=>(
          <Skills key={item.id} tech={item.tech} lvl={item.lvl} stack={item.stack}/>
        ))
      }
       
      </motion.div>
    </motion.div>
  );
};

export default TechSkills;
