import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Config from "./paylink.config.json";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
