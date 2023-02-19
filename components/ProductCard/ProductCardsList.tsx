import React from "react";
import ProductCard from "./ProductCard";
import s from "./ProductCard.module.scss";

const ProductCardsList = () => {
  return (
    <section className={s.productsList}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <ProductCard key={item} />
      ))}
    </section>
  );
};

export default ProductCardsList;
