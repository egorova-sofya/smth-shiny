import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Title from "../Title/Title";
import s from "./CategoriesList.module.scss";
import cn from "classnames";
import Category from "./Category";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const CategoriesList: FC<Props> = ({ className, ...props }) => {
  return (
    <section {...props} className={cn(s.categoriesListWrapper, className)}>
      <Title className={s.sectionTitle} level={2}>
        Categories
      </Title>
      <ul className={s.categoryList}>
        {[1, 2, 3, 4].map((item) => (
          <Category key={item} />
        ))}
      </ul>
    </section>
  );
};

export default CategoriesList;
