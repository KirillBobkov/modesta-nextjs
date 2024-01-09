import React from "react";
import problem1 from '../../public/images/problem1.jpg';
import problem2 from '../../public/images/problem2.jpg';
import problem3 from '../../public/images/problem3.jpg';
import problem4 from '../../public/images/problem4.jpg';
import styles from "./ProblemsBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import Image from "next/image.js";
import containerStyles from '../../styles/container.module.css';

export function ProblemsBlock() {
    return (
        <>
            <h2 className={containerStyles.container__title}id="problems">Решаемые задачи</h2>
            <VisibilityManager as="ul" classes={containerStyles.container}>    
                <VisibilityManager as="li" classes={`${styles.problem} shadow`} id="problem">
                    <Image className={styles.problem__image} src={problem1} alt="Фото производства" />
                    <div className={styles.problem__content}>
                        <h2 className={styles.problem__title}>Развиваем производство в РФ </h2>
                        <p className={styles.problem__description}>В России не хватает компаний, занимающихся производством протезов. Мы разрабатываем новые модели и улучшаем уже существующие изделия</p>
                    </div>
                </VisibilityManager>
                <VisibilityManager as="li" classes={`${styles.problem} shadow`}>
                    <Image className={styles.problem__image} src={problem2} alt="Изображение военного с косметическим протезом" />
                    <div className={styles.problem__content}>
                        <h2 className={styles.problem__title}>Меняем правила
                        </h2>
                        <p className={styles.problem__description}>Больше 85% продукции, приобретаемой через государственные заказы, представляют собой косметические изделия, не обладающие высокой эффективностью. Наша задача - обеспечивать максимальный функционал
                        </p>
                    </div>
                </VisibilityManager>
                <VisibilityManager as="li" classes={`${styles.problem} shadow`}>
                    <Image className={styles.problem__image} src={problem3} alt="Фото ремонта протеза" />
                    <div className={styles.problem__content}>
                        <h2 className={styles.problem__title}>Своевременно обслуживаем</h2>
                        <p className={styles.problem__description}>
                        В условиях санкций и проблем с логистикой возникают трудности с обслуживанием импортных изделий. Наше производство находится в России, поэтому вы можете рассчитывать на быстрый сервис
                        </p>
                    </div>
                </VisibilityManager>
                <VisibilityManager as="li"  classes={`${styles.problem} shadow`}>
                    <Image className={styles.problem__image} src={problem4} alt="Фото реабилитации пациента" />
                    <div className={styles.problem__content}>
                        <h2 className={styles.problem__title}>Помогаем освоить протез
                        </h2>
                        <p className={styles.problem__description}>
                        Приобщение и приспособление к протезу требуют значительного труда и времени, и часто пользователи отказываются от его использования.
                        </p>
                        <p className={styles.problem__description}>
                        Мы создаем собственные программные решения, чтобы помочь людям легче осваивать наши изделия, предлагая игровой опыт и непосредственную обратную связь в реальном времени                        </p>
                    </div>
                </VisibilityManager>
            </VisibilityManager>
        </>
    );
}