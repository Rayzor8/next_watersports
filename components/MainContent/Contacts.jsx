import React from "react";
import Image from "next/image";
import contactImgOne from "../../public/images/contact-1.png";
import contactImgTwo from "../../public/images/contact-2.png";
import contactImgThree from "../../public/images/contact-3.png";
import contactImgFour from "../../public/images/contact-4.png";

const Contacts = () => {
  return (
    <section className="container section-box flex flex-col gap-4 justify-center items-center" id="contact">
      <h1>Contacts Us</h1>
      <p>Contacts Information here :</p>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:w-1/2 gap-4">
        <a
          className="flex flex-col gap-2 bg-white justify-center items-center p-8 rounded shadow-lg cursor-pointer active:scale-95"
          href="https://www.instagram.com/rayzordev"
          target="_blank"
          rel="noreferrer"
        >
          <h2>Instagram</h2>
          <Image
            src={contactImgOne}
            alt="contact-logo"
            className="w-24 h-24 rounded-full flex-shrink-0 object-cover object-center"
            priority
          />
        </a>
        <a
          className="flex flex-col gap-2 bg-white justify-center items-center p-8 rounded shadow-lg cursor-pointer active:scale-95"
          href="mailto:rayzor8.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <h2>Gmail</h2>
          <Image
            src={contactImgTwo}
            alt="contact-logo"
            className="w-24 h-24 rounded-full flex-shrink-0 object-cover object-center"
            priority
          />
        </a>
        <a className="flex flex-col gap-2 bg-white justify-center items-center p-8 rounded shadow-lg cursor-pointer active:scale-95">
          <h2>Whatsapp</h2>
          <Image
            src={contactImgThree}
            alt="contact-logo"
            className="w-24 h-24 rounded-full flex-shrink-0 object-cover object-center"
            priority
          />
        </a>
        <a
          className="flex flex-col gap-2 bg-white justify-center items-center p-8 rounded shadow-lg cursor-pointer active:scale-95"
          href="https://github.com/Rayzor8"
          target="_blank"
          rel="noreferrer"
        >
          <h2>Github</h2>
          <Image
            src={contactImgFour}
            alt="contact-logo"
            className="w-24 h-24 rounded-full flex-shrink-0 object-cover object-center"
            priority
          />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
