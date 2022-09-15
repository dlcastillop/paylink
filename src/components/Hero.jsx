import React from "react";

function Hero(props) {
  return (
    <section className="d-flex flex-column align-items-center mt-2 mb-1">
      <img src={props.src} alt={props.alt} className="mb-1" />
      <h1 className="mb-1">{props.name}</h1>
      <p className="text-center">{props.description}</p>
    </section>
  );
}

export default Hero;
