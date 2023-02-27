import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import ProductCardsList from "../ProductCard/ProductCardsList";
import s from "./Home.module.scss";
import CustomHomeHeader from "../Header/CustomHomeHeader";
import PromotionList from "../Promotion/PromotionList";

const Home = () => {
  return (
    <>
      <CustomHomeHeader />
      <section className={s.sectionIndents}>
        <ParallaxBanner
          style={{ height: "100vh" }}
          layers={[
            {
              image: "/images/main-bg.jpg",
              speed: -20,
            },
          ]}
        />
      </section>

      <ProductCardsList className={s.sectionIndents} />

      <PromotionList className={s.sectionIndents} />
    </>
  );
};

export default Home;
