/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Experience() {
  return (
    <div data-aos="fade-in" data-aos-delay="300" className="relative">
      <div className="w-screen h-[50vh] xs:h-[40vh]  sm:w-[70vh] sm:h-[40vh] bg-pink-300 absolute left-0 top-0 z-0 rounded-full blur-[300px]" />
      {/* <div className="w-0 h-[40vh]  sm:w-[70vh] sm:h-[20vh] bg-pink-300 absolute right-0 bottom-[30vh] rounded-full blur-[300px]" /> */}
      <div className="font-bold text-[#C5D0DC] text-5xl sm:text-7xl pt-20 sm:pl-10 mx-5 md:mx-10">
        003
      </div>
      <div className="flex flex-wrap justify-start sm:justify-end items-center  mt-5 sm:mt-0 sm:mx-5 md:mx-10 text-3xl sm:text-5xl md:text-7xl font-bold  ">
        <div className="mx-5 md:mx-0">
          <div
            data-aos="fade-right"
            data-aos-delay="800"
            className="text-end text-4xl md:text-7xl pb-5 sm:pb-10 bg-gradient-to-r from-[#ECFDFE] to-[#86A1F6] bg-clip-text text-transparent "
          >
            EXPERIENCE
          </div>
        </div>
      </div>
      <div className="text-white w-full flex justify-center">
        hey there
      </div>
    </div>
  );
}

export default Experience;
