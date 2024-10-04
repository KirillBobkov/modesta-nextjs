import React, { Fragment, useRef, useState } from "react";
import styles from "./NewMap.module.css";
import roadmap_period1 from "../../public/images/roadmap1.jpg";
import roadmap_period2 from "../../public/images/roadmap2.jpg";
import roadmap_period3 from "../../public/images/roadmap3.jpg";
import roadmap_period4 from "../../public/images/roadmap4.jpg";
import roadmap_period5 from "../../public/images/roadmap5.jpg";
import roadmap_period6 from "../../public/images/roadmap6.jpg";
import roadmap_period7 from "../../public/images/roadmap7.jpg";
import roadmap_period8 from "../../public/images/roadmap8.jpg";
import containerStyles from "../../styles/container.module.css";
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
    {
      title: "II квартал 2024",
      description:
        "Участие в Национальном форуме реабилитационной индустрии и универсального дизайна «Надежда на технологии 2024» в качестве экспонента",
      image: roadmap_period7,
      cx: 50,
      cy: 550,
    },
    {
      title: "III квартал 2024",
      description:
        "Участие в финале акселератора «Инновации в реАбилитации» от Фонда «Сколково» и лидеров в индустрии ассистивных технологий.",
      image: roadmap_period8,
      cx: 50,
      cy: 650,
    },
    {
      title: "III квартал 2024",
      description: "Выдача нового размера протеза XS Дмитрию (3 года)",
      image: roadmap_period6,
      cx: 50,
      cy: 750,
    },
  ],
};

const Roadmap = ({ points }) => {
  const [activePoint, setActivePoint] = useState(null);
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);
  const hoveredOnce = useRef(false);

  const handlePointMouseEnter = (e, index) => {
    if (!hoveredOnce.current) {
      hoveredOnce.current = true;
    }
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
      <svg viewBox="0 0 400 800" className={styles.roadmapSvg}>
        {/* Линия с изгибами */}
        <path
          className={styles.roadmapSvgPath}
          d={pathD}
          roadmapSvgPathd={pathD}
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {points.blocks.map((point, index) => (
          <>
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
                  className={styles.roadmapCircle}
                  r={activePoint?.index === index ? "17" : "15"}
                  fill="none"
                />
                <circle
                  cx={point.cx}
                  cy={point.cy}
                  className={styles.roadmapCircle2}
                  r={activePoint?.index === index ? "17" : "15"}
                />
              </g>
              <text
                style={{ zIndex1: 1 }}
                x={point.cx + 40}
                y={point.cy + 8}
                className={styles.textLabel}
                textAnchor="start"
              >
                {point.title}
              </text>
              {!hoveredOnce.current && (
                <svg
                  width="42"
                  height="42"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  x={points.blocks[0].cx - 10}
                  y={points.blocks[0].cy + 10}
                  className={styles.finger}
                >
                  {" "}
                  <path
                    d="M7.5 12L5.49591 14.6721C4.91845 15.4421 4.97127 16.5141 5.6216 17.2236L9.4055 21.3515C9.78431 21.7647 10.3183 22 10.8789 22C11.9651 22 13.7415 22 15.5 22C17.9 22 19.5 20 19.5 18C19.5 18 19.5 18 19.5 18C19.5 18 19.5 11.1429 19.5 9.42859"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    d="M16.5 9.99995C16.5 9.99995 16.5 9.87483 16.5 9.42852C16.5 7.1428 19.5 7.1428 19.5 9.42852"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    d="M13.5 9.99998C13.5 9.99998 13.5 9.17832 13.5 8.2857C13.5 5.99998 16.5 5.99998 16.5 8.2857C16.5 8.50885 16.5 9.2054 16.5 9.42855C16.5 9.87487 16.5 9.99998 16.5 9.99998"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    d="M10.5 10.0001C10.5 10.0001 10.5 8.61584 10.5 7.50005C10.5 5.21434 13.5 5.21434 13.5 7.50005C13.5 7.50005 13.5 7.50005 13.5 7.50005C13.5 7.50005 13.5 8.06261 13.5 8.28577C13.5 9.17839 13.5 10.0001 13.5 10.0001"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    d="M10.5 10C10.5 10 10.5 8.61578 10.5 7.5C10.5 6.34156 10.5 4.68968 10.5 3.49899C10.5 2.67056 9.82843 2 9 2V2C8.17157 2 7.5 2.67157 7.5 3.5V12V15"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </svg>
              )}
            </Fragment>
          </>
        ))}
      </svg>
      {activePoint !== null && (
        <div
          style={{
            visibility: activePoint === null ? "hidden" : "visible",
            position: "absolute",
            zIndex: 1,
            top: activePoint.y - 20,
            left: activePoint.x,
            ...(isMobile ? { left: "20px", right: "20px" } : {}),
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
    <div className={`${containerStyles.container}`}>
      <h2 className={`${containerStyles.container__title}`} id="roadmap">
        {roadmapContent.title}
      </h2>
      <Roadmap points={roadmapContent} />
    </div>
  );
}
