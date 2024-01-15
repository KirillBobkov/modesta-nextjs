import "../styles/reset.css";
import "../styles/colors.css";
import "../styles/fonts.css";
import "../styles/global.css";
import MetricsCode from "../components/MetricsCode";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MetricsCode />
      <Component {...pageProps} />
    </>
  );
}
