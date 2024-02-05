import React from "react"
import ReactDom from "react-dom";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Component/Card";
import Gallery from "./Component/Gallery";
import Contactfrom from "./Component/Contactfrom";
import Aboutus from "./Component/Aboutus";

ReactDom.render(
  <>
    {/* <Home />   */}

    <BrowserRouter>
      <Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/services" element={<Card/>}/>
<Route path="/aboutus" element={<Aboutus/>}/>
<Route path="/gallary" element={<Gallery/>}/>
<Route path="/contact" element={<Contactfrom/>}/>
      </Routes>
    </BrowserRouter>




  </>,
  document.getElementById('root')
)