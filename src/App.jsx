import { useState } from "react";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Payment from "./components/Payment";
import QRCode from "./components/QRCode";
import Config from "./paylink.config.json";

const App = () => {
  const [paymentLabel, setPaymentLabel] = useState("");
  const [paymentImg, setPaymentImg] = useState("");
  const [paymentValue, setPaymentValue] = useState("");

  const showQRCode = (label, img, value) => {
    setPaymentLabel(label);
    setPaymentImg(img);
    setPaymentValue(value);
  };

  return (
    <div className={Config.theme}>
      <Hero
        src={Config.properties.hero}
        alt={Config.properties.alt}
        name={Config.properties.name}
        description={Config.properties.description}
      />

      <section id="social-media" className="flex justify-content--center mb--5">
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
        className="flex flex--column align-items--center pb--4"
      >
        {Config.Payments.map(
          (i) =>
            i.value != "" && (
              <Payment
                label={i.label}
                img={i.img}
                value={i.value}
                key={i.id}
                id={i.id}
                showQRCode={(label, img, value) =>
                  showQRCode(label, img, value)
                }
              ></Payment>
            )
        )}
      </section>

      <QRCode label={paymentLabel} img={paymentImg} value={paymentValue} />

      <footer className="text--center py--3">
        <a
          href="https://github.com/dlcastillop/paylink"
          target="_blank"
          className="paylink-link text-decoration--none"
        >
          <sub>
            Powered by <b>PayLink</b>
          </sub>
        </a>
      </footer>
    </div>
  );
};

export default App;
