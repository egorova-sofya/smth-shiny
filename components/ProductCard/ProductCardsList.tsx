import React from "react";
import Title from "../Title/Title";
import ProductCard from "./ProductCard";
import s from "./ProductCard.module.scss";

const ProductCardsList = () => {
  return (
    <section>
      <Title className={s.sectionTitle} level={2}>
        In stock
      </Title>
      <div className={s.productsList}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductCardsList;
