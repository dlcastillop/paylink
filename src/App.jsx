import { useState } from "react";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Payment from "./components/Payment";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Config from "./paylink.config.json";
import { metaTags } from "./js/main";

metaTags(Config.properties.name);

const App = () => {
  const [showCopyMsg, setShowCopyMsg] = useState(false);
  const [addressLabel, setAddressLabel] = useState("");

  const showToast = (label) => {
    setShowCopyMsg(true);
    setAddressLabel(label);
  };

  const toggleShow = () => setShowCopyMsg(!showCopyMsg);

  return (
    <>
      <div className={Config.theme}>
        <ToastContainer position="bottom-end" className="success-toast mb-3">
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
              <b className="me-auto">
                {addressLabel} address copied to clipboard
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
                  showToast={(label) => showToast(label)}
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
