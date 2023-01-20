import React from "react";
import Image from "next/image";
import RenderParagraph from "../../utils/RenderParagraph";
import { GreenBtn } from "../../ui/Buttons";
import bannerOne from "../../public/images/img1.jpg";
import { bannerData } from "../../data/contentData";

const Banner = () => {
  return (
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
  );
};

export default Banner;
