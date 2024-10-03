import styles from "./Product.module.css";
import { GridBlock } from "../GridBlock/GridBlock";
import product_1 from "../../public/images/product_1.webp";
import product_2 from "../../public/images/product_2.webp";
import product_3 from "../../public/images/product_3.webp";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import Image from "next/image";
import tech_background_white from "../../public/images/tech_background_white.webp";
import tech_background_black from "../../public/images/tech_background_black.webp";
import tech_background_white_mobile from "../../public/images/tech_background_white_mobile.webp";
import tech_background_black_mobile from "../../public/images/tech_background_black_mobile.webp";
import { useTheme } from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const blocks = [
  {
    title: "Кисть",
    image: product_1,
    price: 'Протез кисти в размере "XS", "S", "M", "L", может поставляться с фрикционным запястьем или без него. Резьбовое соединение 12х1.5 мм'
  },
  {
    title: "Тяговый протез",
    image: product_2,
    price: 'Тяговый протез не похожий на руку человека, в дизайне "МОДЕСТА 1.0", внешней гильзой из полиамида'
  },
  {
    title: "Биоэлектрический протез",
    image: product_3,
    price: 'Находится в стадии разработки, уже сейчас можно встать в очередь и вскоре стать одним из первых испытателей'
  },
  
];

const Product = ({ item, setOpened }) => {
  return (
    <div
      itemScope
      itemType="https://schema.org/Product"
      className={styles["product-grid__item"]}
      href={item.link}
    >
      <Image
        className={styles["product-grid__img"]}
        src={item.image}
        alt={item.title}
        itemProp="image"
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
      <Image
        src={
          theme === "light"
            ? isMobile
              ? tech_background_white_mobile.src
              : tech_background_white.src
            : isMobile
            ? tech_background_black_mobile.src
            : tech_background_black.src
        }
        layout="fill"
        objectFit="cover"
        alt="Background image"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      />
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