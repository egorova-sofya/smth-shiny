import DesktopHeader from "@/components/Header/DesktopHeader";
import React, { FC, ReactNode } from "react";
import s from "./HomeLayout.module.scss";

const HomeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={s.homeWrapper}>
      <main className={s.mainWrapper}>{children}</main>
      {/* <div style={{ overflow: "hidden" }}> */}
      <DesktopHeader />
      {/* </div> */}
      <footer>xxx</footer>
    </div>
  );
};

export default HomeLayout;
