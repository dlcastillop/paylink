import React from "react";
import Hero from "./components/Hero";
import SocialMedia from "./components/social-media/SocialMedia";
import Payment from "./components/payments/Payment";
import Config from "./paylink.config.json";

// Set title tag
document.title = "PayLink | Pay or donate to " + Config.properties.name;

// Set meta tag (title)
let meta = document.getElementsByTagName("meta")[1];
meta.setAttribute("content", "PayLink | Pay or donate to " + Config.properties.name);

// Set meta tag (og:url and title)
meta = document.getElementsByTagName("meta")[4];
meta.setAttribute("og:url", window.location);

meta = document.getElementsByTagName("meta")[5];
meta.setAttribute("og:title", "PayLink | Pay or donate to " + Config.properties.name);

// Set meta tag (twitter:url and twitter:title)
meta = document.getElementsByTagName("meta")[9];
meta.setAttribute("twitter:url", window.location);

meta = document.getElementsByTagName("meta")[10];
meta.setAttribute("twitter:title", "PayLink | Pay or donate to " + Config.properties.name);

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

        <section id="social-media" className="d-flex justify-content-center mb-5">
          {Config.Social.map(
            (i) => i.link != "" && <SocialMedia label={i.label} type={i.type} href={i.link} key={i.label}></SocialMedia>
          )}
        </section>

        <section id="payment-options" className="d-flex flex-column align-items-center pb-4">
          {Config.Payments.map(
            (i) => i.value != "" && <Payment id={i.id} label={i.label} img={i.img} value={i.value} key={i.id}></Payment>
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
}

export default App;
