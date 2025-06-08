import React, { useState } from "react";
import { VisibilityManager } from "./VisibilityManager.jsx";

import { useTheme } from "../hooks/useTheme.jsx";

import tech_block_img_1 from "../assets/images/tech_block_img_1.jpg";
import tech_block_img_2 from "../assets/images/tech_block_img_2.jpg";
import tech_block_img_3 from "../assets/images/tech_block_img_3.jpg";
import tech_block_img_4 from "../assets/images/tech_block_img_4.jpg";

import Image from "next/image.js";
import AnimatedCounter from "./AnimatedCounter.jsx";

const items = [
  {
    img: tech_block_img_1,
    text: "Вес кисти",
    key: "300",
    key_param: "гр.",
  },
  {
    img: tech_block_img_2,
    text: "Сила хвата",
    key: "25",
    key_param: "кг",
  },
  {
    img: tech_block_img_3,
    text: "Угол вращения кисти",
    key: "180",
    key_param: "°",
  },
  {
    img: tech_block_img_4,
    text: "Ширина хвата",
    key: "115",
    key_param: "мм",
  },
];

export function TechBlock() {
  const { theme } = useTheme();

  return (
    <VisibilityManager
      className="max-w-screen-xl w-full mx-auto px-4 mb-15 md:px-10 md:mb-30"
    >
              <h2 className="max-w-sm text-left text-2xl leading-8 mb-5 font-bold whitespace-pre-line uppercase md:max-w-none md:text-center md:text-5xl md:leading-[60px] md:mb-7.5" id="tech">
        Технические характеристики
      </h2>
      <ul className="w-full mx-auto flex justify-center flex-wrap gap-x-5 md:gap-x-[2%] gap-y-5">
        {items.map((item, i) => {
          return <Block key={i} item={item} i={i} />;
        })}
      </ul>
    </VisibilityManager>
  );
}

const Block = ({ item, i }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <VisibilityManager
      as="li"
      className="flex relative overflow-hidden justify-start items-end w-full md:w-[49%] flex-shrink-0 h-[200px] md:h-[300px] rounded-[30px] p-5 md:p-10 gap-2.5 bg-[#d8d7dc] shadow-lg"
    >
      <Image
        itemProp="contentUrl"
        className={`absolute object-center object-top object-cover -z-10 transition-all duration-700 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
        src={item.img.src}
        alt={`Характеристика #${i}`}
        fill
        onLoad={() => setLoaded(true)}
      />
      <div className="flex-[80%]">
        <span className="text-black text-base md:text-xl leading-[25px] font-bold uppercase">
          {item.text} <br />
          <span className="text-black text-[60px] md:text-[100px] font-bold leading-[70px] md:leading-[100px]">
            <AnimatedCounter start={0} end={item.key}></AnimatedCounter>
          </span>
          <span className="text-black text-2xl md:text-[32px] font-bold leading-[30px] md:leading-9">
            {item.key_param}
          </span>
        </span>
      </div>
    </VisibilityManager>
  );
};
