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
      className="relative circle top-[130px] flex items-center justify-center">
      <div className="absolute border-[190px] border-third/20 rounded-full h-[0] w-[0] mt-52 opacity-20 animate-spin " />
      <div className="absolute border-[350px] border-third/20 rounded-full h-[0] w-[0] mt-52 opacity-20 animate-spin " />

      <div className="absolute border-[2px] border-primary/90 rounded-full h-[375px] w-[375px] opacity-20 mt-52" />
      <div className="absolute border-[150px] border-primary/40 rounded-full h-[375px] w-[375px] mt-52 opacity-10 animate-ping" />

      <div className="absolute border-[2px] border-third/40 rounded-full h-[575px] w-[575px] opacity-20 mt-52 " />
      <div className="absolute border-[2px] border-third/40 rounded-full h-[575px] w-[575px] mt-52 animate-spin" />
      <div className="absolute border-[6px] border-primary/50 rounded-full h-[715px] w-[715px] mt-52 opacity-10 " />
      <div className="absolute border-[10px] border-primary/50 rounded-full h-[720px] w-[720px] mt-52 opacity-80  animate-pulse" />

    </motion.div>
  );
};

export default BackgroundCircles;
