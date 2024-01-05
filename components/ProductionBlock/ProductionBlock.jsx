import production1 from '../../public/images/production1.jpg';
import production2 from '../../public/images/production2.jpg';
import production3 from '../../public/images/production3.jpg';
import production4 from '../../public/images/production4.jpg';
import production5 from '../../public/images/production5.jpg';
import styles from "./ProductionBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from '../../styles/container.module.css';
import shadowStyles from '../../styles/shadow.module.css';
import Image from 'next/image.js';

export function ProductionBlock() {
    return (
        <section className={`${styles.production__container} ${containerStyles.container}`}>
            <VisibilityManager as="li" side="topmax"  classes={`${styles.production__item} ${shadowStyles.shadow}`} id="production">
                <Image   className={styles.production__image} src={production1} alt="Изображение протезов" />
                <div className={styles.production__content}>
                    <p className={styles.production__description}>
                        Опытным путём мы пришли к протезам которые не похожи на руку человека, так как они намного эффективнее выполняют захват предметов. А ещё важно сохранить не отталкивающий внешний вид, поэтому мы полностью пересмотрели концепцию понятия “протез руки”.
                    </p>
                </div>
            </VisibilityManager>
            <VisibilityManager as="li" side="topmax"  classes={`${styles.production__item} ${shadowStyles.shadow}`}>
                <Image   className={styles.production__image} src={production2} alt="Культевая гильза" />
                <div className={styles.production__content}>
                    <p className={styles.production__description}>Конструктивно мы придерживаемся простоты механизмов, чтобы увеличить надежность пользования. Поэтому в случае поломки вы можете отправить нам протез для ремонта или заменить неисправные комплектующие самостоятельно.

                    </p>
                </div>
            </VisibilityManager>
            <VisibilityManager as="li" side="topmax"  classes={`${styles.production__item} ${shadowStyles.shadow}`}>
                <Image  className={styles.production__image} src={production3} alt="3Д печать протеза" />
                <div className={styles.production__content}>
                    <p className={styles.production__description}>Технологии производства – наше устройство полностью изготавливается с помощью 3D печати. Сначала мы печатаем в своей лаборатории прототип устройства, отдельные узлы, проверяем работоспособность и в дальнейшем отправляем на печать промышленную.
                    </p>
                </div>
            </VisibilityManager>
            <VisibilityManager as="li" side="topmax"  classes={`${styles.production__item} ${shadowStyles.shadow}`}>
                <Image   className={styles.production__image} src={production4} alt="Создание культеприёмной гильзы" />
                <div className={styles.production__content}>
                    <p className={styles.production__description}>Вкладыш или культиприёмная гильза изготавливается с помощью наших партнеров почти в каждом городе России, пока мы делаем корпусные элементы индивидуально под вашу культю.
                    </p>
                </div>
            </VisibilityManager>

            <VisibilityManager as="li" side="topmax"  classes={`${styles.production__item} ${shadowStyles.shadow}`}>
                <Image  className={styles.production__image} src={production5} alt="Обработка деталей протеза" />
                <div className={styles.production__content}>
                    <p className={styles.production__description}>Каждый протез обрабатывается и собирается вручную, все элементы сделаны из материалов которые позволят увеличить срок изнашивания,
                        а когда это время настанет мы оперативно отправим расходные материалы.</p>
                </div>
            </VisibilityManager>
        </section>
    );
}