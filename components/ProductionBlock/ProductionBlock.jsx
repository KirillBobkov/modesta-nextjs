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
            <VisibilityManager  itemScope itemType="http://schema.org/ImageObject" as="li" side="topmax"  classes={`${styles.production__item} ${shadowStyles.shadow}`} id="production">
                <Image priority itemProp="contentUrl" priority   className={styles.production__image} src={production1} alt="Изображение протезов" />
              <span style={{ display: 'none' }} itemProp="name">Изображение протезов</span>
                <div className={styles.production__content}>
                    <p itemProp="description" className={styles.production__description}>
                    Опытным путём мы пришли к протезам, которые не похожи на руку человека, так как они намного эффективнее выполняют захват предметов. А ещё важно сохранить не отталкивающий внешний вид, поэтому мы полностью пересмотрели концепцию понятия “протез руки”</p>
                </div>
            </VisibilityManager>
            <VisibilityManager itemScope itemType="http://schema.org/ImageObject"  as="li" side="topmax"  classes={`${styles.production__item} ${shadowStyles.shadow}`}>
                <Image priority itemProp="contentUrl" priority   className={styles.production__image} src={production2} alt="Культевая гильза" />
                <div className={styles.production__content}>
                    <span style={{ display: 'none' }} itemProp="name">Культевая гильза</span>
                    <p itemProp="description" className={styles.production__description}>
                    Конструктивно мы придерживаемся простоты механизмов, чтобы увеличить надежность пользования. Поэтому, в случае поломки, вы можете отправить нам протез для ремонта или заменить неисправные комплектующие самостоятельно
                    </p>
                </div>
            </VisibilityManager>
            <VisibilityManager itemScope itemType="http://schema.org/ImageObject"  as="li" side="topmax"  classes={`${styles.production__item} ${shadowStyles.shadow}`}>
                <Image priority itemProp="contentUrl" priority  className={styles.production__image} src={production3} alt="3Д печать протеза" />
                <div className={styles.production__content}>
                    <span style={{ display: 'none' }} itemProp="name">3Д печать протеза</span>
                    <p itemProp="description" className={styles.production__description}>
                    Наша технология производства заключается в изготовлении изделий с помощью 3D печати. Сначала мы печатаем в своей лаборатории прототип устройства, отдельные узлы, проверяем их работоспособность и в дальнейшем отправляем на промышленную печать
                    </p>
                </div>
            </VisibilityManager>
            <VisibilityManager itemScope itemType="http://schema.org/ImageObject" as="li" side="topmax"  classes={`${styles.production__item} ${shadowStyles.shadow}`}>
                <Image priority itemProp="contentUrl" priority   className={styles.production__image} src={production4} alt="Создание культеприёмной гильзы" />
                <div className={styles.production__content}>
                    <span style={{ display: 'none' }} itemProp="name">Создание культеприёмной гильзы</span>
                    <p itemProp="description" className={styles.production__description}>
                    Вкладыш или культеприёмная гильза изготавливается нашими партнерами, находящимися во многих городах России. Это происходит, одновременно с нашим изготовлением корпусных элементов индивидуально под ваш размер
                    </p>
                </div>
            </VisibilityManager>

            <VisibilityManager itemScope itemType="http://schema.org/ImageObject"  as="li" side="topmax"  classes={`${styles.production__item} ${shadowStyles.shadow}`}>
                <Image priority itemProp="contentUrl" priority  className={styles.production__image} src={production5} alt="Обработка деталей протеза" />
                <div className={styles.production__content}>
                    <span style={{ display: 'none' }} itemProp="name">Обработка деталей протеза</span>
                    <p itemProp="description" className={styles.production__description}>
                    Каждый протез обрабатывается и собирается вручную. Все элементы сделаны из материалов, которые позволят увеличить срок пользования. А когда ваш протез изнашивается, мы оперативно отправляем вам расходные материалы
                    </p>
                </div>
            </VisibilityManager>
        </section>
    );
}