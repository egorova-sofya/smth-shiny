import React, { useEffect, useState } from "react";
import menuLinks from "./menuLinks.json";
import s from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import useGetClientWindowHeight from "@/hooks/useGetClientWindowHeight";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

const CustomHomeHeader = () => {
  const frog = useParallax<HTMLDivElement>({
    // translateY: ["40", "-40"],
    // translateY: ["40", "0"],
    // scale: [1.3, 0.01, "easeInQuad"],
    // scale: [2, 0.2],
    // translateY: ["00", "0"],
  });
  const router = useRouter();

  const [backgroundTransparency, setBackgroundTransparency] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  const { clientWindowHeight } = useGetClientWindowHeight();

  useEffect(() => {
    let backgroundTransparencyVar = clientWindowHeight / 600;

    if (backgroundTransparencyVar < 0.6) {
      let boxShadowVar = backgroundTransparencyVar * 0.1;
      setBackgroundTransparency(backgroundTransparencyVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  const scaleLogoCalc = 1 / (boxShadow * 100);
  const scaleLogo =
    scaleLogoCalc > 1 ? 1 : scaleLogoCalc < 0.5 ? 0.5 : scaleLogoCalc;

  console.log("boxShadow", scaleLogo);

  return (
    <div className={s.test1}>
      <header
        style={{
          background: `rgba(255, 255, 255, ${backgroundTransparency})`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
        className={cn(s.header, {
          [s.scrolledHeaderStyles]: backgroundTransparency > 0.3,
        })}
      >
        <nav className={s.nav}>
          <ul className={s.navListWrapper}>
            {menuLinks.map((item) => (
              <li
                className={cn(s.navItem, {
                  [s.navItemActive]: router.pathname == item.url,
                })}
                key={item.id}
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div
        className={s.imagesPositionWrapper}
        style={{
          top: boxShadow * -10000 + 200 > -20 ? boxShadow * -10000 + 200 : -20,
          transform: `scale(${scaleLogo})`,
        }}
      >
        <div
          className={cn(s.imagesWrapper, {
            // [s.scrolledImagesWrapperStyles]: logoScale > 0.38,
          })}
          // style={{ transform: `scale(${logoScale})` }}
          ref={frog.ref}
          id="imagesWrapper"
        >
          <Image
            className={s.logoImage}
            src="/images/logo-image.svg"
            alt="Smth Shiny Logo"
            // width={150}
            // height={150}
            priority
            fill
            sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
          />
          {/* <Image
              src="/images/logo-text.svg"
              alt="Smth Shiny Logo"
              width={310}
              height={110}
              priority
            /> */}
        </div>
      </div>
      <p className={s.tagline} id="tagline">
        Найди свою прелесть ✨
      </p>
    </div>
  );
};

export default CustomHomeHeader;
