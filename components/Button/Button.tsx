import React, { ReactNode, ComponentProps, ElementType } from "react";
import cn from "classnames";

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  appearance?: "primary" | "secondary";
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = "button";

function Button<E extends ElementType = typeof defaultElement>({
  children,
  appearance = "primary",
  as,
  ...props
}: ButtonProps<E>) {
  const TagName = as || defaultElement;

  //   const classes = cn(buttonClass, {
  //     [primaryClass]: appearance == "primary",
  //     [secondaryClass]: appearance == "secondary",
  //   });

  return (
    <TagName
      //   className={classes}
      {...props}
    >
      {children}
    </TagName>
  );
}

export default Button;
