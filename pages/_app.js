import "../styles/globals.css";
import MetricsCode from "../components/MetricsCode";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <MetricsCode />
    </>
  );
}
