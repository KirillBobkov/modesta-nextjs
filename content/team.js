import avatar1 from "../public/images/avatar1_ver2.png";
import avatar2 from "../public/images/avatar2_ver2.png";
import avatar3 from "../public/images/avatar3_ver2.png";
import avatar4 from "../public/images/avatar4_ver2.png";
import avatar5 from "../public/images/avatar5_ver2.png";
import avatar6 from "../public/images/avatar6_ver2.png";
import avatar7 from "../public/images/avatar7_ver2.png";
import avatar8 from "../public/images/avatar8_ver2.png";

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
        image: avatar1.src,
      },
      {
        name: "Карпенко Леонид",
        profession: "Научный руководитель",
        bio: `Кандидат медицинских наук. Преподавательский стаж более 20 лет`,
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
    ],
  };