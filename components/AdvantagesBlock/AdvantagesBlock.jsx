
import advantage_1 from '../../public/images/advantage_1.webp';
import advantage_1_mobile from '../../public/images/advantage_1_mobile.webp';

import advantage_2 from '../../public/images/advantage_2.webp';
import advantage_2_mobile from '../../public/images/advantage_2_mobile.webp';

import advantage_3 from '../../public/images/advantage_3.webp';
import advantage_3_mobile from '../../public/images/advantage_3_mobile.webp';

import styles from "./AdvantagesBlock.module.css";
import containerStyles from '../../styles/container.module.css';
import { useWindowWidth } from "../../hooks/useWindowWidth.jsx";
import { VisibilityManager } from '../VisibilityManager.jsx';

export function AdvantagesBlock() {
    const isMobile = useWindowWidth() <= 768;
    return (
        <VisibilityManager classes={containerStyles.container}>
            <h2 className={containerStyles.container__title} id="advantages">Наши преимущества</h2>
            <ul className={styles['advantages']}>
                <VisibilityManager as="li" side="topmax" styles={{ backgroundImage: `url(${isMobile ? advantage_1_mobile.src : advantage_1.src})` }}
                    classes={`${styles['advantages__item']} ${styles['advantages__item--left']} ${styles['advantage__item--1-background']} shadow `}>
                    <div className={styles['advantages__content']}>
                        <p className={styles['advantages__item-text']}>Эффективность</p>
                        <p className={styles['advantages__item-description']}>Протезы с роботизированным захватом обеспечивают возможность управлять объектами разнообразных форм</p>
                    </div>
                </VisibilityManager>
                <VisibilityManager as="li"
                    side="topmax"
                    styles={{ backgroundImage: `url(${isMobile ? advantage_2_mobile.src : advantage_2.src})` }}
                    classes={`${styles['advantages__item']} ${styles['advantages__item--right']}  ${styles['advantage__item--2-background']} shadow`}>
                    <div className={styles['advantages__content']}>
                        <p className={styles['advantages__item-text']}>Сменные конечности</p>
                        <p className={styles['advantages__item-description']}>
                        Заменяемые части протеза обеспечивают его удобство в использовании в различных местах: на улице, дома или в мастерской</p>
                    </div>
                </VisibilityManager>
                <VisibilityManager as="li"
                    styles={{ backgroundImage: `url(${isMobile ? advantage_3_mobile.src : advantage_3.src})` }}
                    side="topmax"
                    classes={`${styles['advantages__item']} ${styles['advantage__item--3-background']} shadow`}>
                    <div className={styles['advantages__content']}>
                        <p className={styles['advantages__item-text']}>Простое обслуживание</p>
                        <p className={styles['advantages__item-description']}>Ремонт протеза доступен для самостоятельного выполнения дома или через наш сервис для оперативного устранения неполадок</p>
                    </div>
                </VisibilityManager>
            </ul >
        </VisibilityManager >
    );
}