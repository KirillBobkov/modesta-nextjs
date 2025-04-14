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
import rotate from "../assets/images/rotate.mp4";

const mainPageVideo = {
  link: rotate,
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
    seoContent: `Инновационные протезы верхних конечностей от российского производителя Модеста - 2024

Преимущества протезов нового поколения:
✓ Усовершенствованные интеллектуальные системы управления 2024 года
✓ Новейшие высокоточные сенсоры и датчики движения
✓ Эргономичный дизайн с учетом современной биомеханики
✓ Расширенные возможности индивидуальной настройки

Ключевые обновления 2024:
• Улучшенная система адаптивного захвата
• Интуитивное управление с обратной связью
• Увеличенная износостойкость компонентов
• Расширенная программа гарантийной поддержки

Последние технологические достижения:
• Инновационные композитные материалы
• Обновленные алгоритмы управления
• Усовершенствованная модульная конструкция
• Оптимизированное энергопотребление нового поколения

Актуальные модификации:
• Современные механические модели
• Передовые биоэлектрические системы
• Обновленная линейка детских протезов
• Кастомизированные решения

Расширенная поддержка:
• Экспертная настройка
• Комплексное обучение
• Оперативное обслуживание
• Гарантийное сопровождение

Социальные программы 2024:
• Обновленные программы ФСС
• Помощь в оформлении документации
• Комплексная реабилитация
• Профессиональная психологическая поддержка

#современныеПротезы2024 #инновационныеТехнологии #протезированиеРук #реабилитацияИнвалидов #российскиеТехнологии #медицинскиеИнновации #биомеханика #протезыБудущего`,
    title: "Современные протезы рук — Модеста",
    description: "Передовые протезы верхних конечностей российского производства. Инновационные технологии, доступные цены, содействие в бесплатном получении протеза.",
    keywords: "протезирование рук, современные протезы 2024, бионические технологии, протезы конечностей, модеста разработки",
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
