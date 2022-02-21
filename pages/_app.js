import "../styles/index.scss";
import { useEffect } from "react";

function RBFApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default RBFApp;
