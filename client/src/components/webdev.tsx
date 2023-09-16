"use client"
import React,{useState} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "../app/styles/webdev.css"
import Footer from "@/app/pages/footer";

function WebDev() {
  const[show,setShow]=useState(false)
  return (
    <main>
      <div className="w-0 h-[40vh]  sm:w-[70vh] sm:h-[20vh] bg-pink-300 absolute right-0 bottom-20vh] rounded-full blur-[300px]" />
    <div className="container py-5">
    <a className="box box--4 h-[55vh] sm:h-auto " onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          >
        <div className="box__content my-5">
            10%
            <span>Full Stack Development</span>
            20%
            <span>Software Developer</span>
            30%
            <span>HEY THERE</span>
            40%
            <span>I</span>
            <span>am</span>
            50%
            <span>IRON MAN</span>
            <span>Day One</span>!
            60%
            <span>Hey!</span>
            <span>There</span>
            70%! $$
            {show && <span className="hidden sm:flex box__title box__title--top text-center w-full pl-10 ">View Ajitesh </span>}
            {!show && <span className="box__title box__title--top ">View Ajitesh</span>}
            {/* <span className="box__title box__title--top flex sm:hidden">view</span> */}
            <span>80%</span>$$!
            <span>85% off</span>
            {!show &&<span className="box__title ">@Ajitesh72</span>}$
            {show &&<span className="box__title text-center w-full mb-20 sm:pl-20 sm:mb-0">@Ajitesh72</span>}$
            <span>90% off</span>$
            <span>92% OFF</span>
            <span>SALE</span>
            94%
            <span>BEST OFFER</span>
            <span>the full</span>$
            95%!
            <span>Limited time</span>
            97%<span>off sale</span>
            <span>special OFFER</span>
        </div>
    </a>
</div>
<br/>
<Footer/>
    </main>
    );
}

export default WebDev;
