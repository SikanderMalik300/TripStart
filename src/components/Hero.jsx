import React from "react";
import "./hero.css";

const Hero = (props) => {
  return (
    <>
      <div className={props.CName}>
        <img src={props.image} alt="heroimage" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <a href={props.url} className={props.btnclass}>
            {props.buttontext}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
