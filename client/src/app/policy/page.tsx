/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function policy() {
  return (
    <main className="flex flex-col  text-center items-center justify-center h-screen bg-black">
      <Image
        src="/photos/policy-right.gif" // Replace with the path to your 404 image
        alt="leo image"
        width={300}
        height={300}
        className="mt-8 h-60 w-80 rounded-xl"
      />
      <br/>
    <div className="text-4xl font-bold text-gray-200">No Such Policy,clone it & Enjoy!</div>
    <div className="text-lg text-gray-400 mt-5 md:mt-0">Learning Never stops!</div>
      <a href="/" className="mt-4 text-blue-500 hover:underline cursor-pointer">Go back to the home page</a>
  </main>
  );
}

export default policy;
