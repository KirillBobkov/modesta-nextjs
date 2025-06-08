import React, { useState } from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";
import Image from "next/image.js";

import history1 from "../../assets/images/history1.jpg";
import history2 from "../../assets/images/history2.jpg";
import history3 from "../../assets/images/history3.jpg";

export const historyContent = {
  blocks: [
    {
      img: history1,
      alt: "Фото технологий и разработки",
      title: "Технологии и разработка",
      description: "Мы специализируемся на разработке протезов для верхних конечностей, включая модели тягового и биоэлектрического типа."
    },
    {
      img: history2,
      alt: "Фото комфорта и функциональности",
      title: "Комфорт и функциональность",
      description: "Наши изделия помогают вернуть утраченные возможности, улучшить функциональность и комфорт, позволяют активно участвовать в повседневных занятиях, работе и социальной жизни."
    },
    {
      img: history3,
      alt: "Фото абилитации и адаптации",
      title: "Абилитация и адаптация",
      description: "Разрабатывая наши прототипы, мы решаем сложные задачи, связанные с функциональностью, хватательной силой, практичностью и долговечностью протезов, а так же обеспечиваем высокий уровень в реабилитации. Мы предоставляем оптимальные решения для адаптации и качества жизни."
    }
  ]
};

export function HistoryBlock() {
  return (
    <div id="mission" className="max-w-screen-xl w-full mx-auto px-4 mb-15 md:px-10 md:mb-30">
      <VisibilityManager as="ul" style={{ marginTop: "100px" }}>
        {historyContent.blocks.map((item, i) => {
          return <HistoryItem key={i} item={item} i={i} />;
        })}
      </VisibilityManager>
    </div>
  );
}

const HistoryItem = ({ item, i }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <VisibilityManager
      as="li"
      key={i}
      itemType="http://schema.org/ImageObject"
      className={`flex flex-col gap-7 rounded-[30px] min-h-[300px] mb-7 md:flex-row md:gap-[2%] md:mb-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
      id="history-item"
    >
      <Image
        itemProp="contentUrl"
        className={`w-full h-[230px] object-cover rounded-[30px] opacity-0 transition-all duration-800 ease-in-out md:w-[38%] md:h-auto shadow-lg ${loaded ? 'opacity-100' : ''}`}
        src={item.img}
        alt={item.alt}
        onLoad={() => setLoaded(true)}
      />
      <div className="w-full h-auto p-10 pt-10 pb-10 text-left bg-[var(--card-bg-color)] rounded-[30px] flex flex-col justify-center shadow-lg md:w-[60%] md:p-10">
        <h3 itemProp="name" className="text-[25px] leading-8 mb-2.5 text-left font-bold whitespace-pre-line uppercase md:text-[40px] md:leading-[40px] md:mb-4">
          {item.title}
        </h3>
        <p itemProp="description" className="text-[16px] leading-[25px] text-[var(--secondary-font-color)] whitespace-pre-line text-left">
          {item.description}
        </p>
      </div>
    </VisibilityManager>
  );
};