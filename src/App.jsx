import { useState } from "react";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Payment from "./components/Payment";
import Modal from "./components/Modal";
import Config from "./paylink.config.json";

const App = () => {
  const [qrData, setQrData] = useState({ img: "", label: "", value: "" });

  return (
    <div className="max-w-xl mx-auto items-center justify-center">
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
        {Config.Payments.map(
          (i) =>
            i.value != "" && (
              <Payment
                img={i.img}
                label={i.label}
                value={i.value}
                setQrData={(val) => setQrData(val)}
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
