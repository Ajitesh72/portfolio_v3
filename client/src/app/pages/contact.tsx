/* eslint-disable react/no-unescaped-entities */
import React, { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import EarthCanvas from "../canvas/Earth";

function Contact() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    // Check if the user's browser is Firefox
    setIsFirefox(navigator.userAgent.toLowerCase().indexOf('firefox') > -1);
  }, []);

  return (
    <div
      data-aos="fade-in"
      data-aos-delay="300"
      className="relative h-[100vh] sm:h-[120vh] md:h-[150vh] "
    >
      <div className="w-screen h-[50vh] xs:h-[40vh]  sm:w-[70vh] sm:h-[40vh] bg-blue-300 absolute left-0 top-0 z-0 rounded-full blur-[300px]" 
      style={{
        display: isFirefox ? 'none' : 'block',
               }}
      />
      {/* <div className="w-0 h-[40vh]  sm:w-[70vh] sm:h-[20vh] bg-pink-300 absolute right-0 bottom-[30vh] rounded-full blur-[300px]" /> */}
      <div className="font-bold text-[#C5D0DC] text-5xl sm:text-7xl pt-20 sm:pl-10 mx-5 md:mx-10">
        004
      </div>
      <div className="flex flex-wrap justify-start sm:justify-end items-center  mt-5 sm:mt-0 sm:mx-5 md:mx-10 text-3xl sm:text-5xl md:text-7xl font-bold  ">
        <div className="mx-5 md:mx-0">
          <div
            data-aos="fade-right"
            data-aos-delay="800"
            className="text-end text-4xl md:text-7xl pb-5 sm:pb-10 bg-gradient-to-r from-[#ECFDFE] to-[#86A1F6] bg-clip-text text-transparent "
          >
            CONTACT ME
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-wrap justify-center items-center ">
        <div className=" h-auto w-[60vh]  p-4 flex items-center justify-center">
          <div className="flex-col flex-wrap">
            <div  data-aos="fade-right"
            data-aos-delay="800" className="w-[15vh] h-[2vh] bg-[#7303eb]" />
            <div  data-aos="fade-right"
            data-aos-delay="900"className="mt-2  bg-gradient-to-r from-[#ECFDFE] to-[#86A1F6] bg-clip-text text-transparent">Hey there! <span className="text-white">👋</span></div>
            <div  data-aos="fade-right"
            data-aos-delay="950"className="mt-2  "><span className="bg-gradient-to-r from-[#ECFDFE] to-[#86A1F6] bg-clip-text text-transparent">Shoot me a message and I will get back to you as soon as I can. My email is</span> <span className="underline text-white">dubeyajitesh07</span></div>
            <div  data-aos="fade-right"
            data-aos-delay="1000"className="mt-2  bg-gradient-to-r from-[#ECFDFE] to-[#86A1F6] bg-clip-text text-transparent">Also, Thanks for visiting my website. <span className="text-white">🙌</span></div>
          </div>
        </div>
        <div  data-aos="fade-down"
            data-aos-delay="800" className="sm:ml-10 h-[30vh] w-[30vh] 2xs:h-[40vh] 2xs:w-[40vh]  xs:w-[50vh] xs:h-[50vh] md:w-[100vh] md:h-[100vh]">
          <EarthCanvas />
        </div>
        {/* main content ends */}
      </div>
    </div>
  );
}

export default Contact;
