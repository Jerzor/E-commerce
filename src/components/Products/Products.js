import React from "react";
import { Container } from "@material-ui/core";

import Product from "./Product/Product";

const Products = ({ products, handleAddToCart }) => {
  return (
    <>
      <Container
        maxWidth="lg"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: 20,
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
    </>
  );
};

export default Products;
