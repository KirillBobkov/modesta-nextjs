import production1 from "../../public/images/production1.jpg";
import production2 from "../../public/images/production2.jpg";
import production3 from "../../public/images/production3.jpg";
import production4 from "../../public/images/production4.jpg";
import production5 from "../../public/images/production5.jpg";
import styles from "./ProductionBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import Image from "next/image.js";

export function ProductionBlock() {
  return (
    <section
      className={`${styles.production__container} ${containerStyles.container}`}
    >
      <VisibilityManager
        itemScope
        itemType="http://schema.org/ImageObject"
        as="li"
        side="topmax"
        classes={`${styles.production__item} ${shadowStyles.shadow}`}
        id="production"
      >
        <Image
          priority
          itemProp="contentUrl"
          className={styles.production__image}
          src={production1}
          alt="Изображение протезов"
        />
        <div className={styles.production__content}>
          <h3 itemProp="name" className={styles.production__title}>
            Захват предметов
          </h3>
          <p itemProp="description" className={styles.production__description}>
            — одна из главных функций, которая необходима человеку. Поэтому, при
            разработке протеза верхних конечностей “Модеста”, нами было принято
            решение полностью пересмотреть концепцию понятия “протез руки”
          </p>
        </div>
      </VisibilityManager>
      <VisibilityManager
        itemScope
        itemType="http://schema.org/ImageObject"
        as="li"
        side="topmax"
        classes={`${styles.production__item} ${shadowStyles.shadow}`}
      >
        <Image
          priority
          itemProp="contentUrl"
          className={styles.production__image}
          src={production2}
          alt="Культевая гильза"
        />
        <div className={styles.production__content}>
          <h3 itemProp="name" className={styles.production__title}>
            Простота механизмов и надежность пользования
          </h3>
          <p itemProp="description" className={styles.production__description}>
            — то, к чему мы стремимся. В случае поломки, вы всегда можете
            связаться с нами по вопросу ремонта или заменить неисправные
            комплектующие самостоятельно
          </p>
        </div>
      </VisibilityManager>
      <VisibilityManager
        itemScope
        itemType="http://schema.org/ImageObject"
        as="li"
        side="topmax"
        classes={`${styles.production__item} ${shadowStyles.shadow}`}
      >
        <Image
          priority
          itemProp="contentUrl"
          className={styles.production__image}
          src={production3}
          alt="3Д печать протеза"
        />
        <div className={styles.production__content}>
        <h3 itemProp="name" className={styles.production__title}>
            Современные технологические решения
          </h3>
          <p itemProp="description" className={styles.production__description}>
            Наша технология производства заключается в изготовлении изделий с
            помощью 3D печати. В своей лаборатории мы изготавливаем прототип
            устройства, отдельные узлы, проверяем их работоспособность, а уже
            после отправляем на промышленную печать
          </p>
        </div>
      </VisibilityManager>
      <VisibilityManager
        itemScope
        itemType="http://schema.org/ImageObject"
        as="li"
        side="topmax"
        classes={`${styles.production__item} ${shadowStyles.shadow}`}
      >
        <Image
          priority
          itemProp="contentUrl"
          className={styles.production__image}
          src={production4}
          alt="Создание культеприёмной гильзы"
        />
        <div className={styles.production__content}>
          <h3 itemProp="name" className={styles.production__title}>
            Индивидуальный подход
          </h3>
          <p itemProp="description" className={styles.production__description}>
            В то время, как мы изготавливаем корпусные элементы, вкладыш или
            культеприёмная гильза изготавливается нашими партнерами
            индивидуально под ваш размер
          </p>
        </div>
      </VisibilityManager>

      <VisibilityManager
        itemScope
        itemType="http://schema.org/ImageObject"
        as="li"
        side="topmax"
        classes={`${styles.production__item} ${shadowStyles.shadow}`}
      >
        <Image
          priority
          itemProp="contentUrl"
          className={styles.production__image}
          src={production5}
          alt="Обработка деталей протеза"
        />
        <div className={styles.production__content}>
          <h3 itemProp="name" className={styles.production__title}>
            Ручная обработка и сборка
          </h3>
          <p itemProp="description" className={styles.production__description}>
            Все элементы сделаны из материалов, которые позволяют увеличить срок
            пользования. Когда ваш протез начнет изнашиваться, мы оперативно
            отправим вам расходные материалы для замены
          </p>
        </div>
      </VisibilityManager>
    </section>
  );
}
