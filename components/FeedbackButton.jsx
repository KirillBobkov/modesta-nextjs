import React from "react";

export default function FeedbackButton({
  classes = "",
  text = "",
  onClick,
  withIcon = true,
}) {
  return (
    <button
      onClick={onClick}
      className={`gap-[10px] border-none w-[50px] h-[50px] p-[10px] text-base cursor-pointer font-bold uppercase flex items-center justify-center rounded-[30px] text-black fill-black bg-accent transition-all duration-500 shadow-lg ${classes}`}
      id="feedback"
    >
      {withIcon && (
        <svg
          className="w-7 h-7 animate-tilt-shaking"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="28px"
          height="28px"
          viewBox="0 0 1280.000000 965.000000"
          preserveAspectRatio="xMidYMid meet"
          style={{ animation: "tilt-shaking 0.3s linear infinite" }}
        >
          <g
            transform="translate(0.000000,965.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M0 4825 l0 -4825 6400 0 6400 0 0 4825 0 4825 -6400 0 -6400 0 0
-4825z m11349 3931 c-285 -293 -467 -476 -3437 -3458 -1091 -1095 -1146 -1149
-1215 -1183 -183 -90 -434 -80 -596 25 -50 31 -528 512 -2980 2995 -707 715
-1357 1373 -1445 1463 l-161 162 4919 0 c2706 0 4917-2 4915-4z m-8835
-2278 c884 -894 1608 -1630 1608 -1633 0 -6 -3137 -3220 -3206 -3284 l-26 -24
0 3287 c0 1808 4 3286 8 3284 5 -1 732 -735 1616 -1630z m9396 -1684 c0 -1802
-4 -3244 -9 -3242 -4 2 -727 739 -1605 1637 l-1597 1635 773 775 c1968 1975
2433 2441 2435 2441 2 0 3 -1461 3 -3246z m-6380 -1346 c278 -203 590 -298
942 -285 237 8 439 58 631 156 176 90 240 144 616 516 l354 352 1609 -1646
1608 -1646 -4882 -3 c-2685 -1 -4883 0 -4886 2 -2 3 43 52 100 110 56 58 785
803 1618 1656 l1515 1550 350 -353 c199 -201 382 -377 425 -409z"
            />
          </g>
        </svg>
      )}
      {text && (
        <span className="flex-grow text-base md:text-base text-[16px] md:text-[1rem]">
          {text}
        </span>
      )}
    </button>
  );
}
