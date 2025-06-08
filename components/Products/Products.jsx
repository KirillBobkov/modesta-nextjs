import { GridBlock } from "../GridBlock/GridBlock";
import product_1 from "../../assets/images/product_1.webp";
import product_2 from "../../assets/images/product_2.webp";
import product_3 from "../../assets/images/product_3.webp";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import Image from "next/image";
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
      className="flex flex-col items-center justify-between relative h-full p-0 pb-[10px] md:pb-[30px] gap-[10px]"
      href={item.link}
    >
      <Image
        className={`w-full h-auto self-end opacity-0 transition-all duration-[800ms] ease-in-out ${loaded ? 'opacity-100' : ''}`}
        src={item.image}
        alt={item.title}
        itemProp="image"
        onLoad={() => setLoaded(true)}
      />
      <p
        className="text-[25px] leading-8 text-center font-bold w-full whitespace-pre-line p-0 uppercase"
        itemProp="name"
      >
        {item.title}
      </p>
      <p
        className="text-base leading-[25px] text-center text-font-secondary w-full whitespace-pre-line p-0"
        itemProp="description"
      >
        {item.price}
      </p>
      <FeedbackButton
        classes="bg-transparent shadow-none !text-accent w-auto"
        onClick={setOpened}
        text={'Узнать подробнее'}
        withIcon={false}
      />
    </div>
  );
};

export const ProductsGrid = ({ setOpened }) => {

    return (
      <div className="py-[60px] mb-[60px] relative">
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