
import { VisibilityManager } from "../VisibilityManager.jsx";
import Image from "next/image.js";
import { useState } from "react";
import advantage_1 from "../../assets/images/advantage_1.webp";
import advantage_2 from "../../assets/images/advantage_2.webp";
import advantage_3 from "../../assets/images/advantage_3.webp";

export const advantagesContent = {
  title: "Наши преимущества",
  blocks: [
    {
      title: "Эффективность",
      description:
        "Роботизированный захват, обеспечивающий возможность управлять объектами разнообразных форм",
      desktopImg: advantage_1.src,
      right: false,
    },
    {
      title: "Сменные конечности",
      description:
        "Удобство в использовании в различных местах: на улице, дома или в мастерской",
      desktopImg: advantage_2.src,
      right: true,
    },
    {
      title: "Простое обслуживание",
      description:
        "Произвести ремонт можно самостоятельно либо через наш сервис оперативного устранения неполадок",
      desktopImg: advantage_3.src,
      right: false,
    },
  ],
};

export function AdvantagesBlock() {
  return (
    <VisibilityManager className="max-w-[1280px] w-full mx-auto px-[40px] mb-[120px] max-3xl:px-[15px] max-3xl:mb-[60px]">
      <h2
        className="text-center text-[52px] leading-[60px] mb-[30px] font-[900] whitespace-pre-line uppercase max-3xl:max-w-[350px] max-3xl:max-w-full max-3xl:text-left max-3xl:text-[25px] max-3xl:text-center max-3xl:leading-[32px] max-3xl:mb-5"
        id="advantages"
      >
        {advantagesContent.title}
      </h2>
      <ul>
        {advantagesContent.blocks.map((adv, i) => {
          return <Item key={i} adv={adv} i={i} />;
        })}
      </ul>
    </VisibilityManager>
  );
}

const Item = ({ adv, i }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <VisibilityManager
      itemScope
      itemType="http://schema.org/ImageObject"
      as="li"
      key={i}
      className={`group relative flex justify-between min-h-[350px] w-full mb-[40px] rounded-[30px] overflow-hidden flex-row bg-[#dedbde] z-[0] align-center last:mb-0 
  max-3xl:align-end max-3xl:min-h-[400px] max-3xl:mb-[40px]
  shadow-[var(--box-shadow)_0px_6px_20px_0px]
  ${
    adv.right
      ? "justify-end text-right max-3xl:text-left max-3xl:justify-start"
      : ""
  } 
  `}
    >
      <div
        className={`flex flex-col justify-center max-w-[500px] p-[50px] max-3xl:p-[40px_20px] max-3xl:w-full max-3xl:justify-end max-3xl:justify-end`}
      >
        <h3 itemProp="name" className={`w-full align-middle mb-[15px] text-[40px] leading-[40px] font-[800] text-[#000] whitespace-pre-line uppercase max-3xl:text-[25px] max-3xl:leading-[32px] max-3xl:mb-[10px] max-3xl:max-w-[320px]`}>
          {adv.title}
        </h3>
        <p className={`w-full text-[#313131] whitespace-pre-line`}>
          {adv.description}
        </p>
      </div>
      {
        <Image
          itemProp="contentUrl"
          className={
            `group-hover:scale-[1.03] w-auto! z-[-1] transition-all duration-800 opacity-0 
            max-3xl:w-full! max-3xl:h-auto! max-3xl:z-[-1] max-3xl:left-0!
            ` +
            " " + (loaded ? "opacity-100" : "") +
            " " + (adv.right ? "left-0!" : "left-auto! max-3xl:left-0!")
          }
          src={adv.desktopImg}
          alt={`Изображение протеза #${i}`}
          fill
          onLoad={() => setLoaded(true)}
        />
      }
    </VisibilityManager>
  );
};
