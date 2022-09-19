import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex justify-between sticky top-0 max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-start"
      >
        <SocialIcon
          url="https://facebook.com/fahim.iftekhar.efto"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/fahim.iftekhar.efto"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Fahimefto"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon
          network="email"
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="text-gray-400 uppercase hidden md:inline-flex text-sm">
          Contact with me
        </p>
      </motion.div>
    </header>
  );
}
