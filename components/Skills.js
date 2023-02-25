import React from 'react'
import { motion } from "framer-motion";

import Image from "next/image.js";

function Skills({tech,lvl,stack}) {
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
     className="group relative flex cursor-pointer">
    <Image
      className="rounded-full border-[2px] border-primary/80
      object-cover p-2 w-20 h-20 md:w-20 md:h-20 xl:w-24 xl:h-24
      filter group-hover:grayscale grayscale-0 
      transition duration-400 ease-in-out group-hover:animate-bounce"
      src={tech}
      alt=""
    />
    <div className="absolute rounded-full 
    h-20 w-20 md:w-22 md:h-22 xl:w-24 xl:h-24 
    opacity-0 group-hover:opacity-100 group-hover:bg-[#000]/10 z-0
    transition duration-400 ease-in-out group-hover:animate-bounce">
      <div className="flex items-center justify-center h-full">
        <p className="text-2xl font-bold text-primary opacity-100">{lvl}</p>
      </div>
      <p className="text-bold text-center my-2 text-primary">{stack}</p>
    </div>
   
  </motion.div>
  )
}

export default Skills
