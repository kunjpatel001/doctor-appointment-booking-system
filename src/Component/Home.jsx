import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Card from "./Card";
import Keyfeatures from "./Keyfeatures";
import Aboutus from "./Aboutus";
import Contactfrom from "./Contactfrom";
import Gallery from "./Gallery";



function Home() {
  return (
    <>
      <Navbar />
      <Carousel /> <br /><br /><br />
      <Card /> <br /><br />
      <Keyfeatures /><br /><br /><br />
      <Gallery/> <br /><br /><br /><br />
      <Aboutus /> <br /><br /> <br />
      <Contactfrom/><br /><br /><br /><br />
      
      


    </>
  )
}
export default Home
