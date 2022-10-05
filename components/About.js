import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute py-10 -m-10 top-24  uppercase tracking-[10px] text-2xl font-bold ">
        About
      </h3>
      <motion.img
        src="./assest/efto.png"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative -mb-20 mt-10 md:-mb-20 md:mt-10 flex-shrink-0 w-40 h-40 object-cover rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className=" px-0 md:px-10 relative">
        <h4 className="text-4xl font-semibold ">Here is a little Backround</h4>
        <p className="text-base">
          Cillum in ipsum aliqua exercitation irure ipsum labore exercitation
          minim deserunt do. Et adipisicing laborum id cillum et esse duis elit
          do sint culpa ipsum qui. Labore ea do velit minim qui ea. Lorem non
          pariatur ea irure.Fugiat mollit dolor consectetur deserunt nisi
          officia. Officia esse exercitation labore id. Occaecat laboris aliqua
          ex et aliquip in non cupidatat sint ut aliqua. Incididunt fugiat
          mollit adipisicing id. Anim nisi ea commodo exercitation culpa
          adipisicing nulla sint laboris irure.
        </p>
      </div>
    </motion.div>
  );
}
