import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Info from "./Info";
import Gallery from "./Gallery";
import Benefits from "./Benefits";
import Pricing from "./Pricing";
import Testimony from "./Testimony";
import FAQuestion from "./FAQuestion";
import Contacts from "./Contacts";

const MainContent = () => {
  return (
    <main className="min-h-screen  py-4 sm:py-8 md:py-10 lg:py-12 bg-red-400 bg-sky-100 debug-screens overflow-x-hidden">
      <Banner />
      <AboutUs />
      <Info />
      <Gallery />
      <Benefits />
      <Pricing />
      <FAQuestion/>
      <Testimony />
      <Contacts/>
    </main>
  );
};

export default MainContent;
