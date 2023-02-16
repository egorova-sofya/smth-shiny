import React from "react";
import menuLinks from "./menuLinks.json";

const DesktopHeader = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            {menuLinks.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default DesktopHeader;
