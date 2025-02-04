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
    seoContent: `
    Вот SEO-оптимизированная версия текста:

---

### **Философия дизайна протезов "Модеста"**
✓ **Источники вдохновения:**  
   Дизайн протезов сочетает современные автомобильные формы и природные бионические структуры, создавая уникальный стиль.  

✓ **Ключевые принципы:**  
   - Практичность использования  
   - Высокое качество материалов  
   - Эстетическая привлекательность  

✓ **Особенности внешнего вида:**  
   Протезы "Модеста" отличаются выразительными элементами дизайна, которые делают их не только функциональными, но и стильными аксессуарами.

---

### **Функциональность протеза верхней конечности**
✓ **Новаторский подход:**  
   Протез "Модеста" представляет собой современную альтернативу традиционным протезам, фокусируясь на восстановлении ключевых функций руки.  

✓ **Основные возможности:**  
   - Надежный захват предметов  
   - Удержание объектов различной формы и размера  

✓ **Цель разработки:**  
   Восстановление самостоятельности и повышение качества жизни пользователей.

---

### **Надежность и долговечность**
✓ **Материалы:**  
   Протез изготовлен из высококачественных компонентов, обеспечивающих длительный срок службы.  

✓ **Преимущества:**  
   - Устойчивость к износу  
   - Сохранение функциональности в течение длительного времени  

---

### **Современные технологические решения**
✓ **3D-печать:**  
   Использование передовых технологий 3D-печати для создания протезов.  

✓ **Процесс производства:**  
   - Разработка прототипов в лаборатории  
   - Тщательное тестирование каждого компонента  
   - Финальная промышленная печать для обеспечения точности и качества  

---

### **Индивидуальный подход к каждому клиенту**
✓ **Персонализация:**  
   Корпусные части протеза изготавливаются с учетом индивидуальных особенностей пользователя.  

✓ **Культевые гильзы и вкладыши:**  
   Создаются по персональным меркам для максимального комфорта и удобства использования.  

---

### **Обслуживание и поддержка**
✓ **Гарантия доступности запчастей:**  
   Быстрая доставка комплектующих для замены изношенных элементов.  

✓ **Преимущества обслуживания:**  
   - Минимизация времени простоя протеза  
   - Возможность оперативного ремонта  

---

#протезыРуки #бионическийДизайн #функциональныеПротезы #3DпечатьПротезы #индивидуальныеПротезы #медицинскиеТехнологии #долговечныеПротезы #современныйДизайн #реабилитационныеТехнологии #российскиеПротезы
   `,
    title: "Технология производства и разработка — протезов Модеста",
    description:
      "При разработке протезов рук мы сталкиваемся с множеством трудностей, связанных с обеспечением их функциональности, способности захвата, удобства использования и долговечности, и успешно их решаем.",
    keywords:
      "разработка технологии 3Д печать 3D печать дизайн сколково курган культеприёмная гильза клешня",
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
