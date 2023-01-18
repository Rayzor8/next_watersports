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
} from "../../data/contentData";

const MainContent = () => {
  
  const RenderParagraph = ({ parags }) => {
    return (
      <>
        {parags.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </>
    );
  };

  return (
    <main className="min-h-screen  py-8 bg-red-400 bg-sky-100">
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={bannerOne}
            alt="banner-image"
            className="rounded shadow-lg"
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
          {galleryImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`image-galery-${index + 1}`}
              priority
              className="xl:h-72 md:h-64 rounded shadow-lg cursor-pointer duration-100 hover:lg:border-4"
            />
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
              className="bg-white rounded flex justify-center items-center flex-col gap-4 text-midBlue text-center p-12"
            >
              {card.icon}
              <h2>{card.head}</h2>
              <p>{card.parag}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-12 flex flex-col gap-4 px-0">
        <h1>Testimony</h1>
        <p>
          Apa kata mereka yang sudah mengikuti Jetski adventure bersama kami?
          <i>(by Google Review)</i>
        </p>
      </section>
    </main>
  );
};

export default MainContent;
