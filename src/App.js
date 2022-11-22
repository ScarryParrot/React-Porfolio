import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Sociallinks from "./Components/Social_links";
import Spare from "./Components/Spare";

function App() {
  return (
  <>
  <Navbar/>
  <Home/>
  <Sociallinks/>
  <About/>
  <Portfolio/>
  <Experience/>
  <Contact/>
  <Spare/>
  </>
  );
}

export default App;
