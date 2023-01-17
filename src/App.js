import React from "react";
import Navbar from "./components/Navigation/navbar";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home";
import Projects from "./components/routes/projects";
import Contact from "./components/routes/contact";
import Footer from "./components/footer";

// v2 routes
import { HomePage, ProjectsPage, ContactPage } from "./pages";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/contact" element={<Contact />} />
        <Route path="/portfolio/projects" element={<Projects />} /> */}
        <Route path="/portfolio/" element={<HomePage />} />
        <Route path="/portfolio/contact" element={<ContactPage />} />
        <Route path="/portfolio/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
