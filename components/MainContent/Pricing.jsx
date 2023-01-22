import React from "react";
import Image from "next/image";
import { pricingData } from "../../data/contentData";
import { formatToRupiah } from "../../utils/formatToRupiah";

const Pricing = () => {
  return (
    <section className="container section-box flex flex-col gap-4 gradient">
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
  );
};

export default Pricing;
