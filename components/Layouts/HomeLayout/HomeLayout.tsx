import React, { FC, ReactNode } from "react";
import s from "./HomeLayout.module.scss";

const HomeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={s.homeWrapper}>
      <main className={s.mainWrapper}>{children}</main>
      <footer>xxx</footer>
    </div>
  );
};

export default HomeLayout;
