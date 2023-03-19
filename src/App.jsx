import { useState } from "react";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Payment from "./components/Payment";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Config from "./paylink.config.json";

const App = () => {
  const [qrData, setQrData] = useState({ img: "", label: "", value: "" });
  const [paymentMethods, setPaymentMethods] = useState(Config.Payments);
  const title = "PayLink | Pay or donate to " + Config.properties.name;

  // Set title tag
  document.title = title;

  // Set meta tag (title)
  let meta = document.querySelectorAll("meta")[2];
  meta.setAttribute("content", title);

  // Set meta tag (og:url and title)
  meta = document.querySelectorAll("meta")[5];
  meta.setAttribute("og:url", window.location);

  meta = document.querySelectorAll("meta")[6];
  meta.setAttribute("og:title", title);

  // Set meta tag (twitter:url and twitter:title)
  meta = document.querySelectorAll("meta")[10];
  meta.setAttribute("twitter:url", window.location);

  meta = document.querySelectorAll("meta")[11];
  meta.setAttribute("twitter:title", title);

  // Set theme
  document.body.setAttribute("data-theme", Config.theme);

  // Set Google Analytics ID
  const script = document.querySelectorAll("script")[2];
  script.setAttribute(
    "src",
    "https://www.googletagmanager.com/gtag/js?id=" + Config.googleAnalyticsId
  );

  return (
    <div className="max-w-xl mx-auto items-center justify-center min-h-screen">
      <Modal qrData={qrData} />

      <Hero
        src={Config.properties.hero}
        alt={Config.properties.alt}
        name={Config.properties.name}
        description={Config.properties.description}
      />

      <section className="flex justify-center gap-3">
        {Config.Social.map(
          (i) =>
            i.link != "" && (
              <SocialMedia
                value={i.value}
                href={i.link}
                label={i.label}
                key={i.label}
              />
            )
        )}
      </section>

      <section className="flex flex-col gap-6 mt-6">
        <Search
          allMethods={Config.Payments}
          setPaymentMethods={(val) => setPaymentMethods(val)}
        />

        {paymentMethods.map(
          (i) =>
            i.value != "" && (
              <Payment
                img={i.img}
                label={i.label}
                value={i.value}
                setQrData={(val) => setQrData(val)}
                theme={Config.theme}
                key={i.label}
              />
            )
        )}
      </section>

      <footer className="py-6 text-center">
        <a
          href="https://github.com/dlcastillop/paylink"
          target="_blank"
          className="text-xs"
        >
          Powered by <span className="font-bold">PayLink</span>
        </a>
      </footer>
    </div>
  );
};

export default App;
