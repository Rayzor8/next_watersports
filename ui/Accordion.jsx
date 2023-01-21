import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
const Accordion = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const toggle = (idx) => {
    if (selectedItem === idx) return setSelectedItem(null);
    setSelectedItem(idx);
  };

  return (
    <div className="accordion flex flex-col gap-4">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="item bg-white p-4 rounded shadow-lg  w-80 cursor-pointer"
          onClick={() => toggle(idx)}
        >
          <div className="flex justify-start items-center gap-2 ">
            {selectedItem === idx ? (
              <HiMinus className="text-xl " />
            ) : (
              <HiPlus className="text-xl" />
            )}
            <h2>{item.question}</h2>
          </div>
          <p
            className={`${
              selectedItem === idx ? "accordion-show" : "accordion-hide"
            }`}
          >
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
