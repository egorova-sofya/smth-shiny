import React, { useEffect, useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import ProductCardsList from "../ProductCard/ProductCardsList";
import s from "./Home.module.scss";
import useGetClientWindowHeight from "@/hooks/useGetClientWindowHeight";
import CustomHomeHeader from "../Header/CustomHomeHeader";
import CarouselComponent from "../Carousel/Carousel";
import PromotionList from "../Promotions/PromotionList";

const Home = () => {
  return (
    <>
      <CustomHomeHeader />
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
      </section>
      <ProductCardsList />
      <PromotionList />
    </>
  );
};

export default Home;
