"use client";
import Landing from "./landing";
import About from "./pages/aboutme";
// import WebDev from "@/app/pages/webdev"
import Footer from "./pages/footer";
import Development from "./pages/development";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VanillaTilt from "vanilla-tilt";
import Experience from "./pages/experience";

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // duration: 000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animation only happens once per element
    });
    // Initialize Vanilla Tilt on the element with class "tilt"
    const tiltElement = document.querySelector("[data-tilt]") as HTMLElement;
    if (tiltElement) {
      VanillaTilt.init(tiltElement, {
        reverse: true,
        glare: true,
        "max-glare": 0.8,
      });
    }
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
      <div id="experience">
        <Experience />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
