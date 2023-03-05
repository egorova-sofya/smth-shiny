import React from "react";
import s from "./Footer.module.scss";
import Image from "next/image";
import GalleryCarousel from "../GalleryCarousel/GalleryCarousel";

const Footer = () => {
  return (
    <>
      <footer className={s.footerWrapper}>
        <GalleryCarousel />
        <Image
          src="/images/logo-text.svg"
          alt="Smth Shiny Logo"
          width={140}
          height={38}
          priority
        />
      </footer>
    </>
  );
};

export default Footer;
