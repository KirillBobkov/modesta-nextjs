import React, { useState } from "react";
import { GridBlock } from "../GridBlock/GridBlock";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const booksContent = {
  title: "Библиотека",
  description:
    "Мы собрали для вас полезные материалы о протезировании, доступные для скачивания",
  blocks: [
    {
      name: "“Протезирование конечности” (2021)",
      description:
        "Изложенные в данном обзоре детали процесса протезирования выглядят обнадеживающими и создают ощущение появления еще более совершенных протезных изделий.",
      author: "М.Г. Бильгильдеев, И.Ж. Осмоналиев, Р.Ф. Байкеев",
      link: "https://disk.yandex.ru/i/eUxRf8nM3WYc8g",
    },
    {
      name: "“Абилитация в формировании навыков ручной деятельности у детей с дефектами кисти”",
      description:
        "Оценка эффективности предложенной системы реабилитации детей с дефектами кисти.",
      author: "А.А. Корюков, Н.Л. Климон, Н.Л. Лосева, Е.М. Старобина",
      link: "https://disk.yandex.ru/i/lLyqnD95kjBRHw",
    },
    {
      name: "“Автоматизированный комплекс регуляции двигательной активности в реабилитации с помощью вибротактильной обратной связи”",
      description:
        "В работе представлена методика использования вибротактильной обратной связи для реабилитации после операции на сухожилиях.",
      author:
        "Д.В. Кутьина, Д.Г. Наконечный, А. Мотайло, Я.И. Пигарева, А.Н. Киселева, В.Б. Казанцев, С.Ю. Гордлеева, А.Я. Каплан, А.С. Пимашкин",
      link: "https://disk.yandex.ru/i/1HLDKk4-Sltb9g",
    },
    {
      name: "“Бионические протезы верхних конечностей: сравнительный анализ и перспективы использования”",
      description:
        "Данная статья содержит в себе классификации по различным параметрам протезов руки.",
      author: "Уразбахтина Ю.О., Камалова К.Р., Морозова Е.С.",
      link: "https://disk.yandex.ru/i/kJRAAGhvGsiKbA",
    },
    {
      name: "“Локализация сигналов в системе тактильной обратной связи для миоэлектрических протезов верхних конечностей”",
      description:
        "Создание лабораторной установки миоэлектрического протеза для проведения эксперимента было обусловлено необходимостью решения ряда задач, связанных с локализацией поступающих по каналу обратной связи «протез–пользователь» сигналов.",
      author: "Я.А. Туровский, К.И. Фисенко, А.В. Мамаев",
      link: "https://disk.yandex.ru/i/GEyvb_sGmUD0Bw",
    },
    {
      name: "“МЕТОДЫ УПРАВЛЕНИЯ ПРОТЕЗАМИ ВЕРХНИХ КОНЕЧНОСТЕЙ”",
      description:
        "Рассмотрены особенности управления протезами на три вида ампутации (на уровне кисти и пальцев, на уровне предплечья и после вычленения предплечья, на уровне плеча и после вычленения плеча).",
      author: "Н.М. Гороховаa, М.А. Головинb, М.С. Чежинa",
      link: "https://disk.yandex.ru/i/3QGnj4RijLV17g",
    },
    {
      name: "“Практика оказания и основные проблемы реабилитационной помощи детям, нуждающимся в протезировании верхних конечностей: опрос родителей”",
      description:
        "Цель исследования — изучить текущее состояние и проблемы реабилитации детей, нуждающихся в протезировании верхних конечностей вследствие врожденных заболеваний.",
      author: "А.С. Кузякина, М.В. Авксентьева",
      link: "https://disk.yandex.ru/i/bCSGivYmriZ4zw",
    },
    {
      name: "“Силиконовые приемные гильзы функциональных протезов кисти” (2018)",
      description:
        "Разработка технологии изготовления силиконовой приемной гильзы функционального протеза кисти.",
      author: "А.В. Круглов",
      link: "https://disk.yandex.ru/i/zqDyzJoLZTGnOQ",
    },
    {
      name: "“Совершенствование технологии изготовления полноконтактных приемных гильз при сложном протезировании инвалидов с дефектами верхних конечностей на уровне предплечья” (2016)",
      description:
        "Цель - разработать технологию изготовления индивидуальной полноконтактной приемной гильзы протезов предплечья.",
      author: "P.P. Гайнуллина, Ю.И. Замилацкий, М.Г. Гусев",
      link: "https://disk.yandex.ru/i/7PfatNDp3NZCaw",
    },
    {
      name: "“Сравнительный анализ распределения удельного давления по внутренней поверхности приемных гильз протезов предплечья”",
      description:
        "Проведены биомеханические исследования по изучению распределения удельного давления по внутренней поверхности приемной гильзы.",
      author: "С. Ф. Курдыбайло, Ю. И. Замилацкий, Р. Р. Гайнуллина",
      link: "https://disk.yandex.ru/i/Al8Z1kb5G2vn_g",
    },
    {
      name: "“Стандартизация реабилитационной помощи детям, требующим протезирования верхних конечностей: Обзор нормативного правового регулирования” (2020)",
      description:
        "Оснащение и порядок организации реабилитации не в полной мере соответствует реабилитационным потребностям детей, требующих протезирования верхних конечности. Таким образом, в регулировании данной отрасли есть ряд проблем и недоработок.",
      author: "А.С. Кузякина",
      link: "https://disk.yandex.ru/i/PRN41hjayIFXig",
    },
    {
      name: "Прикладная электрофизиология (2017)",
      description:
        "Полезна для тех кому интересно получить базовое понимание как работает биоэлектрический протез. Важно отметить наличие экспериментов и лабораторных работ, которые может повторить практически каждый.",
      author: "ООО Битроникс",
      link: "https://ntcontest.ru/upload/iblock/b9b/b9b6120243ba5603f9ccc71b60b87c77.pdf",
    },

    {
      name: "“Ампутации конечностей и протезы” (1941 год)",
      description:
        "Описанные знания о ампутации и последующего протезирования актуальны по сегодняшний день. Данную работу можно считать классикой презостроения.",
      author: "Н. Н. Приоров",
      link: "https://www.booksite.ru/fulltext/174869/text.pdf",
    },
    {
      name: "Погружение в мир электрофизиологии (Физиология возбудимых систем)",
      description: `Подробное описания работы механизмов мышечного сокращения, с лабораторными работами.`,
      author: "Яковлева О.В., Яковлев А.В., Ситдикова Г.Ф.",
      link: "https://kpfu.ru/staff_files/F_832641285/glava_2_sinaps_i_myshca__2_.pdf",
    },
    {
      name: "“Вот они – роботы” (1972 год)",
      description:
        "Описание некого симбиоза человека и робота, который рождает такие продукты как современные биоэлектрические протезы.",
      author: "А. Е. Кабринский",
      link: "https://sheba.spb.ru/za/vot-roboty-1972.htm",
    },
    {
      name: "“Антропология киборга” (2023 год)",
      description:
        "Работа Антона Круглова заслуживающая внимания, полезный труд, знания которого можно брать и применять сразу после прочтения. Уделяется часть книги психологическому аспекту, техническим моментам и примерам пациентов.",
      author: "Антон Круглов",
      link: "https://static.insales-cdn.com/files/1/7512/26582360/original/antropologia_kiborga_sod_i_primeri_str_compressed.pdf",
    },
    {
      name: "“DESIGN OF AN EXTERNALLY POWERED ARTIFICIAL ELBOW FOR ELECTROMYOGRAPHIC CONTROL” (1965 год)",
      description:
        "Описание разработки протеза локтя с управлением при помощи электромиографии. В документе приложены принципиальные электрические схемы, чертежи элементов протеза.",
      author: "Ronald Rothchild",
      link: "https://dspace.mit.edu/bitstream/handle/1721.1/150524/25500791-MIT.pdf",
    },
    {
      name: "Рука Юты",
      description:
        "Оригинальная статья с подробным математическим описанием принципа работы. Полезно для начинающих протезостроителей.",
      author: "S.C. Jacobsen R.B. Jerard",
      link: "https://dl.acm.org/doi/pdf/10.1145/800182.810395",
    },
    {
      name: "“BIOELECTRIC CONTROL OF PROSTHESES” (1966)",
      description:
        "Cтроение протеза методом управления от датчиков ЭМГ. Способы управления таким протезом. Возможность получать обратную связь от протеза. Перспективы развития протезов в будущем",
      author: "",
      link: "https://dspace.mit.edu/bitstream/handle/1721.1/4297/RLE-TR-446-04743378.pdf",
    },
    {
      name: "“Making Hands: A History of Prosthetic Arms” (2022)",
      description: "Первая в мире книга, руководство по протезированию.",
      author: "Peter Cyberd",
      link: "https://books.google.ru/books?id=EID-DwAAQBAJ&pg=PA147&lpg=PA147&dq=Peter+Kyberd+Making+Hands+free&source=bl&ots=HPErdUUTNm&sig=ACfU3U2ql7dWWOWYaeXTmEY4LNm_3-NQHA&hl=ru&sa=X&ved=2ahUKEwiU_IT7r8mDAxX1PxAIHXdXCnw4UBDoAXoECAIQAw#v=onepage&q&f=false",
    },

    {
      name: "Анализ рынка бионических протезов (2021)",
      description:
        "В данной работе представлены результаты исследования рынка бионических устройств. А так же проведен маркетинговый анализ компании – лидера по производству бионических протезов в России, компании «Моторика».",
      author: "Митиенко М. В., Одинцова А.С., Семыкина Д. А.",
      link: "https://disk.yandex.ru/i/8bF2pvMjrEjgtg",
    },

    {
      name: "“Система управления бионической руки”(2018)",
      description:
        "В данной работе выполнен анализ представленных на современном рынке протезов верхних конечностей. Охарактеризованы их достоинства и недостатки.",
      author: "Балбаев Г.К.",
      link: "https://disk.yandex.ru/i/mu3oBfVZlTPvkw",
    },

    {
      name: "“МЕХАНИЧЕСКИЙ ПРИВОД ПРОТЕЗА ПРЕДПЛЕЧЬЯ: ИННОВАЦИЯ КОМПОНОВКИ БАЗОВОГО УСТРОЙСТВА” (2021)",
      description:
        "Цель работы - создание инновационной компоновки базового устройства привода протеза предплечья, которая обеспечит непрерывное управление протезом с позиционной и силовой обратной связью.",
      author: "Буров Г.Н., Большаков В.А., Дробаха А.С.",
      link: "https://disk.yandex.ru/i/3GHCKw98e6MEwQ",
    },
    {
      name: "“Методы управления протезами верхних конечностей при разных видах ампутации” (2023)",
      description:
        "Проанализированы методы управления протезами верхних конечностей.",
      author: "Каххаров А. А., Махмудова Ш. Ё.",
      link: "https://disk.yandex.ru/i/uG5HKAVjvhn9zQ",
    },
  ],
};

const BookContent = ({ item }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);

  const handlers = isMobile
    ? {
        onClick: (e) => {
          e?.preventDefault();
          setTooltipVisible(!tooltipVisible);
        },
      }
    : {
        onMouseEnter: () => {
          setTooltipVisible(true);
        },
        onMouseLeave: () => {
          setTooltipVisible(false);
        },
      };

  return (
    <a
      onClick={() => {
        ym(96028442, "reachGoal", "book-download");
      }}
      target="_blank"
      className="flex gap-[4%] md:gap-[3%] items-start justify-between relative"
      href={item.link}
    >
      <div
        itemScope
        itemType="http://schema.org/CreativeWork"
        className="w-[87%] md:w-[90%] flex flex-col justify-start flex-nowrap"
      >
        <meta itemProp="learningResourceType" content="AcademicThesis" />
        <p
          className="text-base leading-[25px] text-left font-bold w-full whitespace-pre-line"
          itemProp="name"
        >
          {item.name}
        </p>
        {item.author && (
          <p
            className="text-base leading-[25px] text-left w-full whitespace-pre-line text-[var(--secondary-font-color)]"
            itemProp="author"
          >
            {item.author}
          </p>
        )}
        <p
          itemProp="description"
          className={`mt-0 text-base leading-[25px] text-left w-full text-[var(--font-color)] h-auto max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out whitespace-pre-line ${
            tooltipVisible ? "max-h-[200px] opacity-100 mt-[5px]" : ""
          }`}
        >
          {item.description}
        </p>
      </div>
      <div className="mt-[7px] w-[9%] md:w-[7%] max-w-[30px]" {...handlers}>
        {!tooltipVisible ? (
          <svg
            className="flex fill-[var(--font-color)]"
            viewBox="0 0 128 128"
            enableBackground="new 0 0 128 128"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M64,0C28.656,0,0,28.656,0,64s28.656,64,64,64s64-28.656,64-64S99.344,0,64,0z M64,120C33.125,120,8,94.875,8,64
			S33.125,8,64,8s56,25.125,56,56S94.875,120,64,120z M64,48c-4.414,0-8,3.586-8,8v40c0,4.414,3.586,8,8,8s8-3.586,8-8V56
			C72,51.586,68.414,48,64,48z M64,24c-4.414,0-8,3.586-8,8s3.586,8,8,8s8-3.586,8-8S68.414,24,64,24z"
                />
              </g>
            </g>
          </svg>
        ) : (
          <svg
            className="flex fill-[var(--font-color)]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m12 22c5.5228475 0 10-4.4771525 10-10s-4.4771525-10-10-10-10 4.4771525-10 10 4.4771525 10 10 10zm0 2c-6.627417 0-12-5.372583-12-12s5.372583-12 12-12 12 5.372583 12 12-5.372583 12-12 12z" />
              <path d="m9.20710678 16.2071068c-.39052429.3905243-1.02368927.3905243-1.41421356 0s-.39052429-1.0236893 0-1.4142136l6.99999998-6.99999998c.3905243-.39052429 1.0236893-.39052429 1.4142136 0s.3905243 1.02368927 0 1.41421356z" />
              <path d="m7.79289322 9.20710678c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356s1.02368927-.39052429 1.41421356 0l7.00000002 6.99999998c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0z" />
            </g>
          </svg>
        )}
      </div>
    </a>
  );
};

export const BooksBlock = () => {
  return (
    <GridBlock
      title={booksContent.title}
      id="books"
      clickable
      hideButton
      columns={3}
      description={booksContent.description}
      content={booksContent.blocks}
      renderItem={(item) => <BookContent item={item} />}
    />
  );
};
