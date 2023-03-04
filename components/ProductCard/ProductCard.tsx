import Image from "next/image";
import React from "react";
import Cart from "../Icons/Cart";
import IconButton from "../Icons/IconButton";
import s from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <li className={s.wrapper}>
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
      <div className={s.textWrapper}>
        <header className={s.header}>
          <h4 className={s.title}>
            Product title Product title Product title Product title Product
            title
          </h4>
        </header>
        <footer className={s.footer}>
          <p className={s.price}>1200 ₽</p>
          <IconButton className={s.cart}>
            <Cart />
          </IconButton>
        </footer>
      </div>
    </li>
  );
};

export default ProductCard;
