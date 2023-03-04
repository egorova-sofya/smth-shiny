import Footer from "@/components/Footer/Footer";
import React, { FC, ReactNode } from "react";
import s from "./HomeLayout.module.scss";

const HomeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={s.homeWrapper}>
      <main className={s.mainWrapper}>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
