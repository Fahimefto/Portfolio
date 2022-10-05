import React from "react";
import { motion } from "framer-motion";
import ExpCard from "./ExpCard";

export default function Exp() {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 mx-auto items-center justify-evenly"
    >
      <h3 className="absolute top-24 uppercase text-2xl tracking-[20px]">
        Experience
      </h3>
      <div className="flex w-full overflow-x-scroll space-x-5 p-10 snap-x snap-mandatory ">
        {/* exp */}
        <ExpCard />
        <ExpCard />
        <ExpCard />
        <ExpCard />
        <ExpCard />
        <ExpCard />
      </div>
    </motion.div>
  );
}
