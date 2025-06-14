import React, { useState } from "react";

import { VisibilityManager } from "./VisibilityManager.jsx";



export const questionsContent = {
  title: "Вопросы и ответы",
  blocks: [
    {
      title: "Для кого подходит \"МОДЕСТА 1.0\"?",
      answer: `Для тех, кто столкнулся с травмой или врождёнными дефектами верхней конечности на уровне предплечья`,
    },
    {
      title: "Доступен ли ваш протез для жителей других регионов?",
      answer: `Мы тесно сотрудничаем с протезно-ортопедическими предприятиями по всей территории России. 
    
              Для изготовления индивидуального протеза, необходимо выполнить слепок. Вы можете заказать эту услугу у протезиста, по месту проживания.
    
              После изготовления, протез будет отправлен в ваш регион. Там его установят обученные техники-протезисты на базе протезно-ортопедического предприятия вашего региона, самостоятельно или совместно с нашими специалистами.
              
              Если вам необходима компенсация за протез, вы можете подать заявление в местное отделение Фонда социального страхования. 
    
              Наши специалисты окажут вам всестороннюю поддержку на всех этапах взаимодействия с государственными структурами`,
    },
    {
      title: "У меня сломался протез, что делать?",
      answer: `Свяжитесь с нами удобным для вас способом:
        - blagobionic44@gmail.com
        - 89088380555 (Сахатский Александр Сергеевич)
    
        Если поломка не является критической наши специалисты подскажут, как отремонтировать протез самостоятельно и, при необходимости направит вам необходимые детали для замены
        
        В случае ситуаций требующих ремонта в нашем сервисе, срок составит не более 14 дней с момента получения протеза`,
    },
    {
      title: "Почему протез не копирующий руку человека?",
      answer: `В результате успешно проделанной работы над созданием пятипалого протеза и интенсивного взаимодействия с реабилитологами, был сделан вывод о неэффективности и высокой стоимости данного технического средства реабилитации.  
        
        В дальнейшем, "Модеста" переключилась на разработку новой модели протеза руки, придавая особое значение эффективности захвата, доступной стоимости и современному дизайну`,
    },
    {
      title: "Каков минимальный возраст для процедуры протезирования?",
      answer: `Рекомендуется начинать использование активных тяговых протезов с возраста двух лет. 
              
              Протезирование в раннем возрасте позволяет ускорить процесс приспособления и быстрее сформировать навыки использования протеза в повседневной жизни и играх.
              
              Протез способствует увеличению подвижности суставов руки и обеспечивает сбалансированную нагрузку на мышцы верхнего плечевого пояса
              `,
    },
    {
      title: "Сколько времени занимает производство протеза?",
      answer: `Срок изготовления протеза составляет около месяца, с момента получения нами слепка конечности`,
    },
    {
      title: "Когда появится версия биоэлектрического протеза?",
      answer: `Разработка и выпуск новых моделей могут зависеть от многих факторов, таких как технологические исследования, испытания, разработка компонентов и другие процессы.
        
        Рекомендуем следить за новостями и официальными анонсами компании для получения точной информации о появлении новых версий биоэлектрических протезов`,
    },
    {
      title: "Соответствует ли ваш протез моим потребностям?",
      answer: `Протез "Модеста" способен обеспечить широкий спектр потребностей, включая основные повседневные задачи, участие в различных активностях и деятельностях. 
        
        Чтобы удостовериться, что протез соответствует вашим потребностям, рекомендуем записаться на бесплатную консультацию с нашим специалистом, который поможет определить наилучшее решение для вас `,
    },
    {
      title: "Каковы затраты на процесс протезирования?",
      answer: `Согласно действующему законодательству Российской Федерации, все категории инвалидов имеют право на бесплатное предоставление технических средств реабилитации и протезно-ортопедических изделий при наличии индивидуальной программы реабилитации.
              
              Наша компания участвует в государственных конкурсах, проводимых Фондом социального страхования. 
              
              По этой программе вы можете получить протез без дополнительных затрат.
              
              Также есть риск того, что другая компания с предложением более дешевого, но менее функционального протеза может победить в конкурсе.
              
              Поэтому мы предлагаем вам рассмотреть более быстрый путь и получить протезы по компенсации. 
              
              Это означает, что вы можете приобрести протез за свои средства или с помощью беспроцентного займа от банка-партнера с последующим возмещением со стороны Фонда социального страхования.
              
              В таком случае, вы получите протез в короткие сроки, примерно за 1 месяц, а компенсация от ФСС будет перечислена после получения протеза.
              
              Если нет возможности воспользоваться первыми двумя способами, мы можем рассмотреть вариант помощи через благотворительные фонды`,
    },
    {
      title: "В чем уникальность протезов \"Модеста\"?",
      answer: `Протезы "Модеста" выделяются инновационностью и технологическими решениями, которые обеспечивают высокую функциональность, комфорт и эстетику. При изготовлении, используются передовые материалы и инженерные разработки, специально адаптированные для максимального соответствия потребностям пользователя. 
    
        Каждый протез "Модеста" разрабатывается с учетом индивидуальных особенностей и целей человека, для обеспечения оптимального качества жизни и эффективного использования протеза в повседневных задачах и активностях.
        `,
    },
    {
      title: "Какие возможности открывает протез \"МОДЕСТA 1.0\"?",
      answer: `Выполнение различных задач, таких как захват и перемещение объектов различной формы и размера.
              
              "MODESTA 1.0" позволяет удерживать предметы, поднимать и передвигать их, что облегчает выполнение повседневных задач, включая приготовление пищи, уборку, работу с инструментами и другие действия, требующие точного захвата и манипуляций.
              
              Это значительно расширяет функциональные возможности человека с протезом, делая его более самостоятельным и эффективным во многих сферах жизни`,
    },
    {
      title: "Какова миссия вашей компании?",
      answer: `Создавать качественные функциональные протезы и обеспечивать первоклассное сервисное обслуживание`,
    },
  ],
};


export const Questions = () => {
  
  return (
    <VisibilityManager
      className="max-w-screen-xl w-full mx-auto px-4 mb-15 md:px-10 md:mb-30"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2 className="max-w-sm text-left text-2xl leading-8 mb-5 font-bold whitespace-pre-line uppercase md:max-w-none md:text-center md:text-5xl md:leading-[60px] md:mb-7.5" id="faq">
        {questionsContent.title}
      </h2>
      <ul>
        {questionsContent.blocks.map((q) => {
          return <Question key={q.title} title={q.title} answer={q.answer} />;
        })}
      </ul>
    </VisibilityManager>
  );
};

const Question = ({ title, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <VisibilityManager
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      as="li"
      className="w-full md:w-[70%] mx-auto mb-[30px] rounded-[30px]"
    >
      <div
        className="flex flex-row justify-between items-center cursor-pointer gap-[10px] bg-[var(--card-bg-color)] p-5 rounded-[30px] text-lg leading-6 font-bold transition-colors duration-200 ease-in-out whitespace-pre-line hover:bg-[var(--secondary-card-bg-color)] shadow-lg"
        onClick={() => setIsActive(!isActive)}
      >
        <h3 itemProp="name">{title}</h3>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {
        <p
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
          className={`max-h-0 w-full overflow-auto -z-10 px-5 py-0 transition-all duration-300 ease-in-out text-[var(--secondary-font-color)] whitespace-pre-line opacity-0 ${
            isActive ? "max-h-[1300px] md:max-h-[800px] p-5 opacity-100" : ""
          }`}
        >
          <span itemProp="text" className="inline-block mt-5">{answer}</span>
        </p>
      }
    </VisibilityManager>
  );
};
