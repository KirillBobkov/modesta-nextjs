import React, { useState } from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import { useTheme } from "../../hooks/useTheme.jsx";

import tech_block_img_1 from "../../assets/images/tech_block_img_1.jpg";
import tech_block_img_2 from "../../assets/images/tech_block_img_2.jpg";
import tech_block_img_3 from "../../assets/images/tech_block_img_3.jpg";
import tech_block_img_4 from "../../assets/images/tech_block_img_4.jpg";

import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";

import Image from "next/image.js";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter.jsx";

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
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);

  return (
    <VisibilityManager
      // style={
      //   theme !== undefined && isMobile !== undefined
      //     ? {
      //         backgroundImage: `url(${
      //           theme === "light"
      //             ? isMobile
      //               ? tech_background_white_mobile.src
      //               : tech_background_white.src
      //             : isMobile
      //             ? tech_background_black_mobile.src
      //             : tech_background_black.src
      //         })`,
      //       }
      //     : {}
      // }
              className="max-w-screen-xl w-full mx-auto px-4 mb-15 md:px-10 md:mb-30"
    >
              <h2 className="max-w-sm text-left text-2xl leading-8 mb-5 font-bold whitespace-pre-line uppercase md:max-w-none md:text-center md:text-5xl md:leading-[60px] md:mb-7.5" id="tech">
        Технические характеристики
      </h2>
      <ul className="w-full mx-auto flex justify-center flex-wrap gap-[2%] max-md:gap-[30px] gap-y-5">
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
      className="flex relative overflow-hidden justify-start items-end w-[49%] max-md:w-full flex-shrink-0 h-[300px] max-md:h-[200px] rounded-[30px] p-10 max-md:p-5 gap-2.5 bg-[#d8d7dc] shadow-lg"
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
        <span className="text-black text-xl max-md:text-base leading-[25px] font-bold uppercase">
          {item.text} <br />
          <span className="text-black text-[100px] max-md:text-[60px] font-bold leading-[100px] max-md:leading-[70px]">
            <AnimatedCounter start={0} end={item.key}></AnimatedCounter>
          </span>
          <span className="text-black text-[32px] max-md:text-2xl font-bold leading-9 max-md:leading-[30px]">
            {item.key_param}
          </span>
        </span>
      </div>
    </VisibilityManager>
  );
};
