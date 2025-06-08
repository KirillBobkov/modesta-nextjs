import Layout from "../components/Layout";
import rotate_poster from "../assets/images/rotate__poster.jpg";
import { PreviewBlock } from "../components/PreviewBlock";
import { AdvantagesBlock } from "../components/AdvantagesBlock";
import { ReplacementBlock } from "../components/ReplacementBlock";
import { ProblemsBlock } from "../components/ProblemsBlock";
import { Questions } from "../components/Questions";
import { TechBlock } from "../components/TechBlock";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { useRouter } from "next/router.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useEffect, useState } from "react";
import { ProductsGrid } from "../components/Products.jsx";
import main_preview from "../assets/images/main_preview.mp4";

const mainPageVideo = {
  link: main_preview,
  thumbnailUrl: rotate_poster.src,
  name: "Превью протеза руки человека",
  uploadDate: new Date("February 12, 2025").toISOString(),
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
    seoContent: `Инновационные протезы верхних конечностей Модеста 2025 - революция в протезировании

Современные решения для полноценной жизни:
✓ Биоэлектрические протезы с нейросетевым управлением
✓ Механические протезы с адаптивным захватом
✓ Детские протезы с регулируемым ростом
✓ Спортивные протезы для активного образа жизни

Технологические преимущества 2025:
• Умные сенсоры с машинным обучением
• Энергоэффективные системы питания
• Износостойкие композитные материалы
• Модульная конструкция для быстрой замены

Функциональные возможности:
• Тонкая моторика и точный захват
• Интуитивное управление жестами
• Силовая обратная связь
• Водонепроницаемость IP67

Программы поддержки:
• Бесплатное протезирование по ФСС
• Расширенная гарантия 3 года
• Круглосуточная техническая поддержка
• Регулярное обновление ПО

Реабилитационные услуги:
• Персональный инструктаж
• Адаптационная программа
• Психологическая поддержка
• Социальная интеграция

#протезы2025 #бионика #реабилитация #инновации #медицина #технологии #протезирование #модеста`,
    title: "Современные протезы рук — Модеста",
    description: "Передовые протезы верхних конечностей российского производства. Инновационные технологии, доступные цены, содействие в бесплатном получении протеза.",
    keywords: "протезирование рук, современные протезы 2025, бионические технологии, протезы конечностей, модеста разработки",
  };

  return (
    <Layout
      metaConfig={metaConfig}
      popupOpened={popupOpened}
      setOpened={setOpened}
    >
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

    </Layout>
  );
}
