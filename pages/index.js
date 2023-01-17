import Head from "next/head";
import { Header, MainContent, Footer } from "../components";


export default function Home() {
  return (
    <>
      <Head>
        <title>#1 Rayzor Watersports</title>
        <meta name="description" content="Watersports website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
