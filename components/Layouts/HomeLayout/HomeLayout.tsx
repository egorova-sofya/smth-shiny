import DesktopHeader from "@/components/Header/DesktopHeader";
import React, { FC, ReactNode } from "react";
import s from "./HomeLayout.module.scss";

const HomeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <DesktopHeader />
      <div className={s.wrapper}>
        <main className={s.container}>{children}</main>
      </div>
    </>
  );
};

export default HomeLayout;
