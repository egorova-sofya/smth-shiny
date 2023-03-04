import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import s from "./About.module.scss";
import cn from "classnames";
import Title from "../Title/Title";
import Image from "next/image";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const About: FC<Props> = ({ className, ...props }) => {
  return (
    <section {...props} className={cn(s.aboutWrapper, className)}>
      <Title className={s.sectionTitle} level={2}>
        About
      </Title>
      <div className={s.contentWrapper}>
        <div className={s.textWrapper}>
          <p className={s.aboutText} style={{ marginBottom: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            natus. Magni saepe hic voluptatum, quae eum quo! Sed, blanditiis
            consectetur. Vero provident velit quia culpa porro quibusdam ad
            officia pariatur?
          </p>
          <p className={s.aboutText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            accusantium voluptates enim voluptatum, fuga, aut odit numquam
            magnam, ex voluptate unde
          </p>
        </div>

        <div className={s.imageWrapper}>
          <Image
            className={s.image}
            src="https://cs2.livemaster.ru/storage/19/35/dca1cb8caaa367d4f0aa4a8f6f1x--ukrasheniya-kulon-iz-bisera-kulon-demande-le-soleil.jpg"
            alt="Next.js Logo"
            fill
            sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
