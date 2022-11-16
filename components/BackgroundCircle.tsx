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
      <div className="absolute border-[200px] border-[#66E1B4]/50 rounded-full h-[300px] w-[300px] mt-52 opacity-20 animate-ping" />

      <div className="absolute border-[2px] border-[#66E1B4]/60 rounded-full h-[400px] w-[400px] opacity-10 mt-52" />
      <div className="absolute border border-[#009589] rounded-full h-[401px] w-[401px] mt-52 opacity-5 animate-pulse" />

      <div className="absolute border-[2px] border-[#66E1B4]/70 rounded-full h-[600px] w-[600px] mt-52 animate-pulse" />

      <div className="absolute border-[4px] border-[#66E1B4]/80 rounded-full h-[750px] w-[750px] mt-52 animate-pulse" />
      <div className="absolute border-[6px] border-[#009589] rounded-full h-[751px] w-[751px] mt-52 opacity-20 animate-pulse" />
      
      <div className="absolute border-[8px]  border-[#66E1B4]/90 rounded-full h-[755px] w-[755px] mt-52 opacity-20 animate-ping" />
      <div className="absolute border-[10px]  border-[#009589] rounded-full h-[755px] w-[755px] mt-52 opacity-20 animate-ping" />

    </motion.div>
  );
};

export default BackgroundCircles;
