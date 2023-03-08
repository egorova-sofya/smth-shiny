import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Title from "../Title/Title";
import ProductCard from "./ProductCard";
import s from "./ProductCard.module.scss";
import cn from "classnames";
import ExpandingButton from "../Button/ExpandingButton";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const ProductCardsList: FC<Props> = ({ className, ...props }) => {
  return (
    <section {...props} className={cn(s.productsListWrapper, className)}>
      <div className={s.headerWrapper}>
        <Title className={s.sectionTitle} level={2}>
          In stock
        </Title>
        <ExpandingButton className={s.expandingButton}>All</ExpandingButton>
      </div>
      <ul className={s.productsList}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ProductCard key={item} />
        ))}
      </ul>
    </section>
  );
};

export default ProductCardsList;
