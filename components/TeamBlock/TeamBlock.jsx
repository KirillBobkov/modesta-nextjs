import React, { useState } from "react";

import { GridBlock } from "../GridBlock/GridBlock.jsx";
import Image from "next/image.js";
import avatar1 from "../../assets/images/avatar_1.webp";
import avatar2 from "../../assets/images/avatar_2.webp";
import avatar3 from "../../assets/images/avatar_3.webp";
import avatar4 from "../../assets/images/avatar_4.webp";
import avatar5 from "../../assets/images/avatar_5.webp";
import avatar6 from "../../assets/images/avatar_6.webp";
import avatar7 from "../../assets/images/avatar_7.webp";
import avatar8 from "../../assets/images/avatar_8.webp";

/* объект teamContent содержит информацию о команде, работающей над определенным проектом. В данном случае, речь идет о команде, занимающейся разработкой протезов. Информация о каждом члене команды включает следующие параметры:
name: имя члена команды
profession: его должность или функция в проекте
bio: краткая биография или описание его опыта и квалификации
image: ссылка на его фотографию или аватар */

export const teamContent = {
    title: "Наша команда",
    blocks: [
      {
        name: "Сахатский Александр",
        profession: "Руководитель лаборатории",
        bio: "Управленческий стаж: 8 лет (специализация: «финансы и кредит» в «СПбГЭУ»)",
        image: avatar4.src,
      },
      {
        name: "Карпенко Леонид",
        profession: "Научный руководитель",
        bio: `Кандидат медицинских наук. Преподавательский стаж более 20 лет`,
        image: avatar3.src,
      },
      {
        name: "Абрамов Роман",
        profession: "Инженер-разработчик протезов",
        bio: "4 года опыта в производстве изделий. Участник научно-исследовательских работ в Иране/Казахстане 2021-2022 г.",
        image: avatar7.src,
      },
      {
        name: "Борисов Борис",
        profession: "Конструктор лаборатории",
        bio: "4 года опыта в сборке протезов, специалист в области полимеров",
        image: avatar5.src,
      },
      {
        name: "Иванов Илья",
        profession: "Дизайнер протезов",
        bio: "Опыт в сфере дизайна более 15 лет",
        image: avatar1.src,
      },
      {
        name: "Глебова Екатерина",
        profession: "Маркетолог",
        bio: "Опыт в сфере организации рекламных кампаний более 5 лет",
        image: avatar6.src,
      },
      {
        name: "Бобков Кирилл",
        profession: "Программист",
        bio: "Опыт в сфере разработки программных интерфейсов 5 лет",
        image: avatar2.src,
      },
      {
        name: "Вертер",
        profession: "Робот-реабилитолог",
        bio: "Выполняет функцию испытания протезов",
        image: avatar8.src,
      },
    ],
  };

export const TeamBlock = () => {
  return (
    <div className="pt-[100px] pb-[50px]">
    <GridBlock
      title={teamContent.title}
      id="team"
      columns={3}
      customItemStyles={{ padding: 0, background: "transparent", boxShadow: "none", overflow: "visible" }}
      content={teamContent.blocks}
      renderItem={(person, i) => {
        return <Person person={person} i={i}/>
      }}
    />
    </div>
  );
};

const Person = ({ person, i }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
    itemScope
    itemType="http://schema.org/Person"
    key={person.name}
    as="div"
    className={`group rounded-[20px] overflow-hidden p-0 relative aspect-[1/1.1] transition-all duration-800 ease-in-out w-full lg:w-auto bg-[linear-gradient(60deg,var(--bg-color-gradient-2)_0%,var(--bg-color-gradient-1)_47%)] ${loaded ? 'opacity-100' : 'opacity-0'}`}
  >
    <div className="w-auto after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-1/2 after:transition-all after:duration-800 after:ease-in-out after:opacity-100 after:bg-gradient-to-t after:from-70% after:from-black/70 after:to-transparent fine:after:opacity-0 fine:group-hover:after:opacity-100">
      <Image
        alt="Портрет члена команды"
                        className={`w-full h-auto object-cover object-center shadow-lg`}
        src={person.image}
        width={100}
        height={100}
        onLoad={() => setLoaded(true)}
      />
    </div>
    <div className="absolute text-center bottom-0 left-0 w-full flex flex-col justify-center flex-nowrap p-5 z-[1] transition-all duration-400 ease-in-out opacity-100 translate-y-0 lg:p-[50px_20px_30px] fine:opacity-0 fine:translate-y-full fine:group-hover:opacity-100 fine:group-hover:translate-y-0">
      <span itemProp="name" className="w-full font-bold whitespace-pre-line text-2xl leading-[30px] mb-[5px] lg:text-[28px] lg:leading-[32px] lg:mb-[10px]">
        {person.name}
      </span>
      <span
        itemProp="disambiguatingDescription"
        className="w-full text-base leading-[25px] whitespace-pre-line mb-[5px] lg:mb-[10px]"
        style={{ display: "none", paddings: "20px" }}
      >
        {person.profession}
      </span>
      <span className="text-xs leading-[18px] w-full text-[var(--secondary-font-color)] whitespace-pre-line">{person.bio}</span>
    </div>
  </div>
  )
}