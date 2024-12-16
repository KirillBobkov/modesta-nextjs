import avatar1 from "../public/images/avatar_1.webp";
import avatar2 from "../public/images/avatar_2.webp";
import avatar3 from "../public/images/avatar_3.webp";
import avatar4 from "../public/images/avatar_4.webp";
import avatar5 from "../public/images/avatar_5.webp";
import avatar6 from "../public/images/avatar_6.webp";
import avatar7 from "../public/images/avatar_7.webp";
import avatar8 from "../public/images/avatar_8.webp";

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