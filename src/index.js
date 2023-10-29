import React from "react";
import ReactDOM from "react-dom";

import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Event from "./Pages/Event/Event.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
