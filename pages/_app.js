import { useEffect } from "react";
import "../styles/globals.css";
import "sweetalert2/src/sweetalert2.scss";
import smoothscroll from "smoothscroll-polyfill";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
