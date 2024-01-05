import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import styles from "./Steps.module.css";

import shadowStyles from '../../styles/shadow.module.css';
import containerStyles from '../../styles/container.module.css';

export function Steps() {
    return (
        <div className={`${containerStyles.container} ${styles['steps-page']}`}>
            <h2 className={containerStyles.container__title} id="steps">
                Бесплатная поддержка при получении современного протеза руки!</h2>
            <p className={styles['steps-page__description']} >Мы обеспечиваем помощь в оформлении документов для протезирования, решаем сложности с медико-социальной экспертизой,
                сопровождаем получение ИПРА по государственной программе - безвозмездно
            </p>
            <h2 className={containerStyles.container__title} id="steps">Этапы протезирования</h2>
            <ul className={styles.steps}>
                <VisibilityManager as='li' classes={`${styles.steps__item} ${shadowStyles.shadow}`}>
                    <div className={styles.steps__number}>1</div>
                    <p className={styles.steps__description}>Консультация специалиста-инженера по протезированию для выбора подходящего протеза</p>
                    <svg id="Layer_1" width="100px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.45 122.88"><defs></defs><title>consulting</title><path className={styles.consulting} d="M75.15,103.34c-16.22,0-5.54,4-3.33-13.67,1.76-14,8.25-20.53,15.81-19.69,7.56-.84,14.05,5.72,15.81,19.69,2.21,17.63,12.89,13.67-3.33,13.67l-6.32,0c0,3.93-.79,4.89,3.24,7.27,8.56,5.06,18.35,1.67,19.42,12.25H0c1.87-21.59,24.69-8.31,26.45-23.33.2-1.69-5.23-6.3-6.16-9.4-2-3.14-2.67-8.12-.51-11.45.85-1.31.48-3.22.48-5,0-18.05,30.22-18.06,30.22,0,0,2.29-.53,3.57.71,5.37,2.09,3,1,8.32-.74,11.11-1.11,3.26-6.8,7.56-6.43,9.4C46.47,112,60.7,103.9,66.58,114.44c3.5-.94,7.71-1.48,11.65-3.81s3.27-3.34,3.24-7.27l-6.32,0ZM40.87,0h41a8.4,8.4,0,0,1,8.38,8.38V32.46a8.4,8.4,0,0,1-8.38,8.38H55.35L42.63,51.78a1.41,1.41,0,0,1-2-.15,1.44,1.44,0,0,1-.34-1L41,40.84h-.11a8.4,8.4,0,0,1-8.38-8.38V8.38A8.4,8.4,0,0,1,40.87,0Zm53.5,17.68A8.23,8.23,0,0,1,101,25.74v20A8.23,8.23,0,0,1,92.83,54h-.3l.69,10h0a1.24,1.24,0,0,1-.29.89,1.23,1.23,0,0,1-1.74.13L78.41,53.67H49.55l8.28-8.43h29.6a7,7,0,0,0,7-7v-20c0-.19,0-.37,0-.55ZM45,25.33a1.42,1.42,0,0,1,0-2.83H71.82a1.42,1.42,0,1,1,0,2.83Zm0-9.7a1.41,1.41,0,1,1,0-2.82H78a1.41,1.41,0,0,1,0,2.82ZM81.88,2.83h-41a5.58,5.58,0,0,0-5.56,5.55V32.46A5.6,5.6,0,0,0,40.87,38h1.72a1.41,1.41,0,0,1,1.31,1.5l-.55,7.92,10.49-9a1.4,1.4,0,0,1,1-.41h27a5.58,5.58,0,0,0,5.55-5.56V8.38a5.57,5.57,0,0,0-5.55-5.55Z" /></svg>
                </VisibilityManager>
                <VisibilityManager as='li' classes={`${styles.steps__item} ${shadowStyles.shadow}`}>
                    <div className={styles.steps__number}>2</div>
                    <p className={styles.steps__description}>Получение медико-технического заключения (МТЗ) с рекомендацией использования протеза и сопровождение процедур медико-социальной экспертизы</p>
                    <svg className={styles.doctor} version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="100px" viewBox="0 0 1136.000000 1280.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                            stroke="none">
                            <path d="M5450 11879 c-459 -52 -892 -262 -1217 -591 -180 -181 -290 -337
-397 -559 -378 -785 -218 -1720 401 -2336 316 -315 733 -521 1170 -578 132
-17 391 -20 513 -5 382 48 749 202 1043 439 367 297 629 727 722 1186 120 594
-29 1213 -405 1684 -341 427 -840 701 -1382 760 -112 13 -338 12 -448 0z"/>
                            <path d="M4285 7773 c-22 -9 -87 -34 -143 -56 l-104 -39 -132 -132 c-336 -333
-540 -730 -641 -1245 -25 -132 -55 -384 -55 -470 l0 -49 78 -17 c164 -36 307
-120 440 -259 258 -269 404 -652 437 -1152 l6 -90 -93 -79 c-51 -43 -97 -82
-101 -86 -5 -4 -3 -17 3 -29 20 -38 15 -114 -10 -155 -44 -72 -154 -98 -221
-52 -51 34 -79 82 -79 134 0 60 25 110 69 138 50 32 90 39 139 22 l42 -15 85
60 c97 68 92 50 75 233 -50 541 -295 987 -637 1159 -127 63 -315 85 -448 51
-400 -103 -709 -568 -774 -1167 -6 -54 -11 -126 -11 -160 l1 -63 76 -51 c70
-47 79 -51 109 -42 72 19 158 -28 189 -104 42 -106 -39 -218 -158 -218 -116 0
-197 139 -138 236 l19 32 -89 76 -89 77 0 53 c0 333 122 753 295 1015 135 205
333 366 509 417 l64 18 6 101 c44 665 257 1221 622 1625 l59 64 -98 -52 c-517
-276 -981 -682 -1340 -1174 -415 -569 -692 -1277 -785 -2009 l-19 -144 65 -95
c629 -919 1723 -1497 3167 -1674 404 -50 1062 -71 1475 -47 1268 74 2243 391
3000 977 224 173 539 507 710 754 l52 75 -6 79 c-17 211 -93 555 -183 829
-126 387 -279 699 -508 1042 -334 499 -751 905 -1265 1233 -124 79 -350 205
-350 195 0 -3 32 -39 71 -81 205 -220 395 -529 514 -835 37 -97 107 -331 117
-391 2 -15 18 -22 73 -33 84 -16 212 -77 278 -132 101 -84 179 -208 212 -336
19 -76 19 -224 0 -300 -55 -218 -239 -404 -455 -460 -84 -22 -226 -23 -309 -1
-209 54 -381 215 -447 419 -38 118 -38 267 0 384 59 182 201 330 380 398 72
27 70 14 20 190 -119 414 -338 786 -644 1096 -159 161 -394 348 -414 329 -2
-3 -300 -529 -661 -1170 -361 -641 -666 -1180 -677 -1198 l-20 -33 -580 1083
c-319 596 -608 1136 -641 1200 -39 73 -68 117 -77 117 -8 -1 -33 -8 -55 -16z
m2705 -3123 l0 -210 210 0 210 0 0 -180 0 -180 -210 0 -210 0 0 -210 0 -210
-180 0 -180 0 0 210 0 210 -215 0 -215 0 0 180 0 180 215 0 215 0 0 210 0 210
180 0 180 0 0 -210z"/>
                            <path d="M8140 5981 c-142 -46 -234 -134 -279 -269 -84 -247 95 -517 357 -539
125 -10 237 31 328 121 221 222 127 593 -173 686 -79 24 -160 25 -233 1z"/>
                        </g>
                    </svg>
                </VisibilityManager>
                <VisibilityManager as='li' classes={`${styles.steps__item} ${shadowStyles.shadow}`}>
                    <div className={styles.steps__number}>3</div>
                    <p className={styles.steps__description}>Создание индивидуальной программы реабилитации (ИПРА) с учетом необходимого технического средства</p>
                    <svg version="1.1" id="Layer_1" className={styles.help} width="100px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 511.99 511.99" xmlSpace="preserve">
                        <g>
                            <g>
                                <circle cx="387.495" cy="79.238" r="41.285" />
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M503.962,209.479l-49.347-50.651l-0.379-2.368c-2.001-14.624-15.147-25.262-30.018-23.984
			c-17.981,1.546-36.295,3.21-52.896,4.787c-10.282,0.977-19.576,6.518-25.332,15.094l-39.451,58.779h-37.296
			c3.078-4.1,4.667-9.382,3.871-15.065c-1.412-10.094-10.387-17.416-20.581-17.416h-56.839l-30.69-45.44l0.521-3.428
			c2.302-15.137-8.103-29.274-23.24-31.577l-37.655-5.726c-15.137-2.302-29.274,8.103-31.576,23.24L53.173,246.477h52.942
			l-11.62-5.632c-15.462-7.494-20.96-23.459-20.179-31.62l6.87-71.771l9.982,73.384c0.876,6.434,4.916,11.964,10.711,14.772
			l69.416,33.644c9.083,4.404,20.027,1.05,25.087-7.63c5.717-9.805,1.809-22.244-8.245-27.118l-60.1-29.13l-9.04-66.454
			l22.236,54.039c22.67,10.988,18.335,8.886,54.287,26.312c4.957,2.403,9.209,5.825,12.541,10.011h24.93
			c-3.078,4.101-4.667,9.384-3.871,15.069c1.414,10.093,10.389,17.413,20.581,17.413h67.631c6.749,0,13.057-3.352,16.835-8.945
			l19.183-28.403c0.834,9.696,6.643,77.272,7.364,85.659l-30.852,68.27c-0.62,1.371-1.1,2.801-1.434,4.267l-25.452,111.948
			c-2.748,12.088,4.824,24.116,16.911,26.864c12.094,2.748,24.117-4.828,26.864-16.911l24.95-109.741l35.814-79.249l11.839-1.018
			c-0.138,0.876-12.848,81.835-12.743,81.163c-0.603,3.839-0.199,7.77,1.173,11.407l37.863,100.383
			c4.38,11.618,17.344,17.45,28.922,13.08c11.598-4.374,17.456-17.324,13.08-28.922l-35.768-94.843l8.995-57.297
			c-16.076-6.619-25.654-24.015-21.871-41.598c2.463-11.446,9.679-44.985,12.168-56.556l-30.647-53.877l49.643,50.954l-13.61,63.255
			c-2.172,10.106,4.257,20.048,14.352,22.221c10.131,2.182,20.062-4.316,22.221-14.352l15.719-73.059
			C510.198,220.206,508.209,213.838,503.962,209.479z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <circle cx="154.002" cy="42.096" r="42.096" />
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M260.378,464.199h-16.255V322.625h-0.001c0-25.368-16.037-47.053-38.502-55.471c-10.864,11.074-27.549,14.2-41.71,7.335
			l-22.867-11.084H7.874c-2.845,0-5.152,2.307-5.152,5.152v23.552c0,2.845,2.307,5.152,5.152,5.152h177.029
			c13.985,0,25.363,11.377,25.363,25.363v141.574h-22.679c1.03-2.58,1.664-5.368,1.762-8.304l3.914-117.761
			c0.139-4.164-0.782-8.297-2.676-12.01l-6.085-11.93h-55.302l14.615,28.655l-3.703,111.412c-0.116,3.512,0.512,6.873,1.737,9.941
			H88.021c0.551-1.384-2.853,8.283,37.673-107.536c1.683-4.809,1.833-10.021,0.43-14.919l-7.892-27.551H66.987l9.622,33.591
			l-34.696,99.157c-2.044,5.84-1.752,11.929,0.376,17.257H11.59c-4.898,0-8.868,3.97-8.868,8.868v29.922
			c0,4.898,3.97,8.868,8.868,8.868h248.787c4.898,0,8.868-3.97,8.868-8.868v-29.922
			C269.246,468.169,265.276,464.199,260.378,464.199z"/>
                            </g>
                        </g>

                    </svg>
                </VisibilityManager>
                <VisibilityManager as='li' classes={`${styles.steps__item} ${shadowStyles.shadow}`}>
                    <div className={styles.steps__number}>4</div>
                    <p className={styles.steps__description}>Поиск финансирования через благотворительные фонды, государственные контракты или беспроцентные займы для изготовления протеза</p>
                    <svg version="1.1" className={styles.money} width="100px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 511.998 511.998" xmlSpace="preserve">
                        <g>
                            <g>
                                <g>
                                    <path d="M282.844,205.771c-1.772,1.405-3.643,2.545-5.53,3.477h17.899c7.112-8.297,7.237-17.608,1.999-24.223
				c-5.394-6.822-12.314-8.105-23.854-4.152c-8.358,2.678-12.268,3.19-14.249,0.686c-1.677-2.117-1.759-5.499,3.156-9.4
				c5.458-4.316,10.312-5.338,12.941-6.065l-4.575-10.289c-3.459,0.763-7.711,2.406-12.966,6.198l-2.629-3.328
				c-0.673-0.852-1.677-1.454-2.862-1.58c-1.157-0.138-2.271,0.215-3.136,0.888l-0.727,0.584c-0.858,0.678-1.449,1.677-1.592,2.852
				c-0.136,1.167,0.215,2.284,0.896,3.141l3.049,3.848c-6.843,8.01-7.401,16.955-2.122,23.613
				c5.816,7.347,14.344,6.761,24.614,3.069c7.099-2.552,10.964-2.652,13.24,0.218C288.799,198.349,287.166,202.35,282.844,205.771z"
                                    />
                                    <path d="M141.658,209.25L316.091,71.089l20.593-16.317c3.318-2.624,8.131-2.063,10.76,1.252l16.274,20.547l56.049,70.766
				c0.709,0.883,1.147,1.892,1.403,2.947c0.622,2.542-0.108,5.294-2.035,7.222c-0.202,0.202-0.387,0.422-0.609,0.596l-0.028,0.018
				l-20.536,16.276l-44.006,34.854h17.272l53.965-42.734c7.928-6.285,9.277-17.905,3-25.843l-72.328-91.307
				c-6.287-7.928-17.905-9.275-25.843-2.995L124.368,209.25H141.658z"/>
                                    <path d="M346.542,209.25l48.794-38.653c-7.772-13.056-5.837-29.78,4.692-40.742c0.013-0.008,0.013-0.008,0.018-0.018
				l-40.123-50.647c-13.048,7.777-29.778,5.834-40.735-4.687L149.059,209.25h82.189c-12.562-22.377-9.813-49.009,7.808-62.971
				c19.94-15.793,51.341-9.365,70.126,14.351c11.853,14.958,15.834,33.208,12.18,48.62H346.542z"/>
                                    <path d="M466.934,336.889c-1.213-1.201-2.79-1.807-4.37-1.807h-86.4c-7.892,0-15.787,3.013-21.814,9.037
				s-9.037,13.921-9.037,21.824c0,7.895,3.011,15.793,9.037,21.819c6.026,6.024,13.919,9.037,21.814,9.037h86.4
				c1.58,0,3.156-0.604,4.37-1.812c1.203-1.201,1.807-2.78,1.807-4.362v-49.372C468.741,339.677,468.135,338.092,466.934,336.889z
				 M376.164,381.494c-8.589,0-15.555-6.966-15.555-15.555c0-8.591,6.966-15.557,15.555-15.557c8.591,0,15.557,6.966,15.557,15.557
				S384.755,381.494,376.164,381.494z"/>
                                    <path d="M347.07,395.029c-7.767-7.772-12.052-18.099-12.052-29.089c0-10.993,4.285-21.322,12.052-29.099
				c7.772-7.767,18.102-12.045,29.089-12.045h80.904v-74.058c0-7.898-3.013-15.793-9.037-21.819
				c-6.024-6.024-13.921-9.037-21.824-9.037H74.803c-2.632,0-5.266-1.004-7.27-3.013c-2.017-2.01-3.018-4.639-3.018-7.276v-0.684
				c0-2.627,0.998-5.263,3.018-7.273c2.005-2.01,4.639-3.016,7.27-3.016h10.557l9.111-21.253H74.117
				c-7.895,0-15.795,3.008-21.814,9.037c-6.034,6.021-9.047,13.921-9.047,21.814v272.924c0,7.898,3.016,15.793,9.047,21.819
				c6.019,6.024,13.916,9.037,21.814,9.037h352.087c7.903,0,15.798-3.011,21.824-9.037c6.021-6.026,9.037-13.921,9.037-21.819
				v-74.063h-80.904C365.176,407.079,354.844,402.804,347.07,395.029z M433.401,311.424c0,1.695-1.38,3.085-3.08,3.085
				s-3.085-1.39-3.085-3.085v-14.403c0-1.695,1.385-3.085,3.085-3.085s3.08,1.39,3.08,3.085V311.424z M433.401,280.569
				c0,1.69-1.38,3.08-3.08,3.08s-3.085-1.39-3.085-3.08v-14.403c0-1.695,1.385-3.085,3.085-3.085s3.08,1.39,3.08,3.085V280.569z
				 M424.574,243.536h1.628c3.84,0,7.199,3.364,7.199,7.199v1.633c0,1.705-1.375,3.087-3.08,3.087s-3.085-1.382-3.085-3.087v-1.633
				c0-0.448-0.573-1.027-1.032-1.027h-1.628c-1.705,0-3.09-1.385-3.09-3.085C421.486,244.916,422.871,243.538,424.574,243.536z
				 M397.253,243.536h14.395c1.7,0,3.095,1.388,3.095,3.087c0,1.695-1.395,3.085-3.095,3.085h-14.395c-1.7,0-3.087-1.39-3.087-3.085
				C394.166,244.923,395.553,243.538,397.253,243.536z M366.39,243.536h14.4c1.7,0,3.09,1.388,3.09,3.087
				c0,1.695-1.39,3.085-3.09,3.085h-14.4c-1.7,0-3.082-1.39-3.082-3.085C363.308,244.923,364.69,243.538,366.39,243.536z
				 M66.919,252.37v-1.633c0-3.835,3.361-7.199,7.201-7.199h1.628c1.708,0,3.085,1.38,3.085,3.087c0,1.7-1.377,3.085-3.085,3.085
				H74.12c-0.453,0-1.032,0.579-1.032,1.027v1.633c0,1.705-1.377,3.087-3.082,3.087s-3.09-1.382-3.09-3.087H66.919z M66.916,266.166
				c0-1.695,1.39-3.085,3.09-3.085s3.082,1.39,3.082,3.085v14.403c0,1.69-1.382,3.08-3.082,3.08c-1.7,0-3.09-1.39-3.09-3.08V266.166
				z M66.916,297.022c0-1.695,1.39-3.085,3.09-3.085s3.082,1.39,3.082,3.085v14.403c0,1.695-1.382,3.085-3.082,3.085
				c-1.7,0-3.09-1.39-3.09-3.085V297.022z M66.916,327.88c0-1.695,1.39-3.085,3.09-3.085s3.082,1.39,3.082,3.085v14.403
				c0,1.695-1.382,3.085-3.082,3.085c-1.7,0-3.09-1.39-3.09-3.085V327.88z M66.916,358.738c0-1.695,1.39-3.085,3.09-3.085
				s3.082,1.39,3.082,3.085v14.403c0,1.7-1.382,3.085-3.082,3.085c-1.7,0-3.09-1.385-3.09-3.085V358.738z M66.916,389.597
				c0-1.695,1.39-3.085,3.09-3.085s3.082,1.39,3.082,3.085v14.403c0,1.7-1.382,3.08-3.082,3.08c-1.7,0-3.09-1.38-3.09-3.08V389.597z
				 M66.916,420.452c0-1.695,1.39-3.085,3.09-3.085s3.082,1.39,3.082,3.085v14.397c0,1.705-1.382,3.09-3.082,3.09
				c-1.7,0-3.09-1.385-3.09-3.09V420.452z M66.916,451.31c0-1.695,1.39-3.085,3.09-3.085s3.082,1.39,3.082,3.085v14.403
				c0,1.7-1.382,3.085-3.082,3.085c-1.7,0-3.09-1.385-3.09-3.085V451.31z M75.746,488.343h-1.633c-3.837,0-7.201-3.366-7.201-7.201
				v-1.633c0-1.705,1.385-3.085,3.09-3.085s3.082,1.38,3.082,3.085v1.633c0,0.448,0.579,1.027,1.032,1.027h1.633
				c1.705,0,3.087,1.382,3.087,3.085C78.835,486.964,77.456,488.341,75.746,488.343z M103.076,488.341h-14.4
				c-1.7,0-3.087-1.393-3.087-3.087c0-1.695,1.388-3.085,3.087-3.085h14.4c1.692,0,3.087,1.39,3.087,3.085
				C106.163,486.948,104.768,488.341,103.076,488.341z M103.076,249.708h-14.4c-1.7,0-3.087-1.39-3.087-3.085
				c0-1.7,1.388-3.087,3.087-3.087h14.4c1.692,0,3.087,1.388,3.087,3.087C106.163,248.318,104.768,249.708,103.076,249.708z
				 M133.932,488.341h-14.392c-1.705,0-3.092-1.393-3.092-3.087c0-1.695,1.388-3.085,3.092-3.085h14.392
				c1.695,0,3.085,1.39,3.085,3.085C137.016,486.948,135.626,488.341,133.932,488.341z M133.932,249.708h-14.392
				c-1.705,0-3.092-1.39-3.092-3.085c0-1.7,1.388-3.087,3.092-3.087h14.392c1.695,0,3.085,1.388,3.085,3.087
				C137.016,248.318,135.626,249.708,133.932,249.708z M164.79,488.341h-14.403c-1.7,0-3.082-1.393-3.082-3.087
				c0-1.695,1.382-3.085,3.082-3.085h14.403c1.695,0,3.09,1.39,3.09,3.085C167.88,486.948,166.485,488.341,164.79,488.341z
				 M164.79,249.708h-14.403c-1.7,0-3.082-1.39-3.082-3.085c0-1.7,1.382-3.087,3.082-3.087h14.403c1.695,0,3.09,1.388,3.09,3.087
				C167.88,248.318,166.485,249.708,164.79,249.708z M195.646,488.341h-14.397c-1.7,0-3.087-1.393-3.087-3.087
				c0-1.695,1.388-3.085,3.087-3.085h14.397c1.7,0,3.085,1.39,3.085,3.085C198.73,486.948,197.345,488.341,195.646,488.341z
				 M195.646,249.708h-14.397c-1.7,0-3.087-1.39-3.087-3.085c0-1.7,1.388-3.087,3.087-3.087h14.397c1.7,0,3.085,1.388,3.085,3.087
				C198.73,248.318,197.345,249.708,195.646,249.708z M226.506,488.341h-14.4c-1.7,0-3.087-1.393-3.087-3.087
				c0-1.695,1.388-3.085,3.087-3.085h14.4c1.692,0,3.082,1.39,3.082,3.085C229.589,486.948,228.199,488.341,226.506,488.341z
				 M226.506,249.708h-14.4c-1.7,0-3.087-1.39-3.087-3.085c0-1.7,1.388-3.087,3.087-3.087h14.4c1.692,0,3.082,1.388,3.082,3.087
				C229.589,248.318,228.199,249.708,226.506,249.708z M257.36,488.341h-14.397c-1.7,0-3.082-1.393-3.082-3.087
				c0-1.695,1.382-3.085,3.082-3.085h14.397c1.7,0,3.087,1.39,3.087,3.085C260.447,486.948,259.059,488.341,257.36,488.341z
				 M257.36,249.708h-14.397c-1.7,0-3.082-1.39-3.082-3.085c0-1.7,1.382-3.087,3.082-3.087h14.397c1.7,0,3.087,1.388,3.087,3.087
				C260.447,248.318,259.059,249.708,257.36,249.708z M288.223,488.341h-14.405c-1.692,0-3.087-1.393-3.087-3.087
				c0-1.695,1.395-3.085,3.087-3.085h14.405c1.7,0,3.082,1.39,3.082,3.085C291.305,486.948,289.923,488.341,288.223,488.341z
				 M288.223,249.708h-14.405c-1.692,0-3.087-1.39-3.087-3.085c0-1.7,1.395-3.087,3.087-3.087h14.405c1.7,0,3.082,1.388,3.082,3.087
				C291.305,248.318,289.923,249.708,288.223,249.708z M319.081,488.341h-14.4c-1.7,0-3.087-1.393-3.087-3.087
				c0-1.695,1.388-3.085,3.087-3.085h14.4c1.692,0,3.085,1.39,3.085,3.085C322.166,486.948,320.773,488.341,319.081,488.341z
				 M319.081,249.708h-14.4c-1.7,0-3.087-1.39-3.087-3.085c0-1.7,1.388-3.087,3.087-3.087h14.4c1.692,0,3.085,1.388,3.085,3.087
				C322.166,248.318,320.773,249.708,319.081,249.708z M335.539,243.536h14.392c1.7,0,3.087,1.388,3.087,3.087
				c0,1.695-1.388,3.085-3.087,3.085h-14.392c-1.7,0-3.095-1.39-3.095-3.085C332.444,244.923,333.84,243.538,335.539,243.536z
				 M349.932,488.341h-14.392c-1.7,0-3.095-1.393-3.095-3.087c0-1.695,1.395-3.085,3.095-3.085h14.392c1.7,0,3.087,1.39,3.087,3.085
				C353.019,486.948,351.632,488.341,349.932,488.341z M427.236,420.452c0-1.695,1.385-3.085,3.085-3.085s3.08,1.39,3.08,3.085
				v14.397c0,1.705-1.38,3.09-3.08,3.09s-3.085-1.385-3.085-3.09V420.452z M427.236,451.31c0-1.695,1.385-3.085,3.085-3.085
				s3.08,1.39,3.08,3.085v14.403c0,1.7-1.38,3.085-3.08,3.085s-3.085-1.385-3.085-3.085V451.31z M424.579,482.166h1.628
				c0.456,0,1.032-0.576,1.032-1.027v-1.633c0-1.705,1.38-3.085,3.085-3.085s3.08,1.38,3.08,3.085v1.633
				c0,3.837-3.359,7.201-7.199,7.201h-1.628c-1.705,0-3.09-1.377-3.09-3.087C421.486,483.551,422.871,482.169,424.579,482.166z
				 M397.253,482.169h14.395c1.7,0,3.095,1.39,3.095,3.085c0,1.695-1.395,3.087-3.095,3.087h-14.395c-1.7,0-3.087-1.393-3.087-3.087
				S395.553,482.169,397.253,482.169z M383.88,485.254c0,1.695-1.39,3.087-3.09,3.087h-14.4c-1.7,0-3.082-1.393-3.082-3.087
				c0-1.695,1.382-3.085,3.082-3.085h14.4C382.49,482.169,383.88,483.559,383.88,485.254z"/>
                                    <path d="M421.328,183.171l-19.492,15.447h25.761v-0.681c0-5.266-2.01-10.532-6.026-14.551
				C421.496,183.309,421.412,183.248,421.328,183.171z"/>
                                    <path d="M164.713,164.186l12.324-9.764c0.054-0.138,0.087-0.256,0.148-0.399c2.744-6.397,6.533-9.608,8.499-11.492l-8.927-6.881
				c-2.678,2.322-5.64,5.786-8.445,11.63l-3.894-1.677c-1.006-0.43-2.176-0.481-3.261-0.041c-1.098,0.44-1.91,1.277-2.345,2.284
				l-0.369,0.86c-0.422,1.004-0.476,2.171-0.036,3.264c0.43,1.091,1.272,1.902,2.273,2.332l4.516,1.933
				C164.593,159.074,164.447,161.736,164.713,164.186z"/>
                                    <path d="M103.66,209.25l72.765-169.743l10.353-24.148c1.669-3.883,6.177-5.686,10.061-4.017l24.1,10.324L301.2,56.08l9.357-7.414
				c-0.768-0.481-1.572-0.929-2.429-1.293L201.068,1.483c-9.298-3.991-20.165,0.358-24.159,9.651L91.994,209.25H103.66z"/>
                                    <path d="M278.226,51.231l-59.392-25.457c-7.777,13.056-23.414,19.308-38.06,15.268L109.11,208.218l37.322-29.558
				c-5.88-11.594-6.997-24.637-1.974-36.365c10.02-23.38,40.694-32.668,68.511-20.746c1.193,0.512,2.355,1.068,3.502,1.641
				l63.119-49.994c-2.808-6.797-3.433-14.492-1.372-21.939C278.226,51.244,278.226,51.236,278.226,51.231z"/>
                                </g>
                            </g>
                        </g>

                    </svg>
                </VisibilityManager>
                <VisibilityManager as='li' classes={`${styles.steps__item} ${shadowStyles.shadow}`}>
                    <div className={styles.steps__number}>5</div>
                    <p className={styles.steps__description}>Процесс протезирования на базе специализированных предприятий в вашем регионе</p>
                    <svg className={styles.prod} width="100px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M370.5 929.7h-48.3c-9.7 0-18.9-3.8-25.7-10.6-6.9-6.9-10.7-16.1-10.7-25.8v-28.4c0-3.9-4.1-9.5-7.8-10.7l-0.8-0.2-37.5-15.4-0.9-0.5c-3.4-1.8-10-0.8-12.7 1.9l-20.2 20.2c-6.8 6.9-16 10.7-25.8 10.7-9.7 0-18.9-3.8-25.8-10.7L120 826c-6.9-6.9-10.7-16.1-10.7-25.8s3.8-18.9 10.7-25.8l20.2-20.2c2.7-2.7 3.7-9.5 1.9-13l-0.4-0.8-15.4-37.4-0.2-0.8c-1.2-3.7-6.8-7.9-10.7-7.9H87c-9.7 0-18.9-3.8-25.8-10.6-6.9-6.9-10.7-16.1-10.7-25.8v-48.3c0-9.7 3.8-18.9 10.7-25.8 6.9-6.9 16.1-10.7 25.8-10.7h28.5c3.9 0 9.5-4.1 10.7-7.9l0.2-0.8 15.4-37.4 0.4-0.8c1.8-3.4 0.8-10.1-1.9-12.9l-20.1-20.2c-6.9-6.9-10.7-16-10.7-25.8s3.8-18.9 10.7-25.8l34.1-34.1c6.9-6.9 16.1-10.7 25.8-10.7 9.8 0 18.9 3.8 25.8 10.7l20.3 20.2c2.7 2.7 9.4 3.7 12.9 1.9l0.8-0.4 37.4-15.4 0.8-0.2c3.7-1.2 7.8-6.7 7.8-10.7v-28.5c0-9.7 3.8-18.9 10.7-25.8 6.9-6.9 16-10.7 25.8-10.7h48.4c9.7 0 18.9 3.8 25.8 10.7 6.9 6.9 10.7 16 10.7 25.8v28.5c0 3.9 4.1 9.5 7.9 10.7l0.8 0.2 37.4 15.4 0.8 0.4c3.4 1.8 10.2 0.8 12.9-1.9l20.2-20.2c6.9-6.9 16.1-10.7 25.8-10.7s18.9 3.8 25.7 10.7l34.2 34.2c6.9 6.9 10.7 16 10.7 25.8 0 9.7-3.8 18.9-10.7 25.8l-20.2 20.2c-2.7 2.7-3.7 9.5-1.9 12.9l0.4 0.8 15.4 37.4 0.2 0.8c1.2 3.8 6.8 7.9 10.7 7.9H606c9.7 0 18.9 3.8 25.8 10.7 6.9 6.9 10.7 16 10.7 25.8V658c0 9.7-3.8 18.9-10.7 25.8-6.9 6.9-16 10.7-25.8 10.7h-28.4c-3.9 0-9.5 4.1-10.7 7.9l-0.2 0.7-15.7 37.4-0.4 0.8c-1.8 3.4-0.8 10.2 1.9 13l20.2 20.1c6.9 6.9 10.7 16.1 10.7 25.8 0 9.8-3.8 18.9-10.7 25.8l-34.2 34.2c-6.8 6.9-15.9 10.7-25.7 10.7h-0.1c-9.7 0-18.9-3.8-25.8-10.8L466.8 840c-2.7-2.7-9.5-3.7-12.9-1.9l-0.8 0.5-37.5 15.4-0.7 0.2c-3.8 1.2-7.9 6.8-7.9 10.7v28.4c0 9.7-3.8 18.9-10.7 25.8-7 6.8-16.1 10.6-25.8 10.6z m-81.2-109.3c18.3 6.1 32.1 25.1 32.1 44.5v28.4c0 0.3 0.2 0.5 0.2 0.5s0.2 0.2 0.6 0.2h48.3c0.3 0 0.5-0.1 0.6-0.2 0 0 0.2-0.2 0.2-0.5v-28.4c0-19.4 13.7-38.3 32.1-44.5l34.5-14.2c17.3-8.8 40.4-5.2 54.1 8.5l20.1 20.2c0.2 0.2 0.4 0.2 0.5 0.2 0.1 0 0.3 0 0.5-0.2l34.3-34.3c0.2-0.2 0.2-0.3 0.2-0.6 0-0.1 0-0.3-0.2-0.6l-20.2-20.1c-13.7-13.7-17.3-36.8-8.6-54.1l14.2-34.5c6.2-18.3 25.1-32.1 44.5-32.1h28.4c0.3 0 0.4-0.1 0.5-0.2 0.1-0.1 0.2-0.3 0.2-0.5v-48.4c0-0.3-0.2-0.5-0.2-0.6-0.1-0.1-0.2-0.2-0.5-0.2h-28.4c-19.4 0-38.3-13.7-44.5-32.1l-14.2-34.5c-8.7-17.3-5.1-40.3 8.6-54.1l20.2-20.2c0.2-0.2 0.2-0.5 0.2-0.5 0-0.2-0.1-0.4-0.2-0.5l-34.3-34.2c-0.2-0.2-0.4-0.2-0.5-0.2-0.2 0-0.4 0.1-0.6 0.2L491.9 453c-13.7 13.7-36.8 17.4-54.1 8.6l-34.4-14.2c-18.4-6.2-32.1-25.1-32.1-44.5v-28.5c0-0.3-0.2-0.5-0.2-0.5-0.1-0.1-0.3-0.3-0.5-0.3h-48.4c-0.3 0-0.5 0.1-0.5 0.2-0.1 0.1-0.2 0.2-0.2 0.5v28.5c0 19.4-13.7 38.4-32.1 44.5l-34.5 14.2c-17.3 8.7-40.4 5.1-54-8.6l-20.2-20.1c-0.2-0.2-0.5-0.2-0.6-0.2-0.1 0-0.3 0-0.6 0.2L145.3 467c-0.2 0.2-0.2 0.4-0.2 0.6 0 0 0 0.2 0.2 0.4l20.2 20.2c13.7 13.7 17.4 36.8 8.6 54.1l-14.2 34.5c-6.1 18.4-25.1 32.1-44.5 32.1H86.9c-0.3 0-0.5 0.1-0.5 0.2-0.1 0.1-0.2 0.2-0.2 0.6V658c0 0.3 0.2 0.5 0.2 0.6 0 0 0.2 0.2 0.5 0.2h28.5c19.4 0 38.3 13.8 44.5 32.1l14.2 34.5c8.7 17.4 5.1 40.4-8.6 54.1l-20.2 20.1c-0.2 0.2-0.2 0.5-0.2 0.5 0 0.1 0 0.3 0.2 0.6l34.2 34.2c0.2 0.2 0.4 0.2 0.5 0.2 0.1 0 0.3 0 0.5-0.2l20.2-20.2c13.7-13.7 36.7-17.3 54-8.5l34.6 14.2z m57.1-61.8c-68.8 0-124.8-56-124.8-124.7 0-68.8 56-124.8 124.8-124.8s124.8 56 124.8 124.8c0 68.7-56 124.7-124.8 124.7z m0-213.8c-49.1 0-89.1 40-89.1 89.1 0 49.1 40 89.1 89.1 89.1 49.1 0 89.1-39.9 89.1-89.1 0-49.2-40-89.1-89.1-89.1zM756.7 511.8c-7.3 0-14.4-2.6-20.1-7.3-6.4-5.4-10.4-13-11.1-21.3l-1.8-20.5c-0.2-0.9-1.7-2.6-2.5-2.9l-0.8-0.2-0.7-0.2-27.7-8.7-0.8-0.4c-0.9-0.2-2.8 0.2-3.5 0.8l-13.3 15.8c-5.4 6.4-13 10.3-21.3 11-8.3 0.7-16.4-1.9-22.8-7.2l-26.8-22.6c-6.4-5.4-10.3-12.9-11.1-21.3-0.7-8.4 1.9-16.5 7.3-22.9l13.3-15.7c0.5-0.8 0.6-2.9 0.2-3.8l-0.5-0.7-0.4-0.7-13.3-25.7-0.3-0.8c-0.4-0.8-2.3-1.9-3.3-2l-20.4 1.8c-8.3 0.7-16.4-1.9-22.8-7.2-6.4-5.4-10.3-13-11.1-21.3l-3-34.9c-0.7-8.3 1.9-16.4 7.3-22.9 5.4-6.4 12.9-10.3 21.3-11l20.5-1.7c1-0.2 2.6-1.7 2.9-2.6l0.2-0.8 0.2-0.7 8.7-27.7 0.3-0.8c0.2-0.9-0.3-2.9-0.9-3.6L582.9 208c-6.4-5.4-10.3-12.9-11-21.3-0.7-8.4 1.9-16.5 7.2-22.8l22.5-26.8c5.4-6.4 13-10.3 21.3-11 8.3-0.7 16.5 1.9 22.9 7.2l15.8 13.3c0.8 0.5 2.9 0.6 3.7 0.2l0.8-0.5 0.7-0.4 25.7-13.2 0.7-0.3c0.8-0.4 1.9-2.3 1.9-3.3l-1.8-20.5c-0.7-8.3 1.9-16.4 7.2-22.8 5.4-6.4 13-10.3 21.3-11.1l34.9-3c8.3-0.7 16.5 1.9 22.8 7.3 6.4 5.4 10.3 13 11 21.3l1.8 20.5c0.2 0.9 1.7 2.6 2.6 2.9l0.8 0.2 0.7 0.2 27.6 8.7 0.8 0.4c0.8 0.2 2.8-0.3 3.6-0.9l13.3-15.8c5.4-6.4 13-10.3 21.3-11 8.3-0.7 16.4 1.9 22.8 7.2l26.8 22.5c6.4 5.4 10.3 13 11.1 21.3 0.7 8.3-1.9 16.4-7.2 22.8L903.2 195c-0.5 0.8-0.6 2.9-0.2 3.8l0.5 0.7 0.4 0.7 13.2 25.6 0.3 0.7c0.4 0.8 2.4 2 3.3 2l20.4-1.8c8.3-0.7 16.4 1.9 22.8 7.3 6.4 5.4 10.3 13 11 21.3l3 34.9c0.7 8.4-1.9 16.5-7.3 22.9-5.4 6.4-12.9 10.3-21.3 11l-20.5 1.8c-0.9 0.2-2.6 1.7-2.9 2.6l-0.2 0.8-0.2 0.7-8.7 27.6-0.3 0.8c-0.2 0.8 0.3 2.9 0.9 3.6l15.7 13.2c6.4 5.4 10.3 13 11 21.3 0.7 8.4-1.9 16.5-7.3 22.9l-22.6 26.8c-5.4 6.4-13 10.3-21.3 11-8.3 0.7-16.4-1.9-22.8-7.3l-15.6-13.2c-0.8-0.5-2.9-0.6-3.7-0.2l-0.7 0.5-26.5 13.7-0.7 0.3c-0.8 0.4-2 2.3-2 3.3l1.8 20.4c0.7 8.3-1.9 16.5-7.3 22.9-5.4 6.4-13 10.3-21.3 11l-34.9 3c-0.7 0.1-1.6 0.2-2.5 0.2z m-26.9-86.6c15.5 3.8 28.1 18.5 29.5 34.4l1.4 16.1 26.2-2.2-1.4-16.1c-1.4-15.9 8.6-32.5 23.2-39l23.7-12.2c13.7-8.4 32.9-7 45.2 3.3l12.5 10.5 17-20.1-12.5-10.5c-12.3-10.3-16.9-29-11-43.9l8-25.5c3.9-15.5 18.5-28.1 34.4-29.5l16.2-1.4-2.3-26.2-16.2 1.4c-16 1.4-32.5-8.6-39-23.2l-12.2-23.7c-8.3-13.7-6.9-32.9 3.4-45.1l10.5-12.5-20.2-16.9-10.5 12.5c-10.3 12.3-29 16.9-43.9 11l-25.4-8c-15.5-3.8-28.1-18.5-29.5-34.4l-1.4-16.2-26.2 2.2 1.4 16.2c1.4 16-8.6 32.5-23.2 39l-23.7 12.2c-13.7 8.3-32.9 6.9-45.2-3.4l-12.5-10.5-16.9 20.1 12.5 10.5c12.3 10.3 16.9 29 11 43.9l-8 25.4c-3.8 15.5-18.5 28.1-34.4 29.5l-16.2 1.4 2.2 26.2 16.2-1.4c16-1.3 32.5 8.6 38.9 23.2l12.2 23.7c8.3 13.7 6.9 33-3.4 45.2l-10.5 12.4 20.2 17 10.5-12.5c10.3-12.3 29-16.9 43.9-11l25.5 8.1z m-42.1 26z m0.1-0.1z m3.4-0.8z m196-26.9z m22.6-26.8z m-286.9-236z m205.6-28.3zM758 387c-22.4 0-43.9-7.8-61.2-22.4-19.5-16.4-31.4-39.4-33.6-64.8-2.2-25.4 5.7-50.1 22.1-69.5 16.4-19.5 39.4-31.4 64.8-33.6 25.4-2.2 50.1 5.7 69.5 22.1 19.5 16.4 31.4 39.4 33.6 64.8 2.2 25.4-5.7 50.1-22.1 69.5-16.4 19.5-39.4 31.4-64.8 33.6-2.8 0.2-5.5 0.3-8.3 0.3z m0.3-154.9c-1.7 0-3.5 0.1-5.2 0.2-15.9 1.4-30.3 8.8-40.5 21-10.3 12.2-15.2 27.6-13.8 43.5 1.4 15.9 8.8 30.3 21 40.5 12.2 10.3 27.6 15.1 43.5 13.8 15.9-1.4 30.3-8.8 40.5-21 10.3-12.2 15.2-27.6 13.8-43.5-1.4-15.9-8.8-30.3-21-40.5-10.9-9.2-24.3-14-38.3-14z" /></svg>
                </VisibilityManager>
                <VisibilityManager as='li' classes={`${styles.steps__item} ${shadowStyles.shadow}`}>
                    <div className={styles.steps__number}>6</div>
                    <p className={styles.steps__description}>Возможность компенсации средств за протезирование со стороны Фонда социального страхования</p>
                    <svg width="100px" className={styles.soc} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M6,25.16H6A82.62,82.62,0,0,0,7.12,38.75l.26,1.57a17.4,17.4,0,0,0,2.69,6.79l4.71,7.07a5,5,0,0,1,.68,4A1.51,1.51,0,0,0,16.93,60h6.55A4.52,4.52,0,0,0,28,55.48V47.93a16.64,16.64,0,0,0-2.09-8.08,15.5,15.5,0,0,0-6.69-6.24L16.3,32.15a1.42,1.42,0,0,0-.63-.15h-.25a1.42,1.42,0,0,0-1,2.41l5.18,5.21a1.42,1.42,0,0,1,.08,1.9,1.4,1.4,0,0,1-2.1.06l-3.85-3.85a10.35,10.35,0,0,1-2.5-4l-3-8.89A1.16,1.16,0,0,0,6,25.16Z" /><path d="M56.61,40.32l.26-1.57A82.62,82.62,0,0,0,58,25.16h0a1.16,1.16,0,0,0-2.26-.37l-3,8.89a10.35,10.35,0,0,1-2.5,4l-3.85,3.85a1.4,1.4,0,0,1-2.1-.06,1.42,1.42,0,0,1,.08-1.9l5.18-5.21a1.42,1.42,0,0,0-1-2.41h-.25a1.42,1.42,0,0,0-.63.15l-2.92,1.46a15.5,15.5,0,0,0-6.69,6.24A16.64,16.64,0,0,0,36,47.93v8A4.11,4.11,0,0,0,40.11,60h7a1.51,1.51,0,0,0,1.46-1.87,5,5,0,0,1,.68-4l4.71-7.07A17.4,17.4,0,0,0,56.61,40.32Z" /><path d="M44,18.35V8.54h0a1,1,0,0,0-.72-1L32.85,4.13A2.74,2.74,0,0,0,32,4h0a2.74,2.74,0,0,0-.85.13L20.69,7.55a1,1,0,0,0-.72,1v9.81A13.95,13.95,0,0,0,31.06,32a4.62,4.62,0,0,0,.94.1h0a4.62,4.62,0,0,0,.94-.1A13.94,13.94,0,0,0,44,18.35Zm-4,0a10,10,0,0,1-7.9,9.72H32V18H24V10.68l8-2.62V18h8Z" /></svg>
                </VisibilityManager>
            </ul>
            <VisibilityManager as='div'>
                <h2 className={containerStyles.container__title} id="ways">Воспользуйтесь возможностью получить протез бесплатно</h2>
                <p className={styles['steps-page__description']}>
                    Согласно <a target="_blank" href="https://mintrud.gov.ru/docs/government/183">Постановлению Правительства РФ от 7 апреля 2008 года № 240</a>, все граждане с инвалидностью имеют право на бесплатное протезирование в рамках индивидуальной программы реабилитации (ИПРА).
                </p>
                <p className={styles['steps-page__description']}>
                    Доступны три способа получения технических средств реабилитации (ТСР) за счет средств из федерального бюджета:
                </p>
            </VisibilityManager>

            <ul className={styles['steps-rows']}>
                <VisibilityManager as='li' classes={`${shadowStyles.shadow} ${styles['steps-rows__item']}`}>
                    <div className={styles.steps__number}>1</div>
                    <h3 className={styles["steps__description"]}>
                        Государственный контракт
                    </h3>
                    <p className={`${styles["steps-rows__item-description"]} ${styles['steps-rows__item-description--white']}`}>{` 
                    • гражданство РФ и наличие ИПРА;
                    • ожидание от 2 до 12 месяцев;
                    • государственные контракты для предоставления технических средств реабилитации организуются с учетом потребностей граждан;
                    `}
                    </p>
                    <p className={styles["steps-rows__item-description"]}>{` Для получения протеза по государственному контракту требуется предоставить следующие документы: ИПРА, Паспорт РФ (свидетельство о рождении), СНИЛС.
                        Обратиться за государственным контрактом можно в местное отделение Социального фонда России (СФР) или через портал Госуслуги.
                        Сроки получения протеза варьируются от 2 до 12 месяцев.
                        Государственные контракты на предоставление технических средств реабилитации организуются с учетом потребностей граждан.
                        Ожидание поступления средств для организации конкурса может занять от 2 до 12 месяцев.
                        Согласно законодательству о государственных закупках, контракт заключается на основе результатов торгов.
                        Победителем становится компания, предложившая наиболее выгодные условия.
                        Однако каждый имеет возможность просить о заключении контракта с организацией, предоставившей МТЗ.
                        Исходя из нашего опыта, обычно контракт выигрывает выбранный вами поставщик.
                        Но если вам не повезло, всегда есть возможность отказаться от данного метода и выбрать другие варианты финансирования.`}
                    </p>
                </VisibilityManager>

                <VisibilityManager as='li' classes={`${shadowStyles.shadow} ${styles['steps-rows__item']}`}>
                    <div className={styles.steps__number}>2</div>
                    <h3 className={styles["steps__description"]}>
                        Электронный сертификат
                    </h3>
                    <p className={`${styles["steps-rows__item-description"]} ${styles['steps-rows__item-description--white']}`}>{` 
                    • гражданство РФ и наличие ИПРА;
                    • ожидание до 2-х месяцев;
                    • сумма сертификата зависит от региона;
                    • срок действия электронного сертификата не превышает 12 месяцев;
                    `}
                    </p>
                    <p className={styles["steps-rows__item-description"]}>{` Для получения протеза посредством электронного сертификата потребуются следующие документы: паспорт РФ (свидетельство о рождении ребенка), ИПРА и карта МИР.
Обратиться за электронным сертификатом можно в местное отделение Социального фонда России (СФР) или через портал Госуслуги. Сроки получения протеза по данному методу составляют до 2 месяцев.
С осени 2021 года начало действовать новое Постановление Правительства Российской Федерации от 29.04.2021 № 678, предусматривающее оплату технических средств реабилитации через электронный сертификат. 
Сумма сертификата будет зависеть от региона.
В информационной системе будут собраны данные о доступных средствах реабилитации, которые можно приобрести по электронному сертификату. 
Эту платформу синхронизируют с порталом госуслуг, через который можно будет подавать заявления на получение электронных сертификатов.
К сожалению, на данный момент возможность получить протезы верхних и нижних конечностей посредством сертификата представлена не во всех регионах.
Срок действия электронного сертификата определяется программой реабилитации, но не превышает 12 месяцев с момента начала его действия. 
В любое время у вас есть возможность отказаться от полученного сертификата и выбрать другие способы получения протеза.`}
                    </p>
                </VisibilityManager>

                <VisibilityManager as='li' classes={`${shadowStyles.shadow} ${styles['steps-rows__item']}`}>
                    <div className={styles.steps__number}>3</div>
                    <h3 className={styles["steps__description"]}>
                        Государственная компенсация
                    </h3>
                    <p className={`${styles["steps-rows__item-description"]} ${styles['steps-rows__item-description--white']}`}>{`              
                    • гражданство РФ и наличие ИПРА;
                    • ожидание до 2 месяцев;
                    • рассмотрение вопроса об оплате протеза в период ожидания компенсации от Фонда социального страхования;
                    • возможность воспользоваться беспроцентным займом от МОДЕСТА;
                    `}
                    </p>
                    <p className={styles["steps-rows__item-description"]}>{`Необходимые документы: ИПРА, Паспорт РФ (свидетельство о рождении ребенка), СНИЛС, Документы, подтверждающие расходы, Паспорт изделия, Копия сертификата соответствия.
Место обращения: местное отделение Социального фонда России (СФР) или портал Госуслуги.
Сроки получения протеза: до 2 месяцев.
Этот метод позволяет быстро и просто получить тяговый протез для граждан России. 
Стоимость протеза компенсируется Фондом социального страхования после его получения.
Выбирая протезную организацию самостоятельно, вы можете получить компенсацию от государства после получения протеза, что значительно ускоряет процесс.
Для использования этого способа оплаты необходимо предварительно оплатить протез собственными средствами.`}
                    </p>
                </VisibilityManager>
            </ul>
        </div>
    );
}