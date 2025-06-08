import React, { useState } from "react";
import { VisibilityManager } from "./VisibilityManager.jsx";
import Image from "next/image.js";
import clsx from "clsx";

// Grid styles for each mosaic item.
// First value is for mobile, second (md:) is for desktop.
const itemStyles = [
  "col-span-6 row-start-1 row-span-3 md:col-span-2 md:row-start-1 md:row-span-6",
  "col-span-4 row-start-1 row-span-5 md:col-span-3 md:row-start-1 md:row-span-4",
  "col-span-6 row-start-4 row-span-5 md:col-span-2 md:row-start-1 md:row-span-4",
  "col-span-4 row-start-6 row-span-3 md:col-span-3 md:row-start-1 md:row-span-6",
  "col-span-4 row-start-9 row-span-5 md:col-span-2 md:row-start-1 md:row-span-4",
  "col-span-6 row-start-9 row-span-3 md:col-start-1 md:col-span-2 md:row-span-4",
  "col-span-6 row-start-12 row-span-5 md:col-start-3 md:col-span-5 md:row-span-6",
  "col-span-4 row-start-14 row-span-3 md:col-start-8 md:col-span-3 md:row-start-7 md:row-span-4",
  "col-span-10 row-start-17 row-span-4 md:col-start-11 md:col-span-2 md:row-start-5 md:row-span-6",
];

export const MozaicBlock = React.memo(({ images }) => {
  const [openedImageIndex, setOpenedImageIndex] = useState(undefined);

  const handleFullScreenOpen = (i) => {
    setOpenedImageIndex(i);
    document.documentElement.classList.add("overflow-hidden");
  };

  const handleFullScreenClose = () => {
    document.documentElement.classList.remove("overflow-hidden");
    setOpenedImageIndex(undefined);
  };

  return (
    <VisibilityManager
      as="ul"
      className={clsx(
        "grid grid-flow-dense gap-2.5 p-0 mx-auto mb-2.5",
        "grid-cols-10 grid-rows-[repeat(20,35px)]",
        "md:grid-cols-12 md:grid-rows-[repeat(10,35px)]",
        {
          // This is to override styles from VisibilityManager when an image is fullscreen.
          "!transform-none !transition-none": openedImageIndex !== undefined,
        }
      )}
    >
      {images.map((img, i) => {
        const isOpened = i === openedImageIndex;
        return (
          <li
            key={i}
            className={clsx(
              "transition-all duration-800 ease-in-out overflow-hidden cursor-pointer",
              itemStyles[i]
            )}
          >
            <div
              className={clsx(
                "transition-all duration-300 ease-in-out h-full w-full",
                isOpened &&
                  "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 z-[13] backdrop-blur-[20px]"
              )}
              onClick={isOpened ? handleFullScreenClose : undefined}
            >
              <Image
                onClick={(e) => {
                  if (isOpened) {
                    e.stopPropagation();
                  } else {
                    handleFullScreenOpen(i);
                  }
                }}
                className={clsx(
                  "transition-all duration-800 ease-in-out",
                  isOpened
                    ? "w-auto max-w-full h-auto"
                    : "w-full h-full object-cover"
                )}
                src={img}
                alt={`Элемент мозайки №${i}`}
              />
            </div>
          </li>
        );
      })}
    </VisibilityManager>
  );
});
