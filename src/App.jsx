import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Showreel from "./pages/Showreel";
import Experiments from "./pages/Experiments";
import Contact from "./pages/Contact";
import GiveBack from "./pages/projects/GiveBack";
import SafeOnline from "./pages/projects/SafeOnline";
import BBC from "./pages/projects/BBC";
import MySkin from "./pages/projects/MySkin";
import Cueshty from "./pages/projects/Cueshty";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/showreel" element={<Showreel />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/giveback" element={<GiveBack />} />
        <Route path="/safeonline" element={<SafeOnline />} />
        <Route path="/bbc" element={<BBC />} />
        <Route path="/myskin" element={<MySkin />} />
        <Route path="/cueshty" element={<Cueshty />} />
      </Routes>
    </Router>
  );
};

export default App;
