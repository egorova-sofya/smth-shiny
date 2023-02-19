import Image from "next/image";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import ProductCardsList from "../ProductCard/ProductCardsList";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <div style={{ height: "200vh" }}>
      <ParallaxBanner
        style={{ height: "100vh" }}
        layers={[
          {
            image: "/images/main-bg.jpg",
            speed: -20,
          },
        ]}
      >
        <section className={s.homeSection}>
          <div className={s.imagesWrapper}>
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
              width={350}
              height={110}
              priority
            />
          </div>
          <p className={s.tagline}>Найди свою прелесть ✨</p>
        </section>
      </ParallaxBanner>
      <ProductCardsList />
    </div>
  );
};

export default Home;
