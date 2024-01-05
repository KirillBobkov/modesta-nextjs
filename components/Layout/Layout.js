import Footer from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton";
import { useRouter } from "next/router";
import Head from "next/head";
import { GetProthesisForm } from "../GetProthesisForm/GetProthesisForm";
import FeedbackButton from "../FeedbackButton/FeedbackButton";

const getMetaConfig = (pathname) => {
  if (pathname.includes("production")) {
    return {
      title: "Модеста - о разработке",
      description:
        "Разрабатывая протезы, мы решаем сложные задачи, связанные с функциональностью, хватательной силой, практичностью и долговечностью протезов.",
    };
  }
  if (pathname.includes("team")) {
    return {
      title: "Модеста - команда профессионалов",
      description:
        "Мы не стоим на месте, и постоянно повышаем свою квалификацию.",
        keywords:
        "команда руководитель инженер дизанер программист робот конструктор научный руководитель",
    };
  }
  if (pathname.includes("info")) {
    return {
      title: "Модеста - узнайте больше о нас",
      description:
        "На этой странице вы можете найти интересные статьи и видеоматериалы о компании Модеста.",
      keywords:
        "habr vc.ru dzen vk telegram youtube видео статьи о протезировании вопрос и ответы FAQ ",
    };
  }
  if (pathname.includes("buy")) {
    return {
      title: "Модеста - получить протез",
      description: "Узнайте условия получения протеза бесплатно.",
      keywords:
        "постановление правительства инвалиды сво документы льготы пенсионерам получение ИПРА по государственной программе технические средства реабилитации (ТСР)",
    };
  }
  if (pathname.includes("roadmap")) {
    return {
      title: "Модеста - путь развития компании",
      description:
        "На этой странице вы можете узнать все этапы развития компании Модеста.",
      keywords:
        "разработка технологии 3Д печать 3D печать дизайн сколково курган культеприёмная гильза клешня",
    };
  }
  return {
    title: "Модеста - протезы рук",
    description:
      "Официальный сайт компании Модеста. Разрабатываем протезы для предплечья и кисти.",
    keywords:
      "протез руки разработка сво травма рука предплечье дизайн сколково курган модеста реабилитация протезирование",
  };
};

export default function Layout({ children }) {
  const isMobile = useWindowWidth() <= 1080;
  const router = useRouter();
  const { title, description, keywords } = getMetaConfig(router.pathname);

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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="ООО МОДЕСТА" />
        <meta name="copyright" content="ООО МОДЕСТА" />
        <meta httpEquiv="Reply-to" content="blagobionic44@gmail.com" />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index,follow" />
        <meta property="og:url" content="https://modesta.tech" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://modesta.tech/sitepreview.jpg"
        />
        <link rel="icon" href="/images/favicon.ico" />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="/images/favicon32x32.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="apple-touch-icon" href="/images/favicon32x32.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon180x180.png"
        />
        <link rel="apple-touch-startup-image" href="/images/favicon32x32.png" />
      </Head>
      <div style={{ display: 'none'}} itemScope itemType="http://schema.org/ImageObject">
        <h1 itemProp="name">{title}</h1>
        <img src="/images/sitepreview.jpg" itemProp="contentUrl" alt="Инновационный протез" />
        <span itemProp="description">{description}</span>
    </div>
      <Navigation isMobile={isMobile} />
      <main>{children}</main>
      <GetProthesisForm />
      <Footer />
      <ScrollTopButton />
      <FeedbackButton />
    </>
  );
}
