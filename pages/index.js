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
}

export default function MainPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  useScrollToLocation();

  const metaConfig = {
    pageTitle: "Инновационный протез, меняющий правила игры",
    seoContent: `Протез руки — Модеста
• Инновационный протез, меняющий правила игры
• Разрабатываем протезы верхних конечностей для восстановления функциональности
Преимущества протеза
• Эффективность
• Удобство в использовании
• Простое обслуживание
Продуктовая линейка
• Кисть: размеры "XS", "S", "M", "L", с фрикционным запястьем или без
• Тяговый протез: дизайн "МОДЕСТА 1.0", внешняя гильза из полиамида
• Биоэлектрический протез: в разработке, предзаказ
Технические характеристики
• Российское производство
• Функциональность: сменные кисти, блокировка захвата, настройка силы захвата, вибротактильная обратная связь
• Своевременное обслуживание
• Помощь в освоении протеза: программные решения, игровой опыт, обратная связь
Вопросы и ответы
• Для кого подходит "МОДЕСТА 1.0": для травм и врождённых дефектов верхней конечности
• Доступность протеза: сотрудничество с протезно-ортопедическими предприятиями, слепок, установка в регионе
• Поломка протеза: поддержка специалистов, ремонт, замена деталей
• Почему протез не копирует руку человека: эффективность, доступная стоимость, современный дизайн
• Минимальный возраст для протезирования: с двух лет
• Срок изготовления протеза: около месяца
• Разработка биоэлектрического протеза: зависит от технологических исследований
Затраты на протезирование
• Бесплатное предоставление по программе Фонда социального страхования
• Компенсация: приобретение за свои средства или беспроцентный займ с возмещением от ФСС
• Благотворительные фонды
Уникальность протезов "Модеста"
• Инновационность, технологичность, комфорт, эстетика
• Индивидуальные особенности и цели пользователя
Возможности протеза "МОДЕСТА 1.0"
• Захват и перемещение объектов различной формы и размера
• Расширение функциональных возможностей, самостоятельность и эффективность
Миссия компании
• Создание качественных функциональных протезов
• Обеспечение первоклассного сервисного обслуживания`,
    title: "Протез руки — Модеста",
    description: "Официальный сайт компании Модеста. Разрабатываем протезы для предплечья и кисти. Помогаем получить протез бесплатно",
    keywords: "протез руки разработка сво травма рука предплечье дизайн сколково курган модеста реабилитация протезирование",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager side="opacity">
        <PreviewBlock video={mainPageVideo} subTitle={headerContent.subTitle} title={headerContent.title} />
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
