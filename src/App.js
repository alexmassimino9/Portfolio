import React from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Contact, Projects } from "./components/routes";
import Footer from "./components/Footer.js";
import { Navbar } from "./components/navigation";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
