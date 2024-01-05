import React from "react";
import styles from './BurgerButton.module.css';

export const BurgerButton = React.memo(({ menuOpened, onClick }) => {
    return (
        <div className={styles['burger-menu']}>
            <div className={`${styles['burger-menu__button']} ${menuOpened ? styles['burger-menu__button--active'] : ''}`} onClick={() => onClick(!menuOpened)}>
                <span className={`${styles['burger-menu__span']} ${styles['burger-menu__span--1']}`}></span>
                <span className={`${styles['burger-menu__span']} ${styles['burger-menu__span--2']}`}></span>
                <span className={`${styles['burger-menu__span']} ${styles['burger-menu__span--3']}`}></span>
            </div>
        </div>
    );
})
