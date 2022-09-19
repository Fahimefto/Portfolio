import React from "react";
import { motion } from "framer-motion";

export default function BackRoundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.5, 0.5],
        borderRadius: ["20%", "20%", "50%", "70%", "20%"],
      }}
      transition={{
        duration: 2.5,
        delaySpeed: 5000,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border border-red-800 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-amber-800 rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-purple-800 rounded-full h-[400px] w-[400px] mt-52 animate-ping" />

      <div className="absolute border border-red-800 rounded-full h-[600px] w-[600px] mt-52 animate-pulse opacity-25" />
      <div className="absolute border border-red-800 rounded-full h-[800px] w-[800px] mt-52 opacity-30" />
      <div />
      <div />
    </motion.div>
  );
}
