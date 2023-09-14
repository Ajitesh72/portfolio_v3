import Landing from "./landing"
import About from "./pages/aboutme"
export default function Home() {
  return (
    <main>
      <div id="home">
      <Landing/>
      </div>
      <div id="about">
      <About/>
      </div>
    </main>
  )
}
