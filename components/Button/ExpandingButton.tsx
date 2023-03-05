import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Arrow from "../Icons/Arrow";
import s from "./Button.module.scss";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const ExpandingButton: FC<Props> = ({ className, children, ...props }) => {
  return (
    <button {...props} className={cn(s.expandingButton, className)}>
      {children} <Arrow />
    </button>
  );
};

export default ExpandingButton;
