import { useState } from "react";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Payment from "./components/Payment";
import QRCode from "./components/QRCode";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Config from "./paylink.config.json";
import { metaTags } from "./js/main";

metaTags(Config.properties.name);

const App = () => {
  const [showCopyMsg, setShowCopyMsg] = useState(false);
  const [paymentLabel, setPaymentLabel] = useState("");
  const [paymentImg, setPaymentImg] = useState("");
  const [paymentValue, setPaymentValue] = useState("");

  const showToast = (label) => {
    setShowCopyMsg(true);
    setPaymentLabel(label);
  };

  const toggleShow = () => setShowCopyMsg(!showCopyMsg);

  const showQRCode = (label, img, value) => {
    setPaymentLabel(label);
    setPaymentImg(img);
    setPaymentValue(value);
  };

  return (
    <div className={Config.theme}>
      <ToastContainer position="bottom-end" className="success-toast mb--3">
        <Toast
          animation={true}
          autohide={true}
          delay="3000"
          bg="dark"
          onClose={toggleShow}
          show={showCopyMsg}
          className="toast"
        >
          <Toast.Header closeButton={true} closeLabel="Close">
            <b className="me--auto">
              {paymentLabel} address copied to clipboard
            </b>
          </Toast.Header>
        </Toast>
      </ToastContainer>

      <Hero
        src={Config.properties.hero}
        alt={Config.properties.alt}
        name={Config.properties.name}
        description={Config.properties.description}
      />

      <section id="social-media" className="d-flex justify-content-center mb-5">
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
                label={i.label}
                img={i.img}
                value={i.value}
                key={i.id}
                showToast={(label) => showToast(label)}
                showQRCode={(label, img, value) =>
                  showQRCode(label, img, value)
                }
              ></Payment>
            )
        )}
      </section>

      <QRCode
        label={paymentLabel}
        img={paymentImg}
        value={paymentValue}
        showToast={(label) => showToast(label)}
      />

      <footer className="text-center py-3">
        <a
          href="https://github.com/dlcastillop/paylink"
          target="_blank"
          className="paylink-link text-decoration-none"
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
