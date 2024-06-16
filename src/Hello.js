import React from "react";
import { motion } from "framer-motion";

function Hello() {
  return (
    <div className="bg-pink-200 w-full flex flex-col justify-center items-center h-screen">
      <motion.h6
        className="font-bold text-9xl mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello Developers!!
      </motion.h6>
      <div className="flex justify-center">
        <p className="text-3xl font-bold p-10 bg-blue-200">
          This project is a simple login and signup system developed using a
          React frontend and an Express backend with MongoDB as the database.
          The primary goal of this project is to learn and understand the
          fundamentals of full-stack web development,
        </p>
      </div>
    </div>
  );
}

export default Hello;
