import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <motion.div className="min-h-screen flex relative snap-start flex-col px-5 text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0  items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36  tracking-[3px] uppercase text-sm">
        Hover over a skill currency profiency
      </h3>
      <div className="grid grid-cols-4 gap-4">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
