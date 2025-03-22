import Layout from "../components/Layout/Layout";
import React, { useEffect, useState } from "react";

import { ProductionBlock } from "../components/ProductionBlock/ProductionBlock.jsx";
import { PreviewBlock } from "../components/PreviewBlock/PreviewBlock.jsx";
import { MozaicBlock } from "../components/MozaicBlock/MozaicBlock.jsx";
import { QuoteBlock } from "../components/QuoteBlock/QuoteBlock.jsx";

import process__poster from "../assets/images/process__poster.webp";
import workingProcess1 from "../assets/images/working_process1.jpg";
import workingProcess2 from "../assets/images/working_process2.jpg";
import workingProcess3 from "../assets/images/working_process3.jpg";
import workingProcess4 from "../assets/images/working_process4.jpg";
import workingProcess5 from "../assets/images/working_process5.jpg";
import workingProcess6 from "../assets/images/working_process6.jpg";
import workingProcess7 from "../assets/images/working_process7.jpg";
import workingProcess8 from "../assets/images/working_process8.jpg";
import workingProcess9 from "../assets/images/working_process9.jpg";

import workingProcess1_2 from "../assets/images/working_process_2_1.jpg";
import workingProcess2_2 from "../assets/images/working_process_2_2.jpg";
import workingProcess3_2 from "../assets/images/working_process_2_3.jpg";
import workingProcess4_2 from "../assets/images/working_process_2_4.jpg";
import workingProcess5_2 from "../assets/images/working_process_2_5.jpg";
import workingProcess6_2 from "../assets/images/working_process_2_6.jpg";
import workingProcess7_2 from "../assets/images/working_process_2_7.jpg";
import workingProcess8_2 from "../assets/images/working_process_2_8.jpg";
import workingProcess9_2 from "../assets/images/working_process_2_9.jpg";
import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { useRouter } from "next/router.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import process from "../assets/images/process.mp4";

const secondMozaicImages = [
  workingProcess1,
  workingProcess2,
  workingProcess3,
  workingProcess4,
  workingProcess5,
  workingProcess6,
  workingProcess7,
  workingProcess8,
  workingProcess9,
];

const firstMozaicImages = [
  workingProcess1_2,
  workingProcess2_2,
  workingProcess3_2,
  workingProcess4_2,
  workingProcess5_2,
  workingProcess6_2,
  workingProcess7_2,
  workingProcess8_2,
  workingProcess9_2,
];

// цитата Ильи
export const quoteContent = {
   title: "Философия",
   author: "Илья Иванов, дизайнер протезов",
   quote: `«Вдохновением для меня послужили автомобильная пластика и бионический дизайн. Дизайн Модеста – это искусство воплощения функциональности, качества и эстетики. Вся суть лежит в ярко выраженных деталях, придающих форме привлекательный вид. Модеста – это шаг вперёд, к более функциональным, стильным и эффективным протезам, которые вписываются в современный облик и образ жизни людей.»`,
 };
 


const productionPageVideo = {
  link: process,
  thumbnailUrl: process__poster.src,
  name: "Процесс создания протеза руки",
  uploadDate: new Date("February 12, 2024").toISOString(),
  poster: process__poster.src,
};

export default function ProductionPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    seoContent: `Высокотехнологичное производство протезов Модеста

Производственные инновации:
✓ Роботизированные системы проектирования
✓ Аддитивные технологии печати
✓ Автоматизированный контроль качества
✓ Умные производственные линии

Технологический процесс:
• Цифровое моделирование компонентов
• Прецизионная 3D-печать деталей
• Многоступенчатый контроль качества
• Автоматизированная сборка узлов

Материалы нового поколения:
• Высокопрочные композиты
• Биосовместимые полимеры
• Легкие сплавы титана
• Инновационные покрытия

Контроль производства:
• Лазерные системы измерения
• Тестирование под нагрузкой
• Симуляция реальных условий
• Длительные испытания

Сертификация и стандарты:
• Соответствие ГОСТ Р ИСО 13485
• Европейские стандарты качества
• Регулярный аудит производства
• Экологическая безопасность

Исследования и разработка:
• Биомеханическое моделирование
• Нейроинтерфейсы управления
• Эргономическая оптимизация
• Энергоэффективные решения

#производствоПротезов #медицинскиеТехнологии #инновационноеПроизводство #качествоПротезов #российскоеПроизводство #медицинскаяПромышленность #технологииБудущего #цифровоеПроизводство`,
    title: "Производственные технологии протезов | Разработки Модеста",
    description: "Исследуйте современные технологии производства протезов Модеста. Каждая стадия создания протеза - от проектирования до финальной сборки - выполняется на высочайшем уровне.",
    keywords: "изготовление протезов, технологии производства, 3d-печать медицина, современные протезы, разработка бионики",
  };
  useScrollToLocation();
  return (
    <Layout
      metaConfig={metaConfig}
      popupOpened={popupOpened}
      setOpened={setOpened}
    >
      <PreviewBlock video={productionPageVideo} />
      <QuoteBlock
        title={quoteContent.title}
        author={quoteContent.author}
        quote={quoteContent.quote}
      />

      <ProductionBlock />

      <MozaicBlock images={firstMozaicImages} />
      <MozaicBlock images={secondMozaicImages} />
    </Layout>
  );
}
