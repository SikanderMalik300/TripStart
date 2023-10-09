import React from "react";
import Triplist from "./Triplist";
import I1 from "../images/Card1.avif";
import I2 from "../images/Card2.jpg";
import I3 from "../images/Card3.jpg";
import "./trips.css";

const Trips = () => {
  return (
    <div className="Trips">
      <h1>Whirlwind Wanderlust</h1>
      <p>
        Embark on a whirlwind of recent adventures carefully curated just for
        you. Let's paint the map with vibrant memories!
      </p>
      <div className="cards">
        <Triplist
          image={I1}
          heading="Amsterdam, Netherlands"
          description="Explore the picturesque canals, historic architecture, and vibrant culture of Amsterdam. Cruise along the waterways, visit world-class museums like the Rijksmuseum, and indulge in Dutch delicacies. Immerse yourself in the lively atmosphere of local markets and discover the unique charm of this European gem."
        />

        <Triplist
          image={I2}
          heading="Cape Town, South Africa"
          description="Experience the breathtaking beauty of Cape Town, where the majestic Table Mountain meets the sparkling waters of the Atlantic Ocean. Discover the rich cultural heritage, explore the Cape Winelands, and embark on a safari adventure. From stunning beaches to vibrant neighborhoods, Cape Town offers a diverse range of experiences for every traveler."
        />

        <Triplist
          image={I3}
          heading="Bali"
          description="Escape to the tropical paradise of Bali, where lush rice terraces, vibrant coral reefs, and ancient temples await. Immerse yourself in the island's rich cultural traditions, indulge in rejuvenating spa treatments, and savor exquisite cuisine. Whether you seek adventure or relaxation, Bali promises an unforgettable journey through natural beauty and cultural richness."
        />
      </div>
    </div>
  );
};

export default Trips;
