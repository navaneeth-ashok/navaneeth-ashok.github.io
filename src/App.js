import "./App.css";
import Welcome from "./Welcome";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Skills from "./Skills";
import Experience from "./Experience";
import "./Main.css";
function App() {
  return (
    <div className="">
      <Welcome />
      <Header />
      <main role="main">
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
