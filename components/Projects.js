import React from "react";
import { motion } from "framer-motion";
export default function Projects() {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <div className="h-screen relative flex flex-col justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto items-center z-0  ">
      <h3 className="absolute top-24  uppercase tracking-[20px] text-2xl font-bold snap-center">
        Projects
      </h3>
      <div className="realative mt-[40px] w-full flex overflow-x-scroll overflow-y-hidden snap-x z-20 snap-mandatory">
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={i}
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://unsplash.com/apple-touch-icon.png"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                Project {i + 1} of {projects.length} : Name
              </h4>
              <p className="text-center text-lg md:text-left">
                Lorem laboris consectetur fugiat velit laborum. In eiusmod
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full  absolute top-[30%] bg-rose-700 left-0 h-[500px] -skew-y-6"></div>
    </div>
  );
}
