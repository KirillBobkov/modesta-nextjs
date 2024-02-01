import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";
import avatar1 from "../../public/images/avatar1_ver2.png";
import avatar2 from "../../public/images/avatar2_ver2.png";
import avatar3 from "../../public/images/avatar3_ver2.png";
import avatar4 from "../../public/images/avatar4_ver2.png";
import avatar5 from "../../public/images/avatar5_ver2.png";
import avatar6 from "../../public/images/avatar6_ver2.png";
import avatar7 from "../../public/images/avatar7_ver2.png";
import avatar8 from "../../public/images/avatar8_ver2.png";

import styles from "./TeamBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";

const teamContent = [
  {
    name: "Сахатский Александр",
    profession: "Руководитель лаборатории",
    bio: "Управленческий стаж: 8 лет (специализация: «финансы и кредит» в «СПбГЭУ»)",
    image: avatar1.src,
  },
  {
    name: "Карпенко Леонид",
    profession: "Научный руководитель",
    bio: "Кандидат медицинских наук. Преподавательский стаж более 20 лет",
    image: avatar2.src,
  },
  {
    name: "Абрамов Роман",
    profession: "Инженер-разработчик протезов",
    bio: "3 года опыта в производстве изделий. Участник научно-исследовательских работ в Иране/Казахстане 2021-2022 г.",
    image: avatar3.src,
  },
  {
    name: "Борисов Борис",
    profession: "Конструктор лаборатории",
    bio: "3 года опыта в сборке протезов, специалист в области полимеров",
    image: avatar4.src,
  },
  {
    name: "Иванов Илья",
    profession: "Дизайнер протезов",
    bio: "Опыт в сфере дизайна более 15 лет",
    image: avatar5.src,
  },
  {
    name: "Глебова Екатерина",
    profession: "Маркетолог",
    bio: "Опыт в сфере организации рекламных кампаний более 5 лет",
    image: avatar8.src,
  },
  {
    name: "Бобков Кирилл",
    profession: "Программист",
    bio: "Опыт в сфере разработки программных интерфейсов 4 года",
    image: avatar6.src,
  },
  {
    name: "Вертер",
    profession: "Робот-реабилитолог",
    bio: "Выполняет функцию испытания протезов",
    image: avatar7.src,
  },
];

export function TeamBlock() {
  return (
    <VisibilityManager classes={containerStyles.container}>
      <h2
        className={`${containerStyles.container__title} ${styles['team-title']}`}
        id="team"
      >
        Наша команда
      </h2>
      <ul className={styles.team}>
        {teamContent.map((person) => {
          return (
            <VisibilityManager itemScope itemType="http://schema.org/Person" key={person.name} as="li" classes={styles.person}>
              <div className={styles['person__avatar-container']}>
                <img
                  alt="Портрет члена команды"
                  className={`${styles['person__avatar']} ${shadowStyles.shadow}`}
                  src={person.image}
                />
              </div>
              <p className={styles['person__info']}>
                <span itemProp="name" className={styles['person__name']}>{person.name}</span>
                <span itemProp="disambiguatingDescription" className={styles['person__profession']}>{person.profession}</span>
                <span className={styles['person__bio']}>{person.bio}</span>
              </p>
            </VisibilityManager>
          );
        })}
      </ul>
    </VisibilityManager>
  );
}
