import React from "react";
import { CircularProgress, Container } from "@material-ui/core";

import Product from "./Product/Product";

const Products = ({ products, handleAddToCart }) => {
  if (!products.length)
    return (
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <CircularProgress size={80} />
      </Container>
    );

  return (
    <Container
      maxWidth="lg"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: 20,
        marginBottom: 30,
      }}
    >
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </Container>
  );
};

export default Products;
