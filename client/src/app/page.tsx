import Landing from "./landing"
import About from "./pages/aboutme"
import WebDev from "@/components/webdev"
import Footer from "./pages/footer"
export default function Home() {
  return (
    <main>
      <div id="home">
      <Landing/>
      </div>
      <div id="about">
      <About/>
      </div>
      {/* <div id="web"> */}
      {/* <Footer/> */}
      {/* </div> */}

    </main>
  )
}
