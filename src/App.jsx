import React from "react";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Payment from "./components/Payment";
import Config from "./paylink.config.json";
import { metaTags } from "./js/main";

metaTags(Config.properties.name);

const App = () => {
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
                  value={i.value}
                  href={i.link}
                  key={i.label}
                ></SocialMedia>
              )
          )}
        </section>

        <section
          id="payment-options"
          className="d-flex flex-column align-items-center pb-4"
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
          <a
            href="https://github.com/dlcastillop/paylink"
            target="_blank"
            className="paylink-link my-3 text-decoration-none"
          >
            <sub>
              Powered by <b>PayLink</b>
            </sub>
          </a>
        </section>
      </div>
    </>
  );
};

export default App;
