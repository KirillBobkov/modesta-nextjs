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
    <VisibilityManager className="max-w-screen-xl w-full mx-auto px-4 mb-15 md:px-10 md:mb-30">
      <h2 className="max-w-sm text-left text-2xl leading-8 mb-5 font-bold whitespace-pre-line uppercase md:max-w-none md:text-center md:text-5xl md:leading-[60px] md:mb-7.5" id="advantages">
        {advantagesContent.title}
      </h2>
      <ul>
        {advantagesContent.blocks.map((adv, i) => {
          return (
            <Item key={i} adv={adv} i={i} />
          );
        })}
      </ul>
    </VisibilityManager>
  );
}

const Item = ({ adv, i }) => {
  const [loaded, setLoaded] = useState(false);

return (<VisibilityManager
  itemScope
  itemType="http://schema.org/ImageObject"
  as="li"
  key={i}
  className={`relative flex min-h-[350px] max-xl:min-h-[400px] w-full mb-10 max-xl:mb-10 last:mb-0 rounded-[30px] flex-row bg-[#dedbde] z-0 items-center max-xl:items-end overflow-hidden shadow-lg group ${
    adv.right ? "justify-end text-right max-xl:justify-start max-xl:text-left" : ""
  }`}
>
  <div className="max-w-[500px] max-xl:w-full p-[50px] max-xl:p-5">
    <h3 itemProp="name" className="w-full align-middle mb-[15px] max-xl:mb-2.5 text-[40px] max-xl:text-[25px] leading-10 max-xl:leading-8 font-bold text-black whitespace-pre-line uppercase max-xl:max-w-80">
      {adv.title}
    </h3>
    <p className="w-full text-[#313131] whitespace-pre-line">
      {adv.description}
    </p>
  </div>
  {(
    <Image         
      itemProp="contentUrl"
      className={`!w-auto max-xl:!w-full -z-10 max-xl:left-0 h-auto max-xl:!h-auto transition-all duration-700 ease-in-out group-hover:scale-105 ${
        adv.right ? "!left-0" : "!left-auto"
      } ${loaded ? 'opacity-100' : 'opacity-0'}`}
      src={adv.desktopImg}
      alt={`Изображение протеза #${i}`}
      fill
      onLoad={() => setLoaded(true)}
    />
  )}
</VisibilityManager> )

}