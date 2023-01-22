import React from 'react'
import Image from 'next/image'
import RenderParagraph from '../../utils/RenderParagraph'
import { infoData } from '../../data/contentData'
import imgTwo from "../../public/images/img2.jpeg";

const Info = () => {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-8 section-box">
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
  )
}

export default Info