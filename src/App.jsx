import React from "react";
import Hero from "./components/Hero";
import SocialMedia from "./components/social-media/SocialMedia";
import Payment from "./components/payments/Payment";
import Config from "./paylink.config.json";

function App() {
  return (
    <>
      <div className={Config.theme}>
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
          {Config.Payments.map(
            (i) =>
              i.value != "" && (
                <Payment
                  id={i.id}
                  label={i.label}
                  img={i.img}
                  value={i.value}
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
