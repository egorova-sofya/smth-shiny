import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Arrow from "../Icons/Arrow";
import Title from "../Title/Title";
import ProductCard from "./ProductCard";
import s from "./ProductCard.module.scss";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const ProductCardsList: FC<Props> = ({ className, ...props }) => {
  return (
    <section {...props} className={cn(s.productsListWrapper, className)}>
      <div className={s.headerWrapper}>
        <Title className={s.sectionTitle} level={2}>
          In stock
        </Title>
        <button className={s.showAllButton}>
          All <Arrow />
        </button>
      </div>
      <div className={s.productsList}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductCardsList;
