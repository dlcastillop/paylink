import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Payment from "./components/Payment";
import Config from "./paylink.config.json";

const App = () => {
  return (
    <div className="max-w-xl mx-auto items-center justify-center">
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
              <SocialMedia value={i.value} href={i.link} key={i.label} />
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
                id={i.id}
                value={i.value}
                key={i.label}
              />
            )
        )}
      </section>
    </div>
  );
};

export default App;
