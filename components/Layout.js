import Footer from "./Footer.jsx";
import { Navigation } from "./Navigation/Navigation.jsx";
import ScrollTopButton from "./ScrollTopButton.jsx";
import { useRouter } from "next/router";
import { useTheme } from "../hooks/useTheme";
import Head from "next/head";
import NewForm from "./NewForm/NewForm.jsx";
import FeedbackButton from "./FeedbackButton.jsx";
import { Montserrat } from "next/font/google";
import favicon32x32 from "../assets/images/favicon32x32.png";
import favicon180x180 from "../assets/images/favicon180x180.png";
import favicon from "../assets/images/favicon.ico";
// import { ChatWidget } from "./ChatWidget/ChatWidget";

const montserrat = Montserrat({
  weight: ["400", "800"],
  subsets: ["cyrillic"],
  display: "swap",
});

export default function Layout({
  children,
  metaConfig,
  setOpened,
  popupOpened,
}) {
  const router = useRouter();
  const { title, description, keywords, seoContent } = metaConfig;

  useTheme();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, user-scalable=0"
        />
        <meta name="yandex-verification" content="1b0b5dca04ea34dc" />
        <meta
          name="google-site-verification"
          content="PvZcxDJwhregM2PNoehmEb_D771oqFCUgP9lbuU-MqU"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="ООО Модеста" />
        <meta name="copyright" content="ООО Модеста" />
        <meta httpEquiv="Reply-to" content="blagobionic44@gmail.com" />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:url"
          content={`https://modesta.tech${router.pathname}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://modesta.tech/images/sitepreview.jpg"
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="icon" href={favicon.src} />
        <link rel="apple-touch-icon" href={favicon32x32.src} />
        <link rel="apple-touch-icon" sizes="32x32" href={favicon32x32.src} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={favicon180x180.src}
        />
        <link rel="apple-touch-startup-image" href={favicon32x32.src} />
      </Head>
      <div className={montserrat.className}>
        <div style={{ display: "none" }}>
          <p>{seoContent}</p>
        </div>
        <Navigation />
        <main>{children}</main>
        <NewForm popupOpened={popupOpened} setOpened={setOpened} />
        <Footer />
        <ScrollTopButton />
        <div
          style={{
            zIndex: 1,
            position: "fixed",
            bottom: "20px",
            right: "15px",
          }}
        >
          <FeedbackButton
            onClick={() => {
              setOpened(true);
              document.documentElement.classList.add("overflow-hidden");
            }}
          />
        
        </div>
          {/* <ChatWidget /> */}
      </div>
    </>
  );
}
