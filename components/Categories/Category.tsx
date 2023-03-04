import React from "react";
import Image from "next/image";
import s from "./CategoriesList.module.scss";

const Category = () => {
  return (
    <>
      <li className={s.categoryItem}>
        <a href="#">
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src="https://cs2.livemaster.ru/storage/19/35/dca1cb8caaa367d4f0aa4a8f6f1x--ukrasheniya-kulon-iz-bisera-kulon-demande-le-soleil.jpg"
              alt="Next.js Logo"
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
            />
          </div>

          <header className={s.header}>
            <h4 className={s.categoryTitle}>
              Product title Product title Product title Product title Product
              title
            </h4>
          </header>
        </a>
      </li>
    </>
  );
};

export default Category;
