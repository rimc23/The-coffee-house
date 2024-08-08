import React from "react";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import WhereToBuy from "./Components/WhereToBuy/WhereToBuy";
import AppBanner from "./Components/AppBanner/AppBanner";
import Footer from "./Components/Footer/Footer";

const App = () => {

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  );
};

export default App;