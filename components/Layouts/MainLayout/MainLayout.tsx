import Footer from "@/components/Footer/Footer";
import React, { FC, ReactNode } from "react";
import s from "./MainLayout.module.scss";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className={s.wrapper}>
        <main className={s.container}>{children}</main>
        <Footer className={s.footer} />
      </div>
    </>
  );
};

export default MainLayout;
