import React from "react";
import Image from "next/image";
import bannerOne from "../../public/images/img1.jpg";
import imgTwo from "../../public/images/img2.jpeg";
import { GreenBtn } from "../Buttons";

const MainContent = () => {
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
          <h1>Rayzor Watersports</h1>
          <h2>
            Rental Jetski Dan Berbagai Permainan Watersports Berpengalaman Di
            Bali.
          </h2>
          <p>
            Jetski adventure adalah permainan terfavorit kami karena Anda bisa
            mengendarai jetski sendiri dan mengikuti tur keliling menikmati
            keindahan Pulau Bali dari laut dipandu dengan crew kami yang sudah
            berpengalaman.
          </p>
          <p>
            Permainan unik lainnya adalah JETSURF, papan selancar bermesin yang
            bisa buat Anda berselancar dengan lebih mudah. Dan masih banyak
            permainan lainnya.
          </p>

          <GreenBtn>Contact Us</GreenBtn>
        </div>
      </section>

      <section className="container mt-12 flex flex-col gap-4 gradient">
        <h1>About Us</h1>
        <p>
          Rayzor Watersports merupakan perusahaan tempat berbagai macam
          permainan air seperti Jetski, JETSURF, Fly Board, Wake Board, Banana
          boat, Kayak, SUP dan lain-lain di Bali. Lokasi kami lebih “private”
          tepatnya berada di pantai Mertasari, tentunya area bermain watersports
          lebih luas dan lebih nyaman.
        </p>

        <p>
          Selain itu, kami melayani permintaan khusus jika Anda menginginkan
          bermain watersports di area lain di Bali seperti danau Batur, pantai
          Kuta, Nusa Lembongan dan area lainnya sesuai dengan kelayakan dan
          keamanan di lokasi. Kami memiliki crew yang ramah dan profesional siap
          menemani Anda mendapatkan pengalaman watersports yang seru selama
          liburan Anda di Pulau Bali.{" "}
        </p>
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
          <h2>
            Apakah permainan watersports kami aman untuk pemula dan anak-anak ?
          </h2>

          <p>
            Semua permainan kami aman untuk anak-anak minimal usia 5 tahun
            selama orang tua mengijinkan, mendampingi dan mengikuti instruksi
            keamanan yang disampaikan oleh crew selama bermain watersports.{" "}
          </p>

          <p>
            Sebelum bermain, crew kami yang berpengalaman akan memberikan
            instruksi kemanan, membimbing cara bermain dan mengawasi selama
            bermain. Selain itu, Anda akan kami lengkapi dengan pelampung
            berstandar Internasional. Jadi untuk pemula maupun anak-anak tetap
            bisa bersenang-senang bermain watersports.{" "}
          </p>
        </div>
      </section>

      <section className="container mt-12 flex flex-col gap-4 gradient">
        <h1>Galerry</h1>
        <p>
          Berikut foto keseruan mengendarai jetski menyusuri pantai-pantai yang
          indah di Pulau Bali. Berencana liburan di Bali?{" "}
          <b>Yuk seru-seruan bareng keluarga dan teman-teman!</b> Hubungi kami
          sekarang juga untuk menikmati berbagai macam permainan watersports di
          Bali.
        </p>

        <div class="grid grid-cols-4 gap-4">
          <div className="bg-midBlue rounded">01</div>
          <div className="bg-midBlue rounded">01</div>
          <div className="bg-midBlue rounded">01</div>
          <div className="bg-midBlue rounded">01</div>
          <div className="bg-midBlue rounded">01</div>
          <div className="bg-midBlue rounded">01</div>
          <div className="bg-midBlue rounded">01</div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
