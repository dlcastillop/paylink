import React from "react";
import Hero from "./components/Hero";



function App() {
  return (
    <>
      <Hero src="" alt="myProfile" name="Ernesto Cisnero" description="Engineer from “LA CUJAE” || Frontend Developer enthusiast || Long life Liverpool FC supporter || Curious about the universe and galaxies" />

      <section id="social-media" className="d-flex justify-content-center mb-5">
        {/* Social media components are placed here */}
      </section>

      <section
        id="payment-options"
        className="d-flex flex-column align-items-center pb-5"
      >
        {/* Payment components are placed here */}
      </section>
    </>
  );
}

export default App;
