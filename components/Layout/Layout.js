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
      title: "Модеста — О разработке протезов и технологии производства",
      description:
        "Разрабатывая протезы, мы решаем сложные задачи, связанные с функциональностью, хватательной силой, практичностью и долговечностью протезов.",
      keywords:
        "разработка технологии 3Д печать 3D печать дизайн сколково курган культеприёмная гильза клешня",
    };
  }
  if (pathname.includes("team")) {
    return {
      title: "Модеста — Команда профессионалов",
      description:
        "Объединяя силу, стойкость и инновации, наша команда профессионалов, преданных своему делу, создает протезы, которые помогут вам вернуть вашу жизнь на свои рельсы. Мы здесь, чтобы помочь вам снова обрести независимость, улучшить качество вашей жизни и воплотить мечты в реальность.",
      keywords:
        "команда руководитель инженер дизанер программист робот конструктор научный руководитель",
    };
  }
  if (pathname.includes("info")) {
    return {
      title: "Модеста — Всё, что нужно знать о протезировании",
      description:
        "Все ответы на вопросы о протезировании. Мы собрали наиболее часто задаваемые вопросы и подготовили подробные ответы на них. Наше видео-сопровождение поможет вам лучше понять процессы протезирования. А ссылки на полезные ресурсы, предоставленные нами, помогут вам получить еще больше информации по этой теме.",
      keywords:
        "habr vc.ru dzen vk telegram youtube видео статьи о протезировании вопрос и ответы FAQ ",
    };
  }
  if (pathname.includes("buy")) {
    return {
      title: "Модеста — Как получить протез руки",
      description: "Вся необходимая информация о том, как получить протез, какие документы для этого нужны и какой порядок действий необходимо предпринять. Мы поможем вам на каждом этапе этого процесса. Не откладывайте свою мечту - начните менять свою жизнь уже сегодня!”",
      keywords:
        "постановление правительства инвалиды сво документы льготы пенсионерам получение ИПРА по государственной программе технические средства реабилитации (ТСР)",
    };
  }
  if (pathname.includes("roadmap")) {
    return {
      title: "Модеста — Путь развития компании",
      description:
        "С самых первых дней нашей работы мы стремимся помочь людям вернуться к полноценной жизни. Мы создаём протезы, основываясь на новейших технологиях и исследованиях. И сегодня мы с уверенностью можем сказать, что наши усилия были не напрасны. Мы не останавливаемся на достигнутом и продолжаем развиваться, чтобы предлагать вам еще более качественные и удобные протезы. Наша история продолжается, и мы приглашаем вас стать ее частью!",
      keywords:
        "время стартап протезирование протезы временной путь история компании развитие сколково телемедфорум резиденты",
    };
  }
  return {
    title: "Модеста — протезы рук",
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
        <meta name="google-site-verification" content="PvZcxDJwhregM2PNoehmEb_D771oqFCUgP9lbuU-MqU" />
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
        <link rel="shortcut icon" href="/images/favicon.ico"/>
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
      <div
        style={{ display: "none" }}
        itemScope
        itemType="http://schema.org/ImageObject"
      >
        <h1 itemProp="name">{title}</h1>
        <img
          src="/images/replacement_part_1_mobile.webp"
          itemProp="contentUrl"
          alt="Протез некопирующий руку человека"
        />
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
