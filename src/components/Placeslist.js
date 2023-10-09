import React from "react";

const Placeslist = (props) => {
  return (
    <div className={props.Cname}>
      <div className="place-info">
        <h2>{props.heading}</h2>
        <p>
          {props.description}
        </p>
      </div>
      <div className="image">
        <img src={props.image1} alt="img1" />
        <img src={props.image2} alt="img2" />
      </div>
    </div>
  );
};

export default Placeslist;
