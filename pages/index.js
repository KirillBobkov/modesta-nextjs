import Layout from "../components/Layout/Layout";
import rotate_poster from "../public/images/rotate__poster.jpg";
import { VisibilityManager } from "../components/VisibilityManager";
import { PreviewBlock } from "../components/PreviewBlock/PreviewBlock";
import { AdvantagesBlock } from "../components/AdvantagesBlock/AdvantagesBlock";
import { ReplacementBlock } from "../components/ReplacementBlock/ReplacementBlock";
import { ProblemsBlock } from "../components/ProblemsBlock/ProblemsBlock";
import { Questions } from "../components/Questions/Questions";
import { TechBlock } from "../components/TechBlock/TechBlock";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { headerContent } from "../content/header.js";
import { useRouter } from "next/router.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useEffect, useState } from "react";
import { ProductsGrid } from "../components/Products/Products.jsx";

const mainPageVideo = {
  link: "/images/rotate_5.mp4",
  thumbnailUrl: rotate_poster.src,
  name: "Превью протеза руки человека",
  uploadDate: new Date("February 12, 2024").toISOString(),
  poster: rotate_poster.src,
};

export default function MainPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  useScrollToLocation();

  const metaConfig = {
    pageTitle: "Инновационный протез, меняющий правила игры",
    seoContent: `
Инновационные протезы верхних конечностей МОДЕСТА: современные решения для восстановления подвижности

Российская компания МОДЕСТА разрабатывает передовые протезы рук, сочетающие функциональность и стильный дизайн. Наши бионические протезы созданы для повышения качества жизни людей с ампутированными конечностями.

Особенности наших протезов:
✓ Эргономичная конструкция
✓ Продуманная механика движений
✓ Простота в эксплуатации и обслуживании

Ассортимент продукции:
• Сменные кистевые модули размеров XS-L с возможностью выбора типа запястья
• Механические протезы МОДЕСТА 1.0 из высокопрочного полиамида
• Биоэлектронные модели – принимаем предварительные заказы

Технические преимущества:
• Производство по российским стандартам
• Возможность регулировки силы хвата
• Встроенная тактильная обратная связь
• Модульная система компонентов
• Обучающие программы адаптации

Кому подходят наши решения:
• Приобретенные травмы верхних конечностей
• Врожденные дефекты развития
• Возраст от 2 лет
• Возможность изготовления за 30 дней

Гарантии и поддержка:
• Авторизованные сервисные центры в регионах
• Оперативное устранение неисправностей
• Доступные комплектующие
• Помощь специалистов в освоении устройства

Условия приобретения:
• Компенсация через ФСС
• Рассрочка платежа
• Партнерство с благотворительными фондами
• Программа социальной поддержки

Преимущества протезов МОДЕСТА:
• Современный дизайн вместо имитации биологической руки
• Высокая надежность при доступной цене
• Индивидуальный подход к каждому клиенту
• Полный спектр сервисных услуг

Наши достижения:
• Технологические патенты
• Награды инновационных конкурсов
• Положительные отзывы пользователей
• Постоянное совершенствование продукции

Миссия компании:
Разработка и производство доступных протезов высокого качества, обеспечивающих комфортную и полноценную жизнь людям с ограниченными возможностями верхних конечностей.

Ключевые запросы для поисковой оптимизации:
#протезырук #бионическиепротезы #медицинскиепротезы #реабилитация #протезированиеконечностей #инновационныепротезы #отечественныепротезы #медицинскуютехника #восстановлениедвижений #протезы МОДЕСТА`,
    title: "Протез руки — Модеста",
    description:
      "Официальный сайт компании Модеста. Разрабатываем протезы для предплечья и кисти. Помогаем получить протез бесплатно",
    keywords:
      "протез руки разработка сво травма рука предплечье дизайн сколково курган модеста реабилитация протезирование",
  };

  return (
    <Layout
      metaConfig={metaConfig}
      popupOpened={popupOpened}
      setOpened={setOpened}
    >
      <VisibilityManager side="opacity">
        <PreviewBlock
          video={mainPageVideo}
          subTitle={headerContent.subTitle}
          title={headerContent.title}
        />
        <AdvantagesBlock />
        <ProductsGrid setOpened={setOpened} />
        <TechBlock />
        <ReplacementBlock />
        <ProblemsBlock />
        <Questions />
      </VisibilityManager>
    </Layout>
  );
}
