import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import s from "./About.module.scss";
import cn from "classnames";
import Title from "../Title/Title";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const About: FC<Props> = ({ className, ...props }) => {
  return (
    <section {...props} className={cn(s.aboutWrapper, className)}>
      <Title className={s.sectionTitle} level={2}>
        About
      </Title>
    </section>
  );
};

export default About;
