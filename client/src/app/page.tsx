"use client"
import Landing from "./landing";
import About from "./pages/aboutme";
// import WebDev from "@/app/pages/webdev"
import Footer from "./pages/footer";
import Development from "./pages/development";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
    // Initialize AOS
    AOS.init({
      // duration: 000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Animation only happens once per element
    });
  }, []); // Empty dependency array to ensure it runs only once
  return (
    <main>
      <div id="home">
        <Landing />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="development">
        <Development />
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </main>
  );
}
