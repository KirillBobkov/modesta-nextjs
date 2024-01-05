import React, { useEffect } from "react";

import styles404 from '../styles/404.module.css';
import containerStyles from '../styles/container.module.css';

export default function NotFound() {
    useEffect(() => {
        document.documentElement.classList.add("no-scroll-page")
        
    return () => document.documentElement.classList.remove("no-scroll-page");
    }, []);

    return (
        <section className={styles404['not-found']}>
            <h1 className={`${styles404['not-found__title']} ${containerStyles.container__title}`}>404</h1>
            <p className={styles404['not-found__description']}>Такой страницы не существует. Возможно, ссылка по которой вы перешли — неправильная.</p>
        </section>
    );
}