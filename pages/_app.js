import "../styles/reset.css";
import "../styles/colors.css";
import "../styles/fonts.css";
import "../styles/global.css";
import { useTheme } from "../hooks/useTheme";
import MetricsCode from "../components/MetricsCode";

export default function App({ Component, pageProps }) {
  useTheme();
  return (
    <>
      <MetricsCode />
      <Component {...pageProps} />
    </>
  );
}
