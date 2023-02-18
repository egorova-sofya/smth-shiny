import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import s from "./Icons.module.scss";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  type?: "button" | "send" | "reset";
}

const IconButton: FC<Props> = ({
  children,
  type = "button",
  className,
  ...props
}) => {
  return (
    <button className={cn(className, s.buttonStyle)} {...props}>
      <div>{children}</div>
    </button>
  );
};

export default IconButton;
