const Hero = (props) => {
  return (
    <section className="flex flex--column align-items--center pt--2 mb--1">
      <img src={props.src} alt={props.alt} className="mb--1 hero-image my--4" />
      <div className="pt--3">
        <h3 className="mb--1 text--center">{props.name}</h3>
        <p className="text--center">{props.description}</p>
      </div>
    </section>
  );
};

export default Hero;
