import React from 'react'
import { benefitsData } from '../../data/contentData'

const Benefits = () => {
  return (
    <section className="container section-box flex flex-col gap-4">
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
  )
}

export default Benefits