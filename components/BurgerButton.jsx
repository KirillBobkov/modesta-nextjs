import React from "react";

export const BurgerButton = React.memo(({ menuOpened, onClick }) => {
  return (
    <div className="z-[5] block">
      <div
        className={`w-[19px] h-5 relative z-[3] overflow-hidden cursor-pointer ${
          menuOpened ? "burger-active" : ""
        }`}
        onClick={() => onClick(!menuOpened)}
      >
        <span
          className={`absolute left-1/2 w-[19px] h-[3px] bg-[var(--font-color)] transition-all duration-500 burger-span-1 ${
            menuOpened ? "hidden" : ""
          }`}
          style={{ top: "50%", transform: "translate(-50%, -50%)" }}
        ></span>
        <span
          className={`absolute left-1/2 w-[19px] h-[3px] bg-[var(--font-color)] transition-all duration-500 burger-span-2 ${
            menuOpened
              ? "rotate-45 top-1/2 translate-x-[-50%] translate-y-0"
              : ""
          }`}
          style={{
            top: menuOpened ? "50%" : "calc(50% - 6px)",
            transform: menuOpened
              ? "translate(-50%, 0%) rotate(45deg)"
              : "translate(-50%, -50%)",
          }}
        ></span>
        <span
          className={`absolute left-1/2 w-[19px] h-[3px] bg-[var(--font-color)] transition-all duration-500 burger-span-3 ${
            menuOpened
              ? "-rotate-45 top-1/2 translate-x-[-50%] translate-y-0"
              : ""
          }`}
          style={{
            top: menuOpened ? "50%" : "calc(50% + 6px)",
            transform: menuOpened
              ? "translate(-50%, 0%) rotate(-45deg)"
              : "translate(-50%, -50%)",
          }}
        ></span>
      </div>
    </div>
  );
});
