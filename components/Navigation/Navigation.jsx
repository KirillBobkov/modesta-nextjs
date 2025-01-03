import React, { useCallback, useState } from "react";
import { BurgerButton } from "../BurgerButton/BurgerButton.jsx";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { navigationTree } from "./navigationList.js";
import { useRouter } from "next/router.js";
import snowStyles from './Snow.module.css';

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
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.navigation__parent}>
        <Link
          itemProp="url"
          prefetch={false}
          className={`${router.pathname === item.parent.path ? styles["navigation__item--active"] : ""} ${styles.navigation__item}`}
          onClick={() => closeMenu(item.parent.path)}
          href={item.parent.path}
        >
          <span itemProp="name">{item.parent.value}</span>
        </Link>
        <div className={`${styles.navigation__submenu} ${hoverOpened ? styles["navigation__submenu--visible"] : ""} shadow`}>
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
          className={`${router.pathname === item.parent.path ? styles["navigation__item--active"] : ""} ${styles.navigation__item}`}
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
    opened ? document.documentElement.classList.add("mobile-menu-opened") : document.documentElement.classList.remove("mobile-menu-opened");
  }, []);

  const handleBurgerClick = useCallback((newState) => {
    handleMobileMenu(newState);
  }, []);

  return (
    <header className={styles.navigation}>
      <nav itemScope itemType="http://schema.org/SiteNavigationElement" className={styles.navigation__container}>
      <Snow />
        <Link prefetch={false} className={styles.navigation__logo} onClick={() => handleMobileMenu(false)} href={"/"} itemProp="url">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 462 800" height={25} xmlnsXlink="http://www.w3.org/1999/xlink">
            <g>
              <path d="M -0.5,-0.5 C 27.1667,-0.5 54.8333,-0.5 82.5,-0.5C 82.369,0.238911 82.5357,0.905578 83,1.5C 137.233,55.7331 191.4,109.9 245.5,164C 226.694,183.973 207.36,203.473 187.5,222.5C 152.819,187.986 117.986,153.652 83,119.5C 82.5,189.499 82.3333,259.499 82.5,329.5C 54.8333,329.5 27.1667,329.5 -0.5,329.5C -0.5,219.5 -0.5,109.5 -0.5,-0.5 Z" />
            </g>
            <g>
              <path d="M 461.5,1.5 C 461.5,111.5 461.5,221.5 461.5,331.5C 433.833,331.5 406.167,331.5 378.5,331.5C 378.5,221.5 378.5,111.5 378.5,1.5C 406.167,1.5 433.833,1.5 461.5,1.5 Z" />
            </g>
            <g>
              <path d="M -0.5,397.5 C 153.167,397.5 306.833,397.5 460.5,397.5C 460.5,425.167 460.5,452.833 460.5,480.5C 306.833,480.5 153.167,480.5 -0.5,480.5C -0.5,452.833 -0.5,425.167 -0.5,397.5 Z" />
            </g>
            <g>
              <path d="M -0.5,555.5 C 153.5,555.5 307.5,555.5 461.5,555.5C 461.5,583.167 461.5,610.833 461.5,638.5C 307.5,638.5 153.5,638.5 -0.5,638.5C -0.5,610.833 -0.5,583.167 -0.5,555.5 Z" />
            </g>
            <g>
              <path d="M -0.5,702.5 C 153.167,702.5 306.833,702.5 460.5,702.5C 460.5,730.167 460.5,757.833 460.5,785.5C 306.833,785.5 153.167,785.5 -0.5,785.5C -0.5,757.833 -0.5,730.167 -0.5,702.5 Z" />
            </g>
          </svg>
        </Link>
        <ul className={`${styles.navigation__list} ${mobileMenuOpened ? styles["navigation__list--visible"] : ""}`}>
          {navigationTree.map((item, i) => {
            return <NavLinkComponent key={i} position={i + 1} item={item} setMobileMenuOpened={handleMobileMenu} />;
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
            <g transform="translate(0.000000,436.000000) scale(0.100000,-0.100000)" stroke="none">
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
          <BurgerButton menuOpened={mobileMenuOpened} onClick={handleBurgerClick} />
        </div>
      </nav>
    </header>
  );
});


const Snow = () => (
<div className={snowStyles.main}>
	<div className={snowStyles.initial_snow}>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
		<div className={snowStyles.snow}>&#10052;</div>
	</div>
</div>)