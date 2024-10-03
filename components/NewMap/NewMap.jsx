import React, { Fragment, useState } from "react";
import styles from "./NewMap.module.css";
import roadmap_period1 from "../../public/images/roadmap1.jpg";
import roadmap_period2 from "../../public/images/roadmap2.jpg";
import roadmap_period3 from "../../public/images/roadmap3.jpg";
import roadmap_period4 from "../../public/images/roadmap4.jpg";
import roadmap_period5 from "../../public/images/roadmap5.jpg";
import shadowStyles from "../../styles/shadow.module.css";
import containerStyles from "../../styles/container.module.css";
import Image from "next/image";
import { VisibilityManager } from "../VisibilityManager";
import { PeriodComponent } from "./Period";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const roadmapContent = {
  title: "Дорожная карта",
  blocks: [
    {
      title: "III квартал 2021",
      description:
        "Формирование концепции прототипов, а также проектирование пилотных версий изделий",
      image: roadmap_period1,
      cx: 200,
      cy: 50,
    },
    {
      title: "I квартал 2022",
      description:
        'Старт проекта “Протез для Ксюши". Создание первого антропоморфного образца',
      image: roadmap_period2,
      cx: 50,
      cy: 150,
    },
    {
      title: "IV квартал 2022",
      description:
        "Подготовка и выступление на “Телемедфоруме 2022” с готовыми прототипами",
      image: roadmap_period3,
      cx: 50,
      cy: 250,
    },
    {
      title: "I квартал 2023",
      description:
        "Поиск эффективного вида захватного устройства. Пересмотр концепции протеза руки",
      image: roadmap_period4,
      cx: 200,
      cy: 350,
    },
    {
      title: "III квартал 2023",
      description:
        "Получение статуса резидента ИЦ “Сколково” в кластере Биомед",
      image: roadmap_period5,
      cx: 200,
      cy: 450,
    },
  ],
};

const Roadmap = ({ points }) => {
  const [activePoint, setActivePoint] = useState(null);
  const isMobile = useMediaQuery("max-width: 767.98px");

  const handlePointMouseEnter = (e, index) => {
    setActivePoint({ index, y: e.pageY, x: e.pageX });
  };
  const handlePointMouseLeave = () => setActivePoint(null);

  // Функция для расчёта сглаженной кривой между точками
  const generatePath = (blocks) => {
    if (blocks.length < 2) return "";

    const pathData = [];
    for (let i = 0; i < blocks.length - 1; i++) {
      const { cx: x1, cy: y1 } = blocks[i];
      const { cx: x2, cy: y2 } = blocks[i + 1];

      const controlY1 = y1 + (y2 - y1) / 2;
      const controlY2 = y1 + (y2 - y1) / 2;
      pathData.push(
        `M${x1},${y1} C${x1},${controlY1} ${x2},${controlY2} ${x2},${y2}`
      );
    }

    return pathData.join(" ");
  };

  const pathD = generatePath(points.blocks);

  return (
    <div className={styles.roadmap}>
      <svg viewBox="0 0 600 800" className={styles.roadmapSvg}>
        {/* Линия с изгибами */}
        <path
          d={pathD}
          fill="none"
          strokeWidth="4"
          stroke-dasharray="10"
          stroke-linecap="round"
        />
        {points.blocks.map((point, index) => (
          <Fragment key={index}>
            <g
              key={index}
              onMouseEnter={(e) => {
                handlePointMouseEnter(e, index);
              }}
              onMouseLeave={handlePointMouseLeave}
            >
              <circle
                cx={point.cx}
                cy={point.cy}
                r={activePoint?.index === index ? "15" : "12"}
                fill="var(--font-color)"
                className={styles.roadmapCircle}
              />
            </g>
            <text
                style={{ zIndex1: 1 }}
                x={point.cx + 30}
                y={point.cy + 5}
                className={styles.textLabel}
                textAnchor="start"
              >
                {point.title}
              </text>
          </Fragment>
        ))}
      </svg>
      {activePoint !== null && (
        <div
          style={{
            visibility: activePoint === null ? "hidden" : "visible",
            position: "absolute",
            zIndex: 1,
            top: activePoint.y - 20,
            left: isMobile ? 0 : activePoint.x,
          }}
        >
          <PeriodComponent
            title={points.blocks[activePoint.index].title}
            description={points.blocks[activePoint.index].description}
            image={points.blocks[activePoint.index].image}
          />
        </div>
      )}
    </div>
  );
};

export function NewMap() {
  return (
    <>
      <h2 className={`${containerStyles.container__title}`} id="roadmap">
        {roadmapContent.title}
      </h2>
      <Roadmap points={roadmapContent} />
    </>
  );
}

function PeriodImageComponent({ img }) {
  return (
    <Image
      alt={`Период времени №${1}`}
      itemProp="contentUrl"
      className={`${styles.period__img} ${shadowStyles.shadow}`}
      src={img}
    />
  );
}
