/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";
import WebDev from "@/components/webdev";

function About() {
  return (
    <div data-aos="fade-in"
    data-aos-delay="300" className="relative">
      <div className="w-screen h-[50vh] xs:h-[40vh]  sm:w-[70vh] sm:h-[40vh] bg-pink-300 absolute left-0 top-0 z-0 rounded-full blur-[300px]" />
      {/* <div className="w-0 h-[40vh]  sm:w-[70vh] sm:h-[20vh] bg-pink-300 absolute right-0 bottom-[30vh] rounded-full blur-[300px]" /> */}
      <div className="text-[#C5D0DC] text-7xl pt-20 sm:pl-10 mx-5 md:mx-10">
        001
      </div>
      <div className="flex flex-wrap justify-center gap-10 items-center text-white mx-5 md:mx-10">
        <div className="mt-10  h-72 w-60 2xs:w-72 moving-gradient-1">
          <Image
          data-aos="fade-right"
          data-aos-delay="900" 
            src="/photos/ajitesh_pic.jpeg"
            width={400}
            height={600}
            className=" absolute p-2 h-72 w-60 2xs:w-72"
            alt="Picture of the topmesh"
          />
        </div>
        <div className="mx-5 md:mx-0">
          <div
          data-aos="fade-right"
          data-aos-delay="800" 
          className="text-end text-4xl md:text-7xl pb-5 sm:pb-10">
            ABOUT ME
          </div>
          <div data-aos="fade-up"
          data-aos-delay="1000" 
          className="w-72 2xs:w-80 xs:w-96 sm:w-[80vh] px-5 py-5 bg-[#0F172A] sm:text-lg">
            <span className="text-6xl">W</span>
            <span>
              hat's up? I’m Ajitesh, a student specializing in Computer Science
              & Engineering at Mumbai University, who is currently looking for a
              role as SDE Intern.
            </span>
            <br />
            <br />
            <span className="ml-10">The</span>
            <span>
              {" "}
              passion to create and innovate has always been in me. I strive to
              build quality, intuitive, and robust software with the goal of
              learning and improving my skills.
            </span>
            <br />
            <br />
            <span className="ml-10">My</span>
            <span>
              {" "}
              expertise include Typescript, CSS, MERN stack and GCP. Recently I
              have been intrigue with Deep Learning Model. Aside from coding, I
              enjoy playing table tennis, video games, and Football.
            </span>
          </div>
        </div>
      </div>

      {/* web dev-about me */}
      <br />
        <WebDev />
        {/* <Footer/> */}
    </div>
  );
}

export default About;
