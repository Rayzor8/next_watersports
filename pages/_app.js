import "../styles/globals.css";
import { Rubik } from "@next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700","800", "900"],
});



function MyApp({ Component, pageProps }) {
  return (
    <main className={rubik.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
