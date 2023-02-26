import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import s from "./Title.module.scss";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: FC<Props> = ({ children, level = 1, className, ...props }) => {
  //TODO complete type
  const HeadingTag = `h${level}` as any;
  return (
    <div className={s.titleWrapper}>
      <HeadingTag className={cn(s.title, className)} {...props}>
        {children}
      </HeadingTag>
    </div>
  );
};

export default Title;
