import Image from "next/image";
import React from "react";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <section className={s.main}>
      <div className={s.mainWrapper}>
        <div className={s.logoWrapper}>
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
          <p className={s.tagline}>Найди свою прелесть ✨</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
