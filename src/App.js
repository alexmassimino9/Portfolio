import React from "react";
import Navbar from "./components/Navigation/navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
