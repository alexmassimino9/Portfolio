import React from "react";
import Navbar from "./components/Navigation/navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </>
  );
};

export default App;
