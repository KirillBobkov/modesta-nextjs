import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout.js";
import { VideoWidget } from "../components/VideoWidget/VideoWidget.jsx";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { PreviewBlock } from "../components/PreviewBlock/PreviewBlock.jsx";
import { PhotoSliderBlock } from "../components/PhotoSliderBlock.jsx";
import Image from "next/image";
import AnimatedCounter from "../components/AnimatedCounter/AnimatedCounter.jsx";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";
import styles from "./robotics.module.css";

// Видео для preview блока
import roboticsPreviewVideo from "../assets/images/robot.mp4";
import processPreviewImage from "../assets/images/robot__poster.jpg";
import FeedbackButton from "../components/FeedbackButton/FeedbackButton.jsx";

// Технические характеристики робота
import robot_features_img_1 from "../assets/images/robot_features_1.jpg";
import robot_features_img_2 from "../assets/images/robot_features_2.jpg";
import robot_features_img_3 from "../assets/images/robot_features_3.jpg";
import robot_features_img_4 from "../assets/images/robot_features_4.jpg";

import robot_tech_img_1 from "../assets/images/robot_tech_img_1.jpg";
import robot_tech_img_2 from "../assets/images/robot_tech_img_2.jpg";
import robot_tech_img_3 from "../assets/images/robot_tech_img_3.jpg";
import robot_tech_img_4 from "../assets/images/robot_tech_img_4.jpg";
import robot_tech_img_6 from "../assets/images/robot_tech_img_6.jpg";
import robot_tech_img_7 from "../assets/images/robot_tech_img_7.jpg";
import robot_tech_img_8 from "../assets/images/robot_tech_img_8.jpg";
import robot_tech_img_9 from "../assets/images/robot_tech_img_9.jpg";

import robotics_slider_1 from "../assets/images/robotics_slider_1.jpg";
import robotics_slider_2 from "../assets/images/robotics_slider_2.jpg";
import robotics_slider_3 from "../assets/images/robotics_slider_3.jpg";
import robotics_slider_4 from "../assets/images/robotics_slider_4.jpg";
import robotics_slider_5 from "../assets/images/robotics_slider_5.jpg";
import robotics_slider_6 from "../assets/images/robotics_slider_6.jpg";

// Характеристики на 01.04.2026
const robotTechSpecs = [
  {
    img: robot_tech_img_4,
    text: "Максимальная высота",
    key: "140",
    key_param: "см",
  },
  {
    img: robot_tech_img_2,
    text: "Сенсорный дисплей",
    key: "10.1",
    key_param: "дюймов",
  },
  {
    img: robot_tech_img_3,
    text: `Максимальная
скорость`,
    key: "5",
    key_param: "км/ч",
  },
  {
    img: robot_tech_img_1,
    text: "Ширина",
    key: "53",
    key_param: "см",
  },
  {
    img: robot_tech_img_9,
    text: "Глубина",
    key: "63",
    key_param: "см",
  },
  {
    img: robot_tech_img_2,
    text: "Время работы",
    key: "10-12",
    key_param: "ч",
  },
  {
    img: robot_tech_img_6,
    text: "Время зарядки",
    key: "5",
    key_param: "ч",
  },
  {
    img: robot_tech_img_8,
    text: "Степеней свободы",
    key: "6",
    key_param: "макс",
  },
  {
    img: robot_tech_img_7,
    text: "Динамики",
    key: "50",
    key_param: "Вт х 2",
  },
];

const robotCapabilities = {
  title: "Возможности робота",
  blocks: [
    {
      img: robot_features_img_1,
      alt: "Подвижные руки-манипуляторы",
      title: "Подвижные руки-манипуляторы",
      description: `Робот оснащен подвижными руками-манипуляторами для взаимодействия с различными предметами.
      Возможность установки активных рук для более сложных задач взаимодействия с окружающей средой.`,
    },
    {
      img: robot_features_img_2,
      title: "Автономность и управление",
      alt: "Автономный и ручной режимы управления",
      description: `Робот может работать в автономном режиме, самостоятельно выполняя задачи,
      или в режиме ручного управления для выполнения специфических операций.
      Время работы от батареи 10-12 часов, время зарядки до 5 часов.`,
    },
    {
      img: robot_features_img_3,
      alt: "Интеллектуальные возможности",
      title: "Интеллектуальные возможности",
      description: `Камера с функцией распознавания лиц (в разработке).
      Возможность взаимодействия с людьми и ответы на вопросы.
      Интеллектуальная система навигации и принятия решений.`,
    },
    {
      img: robot_features_img_4,
      title: "Мобильность и надежность",
      alt: "Мобильная платформа",
      description: `Мобильная платформа позволяет роботу перемещаться со скоростью до 5 км/ч.
      Надежная конструкция обеспечивает стабильную работу в различных условиях.
      Простое техническое обслуживание и модернизация компонентов.`,
    },
  ],
};

// Видео о робототехнике
const roboticsVideos = [
  {
    link: "https://vkvideo.ru/video_ext.php?oid=-131964440&id=456239170&hash=1590d0b4562f1981",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8711623936750&idx=0&type=39&tkn=FLPLsKicgLY9zBnXwQ1RErpn4pk&fn=vid_w",
    name: "Резидент «Модеста» , финалист акселератора «Инновации в реабилитации», разработал робота-помощника. ",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
  {
    link: "https://vk.com/video_ext.php?oid=-131964440&id=456239166&hash=fc663c5077ef0f9a",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8312906451580&idx=5&type=39&tkn=Jb20_zJFYsoEtPthHikZTlWD2Y0&fn=vid_t",
    name: "Выставка в Москве",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
  {
    link: "https://vk.com/video_ext.php?oid=-131964440&id=456239167&hash=79dd04621aae9833",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8300060674782&idx=10&type=39&tkn=H4Eq7W3V4Uqv28H9-daHjP5ezWc&fn=vid_w",
    name: "Приветствие от Робота Вертера команды Фадвис",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
  {
    link: "https://vk.com/video_ext.php?oid=-131964440&id=456239168&hash=5f2ef468ca4d3028",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8624778840665&idx=0&type=39&tkn=03cQs12-A5jLrxnhsK2cUyxZoWw&fn=vid_t",
    name: "Робот пользуется популярностью",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
  {
    link: "https://vk.com/video_ext.php?oid=-131964440&id=456239164&hash=cbaa67e454aaab97",
    thumbnailUrl:
      "https://sun9-70.userapi.com/impg/HGTmBNktBDf5sg_hYLlG8wtT7oupdK2yzHztaw/fpf5LMagkBE.jpg?size=320x213&quality=95&sign=ae46d4ca02a3a2d0d1da559148f243e9&c_uniq_tag=pnyt5IQV01NyYEx8JHYxz0GhVkeMNtVZ3Aiz7mGcJXE&type=video_thumb",
    name: "Итоги марафона РОБОТ ЗА 100 ДНЕЙ. Ожидание VS реальность",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
  {
    link: "https://vk.com/video_ext.php?oid=-131964440&id=456239161&hash=503ab9925795acb7",
    thumbnailUrl:
      "https://sun9-27.userapi.com/impg/_iNV9tOO1_04mFmxREy7AE98rvHSM-dNiJf2hg/gSo8kQYQaPE.jpg?size=320x240&quality=95&sign=8e5b70c6e8dbb1556bee82ce2ba07022&c_uniq_tag=y71TWnM0HTJn6KMzXf0v3tbKwlawNwrV6EoL62j0phA&type=video_thumb",
    name: "День 96-100. Финальный рывок к завершению челленджа",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
  {
    link: "https://vk.com/video_ext.php?oid=-131964440&id=456239160&hash=07979013409c74aa",
    thumbnailUrl:
      "https://sun9-10.userapi.com/impg/RuzSxUZSMpPl_715xUtDjoR8qKmEhgBTLwHtsQ/DzvTx-kA1JI.jpg?size=720x401&quality=95&sign=7ca009165a88564c6e8d4f0eb14e3487&c_uniq_tag=TMU3tVfPMGfVh5_0PwV6jEJ48x8pZV5f-YHXK1fiiXQ&type=video_thumb",
    name: "8-й выпуск МАРАФОНА: Создание робота-реабилитолога Вертера (День 91–95)",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
  {
    link: "https://vk.com/video_ext.php?oid=-131964440&id=456239156&hash=85de781b40aec891",
    thumbnailUrl:
      "https://sun9-27.userapi.com/impg/mwvj_B3ihYXDEAtfkgvEwGQ6-xJ2MAoEIq716w/DaW2WjMwCYA.jpg?size=320x179&quality=95&sign=c436c92b51ae68a8097defa92f373e00&c_uniq_tag=tifD4inxWpWsCURN4DDhdnTA1IF3WSCPUP7PRySyDD0&type=video_thumb",
    name: "Что мы поняли за 90 дней о роботах",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
  {
    link: "https://vk.com/video_ext.php?oid=-131964440&id=456239155&hash=92c1e6b94227adcb",
    thumbnailUrl:
      "https://sun9-39.userapi.com/impg/RuhJD19AQpERU1_GOxboIxt1yP_2fg9dQQBYPA/mcvRehbs8gA.jpg?size=320x213&quality=95&sign=64aff5b6a14ce303238c243460cc1a33&c_uniq_tag=Ah_2vU7gz4HoHdm0mLIMrZnxAtQv0nRM3SeXyaDBsHk&type=video_thumb",
    name: "Делаем робота за 100 дней. Сборка, пайка, программирование",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
  {
    link: "https://vk.com/video_ext.php?oid=-131964440&id=456239154&hash=f7eca8c8efe3c724",
    thumbnailUrl:
      "https://sun7-18.userapi.com/impg/Eszq9_lVpNWCx1K_rJ1b4zywgm9W2-hvsMHCGg/xjBFCFS0Cwk.jpg?size=320x213&quality=95&sign=802709d3a5691e46f624270ab65e2dd8&c_uniq_tag=aXzmSqWjYi74bdmyezwHVLJqpxCmqMxKxgD3BOi2kE8&type=video_thumb",
    name: "МИР, ТРУД, РОБОТОТЕХНИКА. Как команда МОДЕСТА собирает робота",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
  {
    link: "https://vk.com/video_ext.php?oid=-131964440&id=456239152&hash=920d0223ce99bef1",
    thumbnailUrl:
      "https://sun9-72.userapi.com/impg/7q81biVLd7zcA2JkCWDjkU9Aa-duVH3xw9DV0Q/Q7TfDWw73cY.jpg?size=320x213&quality=95&sign=48bf01b83ab7c2c8db4a5cd4d9ef9306&c_uniq_tag=CJDMBSE5iFpHqNQACuGDAS0kJQTtKHs3BV2LVdMAg-A&type=video_thumb",
    name: "Как создать робота-помощника за 100 дней",
    uploadDate: new Date("October 03, 2024").toISOString(),
  },
];

// Видео контент для PreviewBlock
const roboticsPreviewVideoData = {
  name: "Разработка робототехнических решений",
  uploadDate: new Date("2024-01-15").toISOString(),
  thumbnailUrl: processPreviewImage.src,
  poster: processPreviewImage.src,
  link: roboticsPreviewVideo,
};

// Компонент технических характеристик робота
const RobotTechBlock = () => {
  return (
    <VisibilityManager className={styles.techBlock}>
      <h2
        className={styles.techBlockTitle}
        id="tech"
      >
        Технические характеристики
      </h2>
      <ul className={styles.techBlockList}>
        {robotTechSpecs.map((item, i) => {
          return <RobotTechBlockItem key={i} item={item} i={i} />;
        })}
      </ul>
    </VisibilityManager>
  );
};

// Компонент одного блока технических характеристик
const RobotTechBlockItem = ({ item, i }) => {
  const [loaded, setLoaded] = useState(false);

  const imageClassName = loaded
    ? styles.techBlockItemImage + " " + styles.techBlockItemImageLoaded
    : styles.techBlockItemImage;

  return (
    <VisibilityManager
      as="li"
      className={styles.techBlockItem}
    >
      <Image
        itemProp="contentUrl"
        className={imageClassName}
        src={item.img.src}
        alt={`Характеристика #${i}`}
        fill
        onLoad={() => setLoaded(true)}
      />
      <div className={styles.techBlockItemContent}>
        <span className={styles.techBlockItemText}>
          {item.text} <br />
          <span className={styles.techBlockItemValue}>
            <AnimatedCounter start={0} end={parseInt(item.key)} />
          </span>
          <span className={styles.techBlockItemParam}>
            {item.key_param}
          </span>
        </span>
      </div>
    </VisibilityManager>
  );
};

// Компонент возможностей робота
const RobotCapabilitiesBlock = () => {
  return (
    <div className={styles.capabilitiesBlock}>
      <VisibilityManager
        as="h2"
        className={styles.capabilitiesTitle}
        id="capabilities"
      >
        {robotCapabilities.title}
      </VisibilityManager>
      <VisibilityManager as="ul">
        {robotCapabilities.blocks.map((capability, i) => {
          const capabilityClassName = i % 2 === 1
            ? styles.capability + " " + styles.capabilityEven
            : styles.capability;
          return <Capability key={i} capability={capability} className={capabilityClassName} />;
        })}
      </VisibilityManager>
    </div>
  );
};

// Компонент одной возможности
const Capability = ({ capability, className }) => {
  const [loaded, setLoaded] = useState(false);

  const imageClassName = loaded
    ? styles.capabilityImage + " " + styles.capabilityImageLoaded
    : styles.capabilityImage;

  return (
    <VisibilityManager
      as="li"
      itemType="http://schema.org/ImageObject"
      className={className}
      id="capability"
    >
      <Image
        itemProp="contentUrl"
        className={imageClassName}
        src={capability.img}
        alt={capability.alt}
        width={400}
        height={300}
        onLoad={() => setLoaded(true)}
      />
      <div className={styles.capabilityContent}>
        <h3
          itemProp="name"
          className={styles.capabilityTitle}
        >
          {capability.title}
        </h3>
        <p
          itemProp="description"
          className={styles.capabilityDescription}
        >
          {capability.description}
        </p>
      </div>
    </VisibilityManager>
  );
};

export default function Robotics() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    seoContent: `Модеста — инновационные робототехнические решения 2026

Наши роботы и их возможности:
✓ Максимальная высота 140 см — удобен для взаимодействия
✓ 10,1-дюймовый сенсорный дисплей для интуитивного управления
✓ Скорость передвижения до 5 км/ч
✓ Время работы 10-12 часов от одной зарядки

Технические характеристики:
• Подвижные руки-манипуляторы для точной работы
• До 6 степеней свободы
• Динамики 2 х 50 Вт для голосового общения
• Камера с распознаванием лиц (в разработке)

Габариты:
• Высота: 140 см
• Ширина: 53 см
• Глубина: 63 см

Режимы работы:
• Автономный режим для самостоятельной работы
• Ручное управление для специальных задач
• Взаимодействие с людьми и ответы на вопросы
• Интеллектуальная навигация в пространстве

Применение:
• Помощь в медицинской реабилитации
• Образовательные программы
• Исследовательские проекты
• Коммерческое использование

#модестаРоботы #робототехника2026 #инновацииВРоботехнике #российскиеРоботы #медицинскиеРоботы #образовательныеРоботы`,
    title: "Робототехника | Модеста - Инновационные роботы для взаимодействия",
    description:
      "Современные роботы от Модеста: высота 140 см, 10,1-дюймовый дисплей, скорость 5 км/ч, автономная работа 10-12 часов. Подвижные руки-манипуляторы и интеллектуальные возможности.",
    keywords:
      "роботы модеста, робототехника россия, медицинские роботы, образовательные роботы, автономные роботы, роботы манипуляторы, интеллектуальные роботы",
  };

  return (
    <Layout
      metaConfig={metaConfig}
      popupOpened={popupOpened}
      setOpened={setOpened}
    >
      <main className={styles.main}>
        {/* Preview блок с видео */}
        <PreviewBlock
          video={roboticsPreviewVideoData}
          title="Робототехника"
          subTitle="Инновационные робототехнические решения для взаимодействия с людьми.
Автономные роботы с передовыми технологиями для медицины, образования и исследований."
        />
        {/* Возможности робота */}
        <RobotCapabilitiesBlock />

        <div className={styles.feedbackButtonWrapper}>
          <FeedbackButton
            classes={styles.feedbackButton}
            onClick={setOpened}
            text={"Оформить Предзаказ"}
            withIcon={false}
          />
        </div>

        {/* Технические характеристики */}
        <RobotTechBlock />
        {/* Видео блок */}

        <PhotoSliderBlock
          title="Выставка «Надежда на технологии»"
          desktopImages={[
            robotics_slider_1,
            robotics_slider_2,
            robotics_slider_3,
            robotics_slider_4,
            robotics_slider_5,
            robotics_slider_6,
          ]}
          mobileImages={[
            robotics_slider_1,
            robotics_slider_2,
            robotics_slider_3,
            robotics_slider_4,
            robotics_slider_5,
            robotics_slider_6,
          ]}
          id="photo-gallery"
        />

        <VideoWidget
          title="Робототехнические разработки"
          description="Видео о процессе создания и возможностях наших роботов"
          videos={roboticsVideos}
        />
      </main>
    </Layout>
  );
}
