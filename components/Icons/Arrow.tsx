import React, { FC } from "react";

interface Props {
  color?: string;
}

const Arrow: FC<Props> = ({ color }) => {
  return (
    <>
      <svg
        width="8"
        height="15"
        viewBox="0 0 10 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L9 9.5L1 18"
          stroke={color ? color : "#1A231F"}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Arrow;
