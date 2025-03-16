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
    pageTitle: "Инновационные протезы верхних конечностей от Модеста",
    seoContent: `Передовые протезы для верхних конечностей

Отличительные характеристики протезов Модеста:
✓ Передовые технические решения
✓ Высокая степень восстановления функциональности
✓ Современный и эргономичный дизайн

Главные достоинства:
• Простое и понятное управление
• Стабильность в ежедневном использовании
• Персонализация под каждого пользователя
• Комплексное сопровождение специалистами

Особенности продукции:
• Комфорт при использовании
• Стабильная функциональность
• Доступная стоимость

Компания МОДЕСТА разрабатывает инновационные протезы рук, сочетающие функциональность и современную эстетику. Наши бионические решения созданы для повышения качества жизни после ампутации.

Ассортимент продукции:
• Кистевые модули размеров XS-L с различными типами запястья
• Механические протезы МОДЕСТА 1.0 из высокопрочного полиамида
• Биоэлектронные модели – доступен предзаказ

Технические параметры:
• Полное соответствие российским стандартам
• Индивидуальная настройка силы захвата
• Встроенная система обратной связи
• Модульная архитектура
• Программы индивидуальной адаптации

Целевая аудитория:
• Пациенты с травмами верхних конечностей
• Люди с врожденными особенностями
• Возрастная категория от 2 лет
• Срок изготовления до 30 дней

Техническая поддержка:
• Развитая сеть сервисных центров
• Оперативный ремонт
• Доступность запасных частей
• Профессиональные консультации

Способы приобретения:
• Оформление через ФСС
• Возможность рассрочки
• Взаимодействие с благотворительными фондами
• Программы социальной поддержки

Конкурентные преимущества:
• Эстетичный современный вид
• Сочетание надежности и доступности
• Индивидуальный подход к каждому случаю
• Комплексное обслуживание

Наши достижения:
• Запатентованные инновационные решения
• Высокая оценка профессионального сообщества
• Положительные отзывы пользователей
• Постоянное совершенствование технологий

Миссия компании:
Разработка и производство качественных и доступных протезов, обеспечивающих полноценную интеграцию в общество людям с особенностями верхних конечностей.

Ключевые хэштеги:
#протезированиеверхнихконечностей #бионическиетехнологии #медицинскиеустройства #реабилитационныесредства #протезыдлярук #инновационныепротезы #российскиетехнологии #медицинскоеоборудование #функциональноевосстановление #протезыМОДЕСТА`,
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
