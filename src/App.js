// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./User/Home";
import About from "./User/About";
import Service from "./User/Service";
import Blog from "./User/Blog";
import Career from "./User/Career";
import Contact from "./User/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
