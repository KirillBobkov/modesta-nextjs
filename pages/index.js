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

const mainPageVideo = {
  link: "/images/rotate_5.mp4",
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
    pageTitle: "Инновационные протезы верхних конечностей от Модеста",
    seoContent: `Современные протезы верхних конечностей

Ключевые особенности наших протезов:
✓ Инновационные технологические решения
✓ Максимальная восстановленная функциональность
✓ Эргономичный современный дизайн

Основные преимущества:
• Интуитивно понятное управление
• Надежность в повседневном использовании
• Индивидуальная адаптация под пользователя
• Профессиональное сопровождение

Характеристики изделий:
• Удобство использования
• Надежная работа
• Оптимальная цена

Российская компания МОДЕСТА создает инновационные протезы рук, которые объединяют практичность и современный стиль. Наши бионические протезы разработаны для улучшения повседневной жизни людей после ампутации.

Линейка продукции:
• Кистевые модули XS-L с выбором типа запястья
• Механические протезы МОДЕСТА 1.0 из прочного полиамида
• Биоэлектронные модели – открыт предзаказ

Технические характеристики:
• Соответствие российским стандартам
• Настройка силы захвата
• Система обратной связи
• Модульная конструкция
• Программы адаптации

Для кого подходят:
• Травмы верхних конечностей
• Врожденные особенности
• От 2 лет и старше
• Изготовление за 30 дней

Сервисная поддержка:
• Сеть сервисных центров
• Быстрый ремонт
• Наличие запчастей
• Консультации специалистов

Варианты приобретения:
• Через ФСС
• Рассрочка
• Сотрудничество с фондами
• Социальная поддержка

Уникальные особенности:
• Современная эстетика
• Надежность и доступность
• Персональный подход
• Полный спектр услуг

Достижения:
• Запатентованные технологии
• Признание экспертов
• Довольные пользователи
• Непрерывное развитие

Цель компании:
Создание качественных и доступных протезов, обеспечивающих полноценную жизнь людям с особенностями верхних конечностей.

Ключевые теги:
#протезыверхнихконечностей #бионика #медицинскиеизделия #реабилитация #протезированиерук #современныепротезы #российскиеразработки #медоборудование #восстановление #протезы МОДЕСТА`,
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
