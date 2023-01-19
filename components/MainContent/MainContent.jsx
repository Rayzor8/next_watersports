import React from "react";
import Image from "next/image";
import bannerOne from "../../public/images/img1.jpg";
import imgTwo from "../../public/images/img2.jpeg";
import { GreenBtn } from "../../ui/Buttons";
import galleryImages from "../../data/galleryImages";
import {
  bannerData,
  aboutData,
  infoData,
  galleryData,
  benefitsData,
  pricingData,
  testimonyData,
} from "../../data/contentData";
import { formatToRupiah } from "../../utils/formatToRupiah";
import Carousel from "../../ui/Carousel";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import RenderParagraph from "../../utils/RenderParagraph";

const MainContent = () => {
  return (
    <main className="min-h-screen  py-8 bg-red-400 bg-sky-100 debug-screens">
      <section className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Image
            src={bannerOne}
            alt="banner-image"
            className="rounded shadow-lg "
            width={600}
            priority
          />
        </div>
        <div className="flex justify-center items-start flex-col gap-4">
          <h1>{bannerData.headOne}</h1>
          <h2>{bannerData.headTwo}</h2>

          {bannerData.parags.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <RenderParagraph parags={bannerData.parags} />

          <GreenBtn>Contact Us</GreenBtn>
        </div>
      </section>

      <section className="container mt-12 flex flex-col gap-4 gradient">
        <h1>{aboutData.headOne}</h1>

        <RenderParagraph parags={aboutData.parags} />
      </section>

      <section className="container grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div>
          <Image
            src={imgTwo}
            alt="banner-image"
            className="rounded shadow-lg border-4 border-white"
            priority
          />
        </div>

        <div className="flex justify-center items-start flex-col gap-4">
          <h2>{infoData.head}</h2>

          <RenderParagraph parags={infoData.parags} />
        </div>
      </section>

      <section className="container mt-12 flex flex-col gap-4 gradient">
        <h1>{galleryData.head}</h1>
        <p>{galleryData.parags}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {galleryImages.map((gallery, idx) => (
            <div key={idx} className="relative">
              <Image
                src={gallery.img}
                alt={`image-galery-${idx + 1}`}
                priority
                className="xl:h-72 md:h-64 rounded shadow-lg cursor-pointer duration-100 border-2 border-white"
              />
              <p className="pt-4 pl-4 rounded absolute inset-0 font-bold opacity-0 cursor-pointer hover:opacity-100 hover:bg-[rgba(0,0,0,0.1)] transition-all text-midBlue">
                {gallery.loc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-12 flex flex-col gap-4 xl:px-0">
        <h1>{benefitsData.head}</h1>
        <p>{benefitsData.pHead}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded flex justify-center items-center flex-col gap-4 text-midBlue text-center p-12 shadow-lg"
            >
              <div className="text-5xl">{card.icon}</div>
              <h2>{card.head}</h2>
              <p>{card.parag}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-12 flex flex-col gap-4 gradient">
        <h1>{pricingData.headOne}</h1>
        <p>{pricingData.headTwo}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pricingData.prices.map((price, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <Image
                src={price.img}
                alt={`price-img-${price.title}`}
                className="rounded border-2 border-white shadow-lg"
                priority
              />
              <div>
                <h2>{price.title}</h2>
                <p>
                  IDR {formatToRupiah(price.price)} / {price.capacity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-12 flex flex-col gap-4 lg:p-0">
        <h1>{testimonyData.headOne}</h1>
        <p>{testimonyData.headTwo}</p>

        <Carousel>
          {testimonyData.testimonies.map((testi, idx) => (
            <motion.div
              className="item p-2 bg-white rounded  min-w-[100%] md:min-w-[60%] md:min-h-[10rem] lg:min-w-[28%] shadow-lg"
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
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </section>
    </main>
  );
};

export default MainContent;
