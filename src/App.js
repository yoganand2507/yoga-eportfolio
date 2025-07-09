// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";  // or "../pages/Layout" depending on your file location


// Import all your components
import Home from "./pages/Home";
import Summary from "./pages/Summary";
import Highlights from "./pages/Highlights";
import Career from "./pages/Career";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import CapitalOne from "./pages/CapitalOne";
import Acmegrade from "./pages/Acmegrade";
import Tcs from "./pages/Tcs"; 

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="summary" element={<Summary />} />
          <Route path="highlights" element={<Highlights />} />
          <Route path="career" element={<Career />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />

          {/* Nested career routes */}
          <Route path="career/capitalone" element={<CapitalOne />} />
          <Route path="career/acmegrade" element={<Acmegrade />} />
          <Route path="career/tcs" element={<Tcs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
