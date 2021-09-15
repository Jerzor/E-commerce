import React from "react";

import { CircularProgress } from "@material-ui/core";

import Product from "./Product/Product";
import { StyledFlexContainer, StyledGridContainer } from "./ProductsStyles";

const Products = ({ products, handleAddToCart }) => {
  if (!products.length)
    return (
      <StyledFlexContainer>
        <CircularProgress size={80} />
      </StyledFlexContainer>
    );

  return (
    <StyledGridContainer>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </StyledGridContainer>
  );
};

export default Products;
