import React from "react";
import s from "./Gallery.module.scss";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div>Gallery</div>

      <Image
        className={s.image}
        src="https://cs2.livemaster.ru/storage/48/d9/d061213b33f77122d724c96da4wd--mittens-for-lovers-5-pcs-mittens-for-lovers-of-coffee-with-milk.jpg"
        alt="Next.js Logo"
        fill
        sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
      />
    </>
  );
};

export default Gallery;
