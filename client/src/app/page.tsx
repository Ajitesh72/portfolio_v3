import Landing from "./landing";
import About from "./pages/aboutme";
// import WebDev from "@/app/pages/webdev"
import Footer from "./pages/footer";
import Development from "./pages/development";

export default function Home() {
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
