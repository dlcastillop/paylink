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
              <SocialMedia
                value={i.value}
                href={i.link}
                key={i.label}
              ></SocialMedia>
            )
        )}
      </section>

      <section>
        <Payment
          img={Config.Payments[0].img}
          label={Config.Payments[0].label}
          id={Config.Payments[0].id}
          value={Config.Payments[0].value}
        />
      </section>
    </div>
  );
};

export default App;
