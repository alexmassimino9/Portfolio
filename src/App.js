import React from "react";
import Navbar from "./components/Navigation/navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
