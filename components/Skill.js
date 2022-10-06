import React from "react";
import { motion } from "framer-motion";
export default function Skill({ directionLeft }) {
  return (
    <div className="group relative flex cursor-pointer items-center justify-center">
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/apple.png?auto=format&q=60&fit=max&w=930"
        className="rounded-full border mx-auto border-gray-500 object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out  "
      />
    </div>
  );
}
