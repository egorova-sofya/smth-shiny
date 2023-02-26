import React, { useEffect, useState } from "react";
import menuLinks from "./menuLinks.json";
import s from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import useGetClientWindowHeight from "@/hooks/useGetClientWindowHeight";

const DesktopHeader = () => {
  const router = useRouter();

  const [backgroundTransparency, setBackgroundTransparency] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  const { clientWindowHeight } = useGetClientWindowHeight();

  useEffect(() => {
    let backgroundTransparencyVar = clientWindowHeight / 600;

    if (backgroundTransparencyVar < 0.6) {
      let boxShadowVar = backgroundTransparencyVar * 0.1;
      setBackgroundTransparency(backgroundTransparencyVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <header
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparency})`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
      className={cn(s.header, {
        [s.scrolledHeaderStyles]: backgroundTransparency > 0.3,
      })}
    >
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
