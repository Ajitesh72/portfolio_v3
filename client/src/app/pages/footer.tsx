/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="main  py-8 z-50  bg-[#090e23] ">
  <ul data-aos="fade-down" className="flex item-center justify-center gap-6 mb-8">
    <li className="m-0">
      <a title="View my GitHub profile" aria-label="See my GitHub profile" href="https://github.com/Ajitesh72" target="_blank" className="nav-text p-1">
        <i className="fab fa-github fa-lg text-white"></i>
      </a>
    </li>
    <li className="m-0">
      <a title="Connect on LinkedIn" aria-label="Connect on LinkedIn" href="https://www.linkedin.com/in/ajitesh-dubey-4b5852220/" target="_blank" className="nav-text p-1">
        <i className="fab fa-linkedin-in fa-lg text-white"></i>
      </a>
    </li>
    <li className="m-0">
      <a title="Send me an email" aria-label="Send me an email" href="mailto:dubeyajitesh07@gmail.com" target="_blank" className="nav-text p-1">
        <i className="far fa-envelope fa-lg text-white"></i>
      </a>
    </li>
    <li className="m-0">
      <a title="Follow me on Instagram" aria-label="Follow me on Instagram" href="https://www.instagram.com/ajitesh._/" target="_blank" className="nav-text p-1">
        <i className="dark:text-gray-50 fab fa-instagram fa-lg"></i>
      </a>
    </li>
  </ul>

  <div className="text-center">
    <a data-aos="fade-up" className="nav-text text-gray-700 dark:text-gray-50" href="https://github.com/Ajitesh72" target="_blank">
      Designed & Built by Ajitesh Dubey @<time>2023</time>
    </a>
  </div>

  <div className="mt-8 text-center">
    <p className="text-gray-600 dark:text-gray-300">Stay connected:</p>
    <ul className="flex justify-center gap-4 mt-2">
      <li>
        <a href="/policy" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">Terms of Use</a>
      </li>
      <li>
        <a href="/policy" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">Privacy Policy</a>
      </li>
      <li>
        <a href="/policy" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">Cookie Policy</a>
      </li>
    </ul>
  </div>
</footer>

  );
}

export default Footer;
