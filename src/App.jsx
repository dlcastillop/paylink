import React from "react";
import Hero from "./components/Hero";
import SocialMedia from "./components/social-media/SocialMedia";
import Payment from "./components/payments/Payment";
import imageHero from "./images/daniel-castillo.png";
import Config from "./paylink.config.json";

function App() {
  return (
    <>
      <div class="minimalist-theme">
        <Hero
          src={Config.properties.hero}
          alt={Config.properties.alt}
          name={Config.properties.name}
          description={Config.properties.description}
        />

        <section
          id="social-media"
          className="d-flex justify-content-center mb-5"
        >
          {Config.Social.map(
            (i) =>
              i.link != "" && (
                <SocialMedia
                  label={i.label}
                  type={i.type}
                  href={i.link}
                  key={i.label}
                ></SocialMedia>
              )
          )}
        </section>

        <section
          id="payment-options"
          className="d-flex flex-column align-items-center pb-5"
        >
          {/* Payment components are placed here */}
          {/* Payment components are placed here */}
          {Config.Payments.map(
            (i) =>
              i.value != "" && (
                <Payment
                  id={i.id}
                  label={i.label}
                  img={i.img}
                  value={i}
                  key={i.id}
                ></Payment>
              )
          )}
        </section>
      </div>
    </>
  );
}

export default App;