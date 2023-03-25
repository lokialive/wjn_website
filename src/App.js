import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import SquaresBG from "react-animated-squares";


function App() {
  return (
    <Router>
      <Header />
      <SquaresBG count={10} speed={0.8} backgroundColor={'#ffffff'} squareColor={'#d87093'}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/technologies" element={<Technologies />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
