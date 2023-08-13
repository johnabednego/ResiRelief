import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ListProperty from "./pages/ListProperty/ListProperty"
import Search from "./pages/Search/Search";
import MoreDetails from "./components/Search/MoreDetails";
function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<MoreDetails/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/list" element={<ListProperty/>}/>
          <Route path="/facility_type/:data" element={<Search/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
