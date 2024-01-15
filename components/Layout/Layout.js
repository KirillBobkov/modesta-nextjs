import Footer from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton";
import { useRouter } from "next/router";
import { useTheme } from "../../hooks/useTheme";
import Head from "next/head";
import { GetProthesisForm } from "../GetProthesisForm/GetProthesisForm";
import FeedbackButton from "../FeedbackButton/FeedbackButton";

const getMetaConfig = (pathname) => {
  if (pathname.includes("production")) {
    return {
      pageTitle: "Разработка эффективного протеза",
      title: "Модеста — О технологии производства и разработке протезов",
      description:
        "При разработке протезов рук мы сталкиваемся с множеством трудностей, связанных с обеспечением их функциональности, способности захвата, удобства использования и долговечности, и успешно их решаем.",
      keywords:
        "разработка технологии 3Д печать 3D печать дизайн сколково курган культеприёмная гильза клешня",
    };
  }
  if (pathname.includes("team")) {
    return {
      pageTitle: "Лучшие специалисты компании Модеста",
      title: "Модеста — Команда профессионалов",
      description:
        "Объединяя силу, стойкость и инновации, наша команда профессионалов, преданных своему делу, создает протезы, которые помогут вам вернуть вашу жизнь на свои рельсы. Мы здесь, чтобы помочь вам снова обрести независимость, улучшить качество вашей жизни и воплотить мечты в реальность.",
      keywords:
        "команда руководитель инженер дизанер программист робот конструктор научный руководитель",
    };
  }
  if (pathname.includes("info")) {
    return {
      pageTitle:
        "Протез для детей или для взрослых? Гарантии при получении протеза? Все ответы здесь",
      title: "Модеста — Всё, что нужно знать о получении протеза",
      description:
        "Все ответы на вопросы о протезировании. Мы собрали наиболее часто задаваемые вопросы и подготовили подробные ответы на них. Наше видео-сопровождение поможет вам лучше понять процессы протезирования. А ссылки на полезные ресурсы, предоставленные нами, помогут вам получить еще больше информации по этой теме.",
      keywords:
        "habr vc.ru dzen vk telegram youtube видео статьи о протезировании вопрос и ответы FAQ ",
    };
  }
  if (pathname.includes("buy")) {
    return {
      pageTitle:
        "Какие документы нужны чтобы получить протез бесплатно? Сколько стоит протез? Этапы получения протеза за счет государства? Все ответы здесь",
      title: "Модеста — Как получить протез руки бесплатно",
      description:
        "Вся необходимая информация о том, как получить протез, какие документы для этого нужны и какой порядок действий необходимо предпринять. Мы поможем вам на каждом этапе этого процесса. Не откладывайте свою мечту - начните менять свою жизнь уже сегодня!”",
      keywords:
        "постановление правительства инвалиды сво документы льготы пенсионерам получение ИПРА по государственной программе технические средства реабилитации (ТСР)",
    };
  }
  if (pathname.includes("roadmap")) {
    return {
      pageTitle:
        "Откуда появилась компания Модеста? Когда попали в Сколково? Как давно производим протезы? Все ответы здесь",
      title: "Модеста — Путь развития компании",
      description:
        "С самых первых дней нашей работы мы стремимся помочь людям вернуться к полноценной жизни. Мы создаём протезы, основываясь на новейших технологиях и исследованиях. И сегодня мы с уверенностью можем сказать, что наши усилия были не напрасны. Мы не останавливаемся на достигнутом и продолжаем развиваться, чтобы предлагать вам еще более качественные и удобные протезы. Наша история продолжается, и мы приглашаем вас стать ее частью!",
      keywords:
        "время стартап протезирование протезы временной путь история компании развитие сколково телемедфорум резиденты",
    };
  }
  return {
    pageTitle: "Инновационный протез, меняющий правила игры",
    title: "Модеста — Протез руки",
    description:
      "Официальный сайт компании Модеста. Разрабатываем протезы для предплечья и кисти. Помогаем получить протез бесплатно",
    keywords:
      "протез руки разработка сво травма рука предплечье дизайн сколково курган модеста реабилитация протезирование",
  };
};

export default function Layout({ children }) {
  const isMobile = useMediaQuery(`(max-width: 1079.88px)`);
  const router = useRouter();
  const { title, description, keywords, pageTitle } = getMetaConfig(
    router.pathname
  );
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon32x32.png" />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="/images/favicon32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon180x180.png"
        />
        <link rel="apple-touch-startup-image" href="/images/favicon32x32.png" />
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ display: "none" }}>
        <h1>{pageTitle}</h1>
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
