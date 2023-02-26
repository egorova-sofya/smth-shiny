import React, { useEffect, useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import ProductCardsList from "../ProductCard/ProductCardsList";
import s from "./Home.module.scss";
import useGetClientWindowHeight from "@/hooks/useGetClientWindowHeight";
import CustomHomeHeader from "../Header/CustomHomeHeader";

const Home = () => {
  const [logoScale, setLogoScale] = useState(0);

  const { clientWindowHeight } = useGetClientWindowHeight();

  useEffect(() => {
    let backgroundTransparencyVar = clientWindowHeight / 600;

    if (backgroundTransparencyVar < 0.6) {
      let boxShadowVar = backgroundTransparencyVar * 0.1;
      setLogoScale(backgroundTransparencyVar);
    }
  }, [clientWindowHeight]);

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
    </>
  );
};

export default Home;
