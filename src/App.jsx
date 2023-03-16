import Hero from "./components/Hero";
import Config from "./paylink.config.json";

const App = () => {
  return (
    <Hero
      src={Config.properties.hero}
      alt={Config.properties.alt}
      name={Config.properties.name}
      description={Config.properties.description}
    />
  );
};

export default App;
