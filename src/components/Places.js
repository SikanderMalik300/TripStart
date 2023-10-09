import React from "react";
import P1 from "../images/place1.jpg";
import P2 from "../images/place2.jpg";
import P3 from "../images/place3.jpg";
import P4 from "../images/place4.jpg";
import "./places.css";
import Placeslist from "./Placeslist";

const Places = () => {
  return (
    <div className="destinations">
      <h1>Special Adventures</h1>
      <p>
        Journey to these enchanting corners of the world, where history,
        culture, and natural wonders converge in a mesmerizing dance of
        discovery.
      </p>
      <Placeslist
        heading="Forest Retreat"
        description="Nestled deep within an ancient forest, the Enchanted Forest Retreat is a haven for those seeking solace in nature's embrace. 
        Towering trees create a natural canopy, filtering sunlight to dapple the forest floor in a mesmerizing play of light and shadow. 
        Trails wind through moss-covered stones and babbling brooks, inviting exploration and contemplation. Each morning, awaken to the 
        chorus of songbirds and the gentle rustle of leaves. Choose from a variety of well-appointed cabins, each designed with rustic charm 
        and modern comforts. Unwind on your private deck, savoring a cup of freshly brewed coffee as you inhale the crisp, invigorating air."
        image1={P1}
        image2={P2}
        Cname="place"
      />

      <Placeslist
        heading="Sunset Oasis Resort"
        description="Perched on the edge of a rugged coastline, Sunset Oasis Resort is a sanctuary of luxury and tranquility. As the sun dips below the horizon, 
        casting the sky in a symphony of fiery hues, you'll find yourself transported to a realm of pure serenity.Each elegantly appointed suite boasts panoramic 
        views of the vast expanse of the ocean. Step onto your private balcony and feel the gentle caress of sea breeze as you soak in the awe-inspiring vista. 
        The resort's attentive staff anticipates your every need, ensuring your stay is nothing short of perfection."
        image1={P3}
        image2={P4}
        direction="row-reverse"
        margin="8rem"
        Cname="place-reverse"
      />
    </div>
  );
};

export default Places;
