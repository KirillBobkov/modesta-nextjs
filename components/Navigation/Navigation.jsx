import React, { useCallback, useState } from "react";
import { BurgerButton } from "../BurgerButton/BurgerButton.jsx";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { navigationTree } from "./navigationList.js";
import { useRouter } from "next/router.js";

const NavLinkComponent = React.memo(({ item, setMobileMenuOpened }) => {
  const [hoverOpened, setHoverOpened] = useState(false);
  const router = useRouter();

  const closeMenu = useCallback((path) => {
    setMobileMenuOpened(false);
    window?.scrollTo(0, 0);
    ym(96028442, "reachGoal", path);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setHoverOpened(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverOpened(false);
  }, []);

  if (item.childs) {
    return (
      <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.navigation__parent}
      >
        <Link
          itemProp="url"
          prefetch={false}
          className={`${
            router.pathname === item.parent.path
              ? styles["navigation__item--active"]
              : ""
          } ${styles.navigation__item}`}
          onClick={() => closeMenu(item.parent.path)}
          href={item.parent.path}
        >
          <span itemProp="name">{item.parent.value}</span>
        </Link>
        <div
          className={`${styles.navigation__submenu} ${
            hoverOpened ? styles["navigation__submenu--visible"] : ""
          } shadow`}
        >
          {item.childs.map((child) => (
            <Link
              itemProp="url"
              prefetch={false}
              key={child.value}
              className={`${styles.navigation__item} ${styles["navigation__item--child"]}`}
              onClick={() => closeMenu(item.parent.path)}
              href={child.path}
            >
              <span itemProp="name">{child.value}</span>
            </Link>
          ))}
        </div>
      </li>
    );
  } else {
    return (
      <li className={styles.navigation__parent}>
        <Link
          itemProp="url"
          prefetch={false}
          className={`${
            router.pathname === item.parent.path
              ? styles["navigation__item--active"]
              : ""
          } ${styles.navigation__item}`}
          onClick={() => closeMenu(item.parent.path)}
          href={item.parent.path}
        >
          <span itemProp="name">{item.parent.value}</span>
        </Link>
      </li>
    );
  }
});

export const Navigation = React.memo(() => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const handleMobileMenu = useCallback((opened) => {
    setMobileMenuOpened(opened);
    opened
      ? document.documentElement.classList.add("mobile-menu-opened")
      : document.documentElement.classList.remove("mobile-menu-opened");
  }, []);

  const handleBurgerClick = useCallback((newState) => {
    handleMobileMenu(newState);
  }, []);

  return (
    <header className={styles.navigation}>
      <nav
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
        className={styles.navigation__container}
      >
        <Link
          prefetch={false}
          className={styles.navigation__logo}
          onClick={() => handleMobileMenu(false)}
          href={"/"}
          itemProp="url"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            height={30}
            viewBox="0 0 640.000000 640.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                fill="var(--accent)"
                d="M1423 5879 c-81 -10 -213 -56 -296 -102 -136 -77 -247 -209 -304 -364 l-28 -78 -3 -1415 c-3 -1582 -6 -1501 68 -1655 86 -179 257 -310 485 -371 63 -17 111 -19 462 -19 215 0 395 4 400 8 4 5 9 908 11 2008 l3 1999 -368 -1 c-202 -1 -396 -5 -430 -10z"
              />
              <path
                fill="var(--accent)"
                d="M4145 5878 c-3 -7 -4 -911 -3 -2008 l3 -1995 390 1 c344 0 398 2 459 18 274 72 453 226 540 465 l31 86 3 1407 c3 1574 7 1483 -69 1638 -34 69 -59 102 -131 173 -75 75 -103 95 -183 133 -52 25 -138 56 -191 70 -94 23 -107 24 -471 24 -290 0 -375 -3 -378 -12z"
              />
              <path d="M2227 1845 c-7 -20 -8 -954 -1 -1157 l7 -208 942 0 942 0 6 242 c4 133 7 442 7 687 l0 446 -950 0 c-624 0 -951 -3 -953 -10z" />
            </g>
          </svg>
        </Link>
        <ul
          className={`${styles.navigation__list} ${
            mobileMenuOpened ? styles["navigation__list--visible"] : ""
          }`}
        >
          {navigationTree.map((item, i) => {
            return (
              <NavLinkComponent
                key={i}
                position={i + 1}
                item={item}
                setMobileMenuOpened={handleMobileMenu}
              />
            );
          })}
          {/* links only for mobile */}
          <Link
            itemProp="url"
            prefetch={false}
            className={`${styles.navigation__item} ${styles["navigation__item--mobile-alone"]}`}
            onClick={() => {
              handleMobileMenu(false);
              window?.scrollTo(0, 0);
              ym(96028442, "reachGoal", "/#contacts");
            }}
            href={"/#contacts"}
          >
            <span itemProp="name">{"Контакты"}</span>
          </Link>
        </ul>
        <a
          target="_blank"
          href="https://navigator.sk.ru/orn/1125414"
          onClick={() => {
            ym(96028442, "reachGoal", "skolkovo");
          }}
          className={styles["navigation__item--external"]}
          itemProp="url"
        >
          <svg
            className={styles.navigation__imgSK}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            viewBox="0 0 436.000000 436.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,436.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M886 4344 c-219 -43 -408 -144 -567 -303 -161 -162 -262 -351 -304
                                -574 -23 -121 -23 -2495 1 -2617 63 -332 282 -624 583 -774 167 -83 14 -77
                                1616 -74 l1430 3 92 41 c120 54 220 122 316 213 132 126 229 274 282 432 l25
                                73 0 1798 0 1798 -1702 -1 c-1396 -1 -1715 -3 -1772 -15z m3364 -1728 c0
                                -1085 -3 -1629 -11 -1681 -49 -355 -309 -664 -649 -773 -151 -48 -113 -47
                                -1385 -47 -990 0 -1212 2 -1270 14 -400 80 -696 377 -770 773 -14 74 -15 228
                                -13 1299 l3 1214 22 80 c48 169 168 367 289 474 148 131 340 219 524 240 41 5
                                792 9 1668 10 l1592 1 0 -1604z"
              />
              <path
                d="M1375 3280 c-279 -37 -511 -240 -579 -506 -25 -99 -21 -240 10 -332
                                86 -257 284 -393 655 -452 393 -62 473 -92 520 -195 41 -89 9 -203 -76 -264
                                -69 -49 -145 -72 -266 -78 -133 -7 -223 12 -307 66 -76 50 -140 146 -142 214
                                0 16 -18 17 -226 17 l-227 0 7 -61 c28 -240 177 -455 391 -561 217 -108 538
                                -127 780 -47 89 30 209 93 235 123 24 30 30 16 30 -64 l0 -80 210 0 210 0 0
                                258 0 258 69 75 c38 41 71 72 73 69 3 -3 94 -149 202 -325 109 -176 201 -323
                                205 -328 4 -4 116 -6 249 -5 l242 3 -299 494 -299 493 299 328 c164 181 299
                                331 299 334 0 3 -121 6 -269 6 l-268 0 -244 -267 -244 -267 -3 542 -2 542
                                -210 0 -210 0 0 -126 0 -126 -70 65 c-173 160 -455 235 -745 197z m359 -420
                                c77 -29 147 -95 186 -173 16 -33 30 -66 30 -74 0 -10 26 -13 120 -13 l120 0 0
                                -185 0 -185 -62 35 c-86 46 -206 79 -405 110 -314 49 -392 72 -462 138 -120
                                114 -56 288 132 358 74 28 256 22 341 -11z"
              />
            </g>
          </svg>
          <span>Участник</span>
        </a>
        <div className={styles.navigation__burger}>
          <BurgerButton
            menuOpened={mobileMenuOpened}
            onClick={handleBurgerClick}
          />
        </div>
      </nav>
    </header>
  );
});
