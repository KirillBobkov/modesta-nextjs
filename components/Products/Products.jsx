import styles from "./Product.module.css";
import { GridBlock } from "../GridBlock/GridBlock";
import product_1 from "../../public/images/product_1.webp";
import product_2 from "../../public/images/product_2.webp";
import product_3 from "../../public/images/product_3.webp";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import Image from "next/image";
import formBack from "../../public/images/form_back.webp";

const blocks = [
  {
    title: "Кисть",
    image: product_1,
    price: 'от 60 тыс. рублей'
  },
  {
    title: "Тяговый протез",
    image: product_2,
    price: '150 тыс. рублей'
  },
  {
    title: "Биоэлектрический протез",
    image: product_3,
    price: '550 тыс. руб.'
  },
  
];

const Product = ({ item, setOpened }) => {
  return (
    <div className={styles["product-grid__item"]} href={item.link}>
        <Image className={styles["product-grid__img"]} src={item.image} alt={item.title} />
        <p className={styles["product-grid__title"]}>{item.title}</p>
        <p className={styles["product-grid__price"]}>{item.price}</p>
        <FeedbackButton onClick={setOpened}  text={'Узнать подробнее'} withIcon={false}/>
    </div>
  );
};

export const ProductsGrid = ({ setOpened }) => {
    return (
      <div style={{ padding: '60px 0 1px' , position: 'relative' }}>
        <Image
          src={formBack.src}
          layout="fill"
          objectFit="cover"
          alt="Background image"
        />
        <GridBlock
          title={"Продуктовая линейка"}
          id="products"
          columns={3}
          content={blocks}
          customItemStyles={{ background: 'linear-gradient(90deg, var(--bg-color-gradient-1) 10%, var(--bg-color-gradient-2) 90%)' }}
          customTitleStyles={{ color: 'black' }}
          renderItem={(item) => <Product setOpened={setOpened} item={item} />}
        />
      </div>
    );
  };