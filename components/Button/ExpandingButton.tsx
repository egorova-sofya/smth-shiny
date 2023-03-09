import React, { ComponentProps, ElementType, ReactNode } from "react";
import Arrow from "../Icons/Arrow";
import s from "./Button.module.scss";
import cn from "classnames";

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = "button";

function ExpandingButton<E extends ElementType = typeof defaultElement>({
  children,
  className,
  as,
  ...props
}: ButtonProps<E>) {
  const TagName = as || defaultElement;

  return (
    <TagName {...props} className={cn(s.expandingTagName, className)}>
      {children} <Arrow />
    </TagName>
  );
}

export default ExpandingButton;
