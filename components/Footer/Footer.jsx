import iconSK from "../../public/images/iconSK.png";
import icon45ru from "../../public/images/45ru.png";
import containerStyles from "../../styles/container.module.css";
import styles from "./Footer.module.css";
import Image from "next/image";
import React from "react";
import { VisibilityManager } from "../VisibilityManager";

export default React.memo(() => {
  return (
    <footer
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      <meta itemProp="copyrightYear" content={new Date().getFullYear()} />
      <meta itemProp="copyrightHolder" content="ООО МОДЕСТА" />
      <div
        itemScope
        itemType="http://schema.org/Organization"
        className={`${containerStyles.container} ${styles.footer}`}
      >
        <div className={styles.footer__grid}>
          <div className={styles.footer__block} id="contacts">
            <p itemProp="name" className={styles.footer__title}>
              Контакты
            </p>
            <p className={styles.footer__number}>
              <a itemProp="telephone" href="tel:+79088380555">
                +79088380555
              </a>
              <br />
              <span>Сахатский Александр Сергеевич</span>
            </p>
          </div>
          <div className={styles.footer__block}>
            <p className={styles.footer__title}>Почта</p>
            <p className={styles.footer__mail}>
              <a itemProp="email" href="mailto:blagobionic44@gmail.com">
                blagobionic44@gmail.com
              </a>
            </p>
          </div>
          <div className={styles.footer__block}>
            <p className={styles.footer__title}>Адрес</p>
            <div
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <p itemProp="name" className={styles.footer__address}>
                ООО "МОДЕСТА" (ОГРН 1234500001603)
              </p>
              <p itemProp="addressLocality" className={styles.footer__address}>
                <span itemProp="postalCode"> 640002, </span>
                <span itemProp="addressRegion">Курганская область, </span>
                <span itemProp="addressLocality">г. Курган, </span>
              </p>
              <p itemProp="streetAddress" className={styles.footer__address}>
                ул. Коли Мяготина, д. 150Б, офис 22
              </p>
            </div>
          </div>
          <div
            className={`${styles.footer__block} ${styles["footer__block--flex"]}`}
          >
            <p className={styles.footer__title}>СМИ о нас</p>
            <div className={styles.footer__smi}>
              <a
                onClick={() => {
                  ym(96028442, "reachGoal", "skolkovo");
                }}
                target="_blank"
                href="https://navigator.sk.ru/orn/1125414"
              >
                <Image
                  alt="Логотип Сколково"
                  src={iconSK}
                  loading="lazy"
                  className={styles.footerimgSK}
                />
              </a>
              <a
                target="_blank"
                href="https://45.ru/text/health/2023/01/27/71984777/"
              >
                <Image
                  alt="45ru логотип"
                  src={icon45ru}
                  loading="lazy"
                  className={styles["footer__smi-link"]}
                />
              </a>
              <a target="_blank" href="https://ura.news/news/1052621906">
                <Image
                  alt="URA.news логотип"
                  src={"https://s.ura.news/img/logos/logo_07_2020.svg"}
                  width="50"
                  height="30"
                  loading="lazy"
                  className={styles["footer__smi-link"]}
                />
              </a>
            </div>
          </div>

          <div className={styles.footer__block}>
            <p className={styles.footer__title}>Социальные сети</p>
            <a target="_blank" href="https://vk.com/modestatech">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="52px"
                height="52px"
              >
                <path
                  fill="#1976d2"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                />
                <path
                  fill="#fff"
                  d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618 c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199 v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623 C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643 C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094 v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618 c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326 c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607 C32.223,24.393,35.607,19.642,35.937,18.041z"
                />
              </svg>
            </a>
            <a target="_blank" href="https://t.me/modestatech">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#29b6f6"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                ></path>
                <path
                  fill="#fff"
                  d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                ></path>
                <path
                  fill="#b0bec5"
                  d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                ></path>
                <path
                  fill="#cfd8dc"
                  d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                ></path>
              </svg>
            </a>
            <a target="_blank" href="https://ok.ru/group/70000004855153">
              <svg
                width="48"
                height="48"
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <title />
                <path
                  fill="#d95d0b"
                  d="M92,48v.13A44,44,0,1,1,47.87,4H48c1.06,0,2.11,0,3.16.12a42.89,42.89,0,0,1,5.12.67,43.39,43.39,0,0,1,8.1,2.37A44.13,44.13,0,0,1,88.79,31.47a43.22,43.22,0,0,1,2.43,8.24h0a44,44,0,0,1,.67,5.17C92,45.92,92,47,92,48Z"
                />
                <path
                  fill="#f27b1d"
                  d="M91,44.5v.12A39.53,39.53,0,1,1,51.38,5h.12c1,0,1.89,0,2.84.11a38.38,38.38,0,0,1,4.59.6,39.33,39.33,0,0,1,5.45,1.45A44.13,44.13,0,0,1,88.79,31.47a38.33,38.33,0,0,1,1.51,5.59h0a39.22,39.22,0,0,1,.6,4.64C91,42.63,91,43.57,91,44.5Z"
                />
                <g>
                  <path
                    fill="#ffffff"
                    d="M47.87,46.68a9.28,9.28,0,1,1,9.28-9.28A9.29,9.29,0,0,1,47.87,46.68Zm0-14.06a4.78,4.78,0,1,0,4.78,4.78A4.79,4.79,0,0,0,47.87,32.62Z"
                  />
                  <path
                    fill="#ffffff"
                    d="M60.53,49a2.62,2.62,0,0,0-3.59-.95,17.13,17.13,0,0,1-9,2.72,18.3,18.3,0,0,1-9-2.7,2.63,2.63,0,0,0-2.55,4.59,30,30,0,0,0,4.66,2.13,19.48,19.48,0,0,1,2.11.87l.86.43-6.27,7.58a2.59,2.59,0,0,0,0,3.45A2.5,2.5,0,0,0,41.58,67l6.29-7.6,6.3,7.6a2.5,2.5,0,0,0,3.46.37,2.63,2.63,0,0,0,.28-3.69L51.59,56l.27-.13a13.52,13.52,0,0,1,2-.72,26.2,26.2,0,0,0,5.77-2.57A2.63,2.63,0,0,0,60.8,51,2.57,2.57,0,0,0,60.53,49Z"
                  />
                </g>
              </svg>
            </a>
          </div>

          <div className={styles.footer__block}>
            <p className={styles.footer__doc}>
              <a target="_blank" href="/privacy-policy.pdf">
                Политика конфиденциальности
              </a>
            </p>
            <p className={styles.footer__doc}>
              <a target="_blank" href="/agreement.pdf">
                Пользовательское cоглашение
              </a>
            </p>
            <p className={styles.footer__doc}>
              <a target="_blank" href="/agreement-data.pdf">
                Согласие пользователя на обработку персональных данных
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});
