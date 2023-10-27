import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ListProperty from "./pages/ListProperty/ListProperty"
import Search from "./pages/Search/Search";
import MoreDetails from "./pages/MoreDetails/MoreDetails";
import ErrorPage from "./pages/Error/ErrorPage";
import Form from "./pages/Form/Form";
import HostelList from "./pages/ListProperty/HostelList";

function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/list" element={<ListProperty/>}/>
          <Route path="/facility_type/:data" element={<Search/>} />
          <Route path="/moredetails" element={<MoreDetails/>} />
          <Route path="/booking" element={<Form/>} />
          <Route path="/hostellisting" element={<HostelList/>} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
