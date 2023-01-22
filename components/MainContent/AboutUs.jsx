import React from "react";
import RenderParagraph from "../../utils/RenderParagraph";
import { aboutData } from "../../data/contentData";

const AboutUs = () => {
  return (
    <section className="container  flex flex-col gap-4 gradient section-box">
      <h1>{aboutData.headOne}</h1>

      <RenderParagraph parags={aboutData.parags} />
    </section>
  );
};

export default AboutUs;
