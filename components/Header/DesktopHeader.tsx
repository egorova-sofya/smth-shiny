import React from "react";
import menuLinks from "./menuLinks.json";
import s from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

const DesktopHeader = () => {
  const router = useRouter();

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <ul className={s.navListWrapper}>
          {menuLinks.map((item) => (
            <li
              className={cn(s.navItem, {
                [s.navItemActive]: router.pathname == item.url,
              })}
              key={item.id}
            >
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default DesktopHeader;
