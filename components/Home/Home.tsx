import { addingStyleOnPageScroll } from "@/utils/addingStyleOnPageScroll";
import Image from "next/image";
import React from "react";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";
import ProductCardsList from "../ProductCard/ProductCardsList";
import s from "./Home.module.scss";

const Home = () => {
  const frog = useParallax<HTMLDivElement>({
    scale: [1.3, 0.3, "easeInQuad"],
    translateY: ["40", "-40"],
  });

  addingStyleOnPageScroll({
    className: s.scrolledImagesWrapperStyles,
    scrollTrigger: 210,
    elementId: "imagesWrapper",
  });

  return (
    <>
      <section className={s.homeSection}>
        <ParallaxBanner
          style={{ height: "100vh" }}
          layers={[
            {
              image: "/images/main-bg.jpg",
              speed: -20,
            },
          ]}
        />

        <div className={s.imagesPositionWrapper}>
          <div className={s.imagesWrapper} ref={frog.ref} id="imagesWrapper">
            <Image
              className={s.logoImage}
              src="/images/logo-image.svg"
              alt="Smth Shiny Logo"
              width={150}
              height={150}
              priority
            />
            <Image
              src="/images/logo-text.svg"
              alt="Smth Shiny Logo"
              width={310}
              height={110}
              priority
            />
          </div>
        </div>
        <p className={s.tagline} id="tagline">
          Найди свою прелесть ✨
        </p>
      </section>
      <ProductCardsList />
    </>
  );
};

export default Home;
