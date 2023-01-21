import React from "react";
import Accordion from "../../ui/Accordion";
import { questionData } from "../../data/contentData";

const FAQuestion = () => {
  return (
    <section className="container mt-12 flex flex-col gap-4 lg:pl-0">
      <h1>{questionData.headOne}</h1>
      <Accordion data={questionData.questions} />
    </section>
  );
};

export default FAQuestion;
