import React from "react";
import { motion } from "framer-motion";
export default function ExpCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center transition-opacity bg-opacity-5 bg-slate-50 p-10">
      <motion.img
        initial={{ y: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-20 h-20 object-cover object-center xl:w-[140px] xl:h-[140px] rounded-full mt-32"
        src="https://res.cloudinary.com/dejakmj5c/image/upload/v1664620890/Test/lu4sm9qd2ymwm62jbgke.png"
        alt=""
      />
      <div className="p-0 md:px-10">
        <h4 className="text-3xl">Tittle at Company</h4>
        <p className="font-bold text-2xl mt-1">CEO</p>
        <picture className="flex space-x-2 my-2">
          {/** tech used */}

          <img
            className="w-10 h-10 rounded-full items-center"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/500_Startups_-_logo.png"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/500_Startups_-_logo.png"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/500_Startups_-_logo.png"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/500_Startups_-_logo.png"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/500_Startups_-_logo.png"
          />
        </picture>
        <p className="uppercase py-5 text-lg">Started 12jan- 12jan 2022</p>
        <ul className="list-disc space-y-5 text-lg ml-5">
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </ul>
      </div>
    </article>
  );
}
