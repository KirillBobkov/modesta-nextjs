import React, { useRef, useState } from "react";
import { VisibilityManager } from "./VisibilityManager.jsx";

const widthMapper = {
  2: "lg:w-[48%]",
  3: "lg:w-[32%]",
  4: "lg:w-[23.5%]",
  5: "lg:w-[18.4%]",
};

export const GridBlock = React.memo(
  ({
    content,
    renderItem,
    title,
    description,
    hideButton,
    columns = 3,
    id,
    customTitleStyles = {},
    customItemStyles = {},
    clickable = false,
  }) => {
    const ref = useRef(null);
    const [opened, setOpened] = useState(false);

    const columnsClass = widthMapper[columns];

    return (
      <section
        itemScope
        itemType="https://schema.org/ItemList"
        ref={ref}
        className="max-w-screen-xl w-full mx-auto px-4 mb-15 md:px-10 md:mb-30"
      >
        {title && (
          <VisibilityManager
            itemProp="name"
            as="h2"
            className="max-w-sm text-left text-2xl leading-8 mb-5 font-bold whitespace-pre-line uppercase px-5 md:px-0 md:max-w-none md:text-center md:text-5xl md:leading-[60px] md:mb-7.5"
            style={customTitleStyles}
            id={id}
          >
            {title}
          </VisibilityManager>
        )}
        {description && (
          <VisibilityManager
            as="p"
            className="w-full max-w-[350px] mx-0 text-left text-font-secondary mb-5 px-5 md:w-1/2 md:mx-auto md:text-center md:mb-10 md:px-0"
            id={id}
          >
            {description}
          </VisibilityManager>
        )}
        <ul
          className={`relative flex flex-wrap items-stretch justify-center gap-x-[2%] gap-y-[30px] ${
            hideButton
              ? `overflow-hidden transition-all ease-in-out duration-300 md:duration-800 ${
                  opened
                    ? "max-h-[5400px] md:max-h-[2300px] pb-20"
                    : "max-h-[400px]"
                }`
              : ""
          }`}
        >
          {content.map((item, i) => {
            return (
              <VisibilityManager
                key={i}
                as="li"
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
                className={`p-5 bg-card rounded-[30px] overflow-hidden w-full md:w-[48%] ${columnsClass} shadow-lg ${
                  clickable
                    ? "cursor-pointer hover:bg-card-secondary"
                    : ""
                }`}
                style={customItemStyles}
              >
                {renderItem(item, i)}
              </VisibilityManager>
            );
          })}
          {hideButton && (
            <VisibilityManager
              as="div"
              className={`absolute bottom-0 left-0 w-full cursor-pointer flex items-center justify-center font-bold bg-[linear-gradient(180deg,transparent_0%,var(--bg-color)_80%)] text-font ${
                opened ? "p-5" : "pt-[100px] px-5 pb-5"
              }`}
              onClick={() => {
                if (opened) {
                  ref?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }
                setOpened(!opened);
              }}
            >
              <span className="pr-2.5">
                {opened ? "Cвернуть" : "Посмотреть всё"}
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  opened ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </VisibilityManager>
          )}
        </ul>
      </section>
    );
  }
);
