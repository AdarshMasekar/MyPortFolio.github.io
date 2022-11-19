import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 5,
      }}
      className="relative top-20 flex items-center justify-center">
      <div className="absolute border-[200px] border-third/50 rounded-full h-[300px] w-[300px] mt-52 opacity-20 animate-ping" />

      <div className="absolute border-[2px] border-third/60 rounded-full h-[400px] w-[400px] opacity-10 mt-52" />
      <div className="absolute border border-third rounded-full h-[401px] w-[401px] mt-52 opacity-5 animate-pulse" />

      <div className="absolute border-[2px] border-third/70 rounded-full h-[600px] w-[600px] mt-52 animate-pulse" />

      <div className="absolute border-[4px] border-third/80 rounded-full h-[750px] w-[750px] mt-52 animate-pulse" />
      <div className="absolute border-[6px] border-third rounded-full h-[751px] w-[751px] mt-52 opacity-20 animate-pulse" />
      
      <div className="absolute border-[8px]  border-third/90 rounded-full h-[755px] w-[755px] mt-52 opacity-20 animate-ping" />
      <div className="absolute border-[10px]  border-third rounded-full h-[755px] w-[755px] mt-52 opacity-20 animate-ping" />

    </motion.div>
  );
};

export default BackgroundCircles;
