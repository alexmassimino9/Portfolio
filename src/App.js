import React from "react";
import Navbar from "./components/Navigation/navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Projects from "./routes/projects";
import Contact from "./routes/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
