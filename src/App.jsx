import React from "react";
import Hero from "./components/Hero";
import SocialMedia from "./components/social-media/SocialMedia";
import Payment from "./components/payments/Payment";
import imageHero from "./images/daniel-castillo.png";
import link from "./images/social-media/link.svg";
import github from "./images/social-media/github.svg";
import twitter from "./images/social-media/twitter.svg";
import linkedin from "./images/social-media/linkedin.svg";
import instagram from "./images/social-media/instagram.svg";
import btc from "./images/crypto/btc.svg";
import eth from "./images/crypto/eth.svg";
import qvapay from "./images/crypto/qvapay.svg";

function App() {
  return (
    <>
      <div class="minimalist-theme">
        <Hero src={imageHero} alt="Photo of Daniel Castillo" name="Daniel Castillo" description="Frontend web developer" />

        <section id="social-media" className="d-flex justify-content-center mb-5">
            <SocialMedia img={link} label="Link" href="https://danielcastillop.netlify.app" />
            <SocialMedia img={github} label="GitHub" href="https://github.com/dlcastillop" />
            <SocialMedia img={twitter} label="Twitter" href="https://twitter.com/dlcastillop" />
            <SocialMedia img={linkedin} label="LinkedIn" href="https://linkedin.com/in/dlcastillop" />
            <SocialMedia img={instagram} label="Instagram" href="https://instagram.com/dlcastillop" />
        </section>

        <section id="payment-options" className="d-flex flex-column align-items-center pb-5">
          {/* Payment components are placed here */}
          <Payment img={btc} label="Bitcoin" value="bc1qejahgjmqnmyrw7jvn0d7evfdq6ssjl3wq7hfle" id="btc" />
          <Payment img={eth} label="Ethereum" value="0x59C864f658caD68A19a97499755080c056079988" id="eth" />
          <Payment img={qvapay} label="QvaPay" value="https://qvapay.com/payme/dlcastillop" id="qvapay" />
        </section>
      </div>
    </>
  );
}

export default App;
