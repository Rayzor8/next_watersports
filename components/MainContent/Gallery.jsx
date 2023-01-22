import React from "react";
import Image from "next/image";
import { ImLocation } from "react-icons/im";
import galleryImages from "../../data/galleryImages";
import { galleryData } from "../../data/contentData";

const Gallery = () => {
  return (
    <section className="container section-box flex flex-col gap-4 gradient ">
      <h1>{galleryData.head}</h1>
      <p>{galleryData.parags}</p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        {galleryImages.map((gallery, idx) => (
          <div key={idx} className="relative">
            <Image
              src={gallery.img}
              alt={`image-galery-${idx + 1}`}
              priority
              className="xl:h-72 md:h-64 rounded shadow-lg cursor-pointer duration-100 border-2 border-white"
            />
            <p className="pt-4 pl-4 rounded absolute inset-0 font-bold opacity-0 cursor-pointer hover:opacity-100 hover:bg-[rgba(0,0,0,0.1)] transition-all text-midBlue flex gap-2  text-sm md:text-normal">
              <ImLocation className="text-xl" />
              {gallery.loc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
