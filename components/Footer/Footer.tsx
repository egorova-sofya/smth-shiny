import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import s from "./Footer.module.scss";
import Image from "next/image";
import GalleryCarousel from "../GalleryCarousel/GalleryCarousel";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer: FC<Props> = ({ className, ...props }) => {
  return (
    <footer {...props} className={cn(s.footerWrapper, className)}>
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
              href="https://t.me/Sofia_ego"
            ></a>
          </li>
          <li>
            <a
              target="_blank"
              className={cn(s.icon, s.vkIcon)}
              rel="noreferrer"
              href="https://vk.com/sofya1212"
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
