import React from "react";
import s from "./Footer.module.scss";
import Image from "next/image";
import GalleryCarousel from "../GalleryCarousel/GalleryCarousel";
import cn from "classnames";

const Footer = () => {
  return (
    <>
      <footer className={s.footerWrapper}>
        <GalleryCarousel />
        <div className={s.footerLinks}>
          <Image
            src="/images/logo-text.svg"
            alt="Smth Shiny Logo"
            width={140}
            height={38}
            priority
          />
          <ul className={s.socialMediaList}>
            <li>
              <a
                target="_blank"
                className={cn(s.icon, s.telegramIcon)}
                rel="noreferrer"
                href="https://vk.com/sofya1212"
              >
                <span className="visually-hidden">Телеграм</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className={cn(s.icon, s.vkIcon)}
                rel="noreferrer"
                href="https://vk.com/sofya1212"
              >
                <span className="visually-hidden">Вконтакте</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
