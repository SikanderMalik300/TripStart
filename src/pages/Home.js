import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Bg from "../images/hero.jpg";
import Places from '../components/Places'
import Trips from "../components/Trips";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        CName="hero"
        image={Bg}
        title=" Unveil Your Unique Journey! "
        desc="Select your dream destination from a myriad of options, each promising a tapestry of unique experiences."
        buttontext="Begin Adventure"
        url="/"
        btnclass="show"
      />
      <Places/>
      <Trips/>
      <Footer/>

    </>
  );
};

export default Home;
