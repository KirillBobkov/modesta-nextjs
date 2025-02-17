import Layout from "../components/Layout/Layout";
import React, { useEffect, useState } from "react";

import { ProductionBlock } from "../components/ProductionBlock/ProductionBlock.jsx";
import { PreviewBlock } from "../components/PreviewBlock/PreviewBlock.jsx";
import { MozaicBlock } from "../components/MozaicBlock/MozaicBlock.jsx";
import { QuoteBlock } from "../components/QuoteBlock/QuoteBlock.jsx";

import process__poster from "../public/images/process__poster.webp";
import workingProcess1 from "../public/images/working_process1.jpg";
import workingProcess2 from "../public/images/working_process2.jpg";
import workingProcess3 from "../public/images/working_process3.jpg";
import workingProcess4 from "../public/images/working_process4.jpg";
import workingProcess5 from "../public/images/working_process5.jpg";
import workingProcess6 from "../public/images/working_process6.jpg";
import workingProcess7 from "../public/images/working_process7.jpg";
import workingProcess8 from "../public/images/working_process8.jpg";
import workingProcess9 from "../public/images/working_process9.jpg";

import workingProcess1_2 from "../public/images/working_process_2_1.jpg";
import workingProcess2_2 from "../public/images/working_process_2_2.jpg";
import workingProcess3_2 from "../public/images/working_process_2_3.jpg";
import workingProcess4_2 from "../public/images/working_process_2_4.jpg";
import workingProcess5_2 from "../public/images/working_process_2_5.jpg";
import workingProcess6_2 from "../public/images/working_process_2_6.jpg";
import workingProcess7_2 from "../public/images/working_process_2_7.jpg";
import workingProcess8_2 from "../public/images/working_process_2_8.jpg";
import workingProcess9_2 from "../public/images/working_process_2_9.jpg";
import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { quoteContent } from "../content/quote.js";
import { useRouter } from "next/router.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";

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

const productionPageVideo = {
  link: "/images/process.mp4",
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
    seoContent: `Производственные технологии Модеста

Передовые решения:
✓ Инновационные материалы
✓ Прогрессивная 3D-печать
✓ Высокая точность производства

### **Концепция дизайна протезов "Модеста"**
✓ **Вдохновение:**  
   В основе дизайна лежит синтез автомобильной эстетики и природных форм, формирующий особый стиль.  

✓ **Базовые принципы:**  
   - Удобство эксплуатации  
   - Премиальные материалы  
   - Привлекательный внешний вид  

✓ **Дизайнерские особенности:**  
   Изделия "Модеста" характеризуются элегантными деталями, превращающими протезы в стильные и функциональные устройства.

### **Возможности протеза руки**
✓ **Инновационное решение:**  
   Протезы "Модеста" представляют новый подход к протезированию, восстанавливая основные функции конечности.  

✓ **Ключевые функции:**  
   - Эффективный захват объектов  
   - Манипуляции с предметами разных размеров  

✓ **Назначение:**  
   Возвращение независимости и улучшение качества повседневной жизни.

### **Прочность и износостойкость**
✓ **Компоненты:**  
   В производстве используются материалы премиум-класса для длительной эксплуатации.  

✓ **Достоинства:**  
   - Высокая прочность  
   - Стабильная работа на протяжении всего срока службы  

### **Инновационные производственные методы**
✓ **Аддитивные технологии:**  
   Применение современных методов 3D-печати в производстве.  

✓ **Этапы изготовления:**  
   - Создание опытных образцов  
   - Всесторонние испытания элементов  
   - Точное промышленное производство  

### **Персональный подход**
✓ **Индивидуализация:**  
   Каждый протез адаптируется под анатомические особенности пациента.  

✓ **Посадочные элементы:**  
   Изготавливаются по индивидуальным меркам для оптимального прилегания.  

### **Техническая поддержка**
✓ **Обеспечение компонентами:**  
   Оперативная замена и поставка необходимых деталей.  

✓ **Сервисные преимущества:**  
   - Быстрое восстановление работоспособности  
   - Профессиональный ремонт  

#протезированиеРук #инновационныйДизайн #современныеПротезы #3DпечатьМедицина #персональныеПротезы #медицинскиеИнновации #надежныеПротезы #технологичныйДизайн #реабилитацияИнновации #российскиеТехнологии
   `,
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
