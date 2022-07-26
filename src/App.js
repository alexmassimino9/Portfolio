import React from "react";
import Navbar from "./components/Navigation/navbar";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home";
import Projects from "./components/routes/projects";
import Contact from "./components/routes/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/contact" element={<Contact />} />
        <Route path="/portfolio/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
