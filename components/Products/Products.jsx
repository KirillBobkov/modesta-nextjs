import styles from "./Product.module.css";
import { GridBlock } from "../GridBlock/GridBlock";
import product_1 from "../../public/images/product_1.webp";
import product_2 from "../../public/images/product_2.webp";
import product_3 from "../../public/images/product_3.webp";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import Image from "next/image";
import { useTheme } from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useState } from "react";

const blocks = [
  {
    title: "Кисть",
    image: product_1,
    price: 'В размерах "XS", "S", "M", "L", может поставляться с фрикционным запястьем или без него. Резьбовое соединение 12х1.5 мм'
  },
  {
    title: "Тяговый протез",
    image: product_2,
    price: 'Изделие не похожее на руку человека, в дизайне "МОДЕСТА 1.0", внешней гильзой из полиамида'
  },
  {
    title: "Биоэлектрический протез",
    image: product_3,
    price: 'В разработке. Оформите предзаказ, и станьте одним из первых испытателей'
  },
];

const Product = ({ item, setOpened }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      itemScope
      itemType="https://schema.org/Product"
      className={styles["product-grid__item"]}
      href={item.link}
    >
      <Image
        className={styles["product-grid__img"] + ' ' + (loaded ? styles.loaded : '')}
        src={item.image}
        alt={item.title}
        itemProp="image"
        onLoad={() => setLoaded(true)}
      />
      <p
        className={styles["product-grid__title"]}
        itemProp="name"
      >
        {item.title}
      </p>
      <p
        className={styles["product-grid__description"]}
        itemProp="description"
      >
        {item.price}
      </p>
      <FeedbackButton
        classes={styles["product-grid__button"]}
        onClick={setOpened}
        text={'Узнать подробнее'}
        withIcon={false}
      />
    </div>
  );
};

export const ProductsGrid = ({ setOpened }) => {
  const { theme } = useTheme();
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);
    return (
      <div style={{ padding: '60px 0 1px', marginBottom: '60px' , position: 'relative' }}>
        <GridBlock
          title={"Продуктовая линейка"}
          id="products"
          columns={3}
          content={blocks}
          customItemStyles={{ background: 'var(--card-bg-color)' }}
          renderItem={(item) => <Product setOpened={setOpened} item={item} />}
        />
      </div>
    );
  };