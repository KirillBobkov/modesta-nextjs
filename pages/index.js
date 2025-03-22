import Layout from "../components/Layout/Layout";
import rotate_poster from "../assets/images/rotate__poster.jpg";
import { VisibilityManager } from "../components/VisibilityManager";
import { PreviewBlock } from "../components/PreviewBlock/PreviewBlock";
import { AdvantagesBlock } from "../components/AdvantagesBlock/AdvantagesBlock";
import { ReplacementBlock } from "../components/ReplacementBlock/ReplacementBlock";
import { ProblemsBlock } from "../components/ProblemsBlock/ProblemsBlock";
import { Questions } from "../components/Questions/Questions";
import { TechBlock } from "../components/TechBlock/TechBlock";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { useRouter } from "next/router.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useEffect, useState } from "react";
import { ProductsGrid } from "../components/Products/Products.jsx";
import rotate_5 from "../assets/images/rotate_5.mp4";

const mainPageVideo = {
  link: rotate_5,
  thumbnailUrl: rotate_poster.src,
  name: "Превью протеза руки человека",
  uploadDate: new Date("February 12, 2024").toISOString(),
  poster: rotate_poster.src,
};

export const headerContent = {
  title: "Протез для жизни",
  subTitle: `Разрабатываем протезы верхних конечностей,
    позволяющие восстановить утерянную функциональность`,
};

export default function MainPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  useScrollToLocation();

  const metaConfig = {
    seoContent: `Инновационные протезы верхних конечностей от российского производителя

Преимущества протезов Модеста:
✓ Интеллектуальные системы управления нового поколения
✓ Высокоточные сенсоры и датчики движения
✓ Эргономичный дизайн с учетом биомеханики
✓ Индивидуальная настройка под пользователя

Ключевые характеристики:
• Адаптивная система захвата предметов
• Интуитивное управление протезом
• Повышенная износостойкость компонентов
• Расширенная гарантийная поддержка

Технологические достижения:
• Применение композитных материалов
• Инновационные алгоритмы управления
• Модульная конструкция для удобства обслуживания
• Оптимизированное энергопотребление

Доступные модификации:
• Базовые механические модели
• Продвинутые биоэлектрические системы
• Специализированные детские протезы
• Индивидуальные решения

Сервисная поддержка:
• Профессиональная настройка
• Обучение использованию
• Техническое обслуживание
• Гарантийный ремонт

Социальная значимость:
• Доступность через программы ФСС
• Содействие в оформлении документов
• Реабилитационное сопровождение
• Психологическая поддержка

#современныеПротезы #инновационныеТехнологии #протезированиеРук #реабилитацияИнвалидов #российскиеРазработки #медицинскиеИнновации #биомеханика #протезыБудущего`,
    title: "Современные протезы рук — Модеста",
    description: "Передовые протезы верхних конечностей российского производства. Инновационные технологии, доступные цены, содействие в бесплатном получении протеза.",
    keywords: "протезирование рук, современные протезы, бионические технологии, протезы конечностей, модеста разработки",
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
