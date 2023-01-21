import React from "react";
import UICaraousel from "../../ui/UICaraousel";
import { testimonyData } from "../../data/contentData";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import { TiStar } from "react-icons/ti";

const Testimony = () => {
  return (
    <section className="container mt-12 flex flex-col gap-4 lg:pl-8 xl:pl-0 gradient">
      <h1>{testimonyData.headOne}</h1>
      <p>{testimonyData.headTwo}</p>

      <UICaraousel>
        {testimonyData.testimonies.map((testi, idx) => (
          <motion.div
            className="item p-2 bg-white rounded  min-w-[100%] sm:min-w-[80%] md:min-w-[60%] md:min-h-[10rem] lg:min-w-[28%] shadow-lg"
            key={idx}
          >
            <div className="h-full bg-gray-100 p-4 rounded flex flex-col gap-4 ">
              <FaQuoteRight className="text-2xl" />
              <h2>{testi.headOne}</h2>
              <p className="leading-relaxed mb-2">{testi.testi}</p>
              <a className="inline-flex items-center">
                <Image
                  alt="testimonial"
                  src={testi.pic}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  priority
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    {testi.name}
                  </span>
                  <div className="flex gap-2">
                    <TiStar className="text-sky-400 text-lg md:text-xl"/>
                    <p className="md:text-sm">{testi.rating}</p>
                  </div>
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </UICaraousel>
    </section>
  );
};

export default Testimony;
