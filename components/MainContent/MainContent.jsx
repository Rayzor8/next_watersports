import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Info from "./Info";
import Gallery from "./Gallery";
import Benefits from "./Benefits";
import Pricing from "./Pricing";
import Testimony from "./Testimony";

const MainContent = () => {
  return (
    <main className="min-h-screen  py-8 bg-red-400 bg-sky-100 debug-screens overflow-x-hidden">
      <Banner />
      <AboutUs />
      <Info />
      <Gallery />
      <Benefits />
      <Pricing />
      <Testimony />
    </main>
  );
};

export default MainContent;
