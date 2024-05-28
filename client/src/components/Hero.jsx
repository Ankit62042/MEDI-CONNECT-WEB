import React from "react";
import image from "../images/heroimg.png";
import "../styles/hero.css";
import Typist from "react-typist";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <Typist>
          Empowering Health, Anywhere, Anytime, <br />
          Bringing Doctors to Your Doorstep Digitally!
          </Typist>
          
        </h1>
        <p>
          Introducing our innovative app connecting doctors and patients seamlessly, 
          regardless of location. Say goodbye to long waits and hello to convenience with appointment scheduling at your fingertips. 
          Easily find the right doctor for your needs and book appointments effortlessly. 
          Experience healthcare on your terms, simplified like never before!
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
