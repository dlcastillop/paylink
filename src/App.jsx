import React from "react";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero src="" alt="" name="" description="" />

      <section id="social-media" className="d-flex justify-content-center mb-4">
        {/* Social media components are placed here */}
      </section>

      <section
        id="payment-options"
        className="d-flex flex-column align-items-center"
      >
        {/* Payment components are placed here */}
      </section>
    </>
  );
}

export default App;
