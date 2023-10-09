import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Bg from "../images/services.jpg";
import Footer from "../components/Footer";
import Triplist from "../components/Triplist";
import S1 from "../images/service1.svg";
import S2 from "../images/service2.svg";
import S3 from "../images/service3.svg";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero CName="half-hero" image={Bg} title="Our Services" url="/service" />
      <div className="Trips">
        <h1>Our Precious Services</h1>
        <p>
          Step into a world of handpicked journeys, meticulously designed to
          craft vivid, lasting memories on the canvas of your travels.
        </p>
        <div className="cards">
          <Triplist
            image={S1}
            heading="Travel and Tour Guidance"
            description="Embark on a seamless exploration with our expert travel and tour guidance. From iconic canals in Amsterdam to the awe-inspiring Table Mountain in Cape Town, we ensure every step of your journey is filled with wonder and discovery."
          />

          <Triplist
            image={S2}
            heading="Camping Guides"
            description="Connect with nature on a deeper level with our dedicated camping guides. Whether it's pitching a tent beneath Bali's 
            lush rice terraces or finding the perfect spot in South Africa's Cape Winelands, we're here to make your outdoor adventure memorable and worry-free. "
          />

          <Triplist
            image={S3}
            heading="Share Traveling Experiences"
            description="Join our vibrant community to exchange and revel in the beauty of shared traveling experiences. From the charming markets of Amsterdam to the serene beaches of Bali, our platform fosters connections through the love of exploration."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
