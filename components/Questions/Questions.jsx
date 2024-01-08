import React, { useState } from "react";

import styles from  "./Questions.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from '../../styles/container.module.css';
import shadowStyles from  '../../styles/shadow.module.css';

export const Questions = () => {
    const questions = [
        {
            title: 'Какова миссия вашей компании?',
            answer: `Создавать качественные функциональные протезы и обеспечивать первоклассное сервисное обслуживание.`
        },
        {
            title: 'Почему протез не копирующий руку человека?',
            answer: `В результате успешно проделанной работы над созданием пятипалого протеза и интенсивного взаимодействия с реабилитологами, был сделан вывод о неэффективности и высокой стоимости данного технического средства реабилитации.
            
            В дальнейшем, "Модеста" переключилась на разработку новой модели протеза руки, придавая особое значение эффективности захвата, доступной стоимости и современному дизайну.`
        },
        {
            title: 'Когда появится версия биоэлектрического протеза?',
            answer: `Разработка и выпуск новых моделей могут зависеть от многих факторов, таких как технологические исследования, испытания, разработка компонентов и другие процессы.
           
            Рекомендуем следить за новостями и официальными анонсами компании для получения точной информации о появлении новых версий биоэлектрических протезов.
            `
        },
        {
            title: 'Каковы гарантии при поломке протеза?',
            answer: `Для обслуживания обращайтесь к нам - обычно мы уладим всё за 14 рабочих дней. 
            
            Если поломка не является критической, то вероятнее всего, вы сможете отремонтировать протез самостоятельно. 
            
            В любом случае, рекомендуем связаться с нами. Это повысит шансы на успешное исправление и даст возможность отправить вам необходимые детали для замены.
            
            Наш протез создан так, чтобы минимизировать поломки и упростить процесс ремонта.`
        },
        {
            title: 'Сколько времени займёт, чтобы сделать мне протез?',
            answer: `От 14 до 30 дней с момента снятия слепка под культеприёмную гильзу. 
            `
        },
        {
            title: 'Для кого подходит “МОДЕСТА 1.0”?',
            answer: `Для тех, кто столкнулся с травмой или врождёнными дефектами верхней конечности на уровне предплечья.`
        },
        {
            title: 'Доступен ли ваш протез для жителей других регионов?',
            answer: `Мы тесно сотрудничаем с протезно-ортопедическими предприятиями по всей территории России. 

            Для изготовления индивидуального протеза, необходимо выполнить слепок. Вы можете заказать эту услугу у протезиста, по месту проживания.

            После изготовления, протез будет отправлен в ваш регион. Там его установят обученные техники-протезисты на базе протезно-ортопедического предприятия вашего региона, самостоятельно или совместно с нашими специалистами.
            
            Если вам необходима компенсация за протез, вы можете подать заявление в местное отделение Фонда социального страхования. 

            Наши специалисты окажут вам всестороннюю поддержку на всех этапах взаимодействия с государственными структурами.`
        },
        {
            title: 'Соответствует ли ваш протез моим потребностям?',
            answer: `Наш протез способен обеспечить широкий спектр потребностей, включая основные повседневные задачи, участие в различных активностях и деятельностях. 
            
            Чтобы удостовериться, что протез соответствует вашим потребностям, рекомендуем записаться на бесплатную консультацию с нашим специалистом, который поможет определить наилучшее решение для вас.. 
            `
        },
        {
            title: 'Каковы затраты на процесс протезирования?',
            answer: `Согласно действующему законодательству Российской Федерации, все категории инвалидов имеют право на бесплатное предоставление технических средств реабилитации и протезно-ортопедических изделий при наличии индивидуальной программы реабилитации.
            
            Наша компания участвует в государственных конкурсах, проводимых Фондом социального страхования. 
            
            По этой программе вы можете получить протез без дополнительных затрат.
            
            Также есть риск того, что другая компания с предложением более дешевого, но менее функционального протеза может победить в конкурсе.
            
            Поэтому мы предлагаем вам рассмотреть более быстрый путь и получить протезы по компенсации. 
            
            Это означает, что вы можете приобрести протез за свои средства или с помощью беспроцентного займа от банка-партнера с последующим возмещением со стороны Фонда социального страхования.
            
            В таком случае, вы получите протез в короткие сроки, примерно за 1 месяц, а компенсация от ФСС будет перечислена после получения протеза.
            
            Если нет возможности воспользоваться первыми двумя способами, мы можем рассмотреть вариант помощи через благотворительные фонды.`
        },
        {
            title: 'В чём уникальность протезов Модесты?',
            answer: `Протезы Модесты выделяются своей инновационностью и технологическими решениями, которые обеспечивают высокую функциональность, комфорт и эстетику.
            
            Наша уникальность заключается в использовании передовых материалов и инженерных разработок, специально адаптированных для максимального соответствия потребностям пользователя.
            
            Каждый протез Модесты разрабатывается с учетом индивидуальных особенностей и целей человека, чтобы обеспечить оптимальное качество жизни и эффективное использование протеза в повседневных задачах и активностях.`
        },
        {
            title: 'Какие возможности открывает протез “МОДЕСТА 1.0”?',
            answer: `Выполнение различных задач, таких как захват и перемещение объектов различной формы и размера.
            
            “MODESTA 1.0” позволяет удерживать предметы, поднимать и передвигать их, что облегчает выполнение повседневных задач, включая приготовление пищи, уборку, работу с инструментами и другие действия, требующие точного захвата и манипуляций.
            
            Это значительно расширяет функциональные возможности человека с протезом, делая его более самостоятельным и эффективным во многих сферах жизни.
            `
        },
        {
            title: 'Каков минимальный возраст для процедуры протезирования?',
            answer: `Рекомендуется начинать использование активных тяговых протезов с возраста двух лет. 
            
            Протезирование в раннем возрасте позволяет ускорить процесс приспособления и быстрее сформировать навыки использования протеза в повседневной жизни и играх.
            
            Протез способствует увеличению подвижности суставов руки и обеспечивает сбалансированную нагрузку на мышцы верхнего плечевого пояса.
            `
        },
        {
            title: 'Сколько времени занимает производство протеза?',
            answer: `Срок изготовления протеза составляет около месяца, с момента получения нами слепка конечности.`
        },
    ]

    return <VisibilityManager classes={`${styles.questions} ${containerStyles.container}`}>
        <h2 className={containerStyles.container__title} id="faq">Вопросы и ответы</h2>
        <ul>
            {questions.map(q => {
                return <Question key={q.title} title={q.title} answer={q.answer} />
            })}
        </ul>
    </VisibilityManager>
}


const Question = ({ title, answer }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <VisibilityManager as="li" side="topmax" classes={styles.question}>
            <div className={`${styles.question__title} ${shadowStyles.shadow}`} onClick={() => setIsActive(!isActive)}>
                <h4>{title}</h4>
                <span>{isActive ? '-' : '+'}</span>
            </div>
            {<p className={`${styles.question__answer} ${isActive ? styles['question__answer--visible'] : ''}`}>{answer}</p>}
        </VisibilityManager>
    );
};