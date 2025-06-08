import iconSK from "../assets/images/iconSK.png";
import icon45ru from "../assets/images/45ru.png";
import Image from "next/image";
import React from "react";
import { VisibilityManager } from "./VisibilityManager";

export default React.memo(() => {
  return (
    <footer itemScope itemType="http://schema.org/WPFooter">
      <meta itemProp="copyrightYear" content={new Date().getFullYear()} />
      <meta itemProp="copyrightHolder" content="ООО МОДЕСТА" />
      <div
        itemScope
        itemType="http://schema.org/Organization"
        className="max-w-screen-xl w-full mx-auto px-4 mb-15 md:px-10 md:mb-30 w-full text-xs leading-[18px] mt-10 mb-20 flex flex-col md:flex-row md:mt-20 md:mb-20 md:p-0 p-10"
      >
        <div style={{ display: "none" }} itemProp="name">
          Модеста
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2 mb-20 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-x-10 md:gap-y-5 md:mb-0">
          <div className="mb-2 text-left overflow-hidden" id="contacts">
            <p className="mb-1 font-bold text-base md:text-xl leading-[25px] uppercase">
              Контакты
            </p>
            <p className="mb-2 text-[var(--secondary-font-color)]">
              <a itemProp="telephone" href="tel:+79088380555">
                +79088380555
              </a>
              <br />
              <span>Сахатский Александр Сергеевич</span>
            </p>
          </div>
          <div className="mb-2 text-left overflow-hidden">
            <p className="mb-1 font-bold text-base md:text-xl leading-[25px] uppercase">
              Почта
            </p>
            <p className="mb-2 text-[var(--secondary-font-color)]">
              <a itemProp="email" href="mailto:blagobionic44@gmail.com">
                blagobionic44@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-2 text-left overflow-hidden">
            <p className="mb-1 font-bold text-base md:text-xl leading-[25px] uppercase">
              Адрес
            </p>
            <div
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <p className=" text-[var(--secondary-font-color)]">
                ООО "МОДЕСТА" (ОГРН 1234500001603)
              </p>
              <p className=" text-[var(--secondary-font-color)]">
                <span itemProp="postalCode"> 640002, </span>
                <span itemProp="addressRegion">Курганская область, </span>
                <span itemProp="addressLocality">г. Курган, </span>
              </p>
              <p
                itemProp="streetAddress"
                className=" text-[var(--secondary-font-color)]"
              >
                ул. Коли Мяготина, д. 150Б, офис 22
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start mb-2">
            <p className="mb-1 font-bold text-base md:text-xl leading-[25px] uppercase">
              СМИ о нас
            </p>
            <div className="flex items-center gap-2">
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
                  className="w-[50px] h-auto rounded"
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
                  className="w-[100px] h-auto rounded overflow-hidden"
                />
              </a>
              <a target="_blank" href="https://ura.news/news/1052621906">
                <Image
                  alt="URA.news логотип"
                  src={"https://s.ura.news/img/logos/logo_07_2020.svg"}
                  width={50}
                  height={30}
                  loading="lazy"
                  className="w-[100px] h-auto rounded overflow-hidden"
                />
              </a>
            </div>
          </div>

          <div className="mb-2 text-left overflow-hidden">
            <p className="mb-1 font-bold text-base md:text-xl leading-[25px] uppercase">
              Социальные сети
            </p>
            <link itemProp="url" href="https://modesta.tech" />
            <div className="flex gap-1">
              <a
                itemProp="sameAs"
                target="_blank"
                href="https://vk.com/modestatech"
              >
                <svg
                  width="45"
                  height="45"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="4 4 40 40"
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
              <a
                itemProp="sameAs"
                target="_blank"
                href="https://t.me/modestatech"
              >
                <svg
                  width="45"
                  height="45"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="4 4 40 40"
                >
                  <path
                    fill="#29b6f6"
                    d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                  />
                  <path
                    fill="#fff"
                    d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                  />
                  <path
                    fill="#b0bec5"
                    d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                  />
                  <path
                    fill="#cfd8dc"
                    d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                  />
                </svg>
              </a>
              <a
                itemProp="sameAs"
                target="_blank"
                href="https://ok.ru/group/70000004855153"
              >
                <svg
                  width="45"
                  height="45"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="4 4 88 88"
                >
                  <defs /> <title />
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
              <a
                itemProp="sameAs"
                target="_blank"
                href="https://www.youtube.com/@modestatech"
              >
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 72 72"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z"
                      fill="#FF0002"
                    />
                    <path
                      d="M31.044,42.269916 L31.0425,28.6877416 L44.0115,35.5022437 L31.044,42.269916 Z M59.52,26.3341627 C59.52,26.3341627 59.0505,23.003199 57.612,21.5363665 C55.7865,19.610299 53.7405,19.6012352 52.803,19.4894477 C46.086,19 36.0105,19 36.0105,19 L35.9895,19 C35.9895,19 25.914,19 19.197,19.4894477 C18.258,19.6012352 16.2135,19.610299 14.3865,21.5363665 C12.948,23.003199 12.48,26.3341627 12.48,26.3341627 C12.48,26.3341627 12,30.2467232 12,34.1577731 L12,37.8256098 C12,41.7381703 12.48,45.6492202 12.48,45.6492202 C12.48,45.6492202 12.948,48.9801839 14.3865,50.4470165 C16.2135,52.3730839 18.612,52.3126583 19.68,52.5135736 C23.52,52.8851913 36,53 36,53 C36,53 46.086,52.9848936 52.803,52.4954459 C53.7405,52.3821478 55.7865,52.3730839 57.612,50.4470165 C59.0505,48.9801839 59.52,45.6492202 59.52,45.6492202 C59.52,45.6492202 60,41.7381703 60,37.8256098 L60,34.1577731 C60,30.2467232 59.52,26.3341627 59.52,26.3341627 L59.52,26.3341627 Z"
                      fill="#FFF"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="mb-2 text-[var(--secondary-font-color)]">
            <a target="_blank" href="/privacy-policy.pdf">
              Политика конфиденциальности
            </a>
          </div>
          <div className="mb-2 text-[var(--secondary-font-color)]">
            <a target="_blank" href="/agreement.pdf">
              Пользовательское cоглашение
            </a>
          </div>
          <div className="mb-2 text-[var(--secondary-font-color)]">
            <a target="_blank" href="/agreement-data.pdf">
              Согласие пользователя на обработку персональных данных
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
